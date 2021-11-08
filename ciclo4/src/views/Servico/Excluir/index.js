import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { api } from "../../../config";
import Servicos from '../../../Img/Servicos.png'

export const DelServico = (props) => {

    const [data, setData] = useState([]);

    const [id, setId] = useState(props.match.params.id);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getDelServico = async () => {
        await axios.get(api + "/servicos/" + id + "/excluir-servico")
            .then((response) => {
                console.log(response.data.servico);
                setData(response.data.servico);
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
        getDelServico();
    }, []);

    return (
        <div>
            <Container>
                <div class="alert alert-success text-center m-3" role="alert">
                    <h2>Servico Excluído com Sucesso!</h2>
                </div>
            </Container>
            <Container className="d-flex bd-highlight">
                <div className="m-auto d-inline-flex align-items-center p-5">
                    <div className="p-5">
                        <a href="/listar-servico" className="btn btn-outline-primary btn-lg">
                            <img src={Servicos} width="100" height="100" alt="Listar Serviços" /><h6 className="mt-3">Listar Serviços</h6> </a>
                    </div>
                </div>
            </Container>
        </div>
    );
};