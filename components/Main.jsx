import dynamic from 'next/dynamic'
import Dishes from './Dishes'
import About from './About'
import Menu from './Menu'
import Order from './Order'
import styles from '@/styles/components/Main.module.scss'

// Dynamically import components that use Swiper
const SpecialDishes = dynamic(() => import('./SpecialDishes'), {
  ssr: false
})
const Reviews = dynamic(() => import('./Reviews'), {
  ssr: false
})

function Main() {
  return (
    <main className={styles.main}>
      <SpecialDishes />
      <Dishes />
      <Menu />
      <About />
      <Reviews />
      <Order />
    </main>
  )
}

export default Main
