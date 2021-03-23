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
                            I am currently pursuing  MSc in Software Engineering in <strong className="font-weight-bold">University Putra Malaysia (UPM), Malaysia.</strong>
                            I am experienced in programming with Javascript. For backend I use Node.js with Express.js, for frontend I use React and Next.js. I am very passionate about programming and creating awesome applications.
                        </p>
                        <h5 className="font-weight-bold">My Core strengths are</h5>
                        <ul className="list-group font-weight-bold">
                            <li className="list-group-item">Node.js and Express.js</li>
                            <li className="list-group-item">RESTful API with Node.js</li>
                            <li className="list-group-item">Mongo DB and MySQL</li>
                            <li className="list-group-item">React and Next.js</li>
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