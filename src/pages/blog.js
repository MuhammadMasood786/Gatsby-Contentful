import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Img from "gatsby-image";
import Layout from '../component/layout'
import SEO from '../component/seo'

const Blog = () => {
    const data = useStaticQuery(
        graphql
            `
        query  {
            allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
              edges {
                node {
                  title
                  id
                  slug
                  featuredImage {
                    fluid(maxWidth:750) {
                        ...GatsbyContentfulFluid
                    }
                  }
                  excerpt {
                    childrenMarkdownRemark {
                      excerpt(pruneLength: 150)
                    }
                  }
                  publishedDate(formatString: "DD MM YYYY")
                }
              }
            }
          }          
        `
    )

    return (
        <Layout>
            <SEO title="Blog" />
            <p>
                <Link to="/">Go back to the homepage</Link>
            </p>
            <div className='posts'>
                {data.allContentfulBlogPost.edges.map(edge => {
                    return (
                        <li className='post' key={edge.node.id}>
                            <h2>
                                <Link to={`/blog/${edge.node.slug}`}>{edge.node.title}</Link>
                            </h2>
                            <div className='meta'>
                                <span>Posted on {edge.node.publishedDate}</span>
                            </div>
                            {
                                edge.node.featuredImage && (
                                    <Img
                                        className='featured'
                                        fluid={edge.node.featuredImage.fluid}
                                        alt={edge.node.title}
                                    />
                                )
                            }
                            <p className="excerpt">
                                {edge.node.excerpt.childrenMarkdownRemark.excerpt}
                            </p>
                            <div className='button'>
                                <Link to={`/blog/${edge.node.slug}`} >Read more</Link>
                            </div>
                        </li>

                    )
                })}
            </div>
        </Layout>
    )
}


export default Blog