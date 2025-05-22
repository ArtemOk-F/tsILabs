import React, { PureComponent } from 'react'

class Header extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            
            <>
            <div className='bg-red-500 text-4xl' ><Header/></div>
            <a href='/'>Home </a>
            <a href='/blog'>Blog </a>
            <a href='/about'>About </a>
            </>
            
        )
    }
}

export default Header