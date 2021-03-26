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
                    <h3 className="card-header">Githubfinder</h3>
                    <div className="card-body">
                        <p>
                           Github api and React.js
                        </p>
                        <div className="d-flex justify-content-between">
                            <a className="btn btn-info" href="#">Visit the site</a>
                            <a className="btn btn-danger " href="#">Code</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-sm-4 p-3">
                    <div className="card card-default ">
                    <h3 className="card-header">Twitter finder</h3>
                    <div className="card-body">
                        <p>
                            Using twitter API and next.js
                        </p>
                        <div className="d-flex justify-content-between">
                            <a className="btn btn-info" href="#">Visit the site</a>
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