import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { api } from "../../../config";
import Produtos from '../../../Img/Produtos.png'

export const DelProduto = (props) => {

    const [data, setData] = useState([]);

    const [id, setId] = useState(props.match.params.id);

    const [status, setStatus] = useState({
        type: '',
        message: ''
    });

    const getDelProduto = async () => {
        await axios.get(api + "/produto/" + id + "/excluir-produto")
            .then((response) => {
                console.log(response.data.produto);
                setData(response.data.produto);
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
        getDelProduto();
    }, []);

    return (
        <div>
            <Container>
                <div class="alert alert-success text-center m-3" role="alert">
                    <h2>Produto Excluído com Sucesso!</h2>
                </div>
            </Container>
            <Container className="d-flex bd-highlight">
                <div className="m-auto d-inline-flex align-items-center p-5">
                    <div className="p-5">
                        <a href="/listar-produto" className="btn btn-outline-primary btn-lg">
                            <img src={Produtos} width="100" height="100" alt="Listar Produtos" /><h6 className="mt-3">Listar Produtos</h6> </a>
                    </div>
                </div>
            </Container>
        </div>
    );
};