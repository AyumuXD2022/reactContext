import { ReactNode, createContext, useState } from "react";
import { Busqueda } from "../models/Busqueda";
import axios from "axios";

const ClimaContext = createContext({});

const ClimaProvider = ({ children }: { children: ReactNode }) => {


    const [busqueda, setBusqueda] = useState<Busqueda>({
        ciudad: '',
        pais: ''
    });
    const [resultado, setResultado] = useState({});
    const [cargando, setCargando] = useState(false);
    const[noResultados, setNoResultados] = useState(false);

    const datosBusqueda = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const consultarClima = async (datos: Busqueda) => {
        setCargando(true);
        setNoResultados(false);
        try {
            const { ciudad, pais } = datos;
            const appId = import.meta.env.VITE_API_KEY as string;
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`;
            const { data } = await axios(url);
            const { lat, lon } = data[0];
            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`;
            const { data: clima } = await axios(urlClima);
            setResultado(clima);
           
        } catch (error) {
            setNoResultados("No hay resultados")
        }finally{
            setCargando(false);
        }

    }

    return (
        <ClimaContext.Provider
            value={{
                datosBusqueda,
                busqueda,
                consultarClima,
                resultado,
                cargando,
                noResultados
            }}
        >
            {children}
        </ClimaContext.Provider>
    );
}
export { ClimaProvider };
export default ClimaContext;