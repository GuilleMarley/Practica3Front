import { FunctionComponent } from "preact";
import {useState} from "preact/hooks";

const LoginProfile:FunctionComponent = () => {
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    return (
        <form action = "/login" method = "post" class="login-form">
        
            <input type = "text" name = "name" placeholder = "Name" value = {name} onInput = {(e) => setName(e.currentTarget.value)}/>
            <input type = "password" name = "password" placeholder = "Password" value = {password} onInput = {(e) => setPassword(e.currentTarget.value)}/>
            <button type = "submit">Login Tinder</button>
        </form>
    )

}

export default LoginProfile;