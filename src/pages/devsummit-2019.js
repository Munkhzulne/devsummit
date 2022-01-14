import * as React from "react"
import { DevHeader } from "../components/header"
import { Stack } from "react-bootstrap"
import "../styles/index.scss"
import { PreviousSummit } from "../components/pre-summit"
import { Helmet } from "react-helmet"
const IndexPage = () => {
  const agendaRef = React.useRef(null)
  const speakersRef = React.useRef(null)
  return (
    <div className="summit19">
      <Helmet>
        <title>DevSummit-2022!</title>
      </Helmet>
          <DevHeader agendaRef={agendaRef} speakersRef={speakersRef} transparent={true}/>
          <PreviousSummit />
    </div>
  )
}

export default IndexPage
