import * as React from "react"
import { DevHeader } from "../components/header"
import { Container, Row, Col, Stack } from "react-bootstrap"
import "../styles/index.scss"
import { PrimaryButton, SecondaryButton } from "../components/buttons"
import { StaticImage } from "gatsby-plugin-image"
import Parallax from "parallax-js"
import a from "../images/man.svg"
import { useEffect } from "react"
import { Hero } from "../components/hero"
import { Sponsors } from "../components/sponsors"
import { ShortDetails } from "../components/short-detail"
import { WhatIsSummit } from "../components/about-summit"
import { Where } from "../components/where"
import Speakers from "../components/speakers"
import { Agenda } from "../components/agenda"
const IndexPage = () => {
  return (
    <div className="main">
      <Stack gap={2}>
        <DevHeader />
        <Hero />
        <ShortDetails />
        <WhatIsSummit />
        <Speakers />
        {/* <Where /> */}
        <Agenda/>
      </Stack>
    </div>
  )
}

export default IndexPage
