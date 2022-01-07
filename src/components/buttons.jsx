import React from "react"

export const PrimaryButton = ({ children, borderStyle = "border-white" }) => {
  return (
    <div className={`p-btn-b ${borderStyle}`} style={{ width: "fit-content" }}>
      <button className="p-btn text-white px-4 py-1 text-18 text-bold">
        {children}
      </button>
    </div>
  )
}

export const SecondaryButton = ({ children }) => {
  return (
    <div>
      <button className="s-btn text-white px-4 py-1 text-18 text-bold">
        {children}
      </button>
    </div>
  )
}
