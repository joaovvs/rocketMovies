import { useEffect, useState } from "react";

import { Container, Form, Avatar } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import blankAvatar from "../../assets/blank_avatar.svg"

import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";


import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Button } from "../../components/Button";
import { api } from "../../services/api";

export function Profile(){
    const {user, updateProfile} = useAuth();
    const [ name, setName] = useState(user.name);
    const [ email, setEmail] = useState(user.email);
    const [ passwordOld, setPasswordOld] = useState();
    const [ passwordNew, setPasswordNew] = useState();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : blankAvatar;

    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);
    
    const navigate = useNavigate();


    async function handleUpdate(){
        const updated = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld,
        };

        const userUpdate = Object.assign(user,updated)
        await updateProfile({user: userUpdate, avatarFile});
        navigate(-1);
    }

    function handleChangeAvatar(event){
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }


    function handleBack(){
        navigate(-1);
    }

    return (
        <Container>
            <header>
                <ButtonText 
                    type="button"
                    title="voltar"
                    icon={FiArrowLeft}
                    onClick={handleBack}
                />
            </header>

            <Form >
                <Avatar>
                    <img 
                    src={avatar}
                    alt={`Foto de perfil de ${user.name}`} />
                    
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input 
                        type="file" 
                        id="avatar" 
                        onChange={handleChangeAvatar}/>
                    </label>
                </Avatar>
                <Input icon={FiUser} 
                    id="name"
                    autoComplete="false"
                    defaultValue={user.name}
                    onChange={e => setName(e.target.value)}
                />
                <Input icon={FiMail} 
                    id="email"
                    autoComplete="false"
                    value={user.email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input icon={FiLock}
                    id="oldpassword"
                    placeholder="Senha atual"
                    type="password"
                    onChange={e => setPasswordOld(e.target.value)}
                />
                <Input icon={FiLock}
                    id="newpassword"
                    placeholder="Nova senha"
                    type="password"
                    onChange={e => setPasswordNew(e.target.value)}
                />

                <Button 
                    type="button"
                    title="Salvar"
                    onClick={handleUpdate}
                />
            </Form>

        </Container>
    )
}