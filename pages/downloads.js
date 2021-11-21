import Layout from '../components/Layout';
import Link from 'next/link';
import Error from './_error';
import {Component} from 'react'


export default class Download extends Component{
    state={
        pass:null,
    }
    componentDidMount(){
        this.setState({
            pass:prompt('Enter Key: ')
        })
    }

    render(){

        if(this.state.pass == '1234')
        {
            return (
                <Layout>
                    <div className="container" style={{maxHeight:"100vh"}}>
                        <div className="row">
                            <div className="col-sm-3">
                                <h3 className="display-4">Document Download</h3>
                            </div>
                            <div className="col-sm-6 text-center">
                                <ul className="mb-3" style={{listStyleType:"none",marginBottom:"20px"}}>
                                    <li><Link  href="../static/Maruf Photo .jpg"><a className="btn btn-primary my-2">  Photo</a></Link></li>
                                    <li><Link  href="../static/CVofMaruf.pdf"><a className="btn btn-primary my-2">  CV</a></Link></li>
                                    <li><Link  href="../static/MarufCV.bd.pdf"><a className="btn btn-primary my-2">  CV for BD</a></Link></li>
                                    <li><Link  href="../static/Original BSc Certificate.pdf"><a className="btn btn-primary my-2">BSc Certificate</a></Link></li>
                                    <li><Link  href="../static/BSc Transcript.pdf"><a className="btn btn-primary my-2">BSc Transcript</a></Link></li>
                                    <li><Link  href="../static/Completion Letter.pdf"><a className="btn btn-primary my-2">BSc Completion Letter</a></Link></li>
                                    <li><Link  href="../static/HSC_CERTIFICATE.pdf"><a className="btn btn-primary my-2">HSC Certificate</a></Link></li>
                                    <li><Link  href="../static/SSC_CERTIFICATE.pdf"><a className="btn btn-primary my-2">SSC Certificate</a></Link></li>
                                    <li><Link  href="../static/NewPassport.pdf"><a className="btn btn-primary my-2">Passport</a></Link></li>
                                    <li><Link  href="../static/Resume (Islam).docx"><a className="btn btn-primary my-2">Resume</a></Link></li>
                                    <li><Link  href="../static/বার্থ সার্টিফিকেট.jpg"><a className="btn btn-primary my-2">Birth Certificate</a></Link></li>
                                    <li className="mb-4"><Link  href="../static/NID.pdf"><a className="btn btn-primary my-2">Bangladeshi NID</a></Link></li>
                                </ul>
                            </div>
                            <div className="col-sm-3"></div>
                        </div>
                    </div>
                </Layout>
            )
        }
        else{
            return(
                <Layout>
                    <h3 className="mt-4 pt-3 text-danger">You are not authorized for this page.</h3>
                    <p className="mt-4 text-info ">Please contact <strong className="text-danger font-weight-bold">Maruf</strong> for getting access.</p>
                    <div className="mt-3">
                        <Link href="/"><a className="btn btn-primary">Back to Home page</a></Link>
                    </div>
                    <style global jsx>{`
                    
                    ul {
                        list-style-type: none;
                        margin: 0;
                        padding: 0;
                      }
                    
                    `}</style>
                </Layout>
            )
        }


    }


}
