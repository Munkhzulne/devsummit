import React, { useState } from "react"
import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"
import Card from "react-bootstrap/Card"
import portrait from "../images/portrait2.png"
import { Col, Image } from "react-bootstrap"
import "../styles/speakers.scss"
import { speaker } from "./data"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
export const Profile = ({ picture, firstName, lastName, role, work }) => {
  console.log(picture)
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
  const [key, setKey] = useState("Women in Tech_")
  const titles = ["Women in Tech_", "Tech Talks_", "AMA_", "Workshops_"]
  const data1 = [
    {
      title: "Women in Tech_",
      persons: new Array(7).fill({
        profileImage: portrait,
        lastName: "Boldbaatar",
        firstName: "Munkhzul",
        description: "Serial Entrepreneur, Co-Founder @ Promotion Craft",
      }),
    },
    {
      title: "Tech Talks_",
      persons: new Array(8).fill({
        profileImage: portrait,
        lastName: "Bilguun-Erdene",
        firstName: "Erdene-Jargal",
        description: "Serial Entrepreneur, Co-Founder @ Promotion Craft",
      }),
    },
    {
      title: "AMA_",
      persons: new Array(9).fill({
        profileImage: portrait,
        lastName: "Bilguun-Erdene",
        firstName: "Erdene-Jargal",
        description: "Serial Entrepreneur, Co-Founder @ Promotion Craft",
      }),
    },
    {
      title: "Workshops_",
      persons: new Array(10).fill({
        profileImage: portrait,
        lastName: "Bilguun-Erdene",
        firstName: "Erdene-Jargal",
        description: "Serial Entrepreneur, Co-Founder @ Promotion Craft",
      }),
    },
  ]
  return (
    <div className="cont relative" ref={speakersRef}>
      <div className="topCircle cc" />
      <div className="bottomCircle cc" />
      <div className="col mx-8p onTop">
        <div className="justify-start wp100">
          <p className="text-header text-bold">+30 Speakers_</p>
        </div>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={k => setKey(k)}
          className="ml-0 onTop"
        >
          {titles.map((title, index) => (
            <Tab eventKey={title} title={title} tabClassName="tabStyle text-20">
              <div className="row mx0 mt56 tabData onTop" key={index}>
                {speaker
                  .find(dt => dt.title == title)
                  .persons.map((person, ind) => (
                    <Col
                      sm="6"
                      md="3"
                      xs="12"
                      className="justify-content-center d-flex"
                    >
                      <Profile {...person} key={index * 4 + ind} />
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
