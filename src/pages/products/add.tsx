import { ChangeEvent, FormEvent, useState } from 'react'

const AddProduct = (): JSX.Element => {
  const [productName, setProductName] = useState<string>('')
  const [productPrice, setProductPrice] = useState<string>('')

  const handleProductNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value)
  }

  const handleProductPriceChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProductPrice(e.target.value)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // 상품 등록 API 호출 또는 상태 업데이트 로직 구현

    console.log('상품이 등록되었습니다!')
  }

  return (
    <div>
      <h1>상품 등록</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='product-name'>상품명</label>
          <input
            type='text'
            id='product-name'
            value={productName}
            onChange={handleProductNameChange}
          />
        </div>
        <div>
          <label htmlFor='product-price'>가격</label>
          <input
            type='text'
            id='product-price'
            value={productPrice}
            onChange={handleProductPriceChange}
          />
        </div>
        <button type='submit'>등록</button>
      </form>
    </div>
  )
}

export default AddProduct
