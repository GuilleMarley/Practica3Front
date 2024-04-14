import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import SearchProfile from "../islands/SearchProfile.tsx";
import { Lover } from "../types.ts";
import Lovers from "../components/Lovers.tsx";
import SimpleLove from "../components/SimpleLove.tsx";
import MapLove from "../components/MapLove.tsx";

export const handler: Handlers = {

    GET: async (req: Request, ctx: FreshContext<unknown,Lover[]>) => {

        const url = new URL(req.url);
        const name = url.searchParams.get("name");
        if (!name) {
            return ctx.render({ error: 'Name is required' });
        }
      const response = await axios.get<Lover[]>(`https://lovers.deno.dev/`)
      const data = response.data.filter((lover) => {return lover.name.includes(name)}  );
      console.log(response.data)
      console.log("data",data) 
      //console.log("response",response)
      return ctx.render(data)
      
    }
  }

const Page = ( props:PageProps) => {
    return (
        <div>
            <SearchProfile/>
            <MapLove props={props.data}/>
        </div>
    )
}

export default Page;