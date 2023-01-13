import {configureStore} from '@reduxjs/toolkit'
import tableSlice from './slices/tableSlice'
import createSagaMiddleware from 'redux-saga'
import wayPointsWatcher from '../saga/wayPointsSaga'

const saga = createSagaMiddleware()

export const store = configureStore({
	reducer: {
		table: tableSlice
	},
	middleware: [saga]
})

saga.run(wayPointsWatcher)