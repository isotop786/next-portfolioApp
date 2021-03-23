import Layout from '../components/Layout';
import Link from 'next/link';

const Portfolio = ()=>{
    return(
        <Layout title="My Portfolio">
            <div className="container">

          
            <div className="row mt-4">
                <div className="col-4 p-3">
                    <div className="card card-default ">
                    <h3 className="card-header">Hacker News Clone</h3>
                    <div className="card-body">
                        <p>
                            Hacker News site clone using API and next.js
                        </p>
                        <div className="d-flex justify-content-between">
                            <a className="btn btn-info" href="#">Visit the site</a>
                            <a className="btn btn-danger " href="#">Code</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-4 p-3">
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
                <div className="col-4 p-3">
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
                <div className="col-4 p-3">
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