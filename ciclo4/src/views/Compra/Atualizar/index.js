import axios from "axios";
import { Link } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap"
import { api } from "../../../config";

export const AtualizarCompra = (props) => {

    const [id, setId] = useState(props.match.params.id);
    console.log(id);

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



    const cadCliente = async e => {
        e.preventDefault();
        console.log(servico);

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.put(api + "/compra/" + id + "/atualizar-compra", servico, { headers })
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
                    <h1>Atualizar Compra</h1>
                </div>
            </div>

            <hr className="m-1" />

            {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}

            {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ""}

            <Form className="p-2" onSubmit={cadCliente}>
                <FormGroup className="p-2">
                    <Label>Data Compra</Label>
                    <Input type="date" required name="data" onChange={valorInput} />
                </FormGroup>
                <FormGroup className="p-2">
                    <Label>ID do Cliente</Label>
                    <Input type="number" required name="ClienteId" placeholder="Informar ID do Cliente"
                        onChange={valorInput} />
                </FormGroup>
                <Button type="submit" outline color="success">Atualizar Dados</Button>{' '}
                <Button type="reset" outline color="dark" size="sm" className="mx-4">Limpar Dados</Button>


            </Form>
        </Container>
    )
}