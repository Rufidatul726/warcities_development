import { CustomInputProps } from '@types';
import React from 'react'

const Input = ({containerStyles, inputStyles, labelStyles, label, placeholder, type, value, handleChange}: CustomInputProps) => {
  return (
    <div>
        <label className={`block mb-2 font-bold ${labelStyles}`}>{label}</label>
        <input
            type={type}
            value={value}
            onChange={handleChange}
            className={`w-full p-2 border rounded ${inputStyles}`}
            placeholder={placeholder}
            required
        />
    </div>
  )
}

export default Input;
