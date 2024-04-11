import { FreshContext, Handlers } from "$fresh/server.ts";
import axios from "npm:axios";
import LoginProfile from "../islands/LoginProfile.tsx";

const handler:Handlers = {
    GET: async(_req:Request, ctx: FreshContext) => {
        return ctx.render();
    },
    POST: async(req:Request, ctx: FreshContext) => {
        //axios get profile from lovers.deno.dev
        const profile = await req.formData();
        const name = profile.get("name");
        const password = profile.get("password");
        console.log(name, password);

        /*const response = await axios.post(`https://lovers.deno.dev/login`, { 
            name: name,
            password: password 
        });*/
        const response = await fetch(`https://lovers.deno.dev/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name:name, password: password }),
        });
        console.log(response);
    if(!response) return ctx.render("POST Failed!", {status: 400, headers: {Location: "/newProfile"}});
    console.log(ctx.route);
    return ctx.render("Logged in");
}
}

const Page = ( ) => {
    return (
        <div>
            <LoginProfile />
        </div>
    )
}

export default Page;