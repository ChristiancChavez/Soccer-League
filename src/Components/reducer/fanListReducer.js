
export const fanListReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TEAM':
            return [
                ...state,
            {
                team_badge: action.team_badge,
                team_id: action.team_id,
                team_name: action.team_name
            }] 
        case 'REMOVE_TEAM':
            return state.filter(team => team.team_id !== action.team_id)
        default:
        return state
    }
}
