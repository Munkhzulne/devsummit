import React from "react"
import { Row, Col } from "react-bootstrap"
import Timetable from "react-timetable-events"
import { events } from "./data"
import "../styles/test.scss"
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
          <div className="text-header text-bold ps-5 agendaLeft">Agenda_</div>
          <div className="text-18 text-decoration-underline agendaRight">{`For Inquiries & Partnership >`}</div>
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
                    <AgendaItem item={item} />
                  </div>
                ))}
              </div>

              <div className="d-flex flex-column position-relative d-none d-md-block">
                <AgendaItem
                  style={{ top: "357px", position: "absolute" }}
                  item={{
                    name: "Otgonjargal, Sr Project Manager @Datacare LLC",
                    description: "Project Management",
                    startTime: "9:30",
                  }}
                />
                <AgendaItem
                  style={{ top: "493px", position: "absolute" }}
                  item={{
                    name: "Suvdaa, Associate Professor @ National University of Mongolia",
                    description: "Computer Vision in Mongolia: Now and Future",
                    startTime: "10:00",
                  }}
                />
                <AgendaItem
                  style={{ top: "1140px", position: "absolute" }}
                  item={{
                    name: "• Deglee, Graphic Designer @Central TV \n • Bolortuya, Data Quality Analyst @Rio Tinto \n• Misheel, Student @Nest Academy \n• Anu-Ujin, Senior Front-end developer @Erxes Inc",
                    description: "Panel: Career & Job ",
                    startTime: "11:40",
                  }}
                />
                <AgendaItem
                  style={{ top: "1530px", position: "absolute" }}
                  item={{
                    name: "Uzmee, Business Analyst @Interactive LLC",
                    description: "Anyone can be a Techmaker",
                    startTime: "13:30",
                  }}
                />

                <AgendaItem
                  style={{ top: "1585px", position: "absolute" }}
                  item={{
                    name: "Naran, Co-founder/COO @Erxes Inc",
                    description: "Start-up, then Scale-up",
                    startTime: "13:50",
                  }}
                />
                <AgendaItem
                  style={{ top: "1779px", position: "absolute" }}
                  item={{
                    name: "• Enkhtuya, Director of Information Technology Center/Principal Auditor \n • Munkhtsetseg, CEO @Grapecity LLC \n• Nomin U, Individual ICT Consultant / Red hat instructor @ADB funded project / NUM Cisco Academy",
                    description: "Women leadership in IT",
                    startTime: "14:20",
                  }}
                />

                <AgendaItem
                  style={{ top: "2135px", position: "absolute" }}
                  item={{
                    name: "Urandelger, CTO @SmartData",
                    description:
                      "Spatial and location-based information system",
                    startTime: "15:30",
                  }}
                />
                <AgendaItem
                  style={{ top: "2575px", position: "absolute" }}
                  item={{
                    name: "Enerel, CFO @TechPack LLC",
                    description: "MCS Software House",
                    startTime: "16:35",
                  }}
                />
                <AgendaItem
                  style={{ top: "2725px", position: "absolute" }}
                  item={{
                    name: "• Enkhjargal, CEO/Founder @tomyo.io \n• Naran, Co-founder/COO @Erxes Inc",
                    description: "Panel: Global Fundraising",
                    startTime: "16:55",
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
                  style={{ top: "1140px", position: "absolute" }}
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
                  style={{ top: "2608px", position: "absolute" }}
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
              <div className="d-flex flex-column position-relative d-sm-block d-md-none">
                {events.wo.map(item => (
                  <div className="mb-2">
                    <AgendaItem item={item} />
                  </div>
                ))}
              </div>
              <div className="d-flex flex-column position-relative d-none d-md-block">
                <AgendaItem
                  style={{ top: "670px", position: "absolute" }}
                  item={{
                    name: "• Sarangerel, Lead Data Scientist \n • Amarsaikhan, ML engineer @And Systems Tech LLC",
                    description: "[Workshop] AutoML - Niko Scoring",
                    startTime: "10:20",
                  }}
                />
                <AgendaItem
                  style={{ top: "2298px", position: "absolute" }}
                  item={{
                    name: "• Tushigt-Erdene, CIO @MetaMori NFT\n • Tugsjin, CTO @MetaMori NFT\n• Amin-Erdene, Art Director @MetaMori NFT",
                    description: "How to build NFT?",
                    startTime: "15:50",
                  }}
                />
                <AgendaItem
                  style={{ top: "2910px", position: "absolute" }}
                  item={{
                    name: "Battogtokh, Senior manager @Capitron bank",
                    description: "On cyber security",
                    startTime: "17:45",
                  }}
                />

                <AgendaItem
                  style={{ top: "2999px", position: "absolute" }}
                  item={{
                    name: "Munkh-Od, CTO @ DiverseSolutions",
                    description: "NFT Marketplace Smart Contracts",
                    startTime: "18:10",
                  }}
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}
