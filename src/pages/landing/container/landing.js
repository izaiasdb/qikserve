import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'antd'

import '../styles/landing.css'

const Landing = () => {
    return (
        <div>
            <div className='div-1anding'>
                <h1>QikServe</h1>
            </div>
            <div>
                <p>Welcome to QikServe</p>
                
                <Button type="primary">
                    <Link to={"/product"}>Product list</Link>
                </Button>

                {/* <Button type="primary">
                    <Link to={"/song"}>Song list</Link>
                </Button> */}
            </div>

            <div className={"footer"} >
                <p>
                    <b>QikServe - Code Challenge</b>
                </p>
            </div>
        </div>
    )
}

export default Landing;