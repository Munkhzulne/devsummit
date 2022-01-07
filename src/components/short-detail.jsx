import React from "react"
import { Row, Col, Container } from "react-bootstrap"
export const ShortDetails = () => {
  return (
    // <Container className="" fluid>
      <div className="cont bg-secondary py-3">
        <Row className="text-bold f-32">
          <Col sm="12" md="4"className="text-center text-20">+800 Developers</Col>
          <Col sm="12" md="4"className="text-center text-20">+30 Speakers</Col>
          <Col sm="12" md="4"className="text-center text-20">+something</Col>
        </Row>
      </div>
    // </Container>
  )
}
