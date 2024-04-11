import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Lovers from "../components/Lovers.tsx";
import AddProfile from "../islands/AddProfile.tsx";
import { Lover } from '../types.ts';
import axios from "npm:axios"

export const handler: Handlers = {
  GET: async(_req:Request, ctx: FreshContext<unknown, Lover[]>) => {
    const response = await axios.get<Lover[]>("https://lovers.deno.dev/")
    const data = Array.isArray(response.data) ? response.data : [];
    return ctx.render(data)

  },
  POST: async(req:Request, ctx: FreshContext<unknown, string>) => {
    
    const profile = await req.formData();

    const name = profile.get("name");
    const password = profile.get("password");
    const age = parseInt(profile.get("age"));
    const sex = profile.get("sex");
    const description = profile.get("description");
    const hobbies = profile.get("hobbies")?.split(",").map(hobby => hobby.trim()) || [];
    const photo = profile.get("photo");
    //const comments = profile.get("comments");
    const comments:string[] = [];

    const newProfile = {name:name,password:password,age:age,sex:sex,description:description,hobbies:hobbies,photo:photo,comments:comments}

    const response = await axios.post("https://lovers.deno.dev/", {
      name:newProfile.name,
      password:newProfile.password,
      age:newProfile.age,
      sex:newProfile.sex,
      description:newProfile.description,
      hobbies:newProfile.hobbies,
      photo:newProfile.photo,
      comments:newProfile.comments
    });

    if(!response) return ctx.render("POST FAILED!");

    return new Response("POST SUCCESSFUL!", {status: 303, headers: {Location: "/"}});
  },

}

function Home(props: PageProps<Lover[]>) {

  return(
    <div>
        <Lovers lovers = {props.data}/> 

    </div>
  )

}

export default Home;