import {FunctionalComponent} from 'preact';
import { Lover } from "../types.ts";
import SimpleLove from "./SimpleLove.tsx";

const MapLove: FunctionalComponent<{props: Lover[]}> = (props) => { 
    console.log("-------------------------------------------------",props.props);
       
    return (
        <div class="loversMap">
            { props.props.length !== 0 ? <div>No lovers found</div> : props.props.map((lover)=>{return(<div>lover.age</div>)})}
        </div>
    )
}

export default MapLove;