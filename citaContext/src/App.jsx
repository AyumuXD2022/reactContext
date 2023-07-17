import './App.css'
import AppPaciente from './components/AppPaciente'
import { FormularioProvider } from './context/FormularioProvider'

function App() {

  return (
    <>
      <FormularioProvider>
        <AppPaciente />
      </FormularioProvider>
    </>
  )
}

export default App
