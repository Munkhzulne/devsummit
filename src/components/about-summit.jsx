import React from "react"

import { Row, Col, Container, Stack } from "react-bootstrap"
export const WhatIsSummit = () => {
  return (
    // <Container fluid className="">
    <div className="position-relative">
      <div className="circle-about1 position-absolute"></div>
      <div className="circle-about2 position-absolute"></div>
      <div className="circle-about3 position-absolute"></div>

      <div className="cont my-3">
        <Row className="my-3 mb-0 row-margin-none">
          <Col md={{ offset: 1, span: 4 }} className="text-header text-bold">
            What exactly is this?_
          </Col>
          <Col md={{ offset: 0, span: 6 }}>
            <Stack gap={4} className="text-20">
              <div>
                DevSummit is the biggest gathering of tech community in
                Mongolia, bringing developers and tech professionals from
                various sectors and levels to create meaningful conversations in
                IT and provides a platform for companies to showcase their
                products and services.
              </div>
              <div>
                In an ever changing and dynamic tech industry, there has yet to
                be organized a large-scale and global level IT event in Mongolia
                – which makes DevSummit truly timely. The organizers of Dev
                Summit are professionals in tech industry in the community and
                through DevSummit seeks to strengthen the tech community and
                fasten the development progress.
              </div>
              <div>
                DevSummit will bring together over 600+ tech professionals for
                an entire day and will consist of local and international
                leading experts’ speeches, lightning talks, knowledge transfer
                sessions, exhibitions and networking opportunity with the
                community.
              </div>
            </Stack>
          </Col>
        </Row>
      </div>
    </div>
    //  {/* </Container> */}
  )
}
