import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import { MainPage } from './modules/main'
export default class Index extends React.Component {
  render () {
    return (
      <div>

            {/*<Link to={prefixLink('/markdown/')}>Markdown</Link>*/}
      <MainPage />
    
      </div>
    )
  }
}
