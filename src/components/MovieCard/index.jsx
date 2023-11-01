import { Container } from "./styles";

import { Rating } from "../Rating";
import { Tag } from "../Tag";
import { Link } from "react-router-dom";
import { useEffect } from "react";


export function MovieCard({title,id, rating, description, tags,...rest}){
   
    useEffect(()=>{
        console.log("rating no move card:"+ rating);
    },[])
   
    return (
        <Link to={`preview/${id}`}>

        <Container {...rest}>
            <h2>{title}</h2>
            <div className="stars">
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