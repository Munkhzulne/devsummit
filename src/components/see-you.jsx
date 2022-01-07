import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Col, Row, Stack } from "react-bootstrap"
import { PrimaryButton } from "./buttons"

export const SeeYou = () => {
  return (
    <div className="cu">
      <div className="cont-big ">
        <Stack gap={5} className="pb-5">
          <Row>
            <Col md={{ offset: 3, span: 6 }} sm="12">
              <div className="text-header text-center">
                <span className="pe-3">See you at the</span>
                <div className="border border-white d-inline-block mt-1">
                  {" "}
                  <div
                    className="border border-white py-1 px-2 d-inline-block bg-primary"
                    style={{ transform: "translate(-10px, -10px)" }}
                  >
                    biggest tech
                  </div>
                </div>{" "}
                gathering in Mongolia_
              </div>
            </Col>
          </Row>

          <div className="d-flex justify-content-center">
            <PrimaryButton>Buy Ticket</PrimaryButton>
          </div>
        </Stack>
      </div>
      <div className="bg-secondary py-4 justify-content-center d-flex flex-column align-items-center">
        <div>
          <StaticImage src="../images/logoUnread.png" />
        </div>
        <div className="text-16">Copyright © 2022 DevSummit Mongolia.</div>
      </div>
    </div>
  )
}
