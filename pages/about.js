import Link from 'next/link';
import Layout from '../components/Layout'


const About = ()=>{
    return(
        <Layout title="About page">

            <p>
                I am Maruf. I am a fullstack javascript programmer. I am so passionate to write code, and Javascript and it's libraries and freamwork always amaze me.

            </p>
            <img src="/static/Maruf.png" alt="Maruf's Photo" height="200px"/>
        <Link href="/">
        <a>Home Page</a>
        </Link>
        </Layout>
    )

}

export default About;