import { Container, Form, Section, Footer } from "./styles";
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { TextArea } from '../../components/TextArea';

import { ButtonText } from "../../components/ButtonText";
import { FiArrowLeft } from "react-icons/fi";
import { Marker } from "../../components/Marker";



export function Create(){
    return(
        <Container>
            <Header/>
            <main>
                <div className="top">
                    <ButtonText title="Voltar" icon={FiArrowLeft}/>
                    <h1>Novo Filme</h1>
                </div>
                
                <Form>
                    <div className="inputs">
                        <Input placeholder="Título"/>
                        <Input placeholder="Sua nota (de 0 a 5)"/>
                    </div>
                    <TextArea placeholder="Observações"/>

                </Form>

                <Section>
                    <h2>Marcadores</h2>

                    <div className="marker-edition">
                        <Marker title="Ação" />
                        <Marker title="Ficção Científica" />
                        <Marker title="Drama" />
                        <Marker title="Terror" />
                        <Marker isNew/>

                    </div>

                </Section>

                <Footer>
                    <Button title="Excluir Filme" isDelete/>
                    <Button title="Salvar alterações"/>


                </Footer>

            </main>
        </Container>
    )
}