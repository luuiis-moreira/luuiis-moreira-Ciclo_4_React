import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container, Table } from "reactstrap";
import Adicionar from '../../../Img/Adicionar.png'
import { api } from "../../../config";

export const ListarItemCompra = () => {

    const [data, setData] = useState([]);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getProdutos = async () => {
        await axios.get(api + "/item-compra")
            .then((response) => {
                console.log(response.data.itemcompra);
                setData(response.data.itemcompra);
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
                        <h1>Informação dos Itens Compras</h1>
                    </div>
                    {status.type == 'error' ? <Alert color="danger">
                        {status.message}
                    </Alert> : ""}
                </div>
                <Table striped bordered hover className="text-center">
                    <thead>
                        <tr>
                            <th>ID Compra</th>
                            <th>ID Produto</th>
                            <th>Quantidade</th>
                            <th>Valor</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.CompraId}</td>
                                <td>{item.ProdutoId}</td>
                                <td>{item.quantidade}</td>
                                <td>R$ {item.valor}</td>
                            </tr>
                        ))}


                    </tbody>
                </Table>

            </Container>
        </div>

    );
};