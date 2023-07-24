interface PRODUCTS {
  id: string
  sex: string
  category: string
  thumbnail: string[]
  img: string[]
  title: string
  content: string
  price: number
  color: string[]
  size: string[]
}

const productData: PRODUCTS[] = [
  {
    id: '1',
    sex: 'male',
    category: 'top',
    thumbnail: ['/assets/top/male/g_cardigan.webp'],
    img: ['/assets/top/male/g_cardigan.webp'],
    title: '그레이 가디건',
    content: '회색 가디건입니다',
    price: 30000,
    color: ['Gray'],
    size: ['S', 'M', 'L', 'XL', 'XXL'],
  },

  {
    id: '2',
    sex: 'male',
    category: 'top',
    thumbnail: ['/assets/top/male/orc_reaf_t_bl.webp'],
    img: [
      '/assets/top/male/orc_reaf_t_bl.webp',
      '/assets/top/male/orc_reaf_t_wb.webp',
      '/assets/top/male/orc_reaf_t_o.webp',
    ],
    title: '오크 리프 오버사이즈 티셔츠',
    content: '여름에 입기 좋은 티셔츠 입니다',
    price: 30000,
    color: ['Blue', 'White&Black', 'Orange'],
    size: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: '3',
    sex: 'female',
    category: 'top',
    thumbnail: ['/assets/top/female/2A85W423P.08GC_1_SUM23.webp'],
    img: [
      '/assets/top/female/2A85W423P.08GC_1_SUM23.webp',
      '/assets/top/female/2A85W423P.38NO_1_SUM22_V2.webp',
    ],
    title: 'CELINE 후드티셔츠',
    content: '깔끔한 남여 공용 후드',
    price: 30000,
    color: ['Gray', 'Black'],
    size: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: '4',
    sex: 'any',
    category: 'bag',
    thumbnail: ['/assets/bag/126540760_M_350.jpg'],
    img: [
      '/assets/bag/126540760_01_350.jpg',
      '/assets/bag/126540760_02_350.jpg',
      '/assets/bag/126540760_03_350.jpg',
      '/assets/bag/126540760_04_350.jpg',
    ],
    title: '캉골 럭키 미니 크로스백',
    content: '누구나 메기 좋은 사이즈의 크로스백',
    price: 45000,
    color: ['Black', 'green', 'White', 'Purple'],
    size: [],
  },

  {
    id: '5',
    sex: 'any',
    category: 'bag',
    thumbnail: ['/assets/bag/126383500_M_350.jpg'],
    img: [
      '/assets/bag/126383500_01_350.jpg',
      '/assets/bag/126383500_02_350.jpg',
      '/assets/bag/126383500_03_350.jpg',
    ],
    title: '캉골 아이콘 메신저백',
    content: '캐주얼 하게 메기 좋은 가방입니다',
    price: 97000,
    color: ['Black', 'White', 'Ivori'],
    size: [],
  },
  {
    id: '6',
    sex: 'male',
    category: 'bottom',
    thumbnail: ['/assets/bottom/BLD2PH3505BK_M.jpg'],
    img: [
      '/assets/bottom/BLD2PH3505BK_M.jpg',
      '/assets/bottom/BLD2PH3505GN_M.jpg',
      '/assets/bottom/BLD2PH3505OR_M.jpg',
    ],
    title: '유니버스 나일론 슬릿 밴딩 팬츠',
    content: '편하게 입기 좋은 반바지',
    price: 8900,
    color: ['Black', 'Green', 'Orange'],
    size: [],
  },

  {
    id: '7',
    sex: 'any',
    category: 'bottom',
    thumbnail: ['/assets/bottom/BLD2PP1003BE_M.jpg'],
    img: [
      '/assets/bottom/BLD2PP1003BE_M.jpg',
      '/assets/bottom/BLD2PP1003BK_M.jpg',
      '/assets/bottom/BLD2PP1003KH_M.jpg',
    ],
    title: '슬림핏 사이드 밴딩 쿨링 팬츠',
    content: '캐주얼 한 정장 바지',
    price: 19900,
    color: ['BE', 'BK', 'KH'],
    size: [],
  },
]

export default productData
