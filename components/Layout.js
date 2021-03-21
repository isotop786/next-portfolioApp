// for beginner react programmer


import Link from 'next/link';
import Header from '../components/Header';
// import 'bootstrap/dist/css/bootstrap.min.css';



const Layout = ({children,title})=>{
    return(
        <div>
        <header>
            {/* <Header/> */}
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/hireme"><a>Hireme</a></Link>
        </header>

        <h1>{title}</h1>
        {children}

        <footer>
           Maruf's Portfolio &copy; {new Date().getFullYear()} 
             <br/>Built in Next.js on top of React</footer>
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
                background:indigo;
                font-size:1.2rem;
            }

            header a{
                color:darkgrey;
                text-decoration:none;
                margin-left:20px;
                margin-right:20px;

            }

            header a:hover{
                font-weight:bold;
                color:white;
            }

            footer{
                padding:1em;
                background:#666;
                color:#fff;
                
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