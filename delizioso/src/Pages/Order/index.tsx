import React, { useEffect, useState } from 'react'
import styles from './order.module.css'
import { menuTabs, pizzaMenu, popularMenu } from '../../Data'
import { useSearchParams } from 'react-router-dom'
import { IMenuItem } from '../../Interfaces'
import OrderListData from '../../Components/OrderListData'
import OrderListMenu from '../../Components/OrdrListMenu'
import Checkout from '../../Components/Checkout'


const Order = () => {
  useEffect(() => {
    document.title = 'Delizoso | Order online'
  }, [])
  const [searchParams, setSearchParams] = useSearchParams()

  const menuItem: string = searchParams.get('menuItem') || 'lunch'
  const showMenu: IMenuItem[] | null = popularMenu[menuItem as keyof typeof popularMenu] || null

  const handleMenuItem = (item: string): void => {
    setSearchParams({ menuItem: item.toLowerCase() })
  }

  const [activeOrder, setActiveOrder] = useState<string>('order')

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeOrder]);

  return (
    <div className={styles.order}>
      {activeOrder == 'order' &&
        <div className="container">
          <h2 className={styles.title}>Menu</h2>
          <div className={styles.menuTabs}>
            {
              menuTabs.map((e, i) => {
                return <p onClick={() => handleMenuItem(e)} className={`${menuItem == e.toLowerCase() ? styles.activeItem : ''} ${styles.menuItem}`} key={i}>{e}</p>
              })
            }
          </div>
          <p className={styles.menuName}>PASTA</p>
          <div className={styles.menu}>
            <div className={styles.allMenuLeft}>
              <OrderListData data={showMenu} />
              <p className={`${styles.menuName} ${styles.pizzaMenuName}`}>PIZZA</p>
              <OrderListData data={pizzaMenu} />
            </div>
            <div className={styles.menuRightW}>
              <OrderListMenu setActiveOrder={setActiveOrder} />
            </div>
          </div>
        </div>
      }
      {
        activeOrder == 'checkout' && <Checkout setActiveOrder={setActiveOrder} />
      }
      {
        activeOrder == 'orderList' && <OrderListMenu setActiveOrder={setActiveOrder} />
      }
    </div>
  )
}

export default Order