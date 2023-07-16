import styled from "@emotion/styled"

const Contanedor = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;

`
const Texto = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
        
    }`
const Precio = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;

    }
`
const Imagen = styled.img`
    display: block;
    width: 120px;
`


const Resultado = ({ resultado }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, IMAGEURL } = resultado;
    return (
        <Contanedor>
            <Imagen src={`https://www.cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
            <div>
                <Precio>El precio es de: <span>{PRICE}</span></Precio>
                <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
                <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Última actualizacion: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Contanedor>
    )
}

export default Resultado
