export const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD';

const initialState = {
	searchField = ''
}

export cons searchBots = (state=initialState, action{}) => {
	switch(action.type) {
		case: CHANGE_SEARCH_FIELD:
		return Object.assign({}, state, searchField: action.payload);
		default:
		return state;
	} 
}
 