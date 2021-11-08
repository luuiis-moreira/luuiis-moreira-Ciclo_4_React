import axios from "axios";
import { Link } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap"
import { api } from "../../../config";

export const CadastrarProduto = () => {

    const [servico, setServico] = useState({
        nome: '',
        descricao: ''
    });

    const [status, setStatus] = useState({
        nome: '',
        descricao: ''
    });

    const valorInput = e => setServico({
        ...servico, [e.target.name]: e.target.value
    });



    const cadProduto = async e => {
        e.preventDefault();
        console.log(servico);

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.post(api + "/produto/add", servico, { headers })
            .then((response) => {
                console.log(response.data.message);
                if (response.data.error) {
                    setStatus({
                        type: 'error',
                        message: response.data.message
                    });
                } else {
                    setStatus({
                        type: 'success',
                        message: response.data.message
                    });
                }
            })
            .catch(() => {
                console.log("Erro: Sem Conexão com a API.")
            })
    }

    return (
        <Container>
            <div className="d-flex">
                <div className="m-auto p-2">
                    <h1>Cadastro Produto</h1>
                </div>
            </div>

            <hr className="m-1" />

            {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}

            {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ""}

            <Form className="p-2" onSubmit={cadProduto}>
                <FormGroup className="p-2">
                    <Label>Nome Produto</Label>
                    <Input type="text" required name="nome" placeholder="Nome do Produto"
                        onChange={valorInput} />
                </FormGroup>
                <FormGroup className="p-2">
                    <Label>Descrição Produto</Label>
                    <Input type="text" required name="descricao" placeholder="Descrição do Produto"
                        onChange={valorInput} />
                </FormGroup>
                <Button type="submit" outline color="success">Cadastar</Button>{' '}
                <Button type="reset" outline color="dark" size="sm" className="mx-4">Limpar Dados</Button>


            </Form>
        </Container>
    )
}