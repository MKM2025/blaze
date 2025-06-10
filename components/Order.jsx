import classNames from 'classnames'
import styles from '@/styles/components/Order.module.scss'
import { useRef, useEffect, useState } from 'react'

function Order() {
  const sectionRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
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
      className={classNames(styles.order, { [styles['in-view']]: inView })}
      id='order'
      ref={sectionRef}
    >
      <h3 className='sub-heading'>order now</h3>
      <h1 className='heading'>Call Us Now!</h1>
      <div className={styles.contactInfo}>
        <div className={styles.contactItem}>
          <i className="fas fa-phone"></i>
          <span>+251 - 704 - 404115</span>
        </div>
        <div className={styles.contactItem}>
          <i className="fas fa-phone"></i>
          <span>+251 - 933-232425</span>
        </div>
      </div>
    </section>
  )
}

export default Order
