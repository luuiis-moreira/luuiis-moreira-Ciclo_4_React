import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";
import Adicionar from '../../../Img/Adicionar.png'
import { api } from "../../../config";

export const ListarServico = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getServicos = async () => {
        await axios.get(api + "/servicos")
            .then((response) => {
                console.log(response.data.servicos);
                setData(response.data.servicos);
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
        getServicos();
    }, []);

    return (
        <div>
            <Container>

                <div className="d-flex">
                    <div>
                        <h1>Informação dos Serviços</h1>
                    </div>
                    <div className="p-2 m-auto">
                        <Link to="/cadastrarServico" className="btn btn-outline-primary btn-sm d-flex align-items-center">
                            <img src={Adicionar} width="50" height="45" alt="Listar Usuarios" /><h6>Cadastrar Serviço</h6>
                        </Link>
                    </div>
                    {status.type == 'error' ? <Alert color="danger">
                        {status.message}
                    </Alert> : ""}
                </div>
                <Table striped bordered hover className="text-center">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Descrição</th>
                            <th>Atualizar</th>
                            <th>Excluir</th>


                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.descricao}</td>
                                <td className="text-center/">
                                    <Link to={"/servico/" + item.id}
                                        className="btn btn-outline-primary btn-sm mx-3">
                                        Atualizar
                                    </Link>
                                </td>
                                <td className="text-center/">
                                    <Link to={"/excluir-servico/" + item.id}
                                        className="btn btn-outline-danger btn-sm">
                                        Excluir
                                    </Link>
                                </td>
                            </tr>
                        ))}


                    </tbody>
                </Table>

            </Container>
        </div>

    );
};