import Layout from '../components/Layout';
import Link from 'next/link';

const Portfolio = ()=>{
    return(
        <Layout title="My Portfolio">
            <div className="container">

          
            <div className="row mt-2">

            <div className="col-sm-4 p-2">
                    <div className="card card-default ">
                        <h3 className="card-header">Bagjour </h3>
                        <div className="card-body">
                            <p>
                           Full stact Node/React MERN Application
                            </p>
                            <p>Fully mobile responsive design</p>
                            <div className="d-flex justify-content-between">
                                <a className="btn btn-info" target="_blank" href="https://bagjour-frontend.herokuapp.com/">Visit the site</a>
                                <a className="btn btn-danger " target="_blank" href="#" onClick={()=>alert('Please Contact Maruf. Thaks :)')}>Code</a>
                            </div>
                        </div>
                    </div>
                    <div className="card card-default ">
                        <h3 className="card-header">Github Finder </h3>
                        <div className="card-body">
                            <p>
                            React Github User Finder App.
                            </p>
                            <p>Fully mobile responsive design</p>
                            <div className="d-flex justify-content-between">
                                <a className="btn btn-info" target="_blank" href="https://react-github-findr.herokuapp.com/">Visit the site</a>
                                <a className="btn btn-danger " target="_blank" href="#" onClick={()=>alert('Please Contact Maruf. Thaks :)')}>Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="col-sm-4 p-2">
                    <div className="card card-default ">
                    <h3 className="card-header">React Time Tracker </h3>
                    <div className="card-body">
                        <p>
                            Time Tracking web app build with React and Firebase
                        </p>
                        <p>Fully mobile responsive design</p>
                        <div className="d-flex justify-content-between">
                            <a className="btn btn-info" target="_blank" href="https://react-timetracker.herokuapp.com/">Visit the site</a>
                            <a className="btn btn-danger " target="_blank" href="https://github.com/isotop786/react-timetracker">Code</a>
                        </div>
                    </div>
                    </div>
                </div>
            
            <div className="col-sm-4 p-2">
                    <div className="card card-default ">
                    <h3 className="card-header">Posty </h3>
                    <div className="card-body">
                        <p>
                            Simple Twitter like application in laravel 8.
                        </p>
                        <p>Fully mobile responsive design</p>
                        <div className="d-flex justify-content-between">
                            <a className="btn btn-info" target="_blank" href="http://twitter-cloneapp.herokuapp.com/home">Visit the site</a>
                            <a className="btn btn-danger " target="_blank" href="https://github.com/isotop786/posty-laravel">Code</a>
                        </div>
                    </div>
                    </div>
                </div>

            <div className="col-sm-4 p-2">
                    <div className="card card-default ">
                    <h3 className="card-header">React Breaking-Bad Cast  </h3>
                    <div className="card-body">
                        <p>
                            Breaking Bad TV show's casts app with React.js and Breaking Bad Api
                        </p>
                        <p>Fully mobile responsive design</p>
                        <div className="d-flex justify-content-between">
                            <a className="btn btn-info" target="_blank" href="http://react-brakingbad-api.herokuapp.com/">Visit the site</a>
                            <a className="btn btn-danger " target="_blank" href="https://github.com/isotop786/react-braeking">Code</a>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-sm-4 p-2">
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
                <div className="col-sm-4 p-2">
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
                <div className="col-sm-4 p-2">
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
                <div className="col-sm-4 p-2">
                    <div className="card card-default ">
                    <h3 className="card-header">Moogle</h3>
                    <div className="card-body">
                        <p>
                           Movie and TV show searching web application built on vue.js
                        </p>
                        <div className="d-flex justify-content-between">
                            <a className="btn btn-info" target="_blank" href="http://moogle-movieapp.herokuapp.com/">Visit the site</a>
                            <a className="btn btn-danger " href="#">Code</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-sm-4 p-2">
                    <div className="card card-default ">
                    <h3 className="card-header">Vue.js Authentication Appp </h3>
                    <div className="card-body">
                        <p>
                           User authentication app with vue.js, vuex and firebase
                        </p>
                        <div className="d-flex justify-content-between">
                            <a className="btn btn-info" target="_blank" href="http://vue-auth-firebase.herokuapp.com/dashboard">Visit the site</a>
                            <a className="btn btn-danger " href="#">Code</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-sm-4 p-2">
                    <div className="card card-default ">
                    <h3 className="card-header">Vue Corona tracker </h3>
                    <div className="card-body">
                       <p>
                           Covid-19 tracker with vue.js
                       </p>
                        <div className="d-flex justify-content-between">
                            <a className="btn btn-info" target="_blank" href="http://vue-corona-tracker.herokuapp.com/">Visit the site</a>
                            <a className="btn btn-danger " href="#">Code</a>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-sm-4 p-2">
                    <div className="card card-default ">
                    <h3 className="card-header">Task Manager </h3>
                    <div className="card-body">
                       <p>
                           Laravel 8 + Vue.js Task Manager
                       </p>
                        <div className="d-flex justify-content-between">
                            <a className="btn btn-info" target="_blank" href="https://todolisht.herokuapp.com/">View the App</a>
                            
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