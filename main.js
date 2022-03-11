let longitude = '22.7868542'
let latitude = '88.3643296'
mapboxgl.accessToken = 'pk.eyJ1Ijoid2lsZGZveCIsImEiOiJjbDBtYzRua3YwMHVpM2RuM2dqNWR2Y3huIn0.dVUv7f6MqS_uN69qy4O6ug'

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude],
    zoom: 4
})

map.addControl(
	new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		mapboxgl: mapboxgl
	})
);

var img1 = document.querySelector('#gateway')
var marker1 = new mapboxgl.Marker({
    element: img1
})
.setLngLat([72.835163, 18.920180]).addTo(map)

var img2 = document.querySelector('#gate')
var marker2 = new mapboxgl.Marker({
    element: img2
})
.setLngLat([77.22931, 28.61495]).addTo(map)

var img3 = document.querySelector('#lotus')
var marker3 = new mapboxgl.Marker({
    element: img3
})
.setLngLat([77.25880, 28.553501]).addTo(map)

var img4 = document.querySelector('#redfort')
var marker4 = new mapboxgl.Marker({
    element: img4
})
.setLngLat([77.24094, 28.65697]).addTo(map)

var img5 = document.querySelector('#taj')
var marker5 = new mapboxgl.Marker({
    element: img5
})
.setLngLat([78.04209, 27.17625]).addTo(map)



