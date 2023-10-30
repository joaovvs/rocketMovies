import { useState } from 'react';

import { Container, Search, Profile } from './styles';

import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { Input } from '../Input'

import { Link } from 'react-router-dom';

export function Header(){
    const { signOut, user} = useAuth();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : blankAvatar;
 

    return(
        <Container>
            <Link to="/">
                <h1>Rocketmovies</h1>
            </Link>

            <Search>
                <Input id="search" type="text" placeholder="Pesquise pelo título" icon={FiSearch}/>
            </Search>
            
            <Profile>
                <div>
                    <span>{user.name}</span>
                    <button onClick={signOut}>sair</button>
                </div>
                <Link to="/profile">
                    <img src={avatarUrl} alt={`Foto de perfil de ${user.name}`} />
                </Link>
            </Profile>
        </Container>
    )
}