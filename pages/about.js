import Link from 'next/link';


const About = ()=>{
    return(
        <div>
            <h1>About page</h1>
            <p>
                I am Maruf. I am a fullstack javascript programmer. I am so passionate to write code, and Javascript and it's libraries and freamwork always amaze me.

            </p>
            <img src="/static/Maruf.png" alt="Maruf's Photo" height="200px"/>
        <Link href="/">
        <a>Home Page</a>
        </Link>
        </div>
    )

}

export default About;