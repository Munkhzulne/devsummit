import * as React from "react"
import { Container, Row, Col, Stack } from "react-bootstrap"
import { PrimaryButton, SecondaryButton } from "../components/buttons"
import Parallax from "parallax-js"
import a from "../images/man.svg"
import { useEffect } from "react"
export const Hero = () => {
  useEffect(() => {
    var scene = document.getElementById("scene")
    var parallaxInstance = new Parallax(scene)
  })
  return (
    <div className="cont-big">
      <Row className="w-100">
        <Col md={6}>
          <Stack gap={5} className="position-relative">
            <div className="circle-header">

            </div>
            <div className="text-huge">
              for_ <br />
              <span className="text-bold">Developers</span>
              <br />
              by_ <br />
              <span className="text-bold">Developers</span>
            </div>
            <div className="text-20 text-bold">
              January 22, 2022 <br />
              @Corporate Hotel and Convention Centre
            </div>
            <div className="d-flex flex-row">
              <PrimaryButton> Buy Ticket</PrimaryButton>
              <SecondaryButton>AGENDA</SecondaryButton>
            </div>
          </Stack>
        </Col>
        <Col xs={12} md="6" className="d-flex align-items-center my-5">
          <div>
            <div className="position-relative">
              <div className="circle-man1"></div>
              <div className="circle-man2"></div>
            </div>
            <div id="scene">
              <div data-depth="0.3" className="position-relative">
                <img src={a} alt="fill murray" style={{ minWidth: "100%" }} />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
