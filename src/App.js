import Car from "./components/Car.js"
import './App.css';

function App() {
  const cars= [
    {modelo:"Civic",cor:"Cinza", marca:"Honda"},
    {modelo:"Lancer",cor: "Prata", marca:"Mitsubshi"},
    {modelo:"Golf",cor:"Vermelho", marca:"VW"},
    {modelo:"Azira",cor:"Preto", marca:"Hyundai"},
  ]
   

  return (
    <div className="App">

    <h1>Lista de carros:</h1>
    <div className="car-container">
      {cars.map((car)=>(
        <Car car={car}/>
      ))}
      </div>
    </div>
  );
}

export default App;
