import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Container, CardList } from "./styles";

import { FiPlus } from "react-icons/fi";


import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { MovieCard } from '../../components/MovieCard'
import { useEffect, useState } from "react";

export function Home(){
    const navigate = useNavigate();
    const [movieNotes, setMovieNotes] = useState([{
        id: "",
        title:"",
        rating:"",
        description:"",
        tags:[]}]);
    
    const[search, setSearch] = useState("");

    const updateSearch = (newSearch) => {
        setSearch(newSearch);
    };

    function handleCreate(){
        navigate("/new")
    }

    useEffect(()=>{
        async function fetchMovieNotes(){
            if(!search){
                const result = await api.get("/notes/");
                setMovieNotes(result.data)
            }else{
                const result = await api.get(`/notes?title=${search}`);
                setMovieNotes(result.data)
            }
        }
        fetchMovieNotes();
    },[search]);



    return(
        <Container>
            <Header onSearchChange={updateSearch}/>
            
            <main>
                <header>
                    <h1>Meus filmes</h1>
                    <Button  
                    title="Adicionar filme" 
                    icon={FiPlus}
                    onClick={handleCreate}></Button>
                </header>
                <CardList>
                    {
                        movieNotes.map((note,index) => (
                            <MovieCard 
                                key={index}
                                id={note.id}
                                title={note.title} 
                                description={note.description}
                                rating={note.rating}
                                tags={note.tags}
                            />
                        ))
                            

                    }
                </CardList>
            </main>
        </Container>
    );
}