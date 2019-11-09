import React from 'react';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home">
            <div>
                <Link to="/reactTransitionGroup"><button>to ReactTransitionGroup</button></Link>
                <Link to="/about"><button>to About</button></Link>
            </div>
        </div>
    )
}

export default Home;
