import React from "react"
import GoogleMapReact from "google-map-react"
import "../styles/where.scss"
import { PrimaryButton, SecondaryButton } from "./buttons"
import { Logo } from "./logo"

const AnyReactComponent = ({ text }) => (
  <div className="d-flex justify-content-center flex-column align-items-center">
    <div
      className="bg-primary py-3 px-1"
      style={{ whiteSpace: "nowrap", width: "235px", textAlign: "center" }}
    >
      {text}
    </div>
    <Logo />
  </div>
)
export const Where = () => {
  const defaultProps = {
    center: {
      lat: 47.903801,
      lng: 106.92236,
    },
    zoom: 18,
  }
  return (
    <div className="cont mt-5">
      <div className="mx-8p dotoodCont">
        <div className="flex-row dotoodCont">
          <div className="leftCon">
            <div className="text-header">Where when?_</div>
            <div className="text-20 mt-3">
              January 22, 2022
              <br />
              @Corporate Hotel and Convention Centre
            </div>
            <div className="mt-40 flex-row">
              <PrimaryButton>Buy Ticket</PrimaryButton>
              <SecondaryButton onClick={() => window.open("https://tinyurl.com/2fzj3cwc", '_blank').focus()}>Get directions</SecondaryButton>
            </div>
          </div>

          <div className="mapContainer">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: process.env.GOOGLE_MAP_API_KEY,
              }}
              center={defaultProps.center}
              zoom={defaultProps.zoom}
              options={{
                styles: [
                  {
                    featureType: "all",
                    elementType: "labels",
                    stylers: [{ visibility: "on" }],
                  },
                ],
              }}
              yesIWantToUseGoogleMapApiInternals
            >
              <AnyReactComponent
                lat={47.9041}
                lng={106.92235}
                text="The Corporate Hotel and Convention Centre"
              />
            </GoogleMapReact>
          </div>
        </div>
      </div>
      ,
    </div>
  )
}
export default Where
