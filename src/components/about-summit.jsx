import React from "react"

import { Row, Col, Container, Stack } from "react-bootstrap"
export const WhatIsSummit = () => {
  return (
    <Stack gap="1">
      <div className="position-relative">
        <div className="circle-about1 position-absolute d-none d-md-block"></div>
        <div className="circle-about2 position-absolute d-none d-md-block"></div>
        <div className="circle-about3 position-absolute d-none d-md-block"></div>

        <div className="cont mt-3">
          <Stack>
            <Row className="my-3 mb-0 row-margin-none">
              <Col
                md={{ offset: 1, span: 3 }}
                className="text-header text-bold"
              >
                DevSummit_
              </Col>
              <Col md={{ offset: 1, span: 6 }}>
                <Stack gap={4} className="text-20">
                  <div>
                    DevSummit is the biggest gathering of tech community in
                    Mongolia, bringing developers and tech professionals from
                    various sectors and levels to create meaningful
                    conversations in IT and provides a platform for companies to
                    showcase their products and services.
                  </div>
                  <div>
                    In an ever changing and dynamic tech industry, there has yet
                    to be organized a large-scale and global level IT event in
                    Mongolia – which makes DevSummit truly timely. The
                    organizers of Dev Summit are professionals in tech industry
                    in the community and through DevSummit seeks to strengthen
                    the tech community and fasten the development progress.
                  </div>
                  <div>
                    DevSummit will bring together over 800+ tech professionals
                    for an entire day and will consist of local and
                    international leading experts’ speeches, lightning talks,
                    Women Techmakers, knowledge transfer sessions, exhibitions
                    and networking opportunity with the community.
                  </div>
                  <div>
                    DevSummit 2022 is going to be held during an unprecedented
                    time of COVID. As organizers, we are committed to abide by
                    the COVID regulations imposed by the State Emergency
                    Committee. This means 50% capacity and attendees will be
                    required to have at least 2 shots of vaccine.
                  </div>
                </Stack>
              </Col>
            </Row>
          </Stack>
        </div>
      </div>
      <div className="cont">
        <Stack>
          <Row className="mb-0 row-margin-none">
            <Col md={{ offset: 1, span: 3 }} className="text-header text-bold">
              Tech Talks / AMA_
            </Col>
            <Col md={{ offset: 1, span: 6 }}>
              <Stack gap={4} className="text-20">
                <div>
                  We realize that the time allocated to our speakers is simply
                  not enough for them to share their life-long, hard battled
                  experience. Therefore, after every talk we will have our
                  speakers do an AMA session in a different room so that if you
                  are interested to ask questions, exchange ideas or share your
                  experiences you can stop by the AMA session and meet the
                  speakers. Please remember that the AMA session for each
                  speaker will have a limited time as well so be prepared to
                  come with specific questions and be aware of other people who
                  might be lined up behind you to ask questions too.
                </div>
              </Stack>
            </Col>
          </Row>
        </Stack>
      </div>

      <div className="cont">
        <Stack>
          <Row className=" mb-0 row-margin-none">
            <Col md={{ offset: 1, span: 3 }} className="text-header text-bold">
              Women Techmakers_
            </Col>
            <Col md={{ offset: 1, span: 6 }}>
              <Stack gap={4} className="text-20">
                <div>
                  Tech industry has rapidly been moving towards one where women
                  have more and more presence as time goes by. Today, we have
                  exceptional industry female leaders in the industry and this
                  will only continue to grow. At DevSummit, we support
                  Diversity. As part of this support, we are thrilled to have 2
                  panel discussions with Mongolian female leaders in the tech
                  industry and this session as a whole is called Women In Tech.
                  Come to these panel discussions to hear about the challenges
                  and success stories of women in tech in Mongolia and where we
                  are headed. Remember: These panel discussions are open to
                  everyone regardless of their gender.
                </div>
              </Stack>
            </Col>
          </Row>
        </Stack>
      </div>

      <div className="cont">
        <Stack>
          <Row className=" mb-0 row-margin-none">
            <Col md={{ offset: 1, span: 3 }} className="text-header text-bold">
              Workshops_
            </Col>
            <Col md={{ offset: 1, span: 6 }}>
              <Stack gap={4} className="text-20">
                <div>
                  At DevSummit 2022, we are not only brining industry experts to
                  give technical talks but we are also bringing exceptional
                  leaders to come and provide hands-on workshop sessions on
                  various topics. Some highlight of the workshop will cover
                  areas such as building mobile app with flutter, UI/UX human
                  center design, best practices around building e-commerce
                  systems and even how to read Mongolian ID card with image
                  recognition and AI model! Each workshop will have limited
                  number of seats available so please remember to register ahead
                  once the registration is announced via the FB event. DevSummit
                  is For Developers By Developers - and as a developer, remember
                  to bring your charged notebook to the sessions as well.
                </div>
              </Stack>
            </Col>
          </Row>
        </Stack>
      </div>
      <div className="cont">
        <Stack>
          <Row className=" mb-0 row-margin-none">
            <Col md={{ offset: 1, span: 3 }} className="text-header text-bold">
              Exhibition Booths_
            </Col>
            <Col md={{ offset: 1, span: 6 }}>
              <Stack gap={4} className="text-20">
                <div>
                  At DevSummit 2022, we are not only brining industry experts to
                  give technical talks but we are also bringing exceptional
                  leaders to come and provide hands-on workshop sessions on
                  various topics. Some highlight of the workshop will cover
                  areas such as building mobile app with flutter, UI/UX human
                  center design, best practices around building e-commerce
                  systems and even how to read Mongolian ID card with image
                  recognition and AI model! Each workshop will have limited
                  number of seats available so please remember to register ahead
                  once the registration is announced via the FB event. DevSummit
                  is For Developers By Developers - and as a developer, remember
                  to bring your charged notebook to the sessions as well.
                </div>
              </Stack>
            </Col>
          </Row>
        </Stack>
      </div>
    </Stack>
  )
}
