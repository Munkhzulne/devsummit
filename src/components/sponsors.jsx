import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Row, Col } from "react-bootstrap"
export const Sponsors = ({ partnersRef }) => {
  return (
    <div ref={partnersRef}>
      <div className="animation getTicket d-flex justify-content-center align-items-center">
        <div className="animation-con">
          <div style={{ color: "white" }} className="animation-con1 py-3">
            <div
              className="animation-title text-26  "
              style={{ whiteSpace: "nowrap" }}
            >
              <b>GET YOUR TICKET NOW * </b>JANUARY 22 *
            </div>
            <div
              className="animation-title text-26   "
              style={{ whiteSpace: "nowrap" }}
            >
              <b>GET YOUR TICKET NOW * </b> JANUARY 22 *
            </div>
            <div
              className="animation-title text-26 "
              style={{ whiteSpace: "nowrap" }}
            >
              <b>GET YOUR TICKET NOW * </b>JANUARY 22 *
            </div>
            <div
              className="animation-title text-26 "
              style={{ whiteSpace: "nowrap" }}
            >
              <b>GET YOUR TICKET NOW * </b>JANUARY 22 *
            </div>

            <div
              className="animation-title text-26  "
              style={{ whiteSpace: "nowrap" }}
            >
              <b>GET YOUR TICKET NOW * </b> JANUARY 22 *
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white cont">
        <Row className="w-100">
          <Col
            sm={{ offset: 1, span: 11 }}
            className="text-bold text-header text-dark justify-content-around d-flex flex-column"
          >
            Partners_
            <div className="d-flex flex-row align-items-center justify-content-around  flex-wrap">
              <div style={{ width: "200px" }} className="px-2 me-4">
                <StaticImage src="../images/pack.png" alt="pack" />
              </div>

              <div style={{ width: "200px" }} className="px-2 me-4">
                <StaticImage src="../images/ando.jpg" alt="ando" />
              </div>
              <div style={{ width: "200px" }} className="px-2 me-4">
                <StaticImage src="../images/scc.png" alt="scc" />
              </div>
              <div style={{ width: "200px" }} className="px-2 me-4">
                <StaticImage src="../images/nest.png" alt="nest" />
              </div>
              <div style={{ width: "400px" }} className="px-2 me-4">
                <StaticImage src="../images/wtm.png" alt="wtm" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}
