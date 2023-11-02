import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Container, Form, Section, Footer } from "./styles";
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { TextArea } from '../../components/TextArea';

import { ButtonText } from "../../components/ButtonText";
import { FiArrowLeft } from "react-icons/fi";
import { Marker } from "../../components/Marker";
import { api } from "../../services/api";



export function Create(){
    const params = useParams();

    const [ note, setNote] = useState({
        id: "",
        title:"",
        rating:"",
        description:"",
        tags: [] });

    const [newMarker, setNewMarker] = useState("");

    
    const navigate = useNavigate();



    function handleBack(){
        navigate(-1);
    }

    function handleAddMarker(){
        const newNote = {...note};
        newNote.tags = [...newNote.tags, newMarker];
        setNote(newNote);
        setNewMarker("");
    }

    function handleRemoveMarker(removed){
        const newNote = {...note};
        newNote.tags = (newNote.tags.filter(tag => tag!= removed));
        console.log(newNote.tags);
        setNote(newNote);
    }

    function handleSaveMovieNote(){
        if (params.id){
            console.log("Precisa atualizar a nota");
            updateMovieNote();
        }else{
            console.log("Precisa criar uma nova nota");
            createNewMovieNote();
        }
    

    }

    async function updateMovieNote(){
        try {
            api.put(`/notes/`, note);
            alert("Anotação atualizada com sucesso!");
        } catch (error) {
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert( "Não foi possível atualizar a anotação do filme!");
            }
        }
    }

    async function createNewMovieNote(){
        try {
            const result = await api.post("/notes", note);

            setNote({...note,"id": result.data.id});
            alert("Nota criada com sucesso!");
            navigate("/");
        } catch (error) {
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert( "Não foi possível criar anotação para o filme!");
            }
        }
        
    }

    async function handleDeleteMovieNote(){
        const confirm = window.confirm("Deseja realmente remover a nota?");
            try {

                await  api.delete(`/notes/${params.id}`);
                alert("Nota do filme removida com sucesso!");

                setNote({
                    id: "",
                    title:"",
                    rating:"",
                    description:"",
                    tags: [] 
                });

                navigate("/");

            } catch (error) {
                if(error.response){
                    alert(error.response.data.message);
                }else {
                    alert("Não foi possível deletar o filme");
                    setId("");
                }
            }

           
    }

    async function fetchMovieNote(){
            try{
                const result= await api.get(`/notes/${params.id}`);
                console.log(`resultado do get usando o params id: ${result.data}`);
                setNote(result.data); 
                console.log(note);
            } catch (error) {
                if(error.response){
                    alert(error.response.data.message);
                }else{
                    alert( "Não foi possível encontrar a anotação para o filme!");
                }
            }
    }

    /*observes notes */
    useEffect(()=>{
        console.log("note_id value"+ note.id);
        console.log("params.id value:"+params.id);
        if(note.id && !params.id){
            console.log("redirecionou");
            navigate(`/new/${note.id}`);
        }
 

    },[note]);

    useEffect(()=>{
        if(params.id){
            fetchMovieNote();
        }
    },[]);


    return(
        <Container>
            <Header/>
            <main>
                <ButtonText 
                title="Voltar" 
                icon={FiArrowLeft}
                onClick={handleBack}
                />
                <Section>            
                        <Form>
                            <header>  
                                <h1>{params.id ? "Editar Filme": "Novo Filme"}</h1>
                            </header>

                            <div className="inputs">
                                <Input 
                                    value={note.title}
                                    placeholder="Título"
                                    onChange={ e => setNote({...note, "title": e.target.value})}
                                />
                                <Input 
                                    value={note.rating}
                                    placeholder="Sua nota (de 0 a 5)"
                                    onChange={ e => setNote({...note, "rating": e.target.value})}
                                />
                            </div>
                            <TextArea 
                                value={note.description}
                                placeholder="Observações"
                                onChange={ e => setNote({...note, "description": e.target.value})}
                            />

                        
                            <h2>Marcadores</h2>

                            <div className="marker-edition">
                                {
                                    note.tags && note.tags.map((tag, index)=> (
                                        <Marker 
                                            key={String(index)} 
                                            value={tag} 
                                            onClick={() => handleRemoveMarker(tag)}
                                        />
                                    ) )
                                }

                                <Marker isNew 
                                placeholder="Novo Marcador"
                                value={newMarker}
                                onChange={(e) => setNewMarker(e.target.value)}
                                onClick={handleAddMarker}/>
                            </div>

                        

                            <Footer>
                                <Button 
                                    type="button"
                                    title="Excluir Filme" 
                                    isDelete
                                    onClick={handleDeleteMovieNote}
                                />
                                <Button 
                                    type="button"
                                    title="Salvar alterações"
                                    onClick={handleSaveMovieNote}
                                />
                            </Footer>
                        </Form>
                    </Section>
            </main>
        </Container>
    )
}