const insaliseState = {
    user: {},
    Loading: false
}

const rootReducer = (state = insaliseState, action) => {
    switch (action.type) {
        case "LOGIN": {
            return { ...state, user: action.user }
        }
        case "TEST": {
            return { ...state, Loading: action.payloed}
        }
        default: return state;
    }
}
export default rootReducer;