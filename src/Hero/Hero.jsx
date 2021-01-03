import React from 'react'
import PropTypes from 'prop-types'

function Hero({name}) {
    console.log('Hero render', name);

    return (
        <div>
            Hero name: {name}
        </div>
    )
}

Hero.propTypes = {
    name : PropTypes.string
}


export default React.memo(Hero)

