import { useState } from "react";

import { Container, Form, Avatar } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";

import { useAuth } from "../../hooks/auth";

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Button } from "../../components/Button";

export function Profile(){
    const {user, updateProfile} = useAuth();
    const [ name, setName] = useState(user.name);
    const [ email, setEmail] = useState(user.email);
    const [ passwordOld, setPasswordOld] = useState();
    const [ passwordNew, setPasswordNew] = useState();


    async function handleUpdate(){
        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld,
        }
        await updateProfile({user});
    }


    return (
        <Container>
            <header>
                <ButtonText to="/" title="voltar" icon={FiArrowLeft}/>
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
                <Input icon={FiUser} 
                    defaultValue={user.name}
                    onChange={e => setName(e.target.value)}
                />
                <Input icon={FiMail} 
                    value={user.email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input icon={FiLock}
                    placeholder="Senha atual"
                    type="password"
                    onChange={e => setPasswordOld(e.target.value)}
                />
                <Input icon={FiLock} 
                    placeholder="Nova senha"
                    type="password"
                    onChange={e => setPasswordNew(e.target.value)}
                />

                <Button 
                    title="Salvar"
                    onClick={handleUpdate}
                />
            </Form>

        </Container>
    )
}