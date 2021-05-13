import axios from "axios"
import {useState} from "react" 

const Datos = (parametro) => {

    const [objetoDolar, setObjetoDolar] = useState("")
    const [consulta, setConsulta] = useState("")
    //console.log("parametro",parametro)

    const clickEnElBoton = () =>{
        const urlBase = 'https://api-dolar-argentina.herokuapp.com/api/'
        const url = urlBase+parametro.consulta
        setConsulta(parametro.consulta)
        //console.log("muestro la url ",url)


    axios.get(url)
      .then( res => {
        console.log("datos antes de parse", res.data)
        setObjetoDolar (res.data)
        
      })
      .catch(e => {
        console.log("Error en get", e)
      })
    }



    return (
        <div>
            <input onClick={ ()=> clickEnElBoton() } type="button" value="Presione para procesar" />
            <h4>Datos de la api</h4>
            <table>
                <thead>
                <tr>
                  <td>Consulta</td>
                  <td>Fecha</td>
                  <td>Compra</td>
                  <td>Venta</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>{consulta}</td>
                  <td>{objetoDolar.fecha}</td>
                  <td>{objetoDolar.compra}</td>
                  <td>{objetoDolar.venta}</td>
                </tr>
                </tbody>
            </table>
            
        </div>
    )
}

export default Datos