import './App.css'
import { Formulario } from './components/Formulario'
import Header from './components/Header'
import { ListadoPacientes } from './components/ListadoPacientes'
import { useEffect, useState } from "react";

function App() {
  
  const [pacientes,setPacientes] = useState( JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente,setPaciente] = useState({});

  useEffect(() => {
    localStorage.setItem('pacientes',JSON.stringify(pacientes))
  },[pacientes])

  const eliminarPaciente = id => {
    const pacienteUpdate = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacienteUpdate)
  }

  

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className="mt-12 md:flex">
        <Formulario       /// Celulares 
            pacientes = {pacientes}  // Objeto
            setPacientes={setPacientes} //Modificacion
            paciente= {paciente}
            setPaciente = {setPaciente}
        />
        <ListadoPacientes 
          pacientes = {pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}/>
      </div>
    </div>
  )
}

export default App
