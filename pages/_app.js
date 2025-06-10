import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import dynamic from 'next/dynamic'
import '@/styles/globals.scss'

// Dynamically import components that use Swiper
const SpecialDishes = dynamic(() => import('@/components/SpecialDishes'), {
  ssr: false
})
const Reviews = dynamic(() => import('@/components/Reviews'), {
  ssr: false
})

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
