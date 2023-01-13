import React from 'react'
import './Map.css'
import {Col} from 'antd'
import {MapContainer, Marker, Polyline, Popup, TileLayer} from 'react-leaflet'
import {useSelector} from 'react-redux'


const Map = () => {
	const wayPoints = useSelector(state => state.table.wayPoints)
	const coord = useSelector(state => state.table.coordinates)
	console.log(wayPoints)

	return (
		<Col span={14}>
			<MapContainer center={[59.9342802, 30.3350986]} zoom={11} scrollWheelZoom={true}>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				/>
				<Polyline pathOptions={{color: 'red'}} positions={wayPoints}/>
				{coord.length > 0 && <Marker position={[59, 30]}>
					<Popup>Начало маршрута</Popup>
				</Marker>}
			</MapContainer>
		</Col>
	)
}

export default Map