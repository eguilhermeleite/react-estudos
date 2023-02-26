import styles from './CarList.module.css'

const CarList = (props) => (
    <tbody>
        {/* map funciona como um loop */}
        {props.car.map((car) => (
            <tr key={car.id}>
                <td className={styles.pad}>{car.id}</td>
                <td className={styles.pad}>{car.assembler}</td>
                <td className={styles.pad}>{car.model}</td>
                <td className={styles.pad}>{car.year}</td>

            </tr>
        ))}
    </tbody>
)

export default CarList