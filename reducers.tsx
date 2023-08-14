import sidebarReducer from 'reducers/toggleSidebarReducers'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
	sidebar: sidebarReducer,
})

export type RootState = ReturnType<typeof rootReducer>
// export type RootAction = SidebarActionTypes;

export default rootReducer
