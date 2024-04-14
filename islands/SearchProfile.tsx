import { useState } from 'preact/hooks';
import axios from 'npm:axios';
import { Lover } from '../types.ts';
import SimpleLove from '../components/SimpleLove.tsx';
import { FunctionComponent } from "preact";

const SearchProfile:FunctionComponent = () =>{
    const [name, setName] = useState('');
    const [lover, setLover] = useState<Lover | null>(null);

    return (
        <div>
            <form action = "/search" method = "GET">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" placeholder="Search name" required onChange={e => setName(e.currentTarget.value)}/>
                <button type="submit">Submit</button>
            </form>
            {lover && <SimpleLove {...lover} />}
        </div>
    )
}

export default SearchProfile;