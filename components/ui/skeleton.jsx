import React from "react"

export default function Skeleton({ className = "", ...props }) {
  return (
    <div className={`bg-gray-200 animate-pulse rounded ${className}`} {...props} />
  )
}
