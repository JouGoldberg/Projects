import React, { createContext, useEffect, useState } from "react";
import { IOrderList, TOrderList } from "../Interfaces";

export const ThemeContext = createContext<any>(null)

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [orderList, setOrderList] = useState<IOrderList[]>([])

    const deleteListItem = (e: IOrderList) => {
        const newList: IOrderList[] = orderList.filter((item: IOrderList) => item.id !== e.id)
        setOrderList(newList)
    }

    const addOrderList = ({ name, image, desc, price, id }: TOrderList) => {
        const newObj: IOrderList = {
            id,
            name,
            image,
            desc,
            price,
            pieces: 1,
            totalPrice: price
        }

        const inspectionOrderList: 0 | undefined | IOrderList = orderList.length && orderList.find((item: IOrderList) => item.id == newObj.id)

        if (inspectionOrderList) {
            const newList: IOrderList[] = orderList.map((e: IOrderList) => (
                e.id == newObj.id ?
                    { ...e, pieces: e.pieces + 1, totalPrice: e.totalPrice + e.price } : e
            ))
            setOrderList(newList)
        }
        else {
            setOrderList([newObj, ...orderList])
        }
    }

    const [resize, setResize] = useState<number>(window.innerWidth)

    const handleResize = () => {
        setResize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    useEffect(() => {
        handleResize()
    }, [])

    return (
        <ThemeContext.Provider value={{ orderList, setOrderList, addOrderList, deleteListItem, resize }}>
            {children}
        </ThemeContext.Provider>
    )
}