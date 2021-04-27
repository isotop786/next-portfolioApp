import Layout from '../components/Layout';
import Link from 'next/link';

const Portfolio = ()=>{
    return(
        <Layout title="My Portfolio">
            <div className="container">

          
            <div className="row mt-4">
                <div className="col-sm-4 p-3">
                    <div className="card card-default ">
                    <h3 className="card-header">TODO APP </h3>
                    <div className="card-body">
                        <p>
                            A todo application using Node and Express.js 
                        </p><p>
                            Login : maruf
                            Password: maruf
                        </p>
                        <div className="d-flex justify-content-between">
                            <a className="btn btn-info" target="_blank" href="https://my-todo-app-778866.herokuapp.com/">Visit the site</a>
                            <a className="btn btn-danger " target="_blank" href="#">Code</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-sm-4 p-3">
                    <div className="card card-default ">
                    <h3 className="card-header">Movie Trailer App </h3>
                    <div className="card-body">
                        <p>
                            A movie trailler app using React / Next.js and Node.js as backend
                        </p>
                        <div className="d-flex justify-content-between">
                            <a className="btn btn-info" target="_blank" href="https://maruf-movieapp.herokuapp.com/">Visit the site</a>
                            <a className="btn btn-danger " target="_blank" href="https://github.com/isotop786/movieapp-react">Code</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-sm-4 p-3">
                    <div className="card card-default ">
                    <h3 className="card-header">Vue Finder</h3>
                    <div className="card-body">
                        <p>
                           Github api and vue.js
                        </p>
                        <div className="d-flex justify-content-between">
                            <a className="btn btn-info" target="_blank" href="http://vue-finder-maruf.herokuapp.com/">Visit the site</a>
                            <a className="btn btn-danger " href="#">Code</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-sm-4 p-3">
                    <div className="card card-default ">
                    <h3 className="card-header">Moogle</h3>
                    <div className="card-body">
                        <p>
                           Movie and TV show searching web application built on vue.js
                        </p>
                        <div className="d-flex justify-content-between">
                            <a className="btn btn-info" href="http://moogle-movieapp.herokuapp.com/">Visit the site</a>
                            <a className="btn btn-danger " href="#">Code</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-sm-4 p-3">
                    <div className="card card-default ">
                    <h3 className="card-header">Social Media application </h3>
                    <div className="card-body">
                        <p>
                            MERN stack 
                        </p>
                        <div className="d-flex justify-content-between">
                            <a className="btn btn-info" href="#">Visit the site</a>
                            <a className="btn btn-danger " href="#">Code</a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </Layout>
    )
}

export default Portfolio;