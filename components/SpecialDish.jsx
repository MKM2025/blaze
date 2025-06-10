import styles from '@/styles/components/SpecialDish.module.scss'

function SpecialDish({ title, subtitle, description, img, isCatering }) {
  return (
    <div className={styles['special-dish']}>
      <div className={styles['special-dish__content']}>
        <span className={styles['special-dish__subtitle']}>{subtitle}</span>
        <h3 className={styles['special-dish__title']}>{title}</h3>
        {isCatering ? (
          <div className={styles['special-dish__catering']}>
            <ul className={styles['special-dish__list']}>
              <li>Birthday Parties</li>
              <li>Weddings</li>
              <li>Wedding Ring Ceremonies</li>
              <li>Mourning Gatherings</li>
              <li>And Other Special Occasions</li>
            </ul>
          </div>
        ) : (
          <p className={styles['special-dish__description']}>{description}</p>
        )}
        <a href='#order' className='button'>
          order
        </a>
      </div>
      <div className={styles['special-dish__image']}>
        <img src={img} alt={title} />
      </div>
    </div>
  )
}

export default SpecialDish
