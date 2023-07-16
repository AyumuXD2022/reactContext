import styled from "@emotion/styled"
import useSelectMoneda from "../hooks/useSelectMoneda"
import { monedas } from "../data/moneda";
import { useEffect, useState } from "react";
import Error from "./Error";

const InputSubmit = styled.input`
        background-color: #9497FF;
        border: none;
        width: 100%;
        padding: 10px;
        color: #FFF;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 20px;
        border-radius: 5px;
        transition: background-color .3s ease;
        margin-top: 30px;
        &:hover {
            cursor: pointer;
            background-color: #7A7DFE;
        }
    `

const Formulario = ({setMonedas}) => {
    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false);
    const [moneda, SelectMoneda] = useSelectMoneda("Elige tu Moneda", monedas);
    const [criptomoneda, SelecCriptomoneda] = useSelectMoneda("Elige tu Criptomoneda", criptos);

    useEffect(() => {
        const constularApi = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            const arraYCripto = resultado.Data.map(crypto => {

                const objecto = {
                    id: crypto.CoinInfo.Name,
                    nombre: crypto.CoinInfo.FullName
                }
                return objecto;
            });
            setCriptos(arraYCripto);

        }
        constularApi();
    }, [])
    const handleSubmit = e => {
        e.preventDefault();
        if ([moneda, criptomoneda].includes('')) {
            setError(true);
            return;
        }
        setError(false);
        setMonedas({
            moneda,
            criptomoneda
        })
    }

    return (
        <>
        {error && <Error>Todos los campos son obligatorios</Error> }
            <form onSubmit={handleSubmit}>
                <SelectMoneda />
                <SelecCriptomoneda />
                <InputSubmit type="submit" value="Cotizar" />
            </form>
        </>
    )
}

export default Formulario
