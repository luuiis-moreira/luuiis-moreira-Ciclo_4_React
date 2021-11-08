import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";
import Adicionar from '../../../Img/Adicionar.png'
import { api } from "../../../config";

export const ListarProdutos = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getProdutos = async () => {
        await axios.get(api + "/todos-produtos")
            .then((response) => {
                console.log(response.data.produtos);
                setData(response.data.produtos);
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
        getProdutos();
    }, []);

    return (
        <div>
            <Container>

                <div className="d-flex">
                    <div>
                        <h1>Informação dos Produtos</h1>
                    </div>
                    <div className="p-2 m-auto">
                        <Link to="/cadastrarProduto" className="btn btn-outline-primary btn-sm d-flex align-items-center">
                        <img src={Adicionar} width="50" height="45" alt="Listar Produtos" /><h6>Cadastrar Produto</h6>
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
                                    <Link to={"/produto/" + item.id}
                                        className="btn btn-outline-primary btn-sm mx-3">
                                        Atualizar
                                    </Link>
                                    </td>
                                    <td className="text-center/">
                                    <Link to={"/excluir-produto/" + item.id}
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