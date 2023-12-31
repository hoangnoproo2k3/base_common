import { TOGGLE_SIDEBAR, ToggleSidebarAction } from './types'

export const toggleSidebar = (): ToggleSidebarAction => ({
	type: TOGGLE_SIDEBAR,
})

interface Action {
	type: string
	payload?: any
}
