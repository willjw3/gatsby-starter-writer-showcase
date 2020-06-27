import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import "../styles/latest.scss"

const Latest = () => {
    const data = useStaticQuery(graphql`
        query LatestQuery {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC}) {
                edges {
                    node {
                        html 
                        frontmatter {
                            title 
                            tags
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)
    const posts = data.allMarkdownRemark.edges
    
    return (
        <div className="latest">
            <div className="latest-title">
                <h3>The Latest</h3>
            </div>
            <div className="latest-posts">
                <Link id="link1" to={posts[0].node.fields.slug}>
                    <small>{posts[0].node.frontmatter.title} <span>(philosophy)</span></small>
                </Link>
                <Link id="link2" to={posts[1].node.fields.slug}>
                    <small>{posts[1].node.frontmatter.title} <span>(psychology)</span></small>
                </Link>
                <Link id="link3" to={posts[2].node.fields.slug}>
                    <small>{posts[2].node.frontmatter.title} <span>(politics)</span></small>
                </Link>
            </div>
        </div>
    )
}

export default Latest