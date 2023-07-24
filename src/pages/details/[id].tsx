import { Layout } from '@/components/layout'
import productData from '@/data/product'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

interface Product {
  id: string
  img: string[]
  title: string
  content: string
  price: number
  color: string[]
  size: string[]
}

export default function Detail(): JSX.Element {
  const router = useRouter()
  const { id } = router.query
  const [product, setProduct] = useState<Product | null>(null)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedImg, setSelectedImg] = useState<number>(0)
  const [quantity, setQuantity] = useState<number>(1)

  const handleIncrease = () => {
    setQuantity(quantity + 1)
  }

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const handleSizeClick = (size: string) => {
    setSelectedSize(size)
  }
  const handleImgClick = (img: number) => {
    setSelectedImg(img)
  }
  useEffect(() => {
    const fetchProduct = () => {
      const selectedProduct = productData.find(
        (item: Product) => item.id === id
      )
      if (selectedProduct) {
        setProduct(selectedProduct)
      }
    }

    if (id && Array.isArray(productData)) {
      fetchProduct()
    }
  }, [id])

  if (!product) {
    return <div>Loading...</div>
  }

  return (
    <Layout>
      <div className='flex justify-center'>
        <div className={`mt-4 mx-24 flex flex-col `}>
          <Image
            src={product.img[selectedImg]}
            width={400}
            height={400}
            alt=''
          />
          <div className='flex justify-center'>
            {product.img.map((img, index) => (
              <Image
                className={`mx-2 mt-2 cursor-pointer `}
                key={index}
                src={img}
                width={50}
                height={50}
                alt=''
                onClick={() => handleImgClick(index)}
              />
            ))}
          </div>
        </div>

        <div className='mt-4 mx-24 text-left flex flex-col'>
          <h1 className='mt-10 text-3xl'>{product.title}</h1>
          <p className='text-2xl my-8'>{`￦${product.price}`}</p>
          <div className=''>
            {product.size.map((size, index) => (
              <button
                key={index}
                className={`border-2 px-2 mx-1 text-lg font-bold hover:bg-blue-500 hover:text-white ${
                  selectedSize === size ? 'bg-blue-500 text-white' : ''
                }`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <select className='my-4 border-2 border-zinc-400'>
            {product.color.map((color, index) => (
              <option key={index}>{color}</option>
            ))}
          </select>
          <div className='flex mb-4'>
            <div className='border-2 px-2 rounded-md '>
              <button className='text-2xl' onClick={handleDecrease}>
                -
              </button>
              <span className='text-2xl mx-4'>{quantity}</span>
              <button className='text-2xl' onClick={handleIncrease}>
                +
              </button>
            </div>
          </div>
          <h1 className='mb-4 text-2xl'>₩{quantity * product.price}</h1>
          <div>
            <button className=' bg-blue-400 mr-4 rounded-md w-16 h-8 font-buy text-white '>
              BUY
            </button>
            <button className=' bg-red-400 rounded-md w-16 h-8 font-buy text-white '>
              CART
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
