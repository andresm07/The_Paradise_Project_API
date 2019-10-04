/**
 * Filename: http-verbs.enum.ts
 * Author: kduran@akurey.com
 * Date: 04/15/2019
 * Description: System events
 */

enum Events {
  REQUEST = '',
  REQUEST_DENY = '',

  // User Events
  LOGIN_SUCCESS = 'Login success',
  LOGIN_FAILED = 'Login failed',
  LOGIN_LOCKED = 'Login locked',
  USER_LOGOUT = 'User logout',
  USER_SESSION_EXPIRED = 'User session expired',
  USER_PASSWORD_CHANGE_REQUIRED = 'User password change required',
  LIST_USERS = 'List all the users',
  DISABLE_USER = 'Disable user',
  ENABLE_USER = 'Enable user',
  USER_FORGOT_PASSWORD = 'User forgot password',
  USER_RENEW_PASSWORD = 'User renew its password',
  USER_RECOVERED_PASSWORD = 'User recovered its password',
  VIEW_USER_INFO = 'View user info',
  RESET_PASSWORD = 'Reset password',
  EDIT_USER_INFO = 'Edit user info',
  NEW_USER = 'New user',
  USER_FILTERING_ADDED = 'User filtering added',
  USER_ASSIGNED_TO_GROUP = 'User groups assigned',
  USER_ASSIGNED_TO_SUBSCRIPTIONS = 'User subscriptions assigned',

  // Organization Events
  LIST_ORGANIZATIONS = 'List organizations',
  VIEW_ORGANIZATION_INFO = 'View organization info',
  NEW_ORGANIZATION = 'New organization',
  EDIT_ORGANIZATION = 'Edit organization',
  DISABLE_ORGANIZATION = 'Disable organization',

  // Group Events
  NEW_GROUP = 'New group',
  EDIT_GROUP = 'Edit group',
  VIEW_GROUP_INFO = 'View group details',
  DISABLE_GROUP = 'Disable group',
  LIST_GROUPS = 'List groups',

  // Subscription Events
  LIST_SUBSCRIPTIONS= 'List subscriptions',
  NEW_SUBSCRIPTION = 'New subscription',
  DISABLE_SUBSCRIPTION = 'Disable subscription',
  EDIT_SUBSCRIPTION = 'Edit subscription',
  VIEW_SUBSCRIPTION_INFO = 'View subscription info',

  // Report Events
  VIEW_REPORT_DETAILS = 'View report details',
  EDIT_REPORT_DETAILS = 'Edit report details',
  DISABLE_REPORT = 'Disable report',
  NEW_REPORT = 'New report',
  LIST_REPORTS = 'List reports',
  ASSIGN_REPORT = 'Assign report to subscription',
  DETACH_REPORT = 'Remove report from subscription',

  // Localities
  ASSIGN_LOCALITIES = 'Regions or localities added to user',
  UPDATE_REGIONS_AND_LOCATIONS = 'Update regions and locations',
}

export default Events;
