import React, { useContext, useEffect, useState } from 'react'
import styles from './popularMenu.module.css'
import { menuTabs, popularMenu } from '../../Data'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { IMenuItem, TOrderList } from '../../Interfaces'
import Pagination from '../Pagination'
import { ThemeContext } from '../../Context'

interface IProps {
    title: string
}

const PopularMenu = (props: IProps) => {
    const navigate = useNavigate()
    const location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams()

    const { resize, addOrderList } = useContext(ThemeContext)
    const menuItem: string = searchParams.get('menuItem') || 'dinner'

    const showMenuItem: number = 6
    const [activeMenuPage, setActiveMenuPage] = useState<number>(1)
    const startMenuItem: number = activeMenuPage * showMenuItem - showMenuItem
    const endMenuItem: number = activeMenuPage * showMenuItem

    const showMenu: IMenuItem[] | null = popularMenu[menuItem as keyof typeof popularMenu] || null

    const handleMenuItem = (item: string): void => {
        setSearchParams({ menuItem: item.toLowerCase() })
        setActiveMenuPage(1)
    }

    const handleOrder = ({ name, image, desc, price, id }: TOrderList) => {
        addOrderList({ name, image, desc, price, id })
        navigate('/order')
    }

    useEffect(() => {
        setActiveMenuPage(1)
    }, [menuItem])

    const marginTop: string = location.pathname == '/menu' ? '3.9vw' : 'clamp(22.5px, 3.85vw , 3.85vw)'

    return (
        <div style={{ marginTop: marginTop }} className={styles.popularMenu}>
            <div className="container">
                <h2 className={styles.title}>{props.title}</h2>
            </div>
            <div className={resize > 650 ? 'container' : ''}>
                <div className={styles.menuTabs}>
                    {
                        menuTabs.map((e, i) => {
                            return <p onClick={() => handleMenuItem(e)} className={`${menuItem == e.toLowerCase() ? styles.activeItem : ''} ${styles.menuItem}`} key={i}>{e}</p>
                        })
                    }
                </div>
            </div>
            <div className="container">
                <div className={styles.menu}>
                    {
                        showMenu ?
                            showMenu.slice(startMenuItem, endMenuItem).map(({ name, image, desc, price, id }) => {
                                return <div title={name} className={styles.menuCard} key={id}>
                                    <img className={styles.cardImage} src={image} />
                                    <p className={styles.cardName}>{name}</p>
                                    <p className={styles.cardDesc}>{desc}</p>
                                    <div className={styles.cardFoot}>
                                        <p className={styles.cardPrice}>${price}</p>
                                        <button onClick={() => handleOrder({ name, image, desc, price, id })} className={styles.cardOrder}>{resize > 650 ? 'Order now' : '+'}</button>
                                    </div>
                                </div>
                            }) :
                            <div></div>
                    }
                </div>

                <Pagination
                    activeMenuPage={activeMenuPage}
                    setActiveMenuPage={setActiveMenuPage}
                    data={showMenu}
                    showMenuItem={showMenuItem}
                />

            </div>
        </div>
    )
}

export default PopularMenu