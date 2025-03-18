import React from 'react'
import styles from './footer.module.css'
import { useLocation } from 'react-router-dom'

const Footer = () => {
  const location = useLocation()
  const marginTop = location.pathname == '/contact' ? '0px' : "130px"
  return (
    <div style={{marginTop:marginTop}} className={styles.footer}>
      <div className="container">
        <div className={styles.insideFooter}>
          <div className={styles.footerRight}>
            <img className={styles.columnLogo} src="/logo2.svg" alt="Logo" />
            <p className={styles.columnInfo}>Viverra gravida morbi egestas <br /> facilisis tortor netus non duis <br /> tempor.</p>
            <div className={styles.sosialNetworks}>
              <img className={styles.sosialNetImg} src="/twitter.svg" alt="Twitter" />
              <img className={styles.sosialNetImg} src="/instagram.svg" alt="Instagram" />
              <img className={styles.sosialNetImg} src="/facebook.svg" alt="Facebook" />
            </div>
          </div>
          <div className={styles.footerLeft}>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Page</h3>
              <p className={styles.columnLink}>Home</p>
              <p className={styles.columnLink}>Menu</p>
              <p className={styles.columnLink}>Order online</p>
              <p className={styles.columnLink}>Catering</p>
              <p className={styles.columnLink}>Reservation</p>
            </div>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Information</h3>
              <p className={styles.columnLink}>About us</p>
              <p className={styles.columnLink}>Testimonial</p>
              <p className={styles.columnLink}>Event</p>
            </div>
            <div className={styles.column}>
              <h3 className={styles.columnTitle}>Get in touch</h3>
              <p className={styles.columnLink}>3247 Johnson Ave, Bronx, NY <br /> 10463, Amerika Serikat</p>
              <p className={styles.columnLink}>delizioso@gmail.com</p>
              <p className={styles.columnLink}>+123 4567 8901</p>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.footP}>Copyright © 2022 Delizioso</p>
    </div>
  )
}

export default Footer