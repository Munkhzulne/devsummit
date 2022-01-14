import * as React from "react"
import { Row, Col, Stack } from "react-bootstrap"
import { PrimaryButton, SecondaryButton } from "../components/buttons"
import Parallax from "parallax-js"
import { useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
export const Hero = () => {
  useEffect(() => {
    var scene = document.getElementById("scene")
    var parallaxInstance = new Parallax(scene)
  })
  return (
    <div className="cont-big">
      <Row className="w-100">
        <Col md={{ offset: 1, span: 5 }}>
          <Stack gap={5} className="position-relative">
            <div className="text-huge text-bold">
              The biggest tech conference in Mongolia for developers by
              developers_
            </div>
            <div className="text-20 text-bold">
              January 22, 2022 <br />
              @Corporate Hotel and Convention Centre
            </div>
            <div className="d-flex flex-row">
              <PrimaryButton> Buy Ticket</PrimaryButton>
              <SecondaryButton onClick ={() =>  window.open("https://tinyurl.com/5x4jwuw5", '_blank').focus()}>{`For Partnership >`}</SecondaryButton>
            </div>
          </Stack>
        </Col>
        <Col xs={12} md="6" className="d-flex align-items-center my-5 mb-1">
          <div>
            
            <div id="scene">
            {/* <div className="position-relative">
              <div className="circle-man1"></div>
              <div className="circle-man2"></div>
            </div> */}
              <div data-depth="0.3" className="position-relative">
                <StaticImage
                  alt="hero"
                  src="../images/man.svg"
                  style={{ minWidth: "100%" }}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
