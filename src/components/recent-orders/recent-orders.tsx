import styles from './recent-orders.module.css'

export const RecentOrders = () => {
    return (
            <div className={styles.container}>
                <h2>Recent Orders</h2>
                <div className={styles.ordersContainer}>
                <div className={styles.containerList}>
                    <div className={styles.imgBlock} style={{background:  '#FFF5D9'}}>
                        <img src="./images/iconfinder_business_finance_money-13_2784281 1.png"/>
                    </div>
                    <div className={styles.textBlock}>
                        <p className={styles.textHigh}>Deposit from my Card</p>
                        <p className={styles.textLow}>28 January 2021</p>
                    </div>
                    <strong style={{color: '#FF4B4A'}}>-$850</strong>
                </div>
                <div className={styles.containerList}>
                    <div className={styles.imgBlock} style={{background: '#E7EDFF'}}>
                        <img src="./images/iconfinder_paypal_payment_pay_5340264 1.png"/>
                    </div>
                    <div className={styles.textBlock}>
                        <p className={styles.textHigh}>Desposit Paypal</p>
                        <p className={styles.textLow}>25 January 2021</p>
                    </div>
                    <strong style={{color: '#41D4A8'}}>+$2,500</strong>
                </div>
                <div className={styles.containerList}>
                    <div className={styles.imgBlock} style={{background: '#DCFAF8'}}>
                        <img src="./images/iconfinder_6_4753731 1.png"/>
                    </div>
                    <div className={styles.textBlock}>
                        <p className={styles.textHigh}>Jemi Wilson</p>
                        <p className={styles.textLow}>21 January 2021</p>
                    </div>
                    <strong style={{color: '#41D4A8'}}>+$5,400</strong>
                </div>
            </div>
        </div>
    )
}