import React, { useContext, useState } from 'react'
import styles from './navbar.module.css'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { ThemeContext } from '../../Context'
import { IOrderList } from '../../Interfaces'

const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const { orderList } = useContext<any>(ThemeContext)
    const orderListLength: number = orderList.reduce((sum: number, e: IOrderList) => sum += e.pieces, 0)

    const [isOpen, setIsOpen] = useState<boolean>(false)

    window.addEventListener('resize', () => {
        if(window.innerWidth >= 1250) {
            setIsOpen(false)
        }
    })

    return (
        <div>
            <div className={styles.navbar}>
                <div className="container">
                    <div className={styles.insideNavbar}>
                        <div className={styles.logo}>
                            <img src='/logo.svg' alt="Logo" />
                            <Link className={styles.logoLink} to='/'></Link>
                        </div>
                        <div className={styles.navLinks}>
                            <NavLink className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.navLink}`} to='/'>Home</NavLink>
                            <NavLink className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.navLink}`} to='/menu'>Menu</NavLink>
                            <NavLink className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.navLink}`} to='/about'>About us</NavLink>
                            <NavLink className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.navLink}`} to='/order'>Order online</NavLink>
                            <NavLink className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.navLink}`} to='/reservation'>Reservation</NavLink>
                            <NavLink className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.navLink}`} to='/contact'>Contact us</NavLink>
                        </div>
                        <div className={styles.navEnd}>
                            <div onClick={() => location.pathname !== '/order' ? navigate('/order') : null} className={styles.basketImgDiv}>
                                {
                                    orderListLength ?
                                        <p className={styles.basketNum}>{orderListLength}</p> : null
                                }
                                <img className={styles.basketImg} src='/basket.svg' alt="Basket_Image" />
                            </div>
                            <Link className={styles.loginLink} to='/login'>Log in</Link>
                            <img onClick={() => setIsOpen(true)} className={styles.navMenuIcon} src="/navMenu.svg" alt="Menu_Icon" />
                        </div>
                    </div>
                </div>
            </div>
            {
                isOpen ?
                    <div onClick={() => setIsOpen(false)} className={styles.resNav}>
                        <div className="container">
                            
                        </div>
                    </div> : null
            }
        </div>
    )
}

export default Navbar