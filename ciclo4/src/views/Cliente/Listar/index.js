import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";
import { api } from "../../../config";
import Adicionar from '../../../Img/Adicionar.png'

export const ListarCliente = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getClientes = async () => {
        await axios.get(api + "/clientes")
            .then((response) => {
                console.log(response.data.clientes);
                setData(response.data.clientes);
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
        getClientes();
    }, []);

    return (
        <div>
            <Container>

                <div className="d-flex">
                    <div>
                        <h1>Informação dos Clientes</h1>
                    </div>
                    <div className="p-2 m-auto">
                        <Link to="/cadastrarCliente" className="btn btn-outline-primary btn-sm d-flex align-items-center">
                            <img src={Adicionar} width="50" height="45" alt="Listar Usuarios" /><h6>Cadastrar Cliente</h6>
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
                            <th>Endereço</th>
                            <th>Cidade</th>
                            <th>Estado</th>
                            <th>Data Nascimento</th>
                            <th>Atualizar</th>
                            <th>Excluir</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.nome}</td>
                                <td>{item.endereco}</td>
                                <td>{item.cidade}</td>
                                <td>{item.uf}</td>
                                <td>{item.nascimento}</td>
                                <td className="text-center/">
                                    <Link to={"/cliente/" + item.id}
                                        className="btn btn-outline-primary btn-sm">
                                        Atualizar
                                    </Link>
                                </td>
                                <td className="text-center/">
                                    <Link to={"/excluir-cliente/" + item.id}
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