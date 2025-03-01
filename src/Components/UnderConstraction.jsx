import React from 'react';
import { Link } from 'react-router-dom';

const UnderConstraction = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Warning</h1>
                        <p className="py-6">
                        The website or webpage you are currently viewing is still being developed and is not fully functional yet.
                        </p>
                        <button className="btn btn-primary"> <Link to={'/'}>Home</Link> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnderConstraction;