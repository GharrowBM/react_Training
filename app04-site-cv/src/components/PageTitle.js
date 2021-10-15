import React from 'react'
import '../styles/PageTitle.css'

class PageTitle extends React.PureComponent {
    render() {
        return(
            <div className="page-title">
                <h1>{this.props.children}</h1>
                </div>
        )
    }
}

export default PageTitle