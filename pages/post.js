import Layout from '../components/Layout'

const Post =({url})=>
(
    <Layout  title={url.query.title}>
        <p className="mt-4 p-3 lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, necessitatibus reprehenderit architecto labore explicabo aliquid! Ut, ipsa voluptates! Corporis sapiente ad eos officia voluptas praesentium iure nisi sint alias repellat.
        </p>
    </Layout>
)

export default Post;