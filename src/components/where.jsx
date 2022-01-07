import React from "react"
import GoogleMapReact from "google-map-react"
import "../styles/where.scss"
const AnyReactComponent = ({ text }) => <div>{text}</div>
export const Where = () => {
  //   const defaultProps = {
  //     center: {
  //       lat: 10.99835602,
  //       lng: 77.01502627,
  //     },
  //     zoom: 11,
  //   }
  return (
    <div style={{ width: "674px", height: "428px" }}>
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Markerr" />
      </GoogleMapReact> */}
    </div>
  )
}
export default Where
