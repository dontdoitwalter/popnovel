import React from 'react';
import Profile from './Profile'

const Splash = (props) => {
        return(
            <div>
            <Profile token={props.sessionToken} />
        </div>
        )
    }
export default Splash;