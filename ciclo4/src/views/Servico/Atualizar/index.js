import axios from "axios";
import { Link } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import { Alert, Button, Container, Form, FormGroup, Input, Label } from "reactstrap"
import { api } from "../../../config";

export const AtualizarServico = (props) => {

    const [id, setId] = useState(props.match.params.id);
    console.log(id);

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



    const cadCliente = async e => {
        e.preventDefault();
        console.log(servico);

        const headers = {
            'Content-Type': 'application/json'
        }

        await axios.put(api + "/servicos/" + id + "/atualizar-servico", servico, { headers })
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
                    <h1>Atualizar Serviço</h1>
                </div>
            </div>

            <hr className="m-1" />

            {status.type === 'error' ? <Alert color="danger">{status.message}</Alert> : ""}

            {status.type === 'success' ? <Alert color="success">{status.message}</Alert> : ""}

            <Form className="p-2" onSubmit={cadCliente}>
                <FormGroup className="p-2">
                    <Label>Nome Serviço</Label>
                    <Input type="text" required name="nome" placeholder="Digite Seu Nome"
                        onChange={valorInput} />
                </FormGroup>
                <FormGroup className="p-2">
                    <Label>Descrição do Serviço</Label>
                    <Input type="text" required name="descricao" placeholder="Informe a Descrição do Serviço"
                        onChange={valorInput} />
                </FormGroup>
                <Button type="submit" outline color="success">Atualizar Dados</Button>{' '}
                <Button type="reset" outline color="dark" size="sm" className="mx-4">Limpar Dados</Button>


            </Form>
        </Container>
    )
}