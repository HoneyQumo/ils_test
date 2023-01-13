import {call, put, takeEvery} from 'redux-saga/effects'
import {decode} from '@googlemaps/polyline-codec'
import {wayPointsFailure, wayPointsSuccess} from '../store/slices/tableSlice'


function* wayPointsWorker(action) {
	const coord = action.payload
	try {
		const res = yield call(() => fetch(`https://router.project-osrm.org/route/v1/driving/${coord[0][0]},${coord[0][1]};${coord[1][0]},${coord[1][1]}?geometries=polyline`))
		const data = yield res.json()
		const decodedWayPoints = yield decode(data.routes[0].geometry)
		yield put(wayPointsSuccess(decodedWayPoints))
	} catch (e) {
		yield put(wayPointsFailure())
	}
}

function* wayPointsWatcher() {
	yield takeEvery('tableSlice/wayPointsFetch', wayPointsWorker)
}

export default wayPointsWatcher