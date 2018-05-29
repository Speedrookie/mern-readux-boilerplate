export default function userReducer(state = {}, action) {
    switch (action.type){
        case "CHANGE_NAME": {
            state = { ...state, name: action.payload }
            break;
        }
        default: 
            return state;
    }
}