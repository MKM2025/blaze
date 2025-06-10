import { Autoplay, Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import SpecialDish from './SpecialDish'
import specialDishes from '@/utils/specialDishes'
import styles from '@/styles/components/SpecialDishes.module.scss'
import { useEffect, useState } from 'react'
import classNames from 'classnames'

function SpecialDishes() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <section className={styles.home} id='home'>
      <Swiper
        key='home-swiper'
        className={styles.swiper}
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false
        }}
        pagination={{
          el: '.swiper-pagination',
          dynamicBullets: true,
          clickable: true
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        loop={true}
        wrapperClass='swiper-wrapper'
      >
        {specialDishes.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <SpecialDish {...item} />
            </SwiperSlide>
          )
        })}
        <div className='swiper-pagination' />
        <div className={classNames('swiper-button-prev', styles['swiper-button-prev'])} />
        <div className={classNames('swiper-button-next', styles['swiper-button-next'])} />
      </Swiper>
    </section>
  )
}

export default SpecialDishes
