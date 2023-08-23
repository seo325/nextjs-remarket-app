'use client'
import React from 'react'
import { useState } from 'react';
import Input from '../../components/Input'
import { FieldValues, useForm } from 'react-hook-form';

const ProductUploadPage = () => {
  const [isLoading, setIsLoading] = useState("")

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: {
      errors,
    },
    reset
  } = useForm<FieldValues>({
    defaultValues: {
      title: '',
      description: '',
      category: '',
      latitude: 33.5563,
      longitude: 126.79581,
      imagSrc: '',
      price: 1
    }
  })
  return (
    <div>
      <Input
        id="title"
        label="Title"
        disalbed={isLoading}
        register={register}
        errors={errors}
        required >
      </Input>
      <hr />
      <Input
        id="description"
        label="Description"
        disalbed={isLoading}
        register={register}
        errors={errors}
        required >
      </Input>
      <hr />
      <Input
        id="price"
        label="Price"
        disalbed={isLoading}
        register={register}
        errors={errors}
        required >
      </Input>
      <hr />
      <Input
        id="title"
        label="Title"
        disalbed={isLoading}
        register={register}
        errors={errors}
        required >
      </Input>
      <hr />
      <div className='
      grid
      grid-cols-1
      md:grid-cols-2
      gap-3
      max-h-[50wh]
      overflow-y-auto'>
        {/* catagory */}
      </div>
      <hr/>


    </div>
  )
}

export default ProductUploadPage