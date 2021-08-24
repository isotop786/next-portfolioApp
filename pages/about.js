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


    render(){

        const {user, statusCode} = this.props;

        if(statusCode){
            return (
                <Error statusCode={statusCode}></Error>
            )
        }

        return(
            <Layout title="About Me">
             

             <div className="container">
                <div className="row mt-4 ">
                    <div className="col-md-6">
                        <p className="lead">
                            I am Full stack web developer. I have Bachelor Degree in Software Engineering from Limkokwing Univerisity, Malaysia.
                            I am experienced in programming with<strong>PHP</strong>and <strong>Javascript</strong>. For backend I use PHP, for frontend I mostly use <strong>React.js</strong> and also I have exprience with Vue.js. I am very passionate about programming and creating awesome applications.
                        </p>
                        <h5 className="font-weight-bold">My Core strengths are</h5>
                        <ul className="list-group font-weight-bold">
                            <li className="list-group-item">PHP and MySQL</li>
                            <li className="list-group-item">Laravel Framework</li>
                            <li className="list-group-item">React.js/Next.js </li>
                            <li className="list-group-item">Vue.js / Vue3</li>
                            <li className="list-group-item">Firebase </li>
                            
                        </ul>
                        <div className="mt-4 font-weight-bold">
                            <a target="_blank" href="https://github.com/isotop786?tab=repositories">My github account</a>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <img className="img-fluid" height="300px" src="../static/Maruf.png"/>
                    </div>
                </div>
             </div>
              
            <style global jsx>{`
            body{
                height:100vh;
            }
                .img-fluid{
                    height:400px;
                    border-radius: 250px;
                }
            `}</style>
            </Layout>
        )
    }


}



export default About;