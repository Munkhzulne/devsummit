import React, { useState } from "react"
import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"
import Card from "react-bootstrap/Card"
import { Col } from "react-bootstrap"
import "../styles/speakers.scss"
import { speaker } from "./data"
export const Profile = ({ picture, firstName, lastName, role, work }) => {
  return (
    <Card className="cardContainer w-100">
      <Card.Img
        variant="top"
        src={picture && require(`../images/tech_talk/${picture}.png`).default}
        className="cardImage w-100 h-100"
      />
      <Card.Body>
        <Card.Title className="text-20">
          <div>{firstName}</div>
          <div>{lastName}</div>
        </Card.Title>
        <Card.Text className="cardDesc text-18">{`${role} @ ${work}`}</Card.Text>
      </Card.Body>
    </Card>
  )
}
export const Speakers = ({ speakersRef }) => {
  const [key, setKey] = useState("Tech Talks_")
  const titles = [
    "Tech Talks_",
    "Women in Tech_",
    "Panel Discussions_",
    "Workshops_",
  ]

  return (
    <div className="cont relative" ref={speakersRef}>
      <div className="topCircle cc d-none d-md-block" />
      <div className="bottomCircle cc d-none d-md-block" />
      <div className="col mx-8p onTop">
        <div className="justify-start wp100">
          <p className="text-header text-bold">Our Speakers_</p>
        </div>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={k => setKey(k)}
          className="ml-0 onTop"
        >
          {titles.map((title, index) => (
            <Tab
              eventKey={title}
              title={title}
              tabClassName="tabStyle text-20"
              key={"tab" + index}
            >
              <div className="row mx0 mt56 tabData onTop" key={index}>
                {speaker
                  .find(dt => dt.title === title)
                  ?.persons.map((person, ind) => (
                    <Col
                      key={index * titles.length + ind + "col"}
                      sm="6"
                      md="3"
                      xs="12"
                      className="justify-content-center d-flex"
                    >
                      <Profile {...person} key={index * titles.length + ind} />
                    </Col>
                  ))}
              </div>
            </Tab>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
export default Speakers
