import Map from 'components/atoms/Map'

const MapBdv = () => {
  const DEFAULT_CENTER = [-23.565985644182255, -46.65077920923577]

  return (
    <Map
      style={{ width: '70%', height: '400px', borderRadius: '42px' }}
      center={DEFAULT_CENTER}
      minZoom={14}
      zoom={22}
      zoomControl={false}
      attributionControl={false}
    >
      {({ TileLayer, Marker }) => (
        <>
          <TileLayer
            id="mapbox/streets-v11"
            url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
          />
          <Marker position={DEFAULT_CENTER} />
        </>
      )}
    </Map>
  )
}

export default MapBdv
