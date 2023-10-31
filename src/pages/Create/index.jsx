import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    const [id, setId] = useState("")
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");
    const [markers, setMarkers] = useState([]);
    const [newMarker, setNewMarker] = useState("");

    const navigate = useNavigate();

    function handleBack(){
        navigate(-1);
    }

    function handleAddMarker(){
        setMarkers(prev => [...prev, newMarker]);
        setNewMarker("");
    }

    function handleRemoveMarker(removed){
        setMarkers( prev => prev.filter(marker => marker != removed));
    }

    async function handleSaveMovieNote(){
        const note = {id, title,description,rating, tags: markers}
    
        try {
            /* id is not informed create a new note*/
            if(!id){
                const result = await api.post("/notes", note);
                setId(result.data[0].id);
                alert("Filme cadastrado com sucesso!");

            } else{
                await api.put("/notes", note);
                alert("Filme atualizado com sucesso!");
            }
            

        } catch (error) {
            if(error.response){
                alert(error.response.data.message);
            }else {
                alert("Não foi possível cadastrar o filme");
            }
        }
        
    }

    async function handleDeleteMovieNote(){
            try {
                await  api.delete(`/notes/${id}`);
                alert("Nota do filme removida com sucesso!");
                setId("");
            } catch (error) {
                if(error.response){
                    alert(error.response.data.message);
                }else {
                    alert("Não foi possível deletar o filme");
                }
            }

           
    }

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
                                <h1>Novo Filme</h1>
                            </header>

                            <div className="inputs">
                                <Input 
                                    value={title}
                                    placeholder="Título"
                                    onChange={ e => setTitle(e.target.value)}
                                />
                                <Input 
                                    value={rating}
                                    placeholder="Sua nota (de 0 a 5)"
                                    onChange={ e => setRating(e.target.value)}
                                />
                            </div>
                            <TextArea 
                                value={description}
                                placeholder="Observações"
                                onChange={ e => setDescription(e.target.value)}
                            />

                        
                            <h2>Marcadores</h2>

                            <div className="marker-edition">
                                {
                                markers.map((marker, index)=> (
                                    <Marker 
                                        key={String(index)} 
                                        value={marker} 
                                        onClick={() => handleRemoveMarker(marker)}
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
                                    title="Excluir Filme" 
                                    isDelete
                                    onClick={handleDeleteMovieNote}
                                />
                                <Button 
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