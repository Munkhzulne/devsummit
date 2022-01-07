import * as React from "react"
import { Container, Row, Col, Stack } from "react-bootstrap"
import "../styles/index.scss"

const IndexPage = () => {
  return (
    <Container className="bg-white" fluid>
        <div className="d-flex flex-row">
            <div className="bg-white pt-5 px-3"> 12 </div>
            <div className="bg-secondary"> ekfjrejf refhjreu wj</div>
        </div>
        <Row>
            <Col sm="12" md={{span: 6}} className="border border-solid">Column 1</Col>
            <Col sm="12" md={{offset: 2, span: 4}} className="border border-solid">Column 2</Col>
        </Row>
        <Stack  gap={5}>
  <div className="bg-light border">First item</div>
  <div className="bg-light border">Second item</div>
  <div className="bg-light border">Third item</div>
</Stack>
    </Container>
  )
}

export default IndexPage
