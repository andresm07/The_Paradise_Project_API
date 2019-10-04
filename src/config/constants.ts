import { google } from 'googleapis';
export const SCOPES = ['https://www.googleapis.com/auth/calendar'];
export const credentials = {client_id:
    '59040167325-k0r8ngcfdkco18or9r1cfcj5ot6gt8ir.apps.googleusercontent.com',
  project_id:'testapigc-1555339686874',
  auth_uri:'https://accounts.google.com/o/oauth2/auth',
  token_uri:'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url:'https://www.googleapis.com/oauth2/v1/certs',
  client_secret:'1btIlrCARUXUJ8qSRF_e-nLV',
  redirect_uris:["urn:ietf:wg:oauth:2.0:oob","http://localhost:3000/"]}
export const O_AUTH_CLIENT = new google.auth.OAuth2(
    credentials.client_id,
    credentials.client_secret,
    credentials.redirect_uris[1]);
