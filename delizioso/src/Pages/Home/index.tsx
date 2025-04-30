import React, { useEffect, useState } from 'react'
import styles from './home.module.css'
import PopularMenu from '../../Components/PopularMenu'
import { chef } from '../../Data'
import { useNavigate } from 'react-router-dom';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Home = () => {

  useEffect(() => {
    document.title = 'Delizioso | Home'
  }, [])

  const navigate = useNavigate()

  const chefLength: number = chef.length
  const [end, setEnd] = useState<number>(3)
  const hideBtn: boolean = end >= chefLength ? true : false

  return (
    <div className={styles.home}>
      <div className="container">
        <div className={styles.restaurant}>
          <div className={styles.restaurantLeft}>
            <p className={styles.restaurantHeading}>Restaurant</p>
            <h2 className={styles.restaurantTitle}>Italian <br /> Cuisine</h2>
            <p className={styles.restaurantInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Sodales senectus dictum arcu sit tristique <br /> donec eget.</p>
            <div className={styles.restaurantButtons}>
              <button onClick={() => navigate('/order')} className={styles.restaurantOrder}>Order now</button>
              <button onClick={() => navigate('/reservation')} className={styles.restaurantReservation}>Reservation</button>
            </div>
          </div>
          <div className={styles.restaurantRight}>
            <img className={styles.vegetable1} src='/restaurantVegetable.png' alt="Vegetable" />
            <img className={styles.vegetable2} src='/restaurantVegetable.png' alt="Vegetable" />
            <img className={styles.restaurantSpaghettiImg} src='/restaurantSpaghetti.png' alt="Spaghetti" />
          </div>
        </div>
      </div>

      <div className={styles.welcomeDelizioso}>
        <div className="container">
          <div className={styles.insideWelcome}>
            <div className={styles.welcomeLeft}>
              <img className={styles.leaf1} src='/leaf1.svg' alt="Leaf" />
              <img className={styles.leaf2} src='/leaf1.svg' alt="Leaf" />
              <img className={styles.saladImg} src='/salad.png' alt="Salad" />
            </div>
            <div className={styles.welcomeRight}>
              <h2 className={styles.welcomeTitle}>Welcome to <br /> <span className={styles.orange}>delizioso</span></h2>
              <p className={styles.welcomeInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing<br /> elit. Facilisis ultricies at eleifend proin. Congue nibh<br /> nulla malesuada ultricies nec quam </p>
              <button onClick={() => navigate('/menu')} className={styles.welcomeBtn}>See our menu</button>
            </div>
          </div>
        </div>
      </div>

      <PopularMenu title="Our popular menu" />

      <div className={styles.reserveTable}>
        <div className={styles.insideReserve}>
          <div className={styles.reserveLeft}>
            <div className={styles.insideLeft}>
              <img className={styles.leftImg} src="/reserveImg.jpg" alt="Reserve_Image" />
            </div>
            <div className={`${styles.reserveAbsolute} ${styles.reserveAbsolute1}`}>
              <img src="/reserveImg1.jpg" alt="Reserve_Image" />
            </div>
            <div className={`${styles.reserveAbsolute} ${styles.reserveAbsolute2}`}>
              <img src="/reserveImg2.jpg" alt="Reserve_Image" />
            </div>
          </div>
            <div className={styles.reserveRight}>
              <h2 className={styles.reserveTitle}>Let's reserve<br /> <span className={styles.orange}>a table</span></h2>
              <p className={styles.reserveInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam </p>
              <button onClick={() => navigate('/reservation')} className={styles.reserveBtn}>Reservation</button>
            </div>
          </div>
      </div>

      <div className={styles.chef}>
        <div className="container">
          <h2 className={styles.chefTitle}>Our greatest chef</h2>
          <div className={styles.cooks}>
            {
              chef.slice(0, end).map(({ image, name, job, bgColor }, i) => {
                return <div className={styles.chefCard} key={i}>
                  <img style={{ backgroundColor: bgColor }} className={styles.chefImage} src={image} alt="Chef" />
                  <p className={styles.chefName}>{name}</p>
                  <p className={styles.chefJob}>{job}</p>
                </div>
              })
            }
          </div>
          <button onClick={() => setEnd(pre => pre + 3)} className={`${hideBtn ? styles.hideBtn : ''} ${styles.chefBtn}`}>View all</button>
          <button onClick={() => setEnd(3)} className={`${!hideBtn ? styles.hideBtn : ''} ${styles.chefHideBtn}`}><FontAwesomeIcon icon={faChevronUp} /></button>
        </div>
      </div>

      {/* <div className='container'>
        <div className={styles.weAreOpen}>
          <div className={styles.insideWeAreOpen}>
            <h2 className={styles.openTitle}>we are open from</h2>
            <p className={styles.openInfo}>Monday-Sunday</p>
            <div className={styles.openTimeDiv}>
              <p className={styles.openTimeP}>Launch : Mon-Sun : 11:00am-02:00pm</p>
              <p className={styles.openTimeP}>Dinner : sunday : 04:00pm-08:00pm</p>
              <p className={styles.openTimeP}>04:00pm-09:00pm</p>
            </div>
            <div className={styles.openButtons}>
              <button onClick={() => navigate('/order')} className={styles.openOrderBtn}>Order now</button>
              <button onClick={() => navigate('/reservation')} className={styles.openReservBtn}>Reservation</button>
            </div>
          </div>
          <img className={styles.weAreOpenImg} src="/weAreOpenImg.jpg" alt="Spaghetti" />
        </div>
      </div> */}
    </div>
  )
}

export default Home