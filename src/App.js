import {useState} from "react"
import Datos from "./componentes/axiosComponent"
import Ingreso from "./componentes/ingeso"
import BaseDatos from "./componentes/postgresDB"



function App() {
  const [consultaABuscar, setConsultaABuscar] = useState("")
  
  return (
    <div>
      <h3>Ingrese su busqueda: </h3>
      <Ingreso modificarTexto={ (texto) => setConsultaABuscar(texto)}/>
      <Datos consulta={consultaABuscar}/>
      <br></br>
      <BaseDatos objeto={()=> objetoLocal(consulta)}/>
    </div>
  );
}

export default App;
