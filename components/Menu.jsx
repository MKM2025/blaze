import menuCategories from '@/utils/menuDishList'
import styles from '@/styles/components/Menu.module.scss'
import classNames from 'classnames'
import { useRef, useEffect, useState } from 'react'

function Menu() {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true)
      },
      {
        threshold: 0.1
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      className={classNames(styles.menu, { [styles['in-view']]: inView })}
      id='menu'
      ref={sectionRef}
    >
      <h1 className='heading'>our menu</h1>
      
      <div className={styles.menu__container}>
        {menuCategories.map((category) => (
          <div
            key={category.id}
            className={classNames(styles['menu__category'], {
              [styles['menu__category--full-width']]: category.id === '12' || category.id === '14'
            })}
          >
            <h2 className={styles['menu__category-title']}>{category.title}</h2>
            <div className={styles['menu__category-image']}>
              <img src="/placeholder.jpg" alt={category.title} />
            </div>
            <ul className={styles['menu__item-list']}>
              {category.items.map((item, index) => (
                <li key={index} className={styles['menu__item']}>
                  <span className={styles['menu__item-name']}>{item.name}</span>
                  {item.price !== null && item.price !== undefined && (
                    <span className={styles['menu__item-price']}>{`Birr${item.price.toFixed(2)}`}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Menu
