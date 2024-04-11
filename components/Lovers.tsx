import { FunctionComponent } from "preact";
import {Lover} from "../types.ts";

const Lovers: FunctionComponent<Lover[]> = (props) => {
    const {lovers} = props;
    
    return (
        <div className="lovers">
            <h1 className="mainTitle">Lovers</h1>
            <div className="people">
                {lovers === null ? 
                    <div>No lover found</div> 
                    : 
                    lovers.map((love) => {
                        
                        return (
                            <a href={`/${love.name}`} className="lover" key={love._id}>
                                <p><strong>{love.name}</strong></p>
                                <p><strong>Age: </strong>{love.age}</p>
                                <img className="img-m half-rounded" src={love.photo} alt={love.name} />
                                <p><strong>Description: </strong>{love.description}</p>
                                <p><strong>Sex: </strong>{love.sex}</p>
                            </a>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default Lovers;