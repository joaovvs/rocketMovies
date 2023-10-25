import { Container } from "./styles";

import { Rating } from "../Rating";
import { Tag } from "../Tag";
import { Link } from "react-router-dom";


export function MovieCard({title,cardId, rating, description, tags, to,...rest}){
    return (
        <Link to={`${to}/${cardId}`}>

        <Container {...rest}>
            <h2>{title}</h2>
            <div className="stars">
                <Rating/>
            </div>
            <p>{description}
            </p>
            <div className="tags">
                <Tag title="Ficção Científica"/>
                <Tag title="Drama"/>
                <Tag title="Família"/>
            </div>
        </Container>
        </Link>
    )
} 