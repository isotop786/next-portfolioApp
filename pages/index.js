import Link from 'next/link'
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';




const Index = ()=>{
    return(
        <Layout title="Hey there, it's Maruf">
            
                <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-4 tex-center">
                        <h3 className="lead p-3 ">
                           Full stack web developer.
                        </h3>
                        <Link href='/about'>
                        <a className="btn btn-primary">Learn More</a>
                        </Link>
                        <br/>
                        <Link href='/portfolio'>
                        <a className="btn btn-info mt-3">My Personal Projects</a>
                        </Link>
                        <br/>
                        <Link href='/hireme'>
                        <a className="btn btn-danger mt-3">Contact Me</a>
                        </Link>
                    </div>
                    <div className="col-md-4">
                        <img className="cirle mt-3" src="../static/Maruf Photo .jpg" alt=""/>
                    </div>
                    <div className="col-md-2"></div>
                </div>
               
            
                </div>

                <style jsx>{`
                        .cirle{
                            border-radius:170px;
                        }
                    `}</style>          
        </Layout>
        
    )
}

export default Index;