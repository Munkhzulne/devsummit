import React from "react"
import { events } from "./data.js"
import "../styles/agenda.scss"
export const AgendaNew = ({ agendaRef }) => {
  const headers = Object.keys(events)
  let implementedData = {}
  for (let i = 0; i < headers.length; i++) {
    for (let j = 0; j < events[headers[i]].length; j++) {
      const time =
        Number(events[headers[i]][j].startTime.split(":")[0]) * 60 +
        Number(events[headers[i]][j].startTime.split(":")[1]) -
        480
      implementedData[time] = implementedData[time] ? implementedData[time] : {}
      if (implementedData[time][headers[i]]) {
        implementedData[time][headers[i]].push(events[headers[i]][j])
      } else {
        implementedData[time][headers[i]] = [events[headers[i]][j]]
      }
    }
  }
  let implementedDataTimeKey = Object.keys(implementedData)
  return (
    <div className="bg-secondary big-cont mt-1 pt-5 pb-5 px-4" ref={agendaRef}>
      <div className="d-flex flex-row justify-content-between align-items-center mb-5 mx-8p">
        <div className="text-header text-bold">Agenda</div>
        <div className="text-18 text-decoration-underline">{`For Inquiries & Partnership >`}</div>
      </div>
      <div className="w-100 mx-8p tableBigContainer">
        <table className="tableContainer">
          <thead className="flex-row mb-5">
            {headers.map((header, index) => {
              return (
                <th className="text-26 tableHeader" key={"header" + index}>
                  {header}
                </th>
              )
            })}
          </thead>
          <tbody className="w-100">
            {implementedDataTimeKey.map((timeKey, index) => {
              const dt = implementedData[timeKey]
              return (
                <tr
                  key={"implementedDataTimeKey" + index}
                  className="flex-row tableRow"
                >
                  {headers.map((header, index2) => (
                    <td className="tableNode" key={"node" + index2}>
                      {dt[header] &&
                        dt[header].map((node, index3) => (
                          <div key={"nodeItem" + index3} className="nodeItem">
                            <div className="time">{node.startTime}</div>
                            <div className="name">{node.name}</div>
                          </div>
                        ))}
                    </td>
                  ))}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default AgendaNew
