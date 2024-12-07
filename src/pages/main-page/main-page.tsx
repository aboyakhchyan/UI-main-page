import { HorizontalBar } from '../../components/horizontal-bar/horizontal-bar'
import { MainContent } from '../../components/main-content/main-content'
import { VerticalBar } from '../../components/vertical-bar/vertical-bar'
import styles from './main-page.module.css'

export const MainPapge = () => {
    return (
        <div className={styles.main}>
                <HorizontalBar />
                <VerticalBar />
                <MainContent />
        </div>
    )
}