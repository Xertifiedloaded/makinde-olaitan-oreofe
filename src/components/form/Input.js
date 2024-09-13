import React from "react"

export default function Input({ type, value, onChange }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className="mt-1 p-2 border border-gray-300 rounded w-full"
      required
    />
  )
}





