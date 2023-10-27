import { useState } from "react";

import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth"

import { FiMail, FiLock} from 'react-icons/fi'

export function SignIn(){
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const { signIn }= useAuth();
    const navigate = useNavigate();
   

    function handleSignIn(){
        signIn({email, password});
    }

    function handleNewUser(){
        navigate("/register")
    }
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir</p>

                <h2>Faça seu login</h2>

                <Input
                   placeholder="E-mail"
                   type="text"
                   icon={FiMail} 
                   onChange={e => setEmail(e.target.value)}
                />
                <Input
                   placeholder="Senha"
                   type="password"
                   icon={FiLock} 
                   onChange={e => setPassword(e.target.value)}
                />

               <Button title= "Entrar" onClick={handleSignIn}/>

               <ButtonText 
               title="Criar conta"
               onClick={handleNewUser}/>

            </Form>

            <Background/>
        </Container>
    )
}