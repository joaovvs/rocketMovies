import { Container, Section } from "./style";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Tag } from "../../components/Tag";
import { Rating } from "../../components/Rating";

import { FiArrowLeft, FiClock, FiEdit } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import blankAvatar from "../../assets/blank_avatar.svg"

export function Preview (){
    const {user} = useAuth();
    const params = useParams();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : blankAvatar;

    const  navigate = useNavigate();

    const [movieNote, setMovieNote] = useState(
        {
                id: "",
                title:"",
                rating:"",
                description:"",
                tags:[],
                author: {name:"",avatar:""}
        });

    function handleEdit(){
        navigate(`/new/${params.id}`)
    }

    function handleBack(){
        navigate(-1);
    }

    function handleDateTimeBrasilia(date){
        const data = new Date(date);
        data.setMinutes(data.getMinutes() - 180);
        return data.toLocaleString();
    }

    useEffect(()=>{
        async function fetchMovieNotes(){
                console.log(movieNote);
                try {
                    console.log("chegou aqui!")
                    const result = await api.get(`/notes/${params.id}`);
                    console.log(result.data);
                    setMovieNote(result.data)
                } catch (error) {
                    if(error.response){
                        alert(error.response.data.message);
                        navigate("/");
                    }else{
                        alert( "Nota não encontrada2!");
                        navigate("/");
                    }
                    
                }
        }
        fetchMovieNotes();
    },[])

    return (
        <Container>
            <Header />

            <main>        
                <Section>
                    <header>
                        <ButtonText 
                        title="Voltar" 
                        icon={FiArrowLeft}
                        onClick={handleBack}
                        />
                     
                        <div className="title-and-rating">
                            <h1>{movieNote.title}</h1>
                            <Rating rating={movieNote.rating}/>
                        </div>
                        <div className="note-creation-infos">
                            <img src={movieNote.author.avatar ? `${api.defaults.baseURL}/files/${movieNote.author.avatar}` : blankAvatar} alt={`Foto de perfil de ${movieNote.author.name}`} />
                            <p>Por {movieNote.author.name}</p>
                            <FiClock/>
                            <p>{handleDateTimeBrasilia(movieNote.updated_at)}</p>
                            <ButtonText 
                                title="Editar" 
                                icon={FiEdit}
                                onClick={handleEdit}
                            />
                        </div>
                    </header>

                    <div className="tag-list">
                        {   movieNote.tags && movieNote.tags.map((tag,index) => 
                            <Tag 
                            key={index} 
                            title={tag}/>
                            )}

                    </div>

                    <p>{movieNote.description}</p>
                    
                </Section>
            </main>
        </Container>

    )
}