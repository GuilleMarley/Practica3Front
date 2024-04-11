import {FunctionalComponent} from 'preact';
import { Lover } from "../types.ts";
import SimpleLove from "./SimpleLove.tsx";

const MapLove: FunctionalComponent<Lover[]> = (props) => {
    const {lovers} = props;
    
    return (
        <div class="loversMap">
            {!lovers || lovers.length === 0 ? <div>No lovers found</div> : lovers.map((lover)=><SimpleLove {...lover}/>)}
        </div>
    )
}

export default MapLove;