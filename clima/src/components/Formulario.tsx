import useClima from "../hooks/useClima"
import { useState } from "react";
const Formulario = () => {

    const { datosBusqueda, busqueda,consultarClima } = useClima();
    const { ciudad, pais } = busqueda;

    const [alerta, setAlerta] = useState('');

    const handletSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Object.values(busqueda).includes('')) {
            setAlerta('Todos los campos son obligatorios')
            return;
        }
        setAlerta('');
        consultarClima(busqueda);
    }
    return (
        <div className="contenedor">

            {alerta && <div className="error">{alerta}</div>}

            <form 
                onSubmit={handletSubmit}
            >
                <div className="campo">
                    <label htmlFor="ciudad">Ciudad</label>
                    <input type="text" name="ciudad" id="ciudad" onChange={datosBusqueda} value={ciudad} />
                </div>
                <div className="campo">
                    <label htmlFor="pais">Pais</label>
                    <select name="pais" id="pais" onChange={datosBusqueda} value={pais} >
                        <option value="">-- Seleccione un pais --</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">Mexico</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Peru</option>
                    </select>
                </div>
                <input type="submit" value="Consutar Clima" />
            </form>
        </div>
    )
}

export default Formulario
