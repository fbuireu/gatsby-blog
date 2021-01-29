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
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

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
        <footer className="bg-brown flex flex-col align-center text-center my-8 mx-auto w-100 h-auto pb-16 text-white">
             <div id="to-top" className="block">
                <a href="#top" className="cursor-pointer hover:underline"><FontAwesomeIcon icon={ faChevronUp  }></FontAwesomeIcon><br/>Back To Top</a>
            </div>
            <div className="mt-16 flex flex-col justify-between">
                <p className="text-sm mt-8 mb-4 leading-loose">Thank you for visiting my blog!</p>
                <a href="mailto:nikkipeel.dev@gmail.com" className="cursor-pointer mb-4 font-bold hover:underline hover:text-pink">Contact Me</a>
                <small>Last build: {/*{build} */}</small>
            </div>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
