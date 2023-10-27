import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { api } from "../../services/api";

import { FiMail, FiLock, FiUser, FiArrowLeft} from 'react-icons/fi'



export function Register(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    
    function handleBack(){

        navigate(-1);
    }

    function handleRegister(){
        if(!name || !email || !password){
           return alert("Preencha todos os campos");
        }
        
        api.post("/users", { name, email, password})
        .then(() => {
            alert("Usuário cadastrado com sucesso!");
            navigate(-1);
        })
        .catch(error => { 
            if(error.response){
                alert(error.response.data.message);
            }else {
                alert("Não foi possível cadastrar o usuário, tente novamente");
            }
        });

    }

    return(
        <Container>
            <Form >
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir</p>

                <h2>Crie sua conta</h2>

                <Input
                   placeholder="Nome"
                   id="name"
                   type="text"
                   icon={FiUser} 
                   autoComplete="false"
                   onChange={e => setName(e.target.value)}
                />
                <Input
                   placeholder="E-mail"
                   id="email"
                   type="text"
                   icon={FiMail} 
                   autoComplete="false"
                   onChange={e => setEmail(e.target.value)}
                />
                <Input
                   placeholder="Senha"
                   id="password"
                   type="password"
                   icon={FiLock} 
                   onChange={e => setPassword(e.target.value)}
                />

               <Button 
                    title= "Cadastrar"
                    onClick={handleRegister}
                    />

               <ButtonText 
                    title="Voltar para o login" 
                    icon={FiArrowLeft} 
                    onClick={handleBack}
               />
               
            </Form>

            <Background/>
        </Container>
    )
}