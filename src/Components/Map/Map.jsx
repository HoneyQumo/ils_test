import React from 'react'
import './Map.css'
import {Col} from 'antd'
import {MapContainer, Polyline, TileLayer} from 'react-leaflet'
import {useSelector} from 'react-redux'
import LocationMarker from '../LocationMarker/LocationMarker'


const Map = () => {
	const wayPoints = useSelector(state => state.table.wayPoints)

	return (
		<Col span={14}>
			<MapContainer center={[59.9342802, 30.3350986]} zoom={12} scrollWheelZoom={true}>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				/>
				<Polyline pathOptions={{color: 'red'}} positions={wayPoints}/>
				<LocationMarker/>
			</MapContainer>
		</Col>
	)
}

export default Map