import { IDataList } from '../main-content/main-content'
import styles from './data-item.module.css'

interface IProps {
    item: IDataList
}
export const DataItem = ({item}: IProps) => {
    return (
        <div className={styles.container}>
            <div 
                className={styles.imgBlock}
                style={{background: item.color}}
            >
                <img src={item.urlImg}/>
            </div>

            <div className={styles.textContent}>
                <p>{item.name}</p>
                <h3>{item.content}</h3>
            </div>
        </div>
    )
}

