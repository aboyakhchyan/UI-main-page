import { useState } from 'react'
import { DataItem } from '../data-item/data-item'
import { GraphActivity } from '../graph-activity/graph-activity'
import { GraphStatistics } from '../graph-statistics/graph-statistics'
import { RecentOrders } from '../recent-orders/recent-orders'
import { TableProducts } from '../table-products/table-products'
import styles from './main-content.module.css'

export interface IDataList {
    name: string
    color: string
    urlImg: string
    content: number
}
export const MainContent = () => {

    const [dataList, setDataList] = useState<IDataList[]>([
        {name: 'Products', color: '#FFF5D9', urlImg: 'images/Group (1).png', content: 2_300_300},
        {name: 'Orders', color: '#E7EDFF', urlImg: 'images/Group (2).png', content: 3_000},
        {name: 'Revanue', color: '#FFE0EB', urlImg: 'images/001-medical.png', content: 3_460},
        {name: 'Total Saving', color: '#DCFAF8', urlImg: 'images/003-saving.png', content: 7_920}
    ])

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.highLevel}>
                    <TableProducts />
                    <RecentOrders />
                </div>

                <div className={styles.middleLevel}>
                    <GraphActivity />
                    <GraphStatistics />
                </div>

                <div className={styles.lowLevel}>
                    {
                        dataList.map((item, index) => <DataItem 
                                                            key={index}
                                                            item={item}
                                                        />)
                    }
                </div>
            </div>
        </main>
    )
}