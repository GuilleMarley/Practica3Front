import {FunctionalComponent} from 'preact';
import { Lover } from "../types.ts";

const SimpleLove: FunctionalComponent<Lover> = (props) => {
    const {name, age, sex, description, hobbies, photo, comments} = props;
    return (
        <div class="lovely">
            <h2>{name}</h2 >
            <p><strong>Age:</strong>{age}</p>
            <p><strong>Photo:</strong></p>
            <img src={photo} alt={name} />
            <p><strong>Sex:</strong>{sex}</p>
            <p><strong>Description:</strong>{description}</p>
            <p><strong>Hobbies:</strong></p>
            <ul>
                {hobbies.map(hobby => <li>{hobby}</li>)}
            </ul>
            <p><strong>Comments:</strong></p>
            <ul>
                {comments.map(comment => <li>{comment.user}: {comment.message}</li>)}
            </ul>
        </div>
    )
}

export default SimpleLove;