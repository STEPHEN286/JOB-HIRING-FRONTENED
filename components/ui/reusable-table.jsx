import React from "react"

export default function ReusableTable({ columns = [], data = [] }) {
  return (
    <table className="min-w-full border text-sm">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.accessor || col.Header} className="border px-2 py-1">{col.Header || col.accessor}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            {columns.map((col) => (
              <td key={col.accessor || col.Header} className="border px-2 py-1">{row[col.accessor]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
} 