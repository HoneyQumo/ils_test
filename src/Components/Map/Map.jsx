import React, {useEffect} from 'react'
import './Map.css'
import {Col} from 'antd'
import {MapContainer, Polyline, TileLayer} from 'react-leaflet'
import {useSelector} from 'react-redux'


const Map = () => {
	const selectedRows = useSelector(state => state.table.selectedRows)
	console.log(selectedRows)

	const polyline = [
		[59.84660399, 30.29496392],
		[59.82934196, 30.42423701],
	]

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const res = await fetch('https://router.project-osrm.org/route/v1/driving/59.84660399,30.29496392;59.82934196,30.42423701?alternatives=false&steps=true')
	// 		const data = await res.json()
	// 		console.log(data)
	// 		// console.log(data.routes[0].legs[0].steps[0].maneuver.location)
	// 	}
	// 	fetchData()
	// })

	return (
		<Col span={14}>
			<MapContainer center={[59.9342802, 30.3350986]} zoom={11} scrollWheelZoom={true}>
				<TileLayer
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				/>
				<Polyline pathOptions={{color: 'red'}} positions={polyline}/>
			</MapContainer>
		</Col>
	)
}

export default Map