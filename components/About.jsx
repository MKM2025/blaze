import styles from '@/styles/components/About.module.scss'

function About() {
  return (
    <section className={styles.about} id='about'>
      <h3 className='sub-heading'>about us</h3>
      <h1 className='heading'>Why Choose Us?</h1>

      <div className={styles.about__row}>
        <div className={styles.about__image}>
          <img src='images/about-img.png' alt='' />
        </div>

        <div className={styles.about__content}>
          <h3 className={styles.about__title}>Exceptional Food, Unbeatable Value in Addis</h3>
          <p className={styles.about__description}>
            Blaze Addis is conveniently located at 24 Kebele, Megenagna—just minutes from the new Addis Ababa Stadium. We specialize in:
          </p>
          <ul className={styles['about__list']}>
            <li>Fast food & traditional Ethiopian cuisine</li>
            <li>Fresh in-house bakery & pastries</li>
            <li>Premium catering services with gourmet ingredients</li>
          </ul>

          <h3 className={styles.about__title}>Experience Our Space</h3>
          <ul className={styles['about__list']}>
            <li>Spacious versatile layout accommodating 60+ guests for special events</li>
            <li>Vibrant lounge atmosphere with cool ambiance and curated music</li>
            <li>Perfect for all occasions: intimate dinners to large celebrations</li>
          </ul>

          <h3 className={styles.about__title}>Our Quality Commitment</h3>
          <ul className={styles['about__list']}>
            <li><i className="fas fa-check-circle"></i> Healthy oils in all dishes</li>
            <li><i className="fas fa-check-circle"></i> 100% teff injera baked daily on-site</li>
            <li><i className="fas fa-check-circle"></i> Artisan bakery prepared fresh daily</li>
            <li><i className="fas fa-check-circle"></i> Expert chefs crafting memorable flavors</li>
          </ul>

          <h3 className={styles.about__title}>Convenience Redefined</h3>
          <ul className={styles['about__list']}>
            <li>Effortless takeaway with quick pickup</li>
            <li>Central location with easy access</li>
            <li>Professional event hosting services</li>
          </ul>

          <div className={styles.about__container}>
            <div className={styles.about__icon}>
              <i className='fas fa-dollar-sign'></i>
              <span>Good Price</span>
            </div>
            <div className={styles.about__icon}>
              <i className='fas fa-leaf'></i>
              <span>Healthy Foods</span>
            </div>
            <div className={styles.about__icon}>
              <i className='fas fa-map-marker-alt'></i>
              <span>Good Location</span>
            </div>
            <div className={styles.about__icon}>
              <i className='fas fa-ruler-combined'></i>
              <span>Spacious Space</span>
            </div>
            <div className={styles.about__icon}>
              <i className='fas fa-music'></i>
              <span>Nice Music</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
