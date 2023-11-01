import { useEffect, useState } from 'react';

import { Container, Search, Profile } from './styles';

import { useAuth } from '../../hooks/auth';

import { api } from '../../services/api';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { Input } from '../Input'

import { Link } from 'react-router-dom';
import blankAvatar from '../../assets/blank_avatar.svg'

export function Header({ onSearchChange }){
    const { signOut, user} = useAuth();
    const[search, setSearch] = useState("");
    const [searchTimeout, setSearchTimeout] = useState(null);

    
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : blankAvatar;
    
      // handle changes on search
    const handleSearchChange = (e) => {
        const newSearch = e.target.value;
        setSearch(newSearch);
  
         // Cancels any search
        if (searchTimeout) {
            clearTimeout(searchTimeout);
        }
    
        // Define a new timer to init seach as delay
        const timer = setTimeout(() => {
            onSearchChange(newSearch); // Challs callback function at Home
        }, 1000); // Await 1000 ms = 1s
    
        setSearchTimeout(timer);
    };


    return(
        <Container>
            <Link to="/">
                <h1>Rocketmovies</h1>
            </Link>

            <Search>
                <Input id="search" 
                type="search"
                value={search}
                placeholder="Pesquise pelo título" 
                onChange={handleSearchChange}/>
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