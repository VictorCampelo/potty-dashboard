import Map from 'components/atoms/Map'

const MapBdv = () => {
  const DEFAULT_CENTER = [38.907132, -77.036546]

  return (
    <Map
      style={{ width: '90%', height: '400px' }}
      center={DEFAULT_CENTER}
      zoom={12}
    >
      {({ TileLayer }) => (
        <>
          <TileLayer
            id="mapbox/streets-v11"
            url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
          />
        </>
      )}
    </Map>
  )
}

export default MapBdv
