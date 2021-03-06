import axios from 'axios';
import { LOGIN_USER } from './types';


export function loginUser(dataToSubmit) {

    const request = axios.post('/api/users/login', dataToSubmit)
        .then(resposen => resposen.data)

        return {
            type: LOGIN_USER,
            payload: request
        }

    }