import React, { useState } from "react"
import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"
import Card from "react-bootstrap/Card"
import portrait from "../images/portrait2.png"
import "../styles/speakers.scss"
const Profile = ({ profileImage, name, description }) => {
  return (
    <Card className="cardContainer">
      <Card.Img variant="top" src={profileImage} className="cardImage" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className="cardDesc">{description}</Card.Text>
      </Card.Body>
    </Card>
  )
}
export const Speakers = () => {
  const [key, setKey] = useState("Women in Tech_")
  const titles = ["Women in Tech_", "Tech Talks_", "AMA_", "Workshops_"]
  const data = [
    {
      title: "Women in Tech_",
      persons: new Array(7).fill({
        profileImage: portrait,
        name: "Erdene-Jargal",
        description: "Serial Entrepreneur, Co-Founder @ Promotion Craft",
      }),
    },
    {
      title: "Tech Talks_",
      persons: new Array(8).fill({
        profileImage: portrait,
        name: "Bilguun-Erdene Erdene-Jargal",
        description: "Serial Entrepreneur, Co-Founder @ Promotion Craft",
      }),
    },
    {
      title: "AMA_",
      persons: new Array(9).fill({
        profileImage: portrait,
        name: "Bilguun-Erdene Erdene-Jargal",
        description: "Serial Entrepreneur, Co-Founder @ Promotion Craft",
      }),
    },
    {
      title: "Workshops_",
      persons: new Array(10).fill({
        profileImage: portrait,
        name: "Bilguun-Erdene Erdene-Jargal",
        description: "Serial Entrepreneur, Co-Founder @ Promotion Craft",
      }),
    },
  ]
  return (
    <div className="cont relative">
      <div className="topCircle d-xs-none d-sm-none d-md-block" />
      <div className="bottomCircle d-xs-none d-sm-none d-md-block" />
      <div className="col mx-8p onTop">
        <div className="justify-start wp100">
          <p className="text-header text-bold">+30 Speakers_</p>
        </div>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={k => setKey(k)}
          className="ml-0 "
        >
          {titles.map((title, index) => (
            <Tab eventKey={title} title={title} tabClassName="tabStyle">
              <div className="row mx0 mt56 tabData" key={index}>
                {data
                  .find(dt => dt.title == title)
                  .persons.map((person, ind) => (
                    <Profile {...person} key={index * 4 + ind} />
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
