import React from 'react'
import { Link } from 'react-router-dom'
import './GridItem.css'

function GridItem({title, logo, route}) {
    return (
        <div className="gridItem" >
                <Link to={`/projects/${route}`}>
                    <img src={logo} alt='project item' />
                <p className="gridItemTitle">
                    {title}
                </p>
                </Link>
        </div>
    )
}

export default GridItem
