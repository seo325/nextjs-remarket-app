'use client'
import { useState } from 'react';
import React from 'react'
import Input from '../../components/Input'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Button from '../../components/Button';
import Container from '../../components/Container';
import Heading from '@/app/components/Heading';
import ImageUpload from '@/app/components/ImageUpload';
import CategoryInput from '@/app/components/categories/CategoryInput';
import { catagory, categories } from '@/app/components/categories/Categories';

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
      category: 'beauty',
      latitude: 33.5563,
      longitude: 126.79581,
      imagSrc: '',
      price: 1
    }
  })
  const onSubmit: SubmitHandler<FieldValues> = (data) => {

  }
  const imageSrc = watch('imageScr');
  const category = watch('category')
  const setCustomValue = (id: string, value: any) => {
    setValue(id, value)
  }

  return (
    <Container>
      <div className='max-w-screen-lg mx-auto'>
        <form className='flex flex-col gap-8'
          onSubmit={handleSubmit(onSubmit)}>

          <Heading
            title='Product Upload'
            subtitle='upload your product' />

          <ImageUpload
            onChange={(value) => setCustomValue('imageSrc', value)}
            value={imageSrc}
          />
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
            {categories.map((item)=> (
              <div key={item.label} className='col-span-1'>
                <CategoryInput
                  onClick ={(category) =>
                  setCustomValue('category',category)}
                selected ={catagory === item.path}
                label ={item.label}
                icon ={item.icon}
                path ={item.path}
                />
              </div>
            ))}
          </div>
          <hr />

          <Button label=" 상품 생성하기"></Button>
        </form>
      </div>

    </Container>
  )
}

export default ProductUploadPage