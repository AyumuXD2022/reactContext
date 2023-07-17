import { useContext } from "react";
import FormularioContext from "../context/FormularioProvider";

const useFormulario = () => {
    return useContext(FormularioContext);
}
export default useFormulario;