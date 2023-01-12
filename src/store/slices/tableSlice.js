import {createSlice} from '@reduxjs/toolkit'


const tableSlice = createSlice({
	name: 'tableSlice',
	initialState: {
		data: [
			{key: 1, orderNumber: '№1', fromLat: 59.84660399, toLat: 59.82934196, fromLng: 30.29496392, toLng: 30.42423701},
			{key: 2, orderNumber: '№2', fromLat: 59.82934196, toLat: 59.82761295, fromLng: 30.42423701, toLng: 30.41705607},
			{key: 3, orderNumber: '№3', fromLat: 59.83567701, toLat: 59.84660399, fromLng: 30.38064206, toLng: 30.29496392},
			{key: 4, orderNumber: '№4', fromLat: 59.84660399, toLat: 59.82761295, fromLng: 30.29496392, toLng: 30.41705607},
			{key: 5, orderNumber: '№5', fromLat: 59.83567701, toLat: 59.84660399, fromLng: 30.38064206, toLng: 30.29496392},
		],
		selectedRow: {},
	},
	reducers: {
		addRowToSelectedRow: (state, action) => {
			state.selectedRows = action.payload
		},
	},
})

export default tableSlice.reducer

export const {addRowToSelectedRow} = tableSlice.actions