import React from 'react'
import './App.css'
import DataTable from '../Table/DataTable'
import Map from '../Map/Map'
import {Row} from 'antd'


const App = () => {
	return (
		<div className='App'>
			<Row>
				<DataTable/>
				<Map/>
			</Row>
		</div>
	)
}

export default App