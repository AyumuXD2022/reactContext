import { createContext, useEffect, useState } from "react";

const FormularioContext = createContext();

const FormularioProvider = ({ children }) => {

    const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
    const [paciente, setPaciente] = useState({});

    useEffect(() => {
        localStorage.setItem('pacientes', JSON.stringify(pacientes))
    }, [pacientes])

    const eliminarPaciente = id => {
        const pacienteUpdate = pacientes.filter(paciente => paciente.id !== id);
        setPacientes(pacienteUpdate)
    }

    return (
        <FormularioContext.Provider value={{
            pacientes,
            setPacientes,
            paciente,
            setPaciente,
            eliminarPaciente
        }}>
            {children}
        </FormularioContext.Provider>
    )
}

export { FormularioProvider }
export default FormularioContext;