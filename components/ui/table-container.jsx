import React from "react"

export default function TableContainer({ children, className = "", ...props }) {
  return (
    <div className={`w-full overflow-auto ${className}`} {...props}>
      {children}
    </div>
  )
} 