import { createContext, useState } from "react";
import { calcularMarca, calcularPlan, formatearDinero, obtenerDiferenciaYear } from "../helpers";


const CostizadorContext = createContext();

const CostizadorProvider = ({children}) => {
    const[datos, setDatos] = useState({
        marca: '',
        year: '',
        plan: ''
    });

    const [error, setError] = useState('');
    const [resultado, setResultado] = useState(0);
    const [cargando, setCargando] = useState(false);

    const handlerChangeDatos = e => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const cotizarSeguro = () => {
        //Una base 
        let resultado = 2000;

        //Obtener diferencia de años
        const diferencia = obtenerDiferenciaYear(datos.year);
        
        //Hay que resta el 3% por cada año
        resultado -= ((diferencia * 3) * resultado) / 100;

        
        resultado *= calcularMarca(datos.marca);
        //Americano 15%
        //Asiatico 5%
        //Europeo 30%

        //Basico 20%
        //Completo 50%
        resultado  *= calcularPlan(datos.plan).toFixed(2);
        //Formatear dinero
        resultado = formatearDinero(resultado);
        setCargando(true);
        setTimeout(() => {
            setResultado(resultado);
            setCargando(false);
        }, 3000);
        
        
    }

    return (
        <CostizadorContext.Provider 
            value={{
                datos,
                handlerChangeDatos,
                error,
                setError,
                cotizarSeguro,
                resultado,
                cargando
            }}
        >
            {children}
        </CostizadorContext.Provider>
    )
}

export {CostizadorProvider}
export default CostizadorContext;
