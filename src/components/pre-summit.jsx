import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Col, Row, Stack } from "react-bootstrap"
import portrait from "../images/portrait2.png"
import { SecondaryButton } from "./buttons"
import { Profile } from "./speakers"

const data = new Array(8).fill({
  profileImage: portrait,
  name: "Erdene-Jargal",
  description: "Serial Entrepreneur, Co-Founder @ Promotion Craft",
})

export const PreviousSummit = () => {
  return (
    <div className="cont pre-summit ">
      <Row className="pt-5">
        <Col md={{ offset: 1, span: 10 }}>
          {" "}
          <Stack gap={5}>
              <div>
              <StaticImage src="../images/logoDS19.png"/>

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
              <SecondaryButton>See all +</SecondaryButton>

              </div>
            </Stack>
          </Stack>
        </Col>
      </Row>
    </div>
  )
}
