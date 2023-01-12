import {configureStore} from '@reduxjs/toolkit'
import tableSlice from './slices/tableSlice'


export const store = configureStore({
	reducer: {
		table: tableSlice
	}
})