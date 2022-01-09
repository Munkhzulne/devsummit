import React from "react"
import GoogleMapReact from "google-map-react"
import "../styles/where.scss"
import { PrimaryButton, SecondaryButton } from "./buttons"
const AnyReactComponent = ({ text }) => <div>{text}</div>
export const Where = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  }
  return (
    <div className="cont mt-5">
      <div className="mx-8p dotoodCont">
        <div className="flex-row dotoodCont">
          <div className="leftCon">
            <div className="text-header">
              Where & <br />
              when?_
            </div>
            <div className="text-16 mt-24">
              January 22, 2022
              <br />
              @Corporate Hotel and Convention Centre
            </div>
            <div className="mt-40 flex-row">
              <PrimaryButton>Buy Ticket</PrimaryButton>
              <SecondaryButton>Get directions</SecondaryButton>
            </div>
          </div>

          <div className="mapContainer">
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
              yesIWantToUseGoogleMapApiInternals
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Markerr"
              />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Where
