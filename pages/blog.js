import Layout from '../components/Layout'
import Link from 'next/link';
import {Component } from 'react';

const PostLink = ({title})=>{
    return(
        <li className="list-group-item">
        <Link as={`/blog/${title}`} href={`post?title=${title}`}>
        <a>{title}</a></Link>
        </li>
    )
}

export default class Blog extends Component{
    
    render(){
        return(
            <Layout title="My Blog">
                <ul className="list-group">
                    <PostLink title="React"/>
                    <PostLink title="Node"/>
                    <PostLink title="Next"/>
                    <PostLink title="MERN"/>
                </ul>
              
                


            </Layout>
        )
    }
}