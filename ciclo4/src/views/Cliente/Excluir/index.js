import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { api } from "../../../config";
import Clientes from '../../../Img/Clientes.png'

export const DelCliente = (props) => {

    const [data, setData] = useState([]);

    const [id, setId] = useState(props.match.params.id);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getDelCliente = async () => {
        await axios.get(api + "/cliente/" + id + "/excluir")
            .then((response) => {
                console.log(response.data.cliente);
                setData(response.data.cliente);
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
                    <h2>Cliente Excluido com Sucesso!</h2>
                </div>
            </Container>
            <Container className="d-flex bd-highlight">
                <div className="m-auto d-inline-flex align-items-center p-5">
                    <div className="p-5">
                        <a href="/listar-cliente" className="btn btn-outline-primary btn-lg">
                            <img src={Clientes} width="100" height="100" alt="Listar Usuarios" /><h6 className="mt-3">Listar clientes</h6> </a>
                    </div>
                </div>
            </Container>
        </div>
    );
};