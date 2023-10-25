import { Container, Search, Profile } from './styles'

import { FiPlus, FiSearch } from 'react-icons/fi';

import { Input } from '../Input'

import { Link } from 'react-router-dom';

export function Header(){
    return(
        <Container>
            <h1>Rocketmovies</h1>

            <Search>
                <Input type="text" placeholder="Pesquise pelo título" icon={FiSearch}/>
            </Search>
            
            <Profile>
                <div>
                    <span>João Vinícius</span>
                    <a href="/">sair</a>
                </div>
                <Link to="/profile">
                    <img src="https://github.com/joaovvs.png" alt="Foto de perfil" />
                </Link>
            </Profile>
        </Container>
    )
}