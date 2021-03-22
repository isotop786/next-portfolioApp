import Link from 'next/link';
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import React ,{Component} from 'react';
import axios from 'axios';
// import fetch from 'isomorphic-unfetch';


 class About extends Component {

    //getInitialProps

    static async getInitialProps(){
        const res = await fetch('http://api.github.com/users/isotop786');
        const data = await res.json();
        
        // returning object 
        return{
            user:data
        }
    }


    // static async getInitialProps(){
    //    const res = await fetch("http://api.github.com/users/isotop786")
    //    const data = await res.json();

    //     //returning object 
    //     return {user: data}
    // }



    render(){

        const {user} = this.props;

        return(
            <Layout title="About page">
                <div>
                </div>
            <img  className="img-fluid" src={user.avatar_url} alt=""/>
                <p>
                    I am Maruf. I am a fullstack javascript programmer. I am so passionate to write code, and Javascript and it's libraries and freamwork always amaze me.
    
                </p>
                <img src="/static/Maruf.png" alt="Maruf's Photo" height="200px"/>
            <Link href="/">
            <a>Home Page</a>
            </Link>
            <style jsx>{`
                .img-fluid{
                    height:220px;
                    border-radius: 150px;
                }
            `}</style>
            </Layout>
        )
    }


}



export default About;