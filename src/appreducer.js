function counterReducer(state, action){
    switch(action.type){
        case 'initial':
            return action.data;
        default:
            return state;
    }
}

export default counterReducer;