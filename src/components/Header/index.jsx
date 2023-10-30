import { Container, Search, Profile } from './styles';

import { useAuth } from '../../hooks/auth';

import { FiPlus, FiSearch } from 'react-icons/fi';

import { Input } from '../Input'

import { Link } from 'react-router-dom';

export function Header(){
    const { signOut} = useAuth();
    return(
        <Container>
            <Link to="/">
                <h1>Rocketmovies</h1>
            </Link>

            <Search>
                <Input type="text" placeholder="Pesquise pelo título" icon={FiSearch}/>
            </Search>
            
            <Profile>
                <div>
                    <span>João Vinícius</span>
                    <button onClick={signOut}>sair</button>
                </div>
                <Link to="/profile">
                    <img src="https://github.com/joaovvs.png" alt="Foto de perfil" />
                </Link>
            </Profile>
        </Container>
    )
}