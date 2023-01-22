import styles from "./Car.module.css"

const Car = ({car})=>{
    return(
        <div className= {styles.card} >
            <ul>
                <h1>{car.modelo}</h1>
                <li>Cor: {car.cor}</li>
                <li>Marca: {car.marca}</li>
            </ul>
        </div>
    )
}

export default Car;