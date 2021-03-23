import Link from 'next/link';
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import React ,{Component} from 'react';
import axios from 'axios';
import Error from './_error';

// import fetch from 'isomorphic-unfetch';


 class About extends Component {

    //getInitialProps

    static async getInitialProps(){
        const res = await fetch('http://api.github.com/users/isotop786');
        const statusCode = res.status > 200 ? res.status :  false;
        const data = await res.json();
        
        // returning object 
        return{
            user:data,
            statusCode
        }
    }


    // static async getInitialProps(){
    //    const res = await fetch("http://api.github.com/users/isotop786")
    //    const data = await res.json();

    //     //returning object 
    //     return {user: data}
    // }



    render(){

        const {user, statusCode} = this.props;

        if(statusCode){
            return (
                <Error></Error>
            )
        }

        return(
            <Layout title="About page">
                <div>
                </div>
            <img  className="img-fluid" src={user.avatar_url} alt=""/>
                <p>
                    I am Maruf. I am a fullstack javascript programmer. I am so passionate to write code, and Javascript and it's libraries and freamwork always amaze me.
    
                </p>
                if
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