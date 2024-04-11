import { PageProps } from "$fresh/server.ts";

const layout = (props: PageProps) => {
    const Component = props.Component;

    return(
        <div class="layout">
            <div class="topLayout">
            <div class="titleContainer">
                <h1>Tinder Barato</h1>
            </div>
            <a href="/login" class="loginBut">Login</a>
        </div>
            <div class="rCatRainbow"></div>
            <div class="menu">
                <a href="/">Home</a>
                <a href="/newProfile">Add Profile</a>
                <a href="/deleteProfile">Delete Profile</a>
                <a href="/search">Search Profile</a>
            </div>
            <div>
                <Component/>
            </div>    
        </div>
    )
}

export default layout;