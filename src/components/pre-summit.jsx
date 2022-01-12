import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Col, Row, Stack, Card } from "react-bootstrap"
import portrait1 from "../images/bayarsaikhan-1.jpeg"
import portrait from "../images/selina.jpeg"
import portrait2 from "../images/ehab-1.jpeg"
import portrait3 from "../images/boldtulga.jpeg"
import { SecondaryButton } from "./buttons"
const Profile = ({ picture, firstName, lastName, role, work }) => {
  return (
    <Card className="cardContainer w-100">
      <Card.Img
        variant="top"
        src={picture}
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

const data = [
  {
    picture: portrait,
    lastName: "Liu",
    firstName: "Selina",
    role: "Software Engineer",
    work: "Airbnb"
  },
  {
    picture: portrait1,
    lastName: "Volodya",
    firstName: "Bayarsaikhan",
    role: "COO",
    work: "AND Global (LendMN)"
  },
  {
    picture: portrait2,
    lastName: "Ganbaatar",
    firstName: "Boldtulga",
    role: "Software Engineer",
    work: "Uber"
  },
  {
    picture: portrait3,
    lastName: "Eltayeb",
    firstName: "Ehab",
    role: "Serial Entrepreneur, Co-Founder",
    work: "Promotion Craft"
  }

]

export const PreviousSummit = () => {
  return (
    <div className="cont pre-summit ">
      <Row className="pt-5">
        <Col md={{ offset: 1, span: 10 }}>
          {" "}
          <Stack gap={5}>
            <div>
              <StaticImage src="../images/logoDS19.png" />
            </div>
            <Stack gap={3}>
              <div className="text-header text-bold w-100">Speakers_</div>
              <div className="d-flex flex-row flex-wrap">
                {data.map((person, ind) => (
                  <Col
                    sm="6"
                    md="3"
                    xs="12"
                    className="justify-content-center d-flex"
                  >
                    <Profile {...person} key={ind} />
                  </Col>
                ))}
              </div>
              
            </Stack>
            <Stack gap={3}>
              <div className="text-header text-bold w-100">Gallery</div>
              <Row className="w-100 justify-content-center align-items-center">
                <Col sm={6} xs="12" className="py-2 ">
                  <StaticImage src={`../images/1.jpeg`} />
                </Col>
                <Col sm={6} xs="12" className="py-2">
                  <StaticImage src={`../images/2.jpeg`} />
                </Col>
                <Col sm={6} xs="12" className="py-2">
                  <StaticImage src={`../images/3.jpeg`} />
                </Col>
                <Col sm={6} xs="12" className="py-2">
                  <StaticImage src={`../images/4.jpeg`} />
                </Col>
              </Row>
              <div className="d-flex align-items-center justify-content-center">
                <SecondaryButton onClick={() => window.open("https://www.facebook.com/media/set/?set=a.2033561916945074&type=3", '_blank').focus()}>See all +</SecondaryButton>
              </div>
            </Stack>
          </Stack>
        </Col>
      </Row>
    </div>
  )
}
