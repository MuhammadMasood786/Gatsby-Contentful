import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../component/layout"
import Img from "gatsby-image"
import SEO from "../component/seo"


// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"



export const query = graphql`
query($slug:String!){
contentfulBlogPost(slug:{eq:$slug}){
    title
    publishedDate(formatString: "Do MMMM, YYYY")
    featuredImage {
        fluid(maxWidth: 750) {
          ...GatsbyContentfulFluid
        }
      }
     body{
         raw
     }
}
}
`

const BlogPost = props => {
    return (
        <Layout>
            <SEO title={props.data.contentfulBlogPost.title} />
            <Link to="/blog/">
                Visit the blog post
            </Link>
            <div className="content">
                <h1>{props.data.contentfulBlogPost.title}</h1>
                <span className='meta'>
                    Posted on {props.data.contentfulBlogPost.publishedDate}
                </span>
                {props.data.contentfulBlogPost.featuredImage && (
                    <Img
                        className="featured"
                        fluid={props.data.contentfulBlogPost.featuredImage.fluid}
                        alt={props.data.contentfulBlogPost.title}
                    />
                )}
            </div>
        </Layout>
    )
}

export default BlogPost