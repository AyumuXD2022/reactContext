import { useContext } from "react";

import CostizadorContext from "../contexts/CostizadorProvider";

const useCotizador = () => {
    return useContext(CostizadorContext);
}
export default useCotizador;