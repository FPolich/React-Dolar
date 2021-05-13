import { useState, useEffect } from "react";
import axiosComp from "./axiosComponent"


const postgresDB = () => {
    const [dolar, setDolar] = useState(false)
    useEffect( () => {
        getDolar()
    }, [])

        function getDolar()
        {
            .fetch('http://localhost:3001')
                .then(response => {
                    return response.text()
                })
                .then(data => {
                    setDolar(data);
                })
        }

        function createDolar()
        {
            fetch('http://localhost:3001/dolares', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                },
                body: JSON.stringify({tipo_de_consulta, fecha, compra, venta}),
                }
            })
                .then(response => {
                    return response.text()
                })
                .then (data=> {
                    getDolar()
                })
        }

        function deleteDolar()
        {
            fetch('http://localhost:3001/dolares/${tipo_de_consulta}', {
                method: 'DELETE',
            })
                .then(response => {
                    return response.text();
                })
                .then (data => {
                    getDolar()
                })
        }

        return (
            <div>
                {dolar ? dolar : 'There is no dolar add'}
                <br />
                <button onClick={createDolar}>Add dolar</button>
                <br />
                <button onClick={deleteDolar}>Delete dolar</button>
            </div>
        )
}

export default postgresDB