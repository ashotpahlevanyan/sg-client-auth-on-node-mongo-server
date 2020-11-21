import axios from 'axios';
import { AUTH_USER } from './types';

// usual action creator structure will be this
export const signup = (formProps) => dispatch => {
  axios.post('http://localhost:3090/signup', formProps);
};
