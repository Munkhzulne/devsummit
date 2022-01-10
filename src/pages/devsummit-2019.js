import * as React from "react"
import { DevHeader } from "../components/header"
import { Stack } from "react-bootstrap"
import "../styles/index.scss"
import { PreviousSummit } from "../components/pre-summit"
const IndexPage = () => {
  const agendaRef = React.useRef(null)
  const speakersRef = React.useRef(null)
  return (
    <div className="summit19">
          <DevHeader agendaRef={agendaRef} speakersRef={speakersRef} transparent={true}/>
          <PreviousSummit />
    </div>
  )
}

export default IndexPage
