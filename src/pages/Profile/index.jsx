import { Container, Form, Avatar } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Button } from "../../components/Button";

export function Profile(){
    return (
        <Container>
            <header>
                <ButtonText title="voltar" icon={FiArrowLeft}/>
            </header>

            <Form>
                <Avatar>
                    <img 
                    src="https://github.com/joaovvs.png" 
                    alt="Foto de perfil do usuário" />
                    
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input type="file" id="avatar" />
                    </label>
                </Avatar>
                <Input icon={FiUser} defaultValue="João Vinícius"/>
                <Input icon={FiMail} defaultValue="joaovvs@gmail.com"/>
                <Input icon={FiLock} placeholder="Senha atual"/>
                <Input icon={FiLock} placeholder="Nova senha"/>

                <Button title="Salvar"/>
            </Form>

        </Container>
    )
}