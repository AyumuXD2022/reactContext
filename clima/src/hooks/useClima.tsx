import { useContext } from "react"
import ClimaContext from "../contexts/ClimaPrivader"

const useClima = () => {
    return useContext(ClimaContext)
}
export default useClima