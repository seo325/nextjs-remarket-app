import { CldUploadWidget } from 'next-cloudinary';
import React from 'react'
import {TbPhotoPlus} from 'react-icons/tb'
import Image from 'next/image';

interface ImageUploadProps {
    onChange: (value: string) => void;
}
const ImageUpload: React.FC<ImageUploadProps> = ({
    onChange,
    value
}) => {
    const handleUpload = (result: any) => {
        console.log("result", result)
        onChange(result.info.secure_url);
    };
    return (
        <CldUploadWidget
            onUpload={handleUpload}
            uploadPreset={'uploadPreset'}
            options={{
                maxFiles: 1
            }}
        >
            {({ open }) => {
                return (
                    <div onClick={() => open?.()}
                        className='relative flex flex-col items-center justify-center gap-4 p-20 transition border-2
    border-dashed cursor-pointer hover:opacity-70 border-neutral-300 text-neutral-600'>I
                        <TbPhotoPlus
                            size={50}
                        />
                        {value && (
                            <div className='absolute inset-0 w-full h-full'>
                                <Image
                                    style={{ objectFit: 'cover' }}
                                    src={value}
                                    alt="House"
                                />
                            </div>
                        )}
                    </div>
                )
            }}
        </CldUploadWidget>
    )
}
export default ImageUpload