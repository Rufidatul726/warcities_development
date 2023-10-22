import React from 'react'
import { CustomFormProps } from '@types';

const Form = ({
    containerStyles,
    handleSubmit,
    children    
}:CustomFormProps) => {
  return (
    <form onSubmit={handleSubmit} className={`w-full ${containerStyles}`}>
        {children}
    </form>
  )
}

export default Form;
