import React from 'react'
import './DataTable.css'
import {Col, Table} from 'antd'
import {useDispatch, useSelector} from 'react-redux'
import {addRowToSelectedRow, setCoordinates, wayPointsFetch} from '../../store/slices/tableSlice'


const DataTable = () => {
	const data = useSelector(state => state.table.data)
	const dispatch = useDispatch()

	const rowSelection = {
		type: 'radio',
		onChange: (selectedRowKeys, selectedRows) => {
			const {fromLat, toLat, fromLng, toLng} = selectedRows[0]
			dispatch(addRowToSelectedRow(selectedRows[0]))
			// Тут ширина и долгота поменяны местами, потому что в запросе сервиса project-osrm.org идет сначала долгота, потом широта.
			dispatch(setCoordinates([[fromLng, fromLat],[toLng, toLat]]))
			dispatch(wayPointsFetch([[fromLng, fromLat],[toLng, toLat]]))
		}
	}

	return (
		<Col span={10}>
			<Table className="table" dataSource={data} bordered pagination={false} rowSelection={rowSelection}>
				<Table.Column title="Номер заявки" dataIndex="orderNumber" key="orderNumber"/>
				<Table.Column title="Координаты ОТ lat" dataIndex="fromLat" key="fromLat"/>
				<Table.Column title="Координаты ОТ lng" dataIndex="fromLng" key="fromLng"/>
				<Table.Column title="Координаты ДО lat" dataIndex="toLat" key="toLat"/>
				<Table.Column title="Координаты ДО lng" dataIndex="toLng" key="toLng"/>
			</Table>
		</Col>
	)
}

export default DataTable