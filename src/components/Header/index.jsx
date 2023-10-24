import { Container, Search, Profile } from './styles'

export function Header(){
    return(
        <Container>
            <h1>Rocketmovies</h1>

            <Search>
                <input type="text" />
            </Search>
            
            <Profile>
                <div>
                    <span>João Vinícius</span>
                    <a href="/">sair</a>
                </div>
                <img src="https://github.com/joaovvs.png" alt="Foto de perfil" />
            </Profile>
        </Container>
    )
}