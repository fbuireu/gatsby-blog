import React from "react"
import Link from 'gatsby-link';
import { graphql } from 'gatsby'
import Layout from "../components/layout"

import SEO from "../components/seo"

export default function IndexPage({ data }) {

return  (

  <Layout>
    <SEO title="Home" />
        <main className="container flex flex-col bg-brown text-white">
            <div className="p-4 md:p-12 md:w-3/4 mx-auto relative">
                <section className="bg-brown text-white text-center md:text-left rounded-lg lg:flex p-12 md:p-20">
                    <img src="https://i.imgur.com/mz9QfKo.jpg" className="h-60 w-48 lg:w-64 lg:h-80 mx-auto md:mr-12" alt="portrait" id="home-img"/>
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="mono text-xl my-8">Hi there, I'm Nikki!</h1>
                        <p className="mt-4 text-base text-white">I'm a Front End Developer working from home in the United States. I love making websites and thought I'd create this blog to share some of my projects and favorite web development tools with you. Feel feel to browse my recent posts and projects or find something new in the resources section 😎</p>
                    </div>
                </section>
            </div>

            <div className="flex flex-col justify-center mx-auto mt-24 mb-24"> 
               
                      <>
                      {data.allMarkdownRemark.edges.map(post => (
                    <article className="m-4">
                    
                        <>
                        <Link to={post.node.frontmatter.path}>
                  
                        <span className="flex flex-col leading-snug">
                            <div className="m-4" key={ post.node.id }>
                                <h3 className="text-white text-2xl font-semibold mb-2">{ post.node.frontmatter.title }</h3>
                                <p className="text-base mb-4">{post.node.frontmatter.description}</p>
                                <span id={ post.node.frontmatter.category } className="text-black font-semibold text-sm py-2 px-4 mr-2 rounded">{ post.node.frontmatter.category }</span>
                                <small className="text-base ml-2">&#128197; {post.node.frontmatter.date }</small>
                            </div>
                        </span>
                       
                        </Link>
                        </>
                         
                    </article>
                    ))}
                    <Link to={"/blog"} exact className="mx-auto mt-12 text-base"><button className="w-48 h-12 font-semibold bg-yellow hover:bg-brown text-brown hover:text-yellow border-4 border-brown hover:border-yellow cursor-pointer rounded"> View Blog</button></Link>
                    </>
                
                 
               
                </div>
        </main>
   
  </Layout>
)};


export const pageQuery = graphql`
    query BlogPostsQuery {
            allMarkdownRemark (sort: { fields: [frontmatter___date], order: DESC }){  
                edges {
                    node {
                        id
                    frontmatter {
                        path
                        title
                        description
                        date
                        category
                    }
                    }
                }
            }
    }
`;



