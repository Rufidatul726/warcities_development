import { CustomErrorProps } from '@types'
import React from 'react'

const CustomError = ({message}: CustomErrorProps) => {
  return (
    <div className="max-w-md mx-auto mt-12 p-6 border rounded shadow-lg">
      <h2 className="text-xl mb-4">Error</h2>
      <p>{message}</p>
    </div>
  )
}

export default CustomError
