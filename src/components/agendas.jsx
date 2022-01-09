import React from "react"
import "../styles/agendas.scss"
import { events } from "./data"
export const Agendas = ({ agendaRef }) => {
  const headers = Object.keys(events)
  const differenceBetweenTime = (time1, time2) => {
    const time1Array = time1.split(":")
    const time2Array = time2.split(":")
    const time1InMinutes =
      parseInt(time1Array[0]) * 60 + parseInt(time1Array[1])
    const time2InMinutes =
      parseInt(time2Array[0]) * 60 + parseInt(time2Array[1])
    return time2InMinutes - time1InMinutes
  }
  return (
    <div className="bg-secondary big-cont mt-1 pt-5 pb-5" ref={agendaRef}>
      <div className="w-100 mx-8p flex-row">
        {headers.map((header, index) => {
          return (
            <div className="flex-column" style={{ width: "16.66%" }}>
              {events[header].map((event, index2) => {
                const hugatsaa = differenceBetweenTime(
                  event.startTime,
                  event.endTime
                )
                if (index2 == 0) {
                  let howMuchBefore = differenceBetweenTime(
                    "8:00",
                    event.startTime
                  )
                  return (
                    <>
                      <div className="text-20 mb-4">{header}</div>
                      <div style={{ height: howMuchBefore + "px" }} />
                      <div
                        className="eventItem"
                        key={index + "-" + index2}
                        style={{ height: hugatsaa + "px" }}
                      >
                        <div className="time">{event.startTime}</div>
                        <div className="text">{event.name}</div>
                      </div>
                    </>
                  )
                } else {
                  let before = events[header][index2 - 1]
                  let difference = differenceBetweenTime(
                    before.endTime,
                    event.startTime
                  )
                  return (
                    <>
                      <div style={{ height: difference + "px" }} />
                      <div
                        className="eventItem"
                        key={index + "-" + index2}
                        style={{ height: hugatsaa + "px" }}
                      >
                        <div className="time">{event.startTime}</div>
                        <div className="text">{event.name}</div>
                      </div>
                    </>
                  )
                }
              })}
            </div>
          )
        })}
      </div>
    </div>
  )
}
