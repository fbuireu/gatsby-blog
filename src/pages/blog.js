import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Link from 'gatsby-link';
import SEO from "../components/seo"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <main className="bg-brown text-white h-auto p-12">
            <section className="container mx-auto">
                <h1 className="text-4xl mono">Latest Blog Posts</h1>
                <h2 className="text-lg mb-12">Welcome to my page of blog posts</h2>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center mx-auto md:gap-8 mb-24"> 
                {data.allMarkdownRemark.edges.map(post => (
                   <article>
                   <Link to={post.node.frontmatter.path}>
    
                   <div className="block lg:h-64 relative leading-snug" key={ post.node.id }>
                   <img src={post.node.frontmatter.image} alt="" className="lg:block w-full items-center lg:h-full lg:object-cover lg:object-top relative lg:absolute"/> 
                       <span className="block relative lg:h-full lg:flex lg:items-end ">
                           <h3 className="lg:bg-gray-800 lg:bg-opacity-75 text-white text-xl font-semibold lg:px-3 lg:py-4 rounded text-left">{post.node.frontmatter.title}</h3>
                       </span>
                      <div className="mt-4 mb-8"> 
                           <p className="text-base mb-4">{post.node.frontmatter.description}</p>
                           <span id={post.node.frontmatter.category} className="text-black font-semibold text-sm py-2 px-4 mr-2 rounded">{post.node.frontmatter.category}</span>
                           <small className="text-base ml-2">&#128197; {post.node.frontmatter.date}</small>
                       </div> 
                   </div>
                   </Link>
               </article>
     ))}

               
                </div>
            </section>
        </main>
  </Layout>
)

export const pageQuery = graphql`
    query BlogIndexQuery {
            allMarkdownRemark  (sort: { fields: [frontmatter___date], order: DESC }){
                edges {
                    node {
                        id
                    frontmatter {
                        path
                        title
                        description
                        date
                        category
                        image
                    }
                    }
                }
            }
    }
`;

export default BlogPage;