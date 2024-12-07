import { SearchPanel } from '../search-panel/search-panel'
import styles from './horizontal-bar.module.css'

export const HorizontalBar = () => {
    return (
        <div className={styles.panel}>
            <h1>Overview</h1>

            <div className={styles.rightSection}>
                <SearchPanel />

                <div className={styles.imgBlock}>
                    <img 
                        src="images/settings 1.png"
                    />
                </div>
                <div className={styles.imgBlock}>
                    <img 
                        src="images/002-notification-1.png"/>
                </div>
                <img 
                    src="images/prfile.png"
                    className={styles.profileImg}
                />
            </div>
        </div>
    )
}