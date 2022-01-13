import React from "react"
import {
  Row,
  Col,
  Stack,
  Table,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap"
import Timetable from "react-timetable-events"
import { events } from "./data"

const AgendaItem = ({ item, ...props }) => {
  return (
    <div
      role={"button"}
      className="d-flex flex-row border border-white mx-2 w-100"
      {...props}
    >
      <div
        className="align-items-center d-flex bg-white text-bold text-dark px-2 text-14 justify-content-center"
        style={{ minWidth: "50px" }}
      >
        {item.startTime}
      </div>
      <div
        className={`${
          item.name.includes("Break") ? "getTicket" : "bg-primary"
        } d-flex flex-column justify-content-center p-2 pt-1 w-100`}
      >
        <span className="text-14 text-bold pre-line"> {item.name} </span>
        <span
          className="text-bold pre-line"
          style={{ opacity: "70%", fontSize: "10px" }}
        >
          {" "}
          {item.description}{" "}
        </span>
      </div>
    </div>
  )
}

export const Test = ({ agendaRef }) => {
  return (
    <div className="bg-secondary mt-1 px-2 py-4" ref={agendaRef}>
      <div className="w-100 px-1">
        <div className="d-flex flex-row justify-content-between align-items-center py-4">
          <div className="text-header text-bold ps-5">Agenda_</div>
          <div className="text-18 text-decoration-underline">{`For Inquiries & Partnership >`}</div>
        </div>
        <div class="view">
          <Row>
            <Col sm="12" md="3">
              <div className="text-26 mb-3 text-center text-bold">
                Tech Talks_
              </div>
              <div className="d-flex flex-column position-relative">
                {events.t.map(item =>
                  item?.type == "topic" ? (
                    <div className="w-100 text-white mx-2 mb-2 bg-success ps-2 text-16 text-bold">
                      {" "}
                      {item.name}
                    </div>
                  ) : (
                    <div className="mb-2">
                      <AgendaItem item={item} style={{ minHeight: "58px" }} />
                    </div>
                  )
                )}
              </div>
            </Col>
            <Col sm="12" md="3">
              <div className="text-26 mb-3 text-center text-bold">
                Women Techmakers_
              </div>
              <div className="d-flex flex-column position-relative d-sm-block d-md-none">
                {events.w.map(item => (
                  <div className="mb-2">
                    <AgendaItem item={item} style={{ height: "40px" }} />
                  </div>
                ))}
              </div>

              <div className="d-flex flex-column position-relative d-none d-md-block">
                <AgendaItem
                  style={{ top: "361px", position: "absolute" }}
                  item={{
                    name: "Bayarmaa, Business Analyst / Project Manager @Datacare LLC",
                    description: "Project Management",
                    startTime: "9:30",
                  }}
                />
                <AgendaItem
                  style={{ top: "493px", position: "absolute" }}
                  item={{
                    name: "Yesui, Academic manager / Project manager @ Nest Academy / Nest Solutions",
                    description:
                      "NON-TRADITIONAL PATHS INTO TECHNOLOGY CAREERS",
                    startTime: "10:00",
                  }}
                />
                <AgendaItem
                  style={{ top: "1139px", position: "absolute" }}
                  item={{
                    name: "• Deglee, Graphic Designer @Central TV \n • Bolortuya, Data Quality Analyst @Rio Tinto \n• Misheel, Instructor @Nest Academy \n• Anu-Ujin, Senior Front-end developer @Erxes Inc",
                    description: "Panel: Career & Job ",
                    startTime: "11:40",
                  }}
                />
                <AgendaItem
                  style={{ top: "1490px", position: "absolute" }}
                  item={{
                    name: "Oyun-Erdene, Professor @ National University of Mongolia",
                    description: "Industrial Revolution, its importance",
                    startTime: "13:30",
                    endTime: "14:00",
                  }}
                />

                <AgendaItem
                  style={{ top: "1559px", position: "absolute" }}
                  item={{
                    name: "Naran, Co-founder/COO @Erxes Inc",
                    description: "Start-up, then Scale-up",
                    startTime: "13:50",
                  }}
                />

                <AgendaItem
                  style={{ top: "2125px", position: "absolute" }}
                  item={{
                    name: "Urandelger, CTO @SmartData",
                    description:
                      "Spatial and location-based information system",
                    startTime: "15:30",
                  }}
                />
              </div>
            </Col>
            <Col sm="12" md="3">
              <div className="text-26 mb-3 text-center text-bold">AMA_</div>
              <div className="d-flex flex-column position-relative d-sm-block d-md-none">
                {events.a.map(item => (
                  <div className="mb-2">
                    <AgendaItem item={item} />
                  </div>
                ))}
              </div>
              <div className="d-flex flex-column position-relative d-none d-md-block">
                <AgendaItem
                  style={{ top: "820px", position: "absolute" }}
                  item={{
                    name: "• Zolboobayar, Tech Lead @ Meta Global Inc LLC \n • Usukhbayar,  Sr Mobile Developer @ Mezorn \n• Gansoronzon,  Sr Software Engineer @ Facebook / Meta\n• Anu, Front-end Developer @ SteppeLink LLC \n• Ariunaa, UX / UI designer @ And Systems Tech",
                    description: "",
                    startTime: "10:40",
                  }}
                />
                <AgendaItem
                  style={{ top: "1139px", position: "absolute" }}
                  item={{
                    name: "• Tuvshintur, Founder @ KMP \n• Tungalag, AI Engineer (MLUB / Freelancer)\n• Khongorzul, ML Engineer @ MMusic \n• Tumur-Ochir, Senior ML Engineer@ And Systems Tech LLC",
                    description: "",
                    startTime: "11:40",
                  }}
                />
                <AgendaItem
                  style={{ top: "1549px", position: "absolute" }}
                  item={{
                    name: "• Munkh-Od, CTO @ DiverseSolutions \n • Tuvshintsenguun, Software Test Engineer @ Input Output Global \n• Bilguun, Senior Software Engineer @ Unimedia Solutions",
                    description: "",
                    startTime: "13:40",
                  }}
                />

                <AgendaItem
                  style={{ top: "1970px", position: "absolute" }}
                  item={{
                    name: "• Dulmandakh, Founder / CEO @ Khuur Music Group LLC \n• Lkhavuujal, Director of DevOps Division @ Grapecity Mongolia LLC",
                    description: "",
                    startTime: "14:40",
                  }}
                />

                <AgendaItem
                  style={{ top: "2248px", position: "absolute" }}
                  item={{
                    name: "• Ganbayar, Cyber security researcher  @ University of Oxford \n • Tengis, Information security advisor \n • Bilguun, CTO@ Nomadays LLC",
                    description: "",
                    startTime: "15:40",
                  }}
                />
                <AgendaItem
                  style={{ top: "2528px", position: "absolute" }}
                  item={{
                    name: "• Monhoo, Indie Game Dev Developer @ Alpha Games \n• Batzorig, PM / VR Dev @ Digital Solutions Mongolia \n• Namuun, PM / VR Dev @ Digital Solutions Mongolia",
                    description: "",
                    startTime: "16:40",
                  }}
                />
              </div>
            </Col>
            <Col sm="12" md="3">
              <div className="text-26 mb-3 text-center text-bold">
                Workshops_
              </div>
              <div className="d-flex flex-col position-relative"></div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}
