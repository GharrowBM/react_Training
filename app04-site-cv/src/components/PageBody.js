import React from 'react'
import '../styles/PageBody.css'

class PageBody extends React.PureComponent {
    render() {
        return(
            <div className="page-body">
                    {this.props.children}
                </div>
        )
    }
}

export default PageBody