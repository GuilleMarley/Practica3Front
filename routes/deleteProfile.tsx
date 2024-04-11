import { FreshContext, Handlers } from "$fresh/server.ts";
import DeleteProfile from "../islands/DeleteProfile.tsx";

export const handler:Handlers = {
    POST: async(req:Request, ctx: FreshContext<unknown, string>) => {
        const profile = await req.formData();
    
        const name = profile.get("name");
        const password = profile.get("password");
        
      const response = await fetch(`https://lovers.deno.dev/${name}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: password }),
        });
        console.log(response);
          if(!response){
            return new Response("Error", {status: 500});
          }
          return ctx.render("Success!");
      }
}

const Page = ( ) => {
    return (
        <div>
            <DeleteProfile />
        </div>
    )
}

export default Page;