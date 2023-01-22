import Cars from "./components/Cars.js"
import './App.css';

function App() {
  const cars= [
    {id: 1, modelo:"Civic",cor:"Cinza", marca:"Honda"},
    {id: 2, modelo:"Lancer",cor: "Prata", marca:"Mitsubshi"},
    {id: 3, modelo:"Golf",cor:"Vermelho", marca:"VW"},
    {id: 4, modelo:"Azira",cor:"Preto", marca:"Hyundai"},
  ]
   

  return (
    <div className="App">
    <h1 className="cars" >Lista de carros:</h1>

      {cars.map((car)=>(
        <Cars key={car.id} modelo={car.modelo} cor={car.cor} marca={car.marca} />
      ))}
    </div>
  );
}

export default App;
