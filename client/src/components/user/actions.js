import axios from 'axios';

export function fetchUser(){
    return {
        type: 'FETCH_USER',
        payload: {
        }
    }
}

export function setUserName(name) {
    return {
        type: 'SET_USERNAME',
        payload: name
    }
}