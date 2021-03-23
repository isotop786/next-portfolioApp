import Layout from '../components/Layout'
import Link from 'next/link';
const Hireme = ()=>{
    return(
        <Layout title="Hireme ">
            <div className="container"> 
            <p>You can hireme me at :<a href="mailto:marufislam77@gmail.com">marufislam77@gmail.com</a>
            
            </p>
            <p>Phone: +601162353360</p>
            <p>Phone: +8801976293062</p>
            <p>Whatsapp: +601162353360</p>
            <p>Skype: live:marufislam77</p>
            <Link href="../static/CVofMaruf.pdf"><a className="btn btn-primary btn-lg">Download My CV</a></Link>
            </div>
        </Layout>
    )
}

export default Hireme;