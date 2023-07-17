import { RegistroProvider } from "../context/RegistroProvider"
import { Formulario } from "./Formulario"
import Header from "./Header"
import { ListadoPacientes } from "./ListadoPacientes"
const AppPaciente = () => {

    return (
        <div className="container mx-auto mt-20">
            <Header />
            <div className="mt-12 md:flex">
                <RegistroProvider>
                    <Formulario />
                </RegistroProvider>
                <ListadoPacientes />
            </div>
        </div>
    )
}

export default AppPaciente