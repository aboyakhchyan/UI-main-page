import styles from './search-panel.module.css'


export const SearchPanel = () => {
    return (
        <div className={styles.searchPanel}>
            <input 
                type="text"
                placeholder='Search for something'
                className={styles.searchInput}
            />
            <img 
                src="images/search.png"
                className={styles.searchImg}
            />
        </div>
    )
} 