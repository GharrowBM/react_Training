import React from 'react'
import '../styles/Body.css'

class Body extends React.PureComponent {
    render() {
        return(
            <main className="site-body">
                    <h1>{this.props.title}</h1>
                    {this.props.children}
                </main>
        )
    }
}

export default Body