// for beginner react programmer


import Link from 'next/link';
import Header from '../components/Header';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'bootstrap/dist/css/bootstrap.min.css';

Router.onRouteChangeStart = url =>{
    console.log(url);
    NProgress.start();
}

Router.onRouteChangeComplete = ()=>{
    NProgress.done();
}

Router.onRouteChangeError = (url)=>{
    NProgress.done();
} 

const Layout = ({children,title})=>{
    return(
        <div>
            <Head>
                <title>Maruf's Portfolio</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
            </Head>
        <header>
            
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/portfolio"><a>Portfolio</a></Link>
            <Link href="/hireme"><a>Hireme</a></Link>
            <Link href="/blog"><a>Blog</a></Link>
                      
        </header>
        <body className="text-center my-2">
        <h1 className="display-4">{title}</h1>
        {children}

        </body>

       

        <footer>
           Maruf's Portfolio &copy; {new Date().getFullYear()} 
             <br/>Made with Next.js on top of React</footer>
        <style jsx>
        {`
            .root{
                display:flex;
                justify-content:center;
                flex-direction:column;
            }
           
            
            header{
                width:100%;
                display:flex;
                justify-content:space-around;
                padding:1em;
                background:#333;
                font-size:1.2rem;
            }

            header a{
                color:#eee;
                text-decoration:none;
                margin-left:20px;
                margin-right:20px;

            }

            header a:hover{
                font-weight:bold;
                color:white;
            }

            footer{
                text-align:center;
                padding:0.25em;
                background:#666;
                color:#fff;
                position: fixed;
                bottom: 0px;
                width:100%;
                
            }

        
        `}
        </style>
        {/* styling in global scope */}

            <style global jsx>{

            `
            
            
            
            `

            }</style>

    </div>
    )
    
}

export default Layout;



// in short hand form
// export default({children})=>(

//     <div>
//         <header>Header</header>

//         {children}

//         <footer>Footer</footer>
//     </div>
// )