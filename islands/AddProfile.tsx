import { useSignal } from "@preact/signals";
import { FunctionComponent } from "preact";
import {useState} from "preact/hooks";

const AddProfile:FunctionComponent = () => {
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [age, setAge] = useState<number|undefined>(undefined);
    const [sex, setSex] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [hobbies, setHobbies] = useState<string[]>([]);
    const [photo, setPhoto] = useState<string>("");
    const [error, setError] = useState<string>("");

    return (
        <form action = "/" method = "POST">
        
            <input type = "text" name = "name" placeholder = "Name" value = {name} onInput = {(e) => setName(e.currentTarget.value)}/>
            <input type = "password" name = "password" placeholder = "Password" value = {password} onInput = {(e) => setPassword(e.currentTarget.value)}/>
            <input type = "number" name = "age" placeholder = "Age" value = {age} onInput = {(e) => setAge(parseInt(e.currentTarget.value))}/>
            <input type = "text" name = "sex" placeholder = "Sex" value = {sex} onInput = {(e) => setSex(e.currentTarget.value)}/>
            <input type = "text" name = "description" placeholder = "Description" value = {description} onInput = {(e) => setDescription(e.currentTarget.value)}/>
            <input type = "text" name = "hobbies" placeholder = "Hobbies" value = {hobbies} onInput = {(e) => setHobbies(e.currentTarget.value.split(","))}/>
            <input type = "text" name = "photo" placeholder = "Photo" value = {photo} onInput = {(e) => setPhoto(e.currentTarget.value)}/>
            <button type = "submit">Join Tinder</button>
        </form>
    )

}

export default AddProfile;