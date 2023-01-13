import React, {useEffect} from 'react'
import {Marker, Popup, useMap} from 'react-leaflet'
import {useSelector} from 'react-redux'
import L from 'leaflet'


function getIcon(_iconSize) {
	return L.icon({
		iconUrl: require('../../assets/icon/finish_icon.png'),
		iconSize: _iconSize,
		className: 'leaflet-icon',
	})
}

const LocationMarker = () => {
	const coord = useSelector(state => state.table.coordinates)
	const map = useMap()

	useEffect(() => {
		if (coord) {
			map.flyTo([coord[0][1], coord[0][0]], map.getZoom())
		}
	}, [coord, map])

	return coord === null ? null : (
		<>
			<Marker position={[coord[0][1], coord[0][0]]}>
				<Popup>Начало маршрута</Popup>
			</Marker>
			<Marker position={[coord[1][1], coord[1][0]]} icon={getIcon()}>
				<Popup>Конец маршрута</Popup>
			</Marker>
		</>
	)
}

export default LocationMarker