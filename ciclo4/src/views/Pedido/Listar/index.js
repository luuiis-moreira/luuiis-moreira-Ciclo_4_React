import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";
import Adicionar from '../../../Img/Adicionar.png'
import ItemPedido from '../../../Img/ItemPedido.png'
import { api } from "../../../config";

export const ListarPedido = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const pedidos = async () => {
        await axios.get(api + "/pedidos")
            .then((response) => {
                console.log(response.data.pedidos);
                setData(response.data.pedidos);
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
        pedidos();
    }, []);

    return (
        <div>
            <Container>

                <div className="d-flex">
                    <div>
                        <h1>Todos os Pedidos</h1>
                    </div>
                    <div className="p-2 m-auto">
                        <Link to="/cadastrarPedido" className="btn btn-outline-primary btn-sm d-flex align-items-center">
                        <img src={Adicionar} width="50" height="45" alt="Listar Usuarios" /><h6>Cadastrar Pedido</h6>
                        </Link>
                    </div>
                    <div className="p-2">
                        <Link to="/listar-itempedido" className="btn btn-outline-primary btn-sm d-flex align-items-center">
                        <img src={ItemPedido} width="50" height="45" alt="Listar Itens Pedido" /><h6>Todos Pedidos</h6>
                        </Link>
                    </div>
                    {status.type == 'error' ? <Alert color="danger">
                        {status.message}
                    </Alert> : ""}
                </div>
                <Table striped bordered hover className="text-center">
                    <thead>
                        <tr>
                            <th>ID Pedido</th>
                            <th>Data Pedido</th>
                            <th>ID Cliente</th>
                            <th>Data da Criação</th>
                            <th>Atualizar</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.data}</td>
                                <td>{item.ClienteId}</td>
                                <td>{item.createdAt}</td>
                                <td>
                                <Link to={"/pedido/" + item.id}
                                        className="btn btn-outline-primary btn-sm">
                                        Atualizar
                                    </Link>
                                </td>
                                <td>
                                <Link to={"/excluir-pedido/" + item.id}
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