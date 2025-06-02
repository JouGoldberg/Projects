import React, { useContext, useState } from 'react'
import styles from './navbar.module.css'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { ThemeContext } from '../../Context'
import { IOrderList } from '../../Interfaces'
import { links } from '../../Data'

const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const { orderList } = useContext<any>(ThemeContext)
    const orderListLength: number = orderList.reduce((sum: number, e: IOrderList) => sum += e.pieces, 0)

    const [isOpen, setIsOpen] = useState<boolean>(false)

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1250) {
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
                            {
                                links.map(({ href, title }, i) => {
                                    return <NavLink key={i} className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.navLink}`} to={href}>{title}</NavLink>
                                })
                            }
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
                            <img onClick={() => setIsOpen(pre => !pre)} className={styles.navMenuIcon} src="/navMenu.svg" alt="Menu_Icon" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${isOpen ? styles.resOpen : styles.resClose} ${styles.resNav}`}>
                <div>
                    <div className={styles.resNavLogo}>
                        <img src='/logo.svg' alt="Logo" />
                        <Link className={styles.logoLink} to='/'></Link>
                    </div>

                    <div className={styles.resNavLinks}>
                        {
                            links.map(({ title, href }, i) => {
                                return <NavLink key={i} className={({ isActive }) => `${isActive ? styles.active : ''} ${styles.navLink}`} to={href}>{title}</NavLink>
                            })
                        }
                    </div>

                </div>
                <div className={styles.resNavBtns}>
                    <button onClick={() => navigate('/login')} className={styles.loginBtn}>Log in</button>
                    <button onClick={() => navigate('/register')} className={styles.signBtn}>Sign up</button>
                </div>
            </div>
            {
                isOpen && <div onClick={() => setIsOpen(false)} className={styles.resNavO}></div>
            }
        </div>
    )
}

export default Navbar