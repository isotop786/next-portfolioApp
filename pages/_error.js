import Layout from '../components/Layout';

export default ({statusCode})=>{
    return(
        <Layout title="Error">

            {statusCode ? `Couldn't get your data status code is ${statusCode}`

            : 
            <p>Sorry couldn't get there.</p>
        
        }
           
        </Layout>
    )
}