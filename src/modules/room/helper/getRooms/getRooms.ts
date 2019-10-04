/**
 * Filename: deleteEvent.helper.ts
 * Author: kduran@akurey.com
 * Date: 05/10/2019
 * Description: Get Rooms helper Function
 */

import { google } from 'googleapis';
import images from '../../../../config/images.json';
import { ConstantsEnum } from '../../../common/enums';
/**
 * Access to google api to get all rooms
 * @param auth The auth data for access to google api
 */
const getRooms = async (auth: any) => {
  try {
    const calendar: any = google.calendar({ version: 'v3', auth });
    const calendarListResponse = await calendar.calendarList.list({});
    const rooms = calendarListResponse.data.items;
    let roomsResult: Array<Object> = [];
    for (let roomPosition = 0; roomPosition < rooms.length; roomPosition++) {
      const room = rooms[roomPosition];
      const summary: string = room.summary;
      const id: string = room.id;
      const state: String = await getRoomState(auth, id);
      if (images[summary]) {
        const roomData = {id, state, "name": images[summary].name, "image": images[summary].image, "background_image":images[summary].background_image};
        roomsResult.push(roomData);
      }
    }
    
    return roomsResult;
  } catch(err) {
    console.log(err)
    throw([err, 400]); //TODO
  }
};

/**
 * Access to google api to get events room and return state room
 * @param auth The auth data for access to google api
 * @param idRoom The id of the room
 */
const getRoomState = async (auth: any, idRoom: String) => {
  try {
    const currentTime = new Date()
    const startDate = new Date();
    startDate.setHours(ConstantsEnum.ZERO_HOURS)
    startDate.setMinutes(ConstantsEnum.ZERO_MINUTES)
    const endDate = new Date
    endDate.setHours(ConstantsEnum.LAST_HOURS)
    endDate.setMinutes(ConstantsEnum.LAST_MINUTE)

    const calendar: any = google.calendar({ version: 'v3', auth });

    const calendarListResponse = await calendar.events.list({calendarId: idRoom,
                                                            orderBy: 'startTime',
                                                            singleEvents: true,
                                                            timeMax: endDate,
                                                            timeMin: startDate});
    const events = calendarListResponse.data.items;
    let state: String = ConstantsEnum.FREE;
    for (let eventPosition = 0; eventPosition < events.length; eventPosition++) {
      const event = events[eventPosition];
      // Use date when create event for all day 
      // and use dateTime in a specific time (with start and end time)
      const dateStart = new Date(event.start.dateTime || event.start.date);
      const dateEnd = new Date(event.end.dateTime || event.end.date);
      if (dateStart <= currentTime && dateEnd >= currentTime) {
        return state = ConstantsEnum.OCCUPIED;
      }
    }
    return state;
  } catch(err) {
    throw([err, 400]); //TODO
  }
};

export default getRooms;

