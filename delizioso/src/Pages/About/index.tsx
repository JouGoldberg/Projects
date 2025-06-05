import React, { useContext, useEffect } from 'react'
import styles from './about.module.css'
import { ThemeContext } from '../../Context'

const About = () => {
  useEffect(() => {
    document.title = 'Delizioso | About us'
  }, [])

  return (
    <div className={styles.about}>
      <div className={styles.aboutHead}>
        <div className={styles.aboutHeadLeft}>
          <div className={styles.headLeftInside}>
            <img className={styles.headLeftInsideImg} src="/aboutImg1.jpg" alt="About Image" />
          </div>
        </div>
        <div className={styles.aboutHeadRight}>
          <h1 className={styles.aboutRightTitle}><span className={styles.orange}>Our</span> restaurant</h1>
          <p className={styles.aboutRightInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
        </div>
      </div>

      <div className={styles.aboutMainEnd}>
        <div className={styles.aboutMain}>
          <div className={styles.aboutMainLeft}>
            <p className={styles.aboutMainLeftInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
          </div>
          <div className={styles.aboutMainRight}>
            <div className={styles.headLeftInside}>
              <img className={styles.headLeftInsideImg} src="/aboutImg2.jpg" alt="About Image" />
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className={styles.executiveChef}>
          <div className={styles.executiveChefLeft}>
            <img src="/aboutImg3.jpg" alt="Chef" />
          </div>
          <div className={styles.executiveChefRight}>
            <h1><span className={styles.orange}>Owner</span> &<br /> Executive Chef</h1>
            <p className={styles.chefName}>Ismail Marzuki</p>

            <div className={styles.executiveChefRightFoot}>
              <img src="/aboutIcon.svg" alt="Icon" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <div className={styles.icon2Div}>
                <img className={styles.icon2} src="/aboutIcon.svg" alt="Icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About