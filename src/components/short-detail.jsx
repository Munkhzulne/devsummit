import React from "react"
import { Row, Col, Container } from "react-bootstrap"
export const ShortDetails = () => {
  return (
      <div className="cont-big bg-secondary py-3">
        <Row className="text-bold f-32 w-100">
          <Col sm="12" md="3"className="text-center text-20">+800 Developers</Col>
          <Col sm="12" md="3"className="text-center text-20">+30 Speakers</Col>
          <Col sm="12" md="3"className="text-center text-20">+9 Tracks</Col>
          <Col sm="12" md="3"className="text-center text-20">+26 Topics</Col>
        </Row>
      </div>
  )
}
