import { Container } from "./styles";

import { Rating } from "../Rating";
import { Tag } from "../Tag";
import { Link } from "react-router-dom";


export function MovieCard({title,id, rating, description, tags,...rest}){
   
   
    return (
        <Link to={`preview/${id}`}>

        <Container {...rest}>
            <div>
                <h2>{title}</h2>
                <Rating rating={rating}/>
            </div>
            <p>{description}
            </p>
            <div className="tags">
                {tags && tags.map((tag,index) =>(
                    <Tag 
                        key={index}
                        title={tag}
                    />
                ))
                }
            </div>
        </Container>
        </Link>
    )
} 