'use client'
import React from 'react'
import { useState } from 'react';
import Input from '../../components/Input'

const ProductUploadPage = () => {
    const [isLoading , setIsLoading] = useState("")
  return (
    <div>
      <Input 
      id ="title"
      label ="Title"
      disalbed ={isLoading} >fdfd</Input>
    
    </div>
    )
}

export default ProductUploadPage