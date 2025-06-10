import styles from '@/styles/components/Footer.module.scss'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__column}>
          <h3 className={styles.title}>locations</h3>
          <a href='#' className={styles.footer__link}>
            24 Kebele, Near the New Adey Ababa Stadium Addis Ababa, Ethiopia
          </a>
        </div>
        <div className={styles.footer__column}>
          <h3 className={styles.title}>quick links</h3>
          <a href='#' className={styles.footer__link}>
            home
          </a>
          <a href='#' className={styles.footer__link}>
            dishes
          </a>
          <a href='#' className={styles.footer__link}>
            about
          </a>
          <a href='#' className={styles.footer__link}>
            menu
          </a>
          <a href='#' className={styles.footer__link}>
            reivew
          </a>
          <a href='#' className={styles.footer__link}>
            order
          </a>
        </div>
        <div className={styles.footer__column}>
          <h3 className={styles.title}>contact info</h3>
          <a href='tel:+251704404115' className={styles.footer__link}>
            +251 - 704 - 404115
          </a>
          <a href='tel:+251933232425' className={styles.footer__link}>
            +251 - 933-232425
          </a>
        </div>
        <div className={styles.footer__column}>
          <h3 className={styles.title}>follow us</h3>
          <a href='https://www.tiktok.com/@blaze_addis' target='_blank' rel='noopener noreferrer' className={styles.footer__link}>
            <span className={styles.tiktokIcon}><i className="fa-brands fa-tiktok"></i></span> Tiktok @blaze_addis
          </a>
        </div>
      </div>
      <div className={styles.footer__credit}>
        Copyright @ 2023 By Blaze Addis
      </div>
    </footer>
  )
}

export default Footer
