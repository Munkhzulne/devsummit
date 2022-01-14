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
import ContactUs from "../components/contact-us"
import { SeeYou } from "../components/see-you"
import AgendaNew from "../components/agendaNew"
import { Test } from "../components/test"
import { Helmet } from "react-helmet"
const IndexPage = () => {
  const agendaRef = React.useRef(null)
  const speakersRef = React.useRef(null)
  const partnersRef = React.useRef(null)
  const contactRef = React.useRef(null)
  return (
    <div className="main">
      <Helmet>
        <title>DevSummit-2022!</title>
      </Helmet>
      <div className="bg">
        <Stack gap={5}>
          <DevHeader
            agendaRef={agendaRef}
            speakersRef={speakersRef}
            partnersRef={partnersRef}
            contactRef={contactRef}
          />
          <Hero />
          <ShortDetails />
          <WhatIsSummit />
          <Speakers speakersRef={speakersRef} />
          <div>
            <Test agendaRef={agendaRef} />
            <Sponsors partnersRef={partnersRef} />
          </div>
          <div className="contactUsWhereWrapper pt-5">
            <ContactUs contactRef={contactRef} />
            <Where />
          </div>
          <SeeYou />
        </Stack>
      </div>
    </div>
  )
}

export default IndexPage
