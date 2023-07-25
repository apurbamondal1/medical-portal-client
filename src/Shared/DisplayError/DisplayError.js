import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useRouteError } from 'react-router-dom';

const DisplayError = () => {
    const {logOut} = useContext(AuthContext)
    const error = useRouteError();
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
    return (
        <div className='text-red-500'>
            <p>Something went wrong!!!</p>
            <p className='text-red-400'>{error.statusText || error.message}</p>
            <h4 className='text-3xl'>Please<button onClick={handleLogOut}>SignOut</button></h4>
        </div>
    );
};

export default DisplayError;