/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faCodepen, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


import Menu from "./menu";

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  {/*const build = document.lastModified; */}

  return (
    <>
      <Menu  siteTitle={data.site.siteMetadata?.title || `Title`}/>
        <main  id="top">{children}</main>
        <footer className="bg-brown flex flex-col justify-center align-center text-center my-8 mx-auto w-100 h-auto pb-16 text-white">
             <div id="to-top" className="block">
                <a href="#top" className="cursor-pointer hover:underline"><FontAwesomeIcon icon={ faChevronUp  }></FontAwesomeIcon><br/>Back To Top</a>
            </div>
            <div className="mt-16 flex flex-col justify-between">
                <p className="text-sm mt-8 mb-4 leading-loose">Thank you for visiting my blog!</p>

                <div className="flex justify-center py-3">
                  <a href="mailto:nikkipeel.dev@gmail.com" className="mr-8 text-lg text-white hover:text-pink cursor-pointer" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faEnvelope} /></a>
                  <a href="https://www.github.com/nikkipeel" className="mr-8 text-lg text-white hover:text-pink cursor-pointer" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faGithub} /></a>
                  <a href="https://www.codepen.io/nikki-peel" className="mr-8 text-lg text-white hover:text-pink cursor-pointer" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faCodepen} /></a>
                  <a href="https://www.linkedin.com/in/nikkipeel" className="text-lg text-white hover:text-pink cursor-pointer" target="_blank" rel="noreferrer"> <FontAwesomeIcon icon={faLinkedin} /></a>
    
                </div>
            </div>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
