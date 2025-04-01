import React, { useContext, useEffect, useState } from 'react'
import styles from './orderListData.module.css'
import { IMenuItem } from '../../Interfaces'
import { ThemeContext } from '../../Context'
import Pagination from '../Pagination'
import { useSearchParams } from 'react-router-dom'

interface IProps {
    data: IMenuItem[] | null
}

const OrderListData = ({ data }: IProps) => {
    const [searchParams] = useSearchParams()
    const { addOrderList } = useContext<any>(ThemeContext)

    const showMenuItem: number = 6
    const [activeMenuPage, setActiveMenuPage] = useState<number>(1)
    const startMenuItem: number = activeMenuPage * showMenuItem - showMenuItem
    const endMenuItem: number = activeMenuPage * showMenuItem
    
    useEffect(() => {
        setActiveMenuPage(1)
    }, [searchParams.get('menuItem')])

    const [key,setKey] = useState<any>(Math.random())

    useEffect(() => {
        setKey(Math.random())
    },[data,activeMenuPage])

    return (
        <div>
            <div className={styles.menuLeft}>
                {
                    data ?
                        data.slice(startMenuItem, endMenuItem).map(({ name, image, desc, price, id }, i) => {
                            return <div title={name} className={styles.menuCard} key={i}>
                                <img key={key} className={styles.cardImage} src={image} />
                                <p className={styles.cardName}>{name}</p>
                                <p className={styles.cardDesc}>{desc}</p>
                                <div className={styles.cardFoot}>
                                    <p className={styles.cardPrice}>${price}</p>
                                    <p onClick={() => addOrderList({ name, image, desc, price, id })} className={styles.cardOrder}>+</p>
                                </div>
                            </div>
                        }) :
                        <div></div>
                }
            </div>
            <Pagination
                activeMenuPage={activeMenuPage}
                setActiveMenuPage={setActiveMenuPage}
                data={data}
                showMenuItem={showMenuItem}
            />
        </div>
    )
}

export default OrderListData