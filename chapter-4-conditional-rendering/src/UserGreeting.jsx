import PropTypes from 'prop-types'

const UserGreeting = (props) => {
    if(props.isLoggedIn){
        return <h2 className='welcome-message'>Welcome {props.username}</h2>
    }
    else{
        return <h2 className='login-prompt'>Please log in to continue</h2>
    }

    // return(props.isLoggedIn ? <h2>Welcome {props.username}</h2> : <h2>Please log in to continue</h2>)
}

UserGreeting.prototype = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "guest",
}

export default UserGreeting