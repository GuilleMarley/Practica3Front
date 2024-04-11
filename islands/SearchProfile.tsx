import { useState } from 'preact/hooks';
import axios from 'npm:axios';
import { Lover } from '../types.ts';
import SimpleLove from '../components/SimpleLove.tsx';
import { FunctionComponent } from "preact";

const SearchProfile:FunctionComponent = () =>{
    const [name, setName] = useState('');
    const [lover, setLover] = useState<Lover | null>(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await axios.get<Lover>(`https://lovers.deno.dev/${name}`);
        setLover(response.data);
    }

    return (
        <div>
            <form action = "/[name]" method = "GET">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Search name" required onChange={e => setName(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
            {lover && <SimpleLove {...lover} />}
        </div>
    )
}

export default SearchProfile;