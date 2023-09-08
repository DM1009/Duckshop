import React, { useEffect, useState } from 'react'
import mainImg from '../../public/assets/mainImg'
import Image from 'next/image'

const ImageLoop: React.FC = () => {
  // 이미지 URL 배열
  const images: string[] = mainImg

  const [currentImage, setCurrentImage] = useState<number>(0)

  useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(() => {
      setCurrentImage((prevImage: number) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      )
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className='flex flex-wrap relative justify-center '>
      {images.map((image: string, index: number) => (
        <Image
          className={`mt-4 absolute transition-opacity duration-500 rounded-xl ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ height: '70vh' }}
          width={1650}
          height={150}
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
        />
      ))}
    </div>
  )
}

export default ImageLoop
