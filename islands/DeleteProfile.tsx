import { useSignal } from "@preact/signals";
import { FunctionComponent } from "preact";
import {useState} from "preact/hooks";

const AddProfile:FunctionComponent = () => {
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <form action = "/deleteProfile" method = "POST" class="delete-form">
        
            <input 
            type = "text" 
            name = "name" 
            placeholder = "Name" 
            value = {name} 
            onInput = {(e) => setName(e.currentTarget.value)}/>
            
            <input 
            type = "password" 
            name = "password" 
            placeholder = "Password" 
            value = {password} 
            onInput = {(e) => setPassword(e.currentTarget.value)}/>
            
            <button type = "submit">Delete Profile</button>
        </form>
    )

}

export default AddProfile;