import { Container } from "./styles";

import { FiStar } from "react-icons/fi";
import { Tag } from "../Tag";


export function MovieCard({title, rating, description, tags, ...rest}){
    return (
        <Container {...rest}>
            <h2>{title}</h2>
            <div className="stars">
                <FiStar/>
                <FiStar/>
                <FiStar/>
                <FiStar/>
                <FiStar/>
            </div>
            <p>{description}
            </p>
            <div className="tags">
                <Tag title="Ficção Científica"/>
                <Tag title="Drama"/>
                <Tag title="Família"/>
            </div>
        </Container>
    )
} 