import React, { useMemo } from 'react'
import styles from './pagination.module.css'

interface IPagination {
    activeMenuPage: number
    setActiveMenuPage: any
    data: any
    showMenuItem: number
}

const Pagination = ({ activeMenuPage, setActiveMenuPage, data, showMenuItem }: IPagination) => {

    const panigation: null | number = useMemo(() => {
        const totalLength: null | number = data && Math.ceil(data.length / showMenuItem)
        return totalLength
    }, [data])
    
    return (
        <div className={styles.panigation}>
            {
                panigation ?
                    <div className={styles.insidePanigation}>
                        <button onClick={() => setActiveMenuPage((pre: number) => pre - 1)} disabled={1 == activeMenuPage} className={styles.navBtn}>«</button>
                        {
                            Array.from({ length: panigation }).map((_, i) => {
                                return <p onClick={() => setActiveMenuPage(i + 1)} className={`${activeMenuPage == (i + 1) ? styles.activeMenuPage : ''} ${styles.panigationNum}`} key={i}>{i + 1}</p>
                            })
                        }
                        <button onClick={() => setActiveMenuPage((pre: number) => pre + 1)} disabled={panigation == activeMenuPage} className={styles.navBtn}>»</button>
                    </div> :
                    <div></div>
            }
        </div>
    )
}

export default Pagination