const BASE_URL = 'http://49.50.174.75:8000';

export const API = {
  APPLYING: `${BASE_URL}/makers`,
  SIGNUP: `${BASE_URL}/users/signup`,
  SIGNUP_EMAIL: `${BASE_URL}/users/email`,
  SIGNUP_GET_PHONECODE: `${BASE_URL}/users/sms`,
  SIGNUP_POST_PHONECODE: `${BASE_URL}/users/sms-verification`,
  USER_NAME: `${BASE_URL}/users/name`,
  SIGNIN: `${BASE_URL}/users/signin`,
  FIND_PASSWORD: `${BASE_URL}/users/reset`,
  COMPLETE: `${BASE_URL}/complete`,
  SUBMISSION: `${BASE_URL}/subumisson`,
};
