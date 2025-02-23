import React, { PureComponent, ReactNode } from 'react'

interface Props {}
interface State {}

class About extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return (
            <div>it's me Artem</div>
        )
    }
}

export default About
