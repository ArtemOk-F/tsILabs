import React, { PureComponent } from 'react'

class Footer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <><a href='/'>Home </a>
            <a href='/blog'>Blog </a>
            <a href='/about'>About </a></>
        )
    }
}

export default Footer