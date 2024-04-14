import { FreshContext, Handlers } from "$fresh/server.ts";
import axios from "npm:axios";
import LoginProfile from "../islands/LoginProfile.tsx";

export const handler:Handlers = {
    POST: async(req:Request, ctx: FreshContext) => {
        const profile = await req.formData();
        const form = {
            name : profile.get("name"),
            password : profile.get("password")
        }

        try {
            const response = await axios.post("https://lovers.deno.dev/login", { 
                name: form.name,
                password: form.password 
            },{
                headers: {
                    "Content-Type": "application/json",
                },
            });

            return new Response(null, { status: 302, headers: { Location: '/' } });
        } catch (error) {
            if (error.response && error.response.status === 404) {
                return new Response(null, { status: 302, headers: { Location: '/newProfile' } });
            }
            if (error.response && error.response.status === 401) {
                return new Response(null, { status: 302, headers: { Location: '/login' } });
            }
            throw error;
        }
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