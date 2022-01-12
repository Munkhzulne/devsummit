import React from "react"

export const PrimaryButton = ({ children, borderStyle = "border-white", url = "https://shoppy.mn/products/unread-devsummit-2022" }) => {
  const openWindow = () => {
    window.open(url, '_blank').focus();
  }
  return (
    <div className={`p-btn-b ${borderStyle}`} style={{ width: "fit-content" }}>
      <button className="p-btn text-white px-4 py-1 text-18 text-bold" onClick={openWindow}>
        {children}
      </button>
    </div>
  )
}

export const SecondaryButton = ({ children, ...p }) => {
  return (
    <div >
      <button className="s-btn text-white px-4 py-1 text-18 text-bold " {...p}>
        {children}
      </button>
    </div>
  )
}
