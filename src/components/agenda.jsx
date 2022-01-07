import React from "react"
import { Row, Col, Stack, Table } from "react-bootstrap"

const data = [
  {
    time: "12:00",
    name: "Gansoronzon",
    topic: "GraphQL",
    position: "Sr iOS Engineer @ Facebook / Meta",
  },
  {
    time: "12:00",
    name: "Gansoronzon",
    topic: "GraphQL",
    position: "Sr iOS Engineer @ Facebook / Meta",
  },
  {
    time: "12:00",
    name: "Gansoronzon",
    topic: "GraphQL",
    position: "Sr iOS Engineer @ Facebook / Meta",
  },
  {
    time: "12:00",
    name: "Gansoronzon",
    topic: "GraphQL",
    position: "Sr iOS Engineer @ Facebook / Meta",
  },
  {
    time: "12:00",
    name: "Gansoronzon",
    topic: "GraphQL",
    position: "Sr iOS Engineer @ Facebook / Meta",
  },
]

const AgendaItem = ({ item }) => {
  return (
    <div className="d-flex flex-row border border-white my-2 mx-2" style={{minWidth: "400px"}}>
      <div className="align-items-center d-flex bg-white text-bold text-dark px-3 text-20">
        {item.time}
      </div>
      <div className="d-flex flex-column bg-primary p-2">
        <span className="text-18 text-bold "> {item.name} </span>
        <span className="text-16"> {item.position} </span>
        <span className="text-16"> {item.topic} </span>
      </div>
    </div>
  )
}

export const Agenda = () => {
  return (
    <div className="bg-secondary cont-big">
      <div className="w-100">
        <div className="d-flex flex-row justify-content-between align-items-center">
          <div className="text-header text-bold">Agenda</div>
          <div className="text-18 text-decoration-underline">{`For Inquiries & Partnership >`}</div>
        </div>
        <div class="view my-5">
          <div class="wrapper">
            <table class="table">
              <tbody>
                <tr>
                  <td class="sticky-col first-col text-26 my-2">Tech Talks_</td>
                  {data.map(item => (
                    <td>
                      <AgendaItem item={item} />
                    </td>
                  ))}
                </tr>
                <tr>
                  <td class="sticky-col first-col text-26 my-2">
                    <div>Women Techmakers_</div>
                  </td>
                  {data.map(item => (
                    <td>
                      <AgendaItem item={item} />
                    </td>
                  ))}
                </tr>
                <tr>
                  <td class="sticky-col first-col text-26 my-2">Workshops_</td>
                  {data.map(item => (
                    <td>
                      <AgendaItem item={item} />
                    </td>
                  ))}
                </tr>
                <tr>
                  <td class="sticky-col first-col text-26 my-2">AMA_</td>
                  {data.map(item => (
                    <td>
                      <AgendaItem item={item} />
                    </td>
                  ))}
                </tr>
                <tr>
                  <td class="sticky-col first-col text-26 my-2">
                    Panel Discussions_
                  </td>
                  {data.map(item => (
                    <td>
                      <AgendaItem item={item} />
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
