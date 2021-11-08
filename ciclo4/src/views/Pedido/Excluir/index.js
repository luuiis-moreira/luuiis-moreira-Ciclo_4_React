import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { api } from "../../../config";
import Pedidos from '../../../Img/Pedidos.png'

export const DelPedido = (props) => {

    const [data, setData] = useState([]);

    const [id, setId] = useState(props.match.params.id);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getDelCliente = async () => {
        await axios.get(api + "/pedidos/" + id + "/excluir-pedido")
            .then((response) => {
                console.log(response.data.pedido);
                setData(response.data.pedido);
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
        getDelCliente();
    }, []);

    return (
        <div>
            <Container>
                <div class="alert alert-success text-center" role="alert">
                    <h2>Pedido Excluido com Sucesso!</h2>
                </div>
            </Container>
            <Container className="d-flex bd-highlight">
                <div className="m-auto d-inline-flex align-items-center p-5">
                    <div className="p-5">
                        <a href="/listar-pedido" className="btn btn-outline-primary btn-lg">
                            <img src={Pedidos} width="100" height="100" alt="Listar Usuarios" /><h6 className="mt-3">Listar Pedidos</h6> </a>
                    </div>
                </div>
            </Container>
        </div>
    );
};