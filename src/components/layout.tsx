import Banner from './banner'
import Navbar from './navbar'

interface LayoutPorops {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutPorops> = ({ children }) => {
  return (
    <div>
      <Banner />
      <Navbar />
      {children}
    </div>
  )
}
