import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "npm:axios";
import { Lover } from "../types.ts";
import MapLove from "../components/MapLove.tsx";
import SimpleLove from "../components/SimpleLove.tsx";

export const handler: Handlers<Lover> = {

  GET: async (_req: Request, ctx: FreshContext<unknown, Lover>) => {
    const { name } = ctx.params;
    const response = await axios.get<Lover>(`https://lovers.deno.dev/${name}`)
    console.log(response.data) 
    //console.log("response",response)
    return ctx.render(response.data)
    
  }
}

function Home(props: PageProps<Lover>){
  const lovers:Lover = props.data;
  return (
    <SimpleLove {...lovers} />
  )
}

export default Home;