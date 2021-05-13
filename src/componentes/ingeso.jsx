import {useState} from "react"

const Ingreso = (parametro) => {

    const [textoIngresado, setTextoIngresado] = useState()

    const cambioEnElTexto = (valorActualizado) => {
        //console.log("Cambio en el texto", valorActualizado)
        setTextoIngresado(valorActualizado)
        parametro.modificarTexto(textoIngresado)
    }

    return (
        <div>
            <input type="text" value={textoIngresado} onChange={ (e) => cambioEnElTexto(e.target.value)}></input>
        </div>
    )
}

export default Ingreso
