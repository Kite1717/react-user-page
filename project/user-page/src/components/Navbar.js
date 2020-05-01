import React from 'react'

import PropTypes from 'prop-types'

//short cut rfc
/*const Nabvar = () =>{

} */

function Navbar(props) {
    
    return(
        <div>
            
            <h1 style = {{textAlign : 'center'}}>{props.title} {props.pageCount}</h1>
            <h3>{props.description}</h3>
           
            <hr style = {{ height : '20px'}}/>
        </div>
    )
}

Navbar.propTypes = {

title : PropTypes.string.isRequired,
//**** */

description : PropTypes.string,
pageCount : PropTypes.number.isRequired

}

Navbar.defaultProps = {

    title : "Default App",
    pageCount : 1
}
export default Navbar;