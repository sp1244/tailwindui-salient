import { Footer } from '@/components/Footer'
import Header from './Header'

export function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
