import styles from './table.products.module.css'

interface IProducts {
    id: string
    name: string
    price: number
    quantity: number
}

export const TableProducts = () => {

    const products: IProducts[] = [
        {id: '01.', name: 'Trivago', price: 520, quantity: 100},
        {id: '02.', name: 'Canon', price: 480, quantity: 50},
        {id: '03.', name: 'Uber Food', price: 350, quantity: 100},
        {id: '04.', name: 'Nokia', price: 940, quantity: 30},
        {id: '05.', name: 'Tiktok', price: 670, quantity: 100}
    ]

    return (
        <div className={styles.tableContainer}>
                <h2>Most selling products</h2>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(prod => 
                                    <tr key={prod.id}>
                                        <td>{prod.id}</td>
                                        <td>{prod.name}</td>
                                        <td>{prod.price}</td>
                                        <td>{prod.quantity}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
        </div>
    )
}