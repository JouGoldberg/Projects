import React, { useContext } from 'react'
import styles from './orderListMenu.module.css'
import { IOrderList } from '../../Interfaces'
import { ThemeContext } from '../../Context'

interface IProps {
    setActiveOrder: any
}

const OrderListMenu = ({ setActiveOrder }: IProps) => {
    const { orderList, setOrderList, deleteListItem } = useContext<any>(ThemeContext)

    const handlePieces = (action: string, e: IOrderList) => {
        if (action == 'DEC' && e.pieces == 0) {
            deleteListItem(e)
            return;
        }
        const newList: IOrderList[] = orderList.map((item: IOrderList) => {
            if (item.id == e.id) {
                const itemPieces: boolean = item.pieces !== 0

                return action == 'DEC' ?
                    { ...item, pieces: itemPieces ? item.pieces - 1 : item.pieces, totalPrice: itemPieces ? item.totalPrice - item.price : item.totalPrice } :
                    { ...item, pieces: item.pieces + 1, totalPrice: item.totalPrice + item.price }
            }
            else {
                return item
            } 
        })
        setOrderList(newList)
    }

    const subtotal: number = orderList.reduce((sum: number, e: IOrderList) => sum += e.totalPrice, 0)
    const taxFree: number = 3.5
    const voucher: number = 0
    const total: number = subtotal + taxFree - voucher

    return (
        <div className={styles.menuRight}>
            <p className={styles.orderListTitle}>Order list</p>
            <div className={styles.orderListMenu}>
                {
                    orderList?.map((e: IOrderList, i: number) => {
                        return <div className={styles.orderListCard} key={i}>
                            <div className={styles.listCardHead}>
                                <p className={styles.listCardName}>{e.name}</p>
                                <img onClick={() => deleteListItem(e)} className={styles.listCardDelete} src="/delete.svg" alt="Delete_Icon" />
                            </div>
                            <div className={styles.listCardFoot}>
                                <div className={styles.listCardPieces}>
                                    <div onClick={() => handlePieces('DEC', e)} className={styles.piecesDec}>–</div>
                                    <p className={styles.listCardNum}>{e.pieces}</p>
                                    <div onClick={() => handlePieces('INC', e)} className={styles.piecesInc}>+</div>
                                </div>
                                <p className={styles.listCardPrice}>${e.totalPrice}</p>
                            </div>
                        </div>
                    })
                }
            </div>

            <div className={styles.voucher}>
                <p className={styles.voucherName}>Voucher Code</p>
                <form>
                    <input className={styles.voucherCodeInp} type="text" placeholder='FREETOEAT' />
                    <input onClick={(e) => e.preventDefault()} className={styles.voucherSubmit} type="submit" value='+' />
                </form>
            </div>

            <div className={styles.checkout}>
                <div className={styles.checkoutDiv}>
                    <p className={styles.checkoutName}>Subtotal</p>
                    <p className={styles.checkoutMon}>${subtotal}</p>
                </div>
                <div className={styles.checkoutDiv}>
                    <p className={styles.checkoutName}>Tax fee</p>
                    <p className={styles.checkoutMon}>${taxFree}</p>
                </div>
                <div className={styles.checkoutDiv}>
                    <p className={styles.checkoutName}>Voucher</p>
                    <p className={styles.checkoutMon}>${voucher}</p>
                </div>
                <div className={styles.checkoutDiv}>
                    <p className={styles.checkoutName}>Total</p>
                    <p className={styles.checkoutMon}>${total}</p>
                </div>
                <button onClick={() => setActiveOrder('checkout')} className={styles.checkoutBtn}>Checkout</button>
            </div>
        </div>
    )
}

export default OrderListMenu