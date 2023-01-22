const Cars = ({modelo, cor, marca})=>{
    return(
        <div className="listCars" >
            <ul>
                <li>Modelo: {modelo}</li>
                <li>Cor: {cor}</li>
                <li>Marca: {marca}</li>
            </ul>
        </div>
    )
}

export default Cars;