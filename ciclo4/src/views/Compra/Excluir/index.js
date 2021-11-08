import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { api } from "../../../config";
import Compras from '../../../Img/Compras.png'

export const DelCompra = (props) => {

    const [data, setData] = useState([]);

    const [id, setId] = useState(props.match.params.id);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getDelCompra = async () => {
        await axios.get(api + "/compra/" + id + "/excluir-compra")
            .then((response) => {
                console.log(response.data.compra);
                setData(response.data.compra);
            })
            .catch(() => {
                setStatus({
                    type: 'error',
                    message: 'Erro: Sem Conexão com a API.'
                })
                //console.log("Erro: Sem Conexão com a API.")
            })
    }

    useEffect(() => {
        getDelCompra();
    }, []);

    return (
        <div>
            <Container>
                <div class="alert alert-success text-center" role="alert">
                    <h2>Compra Excluído com Sucesso!</h2>
                </div>
            </Container>
            <Container className="d-flex bd-highlight">
                <div className="m-auto d-inline-flex align-items-center p-5">
                    <div className="p-5">
                        <a href="/listar-compra" className="btn btn-outline-primary btn-lg">
                            <img src={Compras} width="100" height="100" alt="Listar Compra" /><h6 className="mt-3">Listar Compras</h6> </a>
                    </div>
                </div>
            </Container>
        </div>
    );
};