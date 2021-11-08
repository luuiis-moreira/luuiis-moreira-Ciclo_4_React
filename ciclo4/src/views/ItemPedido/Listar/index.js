import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";
import Adicionar from '../../../Img/Adicionar.png'
import { api } from "../../../config";

export const ListarItemPedido = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getProdutos = async () => {
        await axios.get(api + "/item-pedido")
            .then((response) => {
                console.log(response.data.itempedido);
                setData(response.data.itempedido);
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
                        <h1>Informação dos Itens Pedidos</h1>
                    </div>
                    {status.type == 'error' ? <Alert color="danger">
                        {status.message}
                    </Alert> : ""}
                </div>
                <Table striped bordered hover className="text-center">
                    <thead>
                        <tr>
                            <th>ID Pedido</th>
                            <th>ID Serviço</th>
                            <th>Quantidade</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.PedidoId}</td>
                                <td>{item.ServicoId}</td>
                                <td>{item.quantidade}</td>
                                <td>{item.valor}</td>
                            </tr>
                        ))}


                    </tbody>
                </Table>

            </Container>
        </div>

    );
};