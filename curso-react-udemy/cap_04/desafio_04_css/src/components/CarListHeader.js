import styles from './CarList.module.css'

const CarListHeader = () => (
    <thead>
        <tr className={styles.head}>
            <th className={styles.pad}>Id</th>
            <th className={styles.pad}>Montadora</th>
            <th className={styles.pad}>Modelo</th>
            <th className={styles.pad}>Ano</th>
        </tr>
    </thead>
)

export default CarListHeader