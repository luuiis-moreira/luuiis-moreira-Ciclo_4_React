import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";
import Adicionar from '../../../Img/Adicionar.png'
import ItemCompra from '../../../Img/ItemCompra.png'
import { api } from "../../../config";

export const ListarCompras = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getCompras = async () => {
        await axios.get(api + "/todos-compras")
            .then((response) => {
                console.log(response.data.compras);
                setData(response.data.compras);
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
        getCompras();
    }, []);

    return (
        <div>
            <Container>

                <div className="d-flex">
                    <div>
                        <h1>Todos as compras</h1>
                    </div>
                    <div className="p-2 m-auto">
                        <Link to="/cadastarcompra" className="btn btn-outline-primary btn-sm d-flex align-items-center">
                        <img src={Adicionar} width="50" height="45" alt="Listar Usuarios" /><h6>Cadastrar Compra</h6>
                        </Link>
                    </div>
                    <div className="p-2">
                        <Link to="/listar-itemcompra" className="btn btn-outline-primary btn-sm d-flex align-items-center">
                        <img src={ItemCompra} width="50" height="45" alt="Listar Itens Compras" /><h6> Todas Compras</h6>
                        </Link>
                    </div>
                    {status.type == 'error' ? <Alert color="danger">
                        {status.message}
                    </Alert> : ""}
                </div>
                <Table striped bordered hover className="text-center">
                    <thead>
                        <tr>
                            <th>ID Compra</th>
                            <th>Data Compra</th>
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
                                <td className="text-center/">
                                    <Link to={"/compra/" + item.id}
                                        className="btn btn-outline-primary btn-sm">
                                        Atualizar
                                    </Link>
                                </td>
                                <td className="text-center/">
                                    <Link to={"/excluir-compra/" + item.id}
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