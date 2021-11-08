import axios from "axios";
import { Link } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap"
import { api } from "../../../config";

export const CadastrarPedido = () => {

    const [servico, setServico] = useState({
        data: '',
        ClienteId: ''
    });

    const [status, setStatus] = useState({
        data: '',
        ClienteId: ''
    });

    const valorInput = e => setServico({
        ...servico, [e.target.name]: e.target.value
    });



    const cadPedido = async e => {
        e.preventDefault();
        console.log(servico);

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.post(api + "/pedidos/novo-pedido", servico, { headers })
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
                    <h1>Novo Pedido</h1>
                </div>
            </div>

            <hr className="m-1" />

            {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}

            {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ""}

            <Form className="p-2" onSubmit={cadPedido}>
                <FormGroup className="p-2">
                    <Label>Data Do Pedido</Label>
                    <Input type="date" required name="data" placeholder="Informe a data do pedido"
                        onChange={valorInput} />
                </FormGroup>
                <FormGroup className="p-2">
                    <Label>Id do Cliente</Label>
                    <Input type="number" required name="ClienteId" placeholder="Informe o ID do Cliente"
                        onChange={valorInput} />
                </FormGroup>
                <Button type="submit" outline color="success">Cadastar</Button>{' '}
                <Button type="reset" outline color="dark" size="sm">Limpar Dados</Button>


            </Form>
        </Container>
    )
}