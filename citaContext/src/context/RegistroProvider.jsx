import { createContext, useEffect, useState } from "react";
import useFormulario from "../hooks/useFormulario";

const RegistroContext = createContext();

const RegistroProvider = ({ children }) => {

  const { pacientes, setPacientes, paciente, setPaciente } = useFormulario();

  const [nombre, setNombre] = useState('');
  const [propetario, setPropetario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropetario(paciente.propetario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente])

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, propetario, email, fecha, sintomas].includes('')) {
      setError(true)
      return;
    }
    setError(false)

    const objetoPaciente = {
      nombre,
      propetario,
      email,
      fecha,
      sintomas
    }

    if (paciente.id) {
      objetoPaciente.id = paciente.id;
      const pacienteActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

      setPaciente({});

      setPacientes(pacienteActualizados)
    } else {
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }



    setNombre('');
    setPropetario('');
    setEmail('');
    setFecha('');
    setSintomas('');

  }
  return (
    <RegistroContext.Provider value={{
      handleSubmit,
      setNombre,
      nombre,
      setPropetario,
      propetario,
      error,
      setEmail,
      email,
      fecha,
      setFecha,
      sintomas,
      setSintomas,
      paciente
    }}>
      {children}
    </RegistroContext.Provider>
  )
}

export { RegistroProvider }
export default RegistroContext;