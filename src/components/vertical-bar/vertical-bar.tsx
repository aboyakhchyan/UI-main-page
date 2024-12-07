import styles from './vertical-bar.module.css'

export const VerticalBar = () => {
    return (
        <div className={styles.panel}>
            <img 
                src="images/iconfinder_vector_65_09_473792 1.png"
                className={styles.mainLogo}
            />

            <nav>
                <ul>
                    <li>
                        <img src="images/Vector.png"/>
                        <p style={{color: '#2D60FF'}}>Dashboard</p>
                    </li>
                    <li>
                        <img src="images/transfer 1.png"/>
                        <p>Orders</p>
                    </li>
                    <li>
                        <img src="images/Group.png"/>
                        <p>Products</p>
                    </li>
                    <li>
                        <img src="images/Vector (1).png"/>
                        <p>Reviews</p>
                    </li>
                    <li>
                        <img src="images/credit-card 1.png"/>
                        <p>Statistics</p>
                    </li>
                    <li>
                        <img src="images/loan 1.png"/>
                        <p>Currencies</p>
                    </li>
                    <li>
                        <img src="images/settings solid 1.png"/>
                        <p>Setting</p>
                    </li>
                </ul>
            </nav>
        </div>
    )
}