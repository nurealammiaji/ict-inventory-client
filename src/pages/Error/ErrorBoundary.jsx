import React from 'react'
import { Link, useRouteError } from 'react-router-dom';

const ErrorBoundary = () => {
    const error = useRouteError();
    console.log(error.data);
    return (
        <div>
            <p className='text-error font-bold text-2xl mt-10 mb-20'>{error.data}</p>
            <div>
                <Link to={"/"} className='btn btn-success text-white'>Go back to Home</Link>
            </div>
        </div>
    )
}

export default ErrorBoundary
