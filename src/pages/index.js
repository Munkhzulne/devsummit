import * as React from "react"
import { DevHeader } from "../components/header"
import { Stack } from "react-bootstrap"
import "../styles/index.scss"
import { Hero } from "../components/hero"
import { Sponsors } from "../components/sponsors"
import { ShortDetails } from "../components/short-detail"
import { WhatIsSummit } from "../components/about-summit"
import { Where } from "../components/where"
import Speakers from "../components/speakers"
import { Agenda } from "../components/agenda"
import { PreviousSummit } from "../components/pre-summit"
import ContactUs from "../components/contact-us"
const IndexPage = () => {
  const agendaRef = React.useRef(null)
  const speakersRef = React.useRef(null)
  return (
    <div className="main">
      <div className="bg">
        <Stack gap={5}>
          <DevHeader agendaRef={agendaRef} speakersRef={speakersRef} />
          <Hero />
          <ShortDetails />
          <WhatIsSummit />
          <Speakers speakersRef={speakersRef} />
          <div>
            <Agenda agendaRef={agendaRef} />
            <Sponsors />
          </div>
          <div className="contactUsWhereWrapper pt-5">
            <ContactUs />
            <Where />
          </div>
          <PreviousSummit />
        </Stack>
      </div>
    </div>
  )
}

export default IndexPage
