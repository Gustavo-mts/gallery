import React from 'react';
import './styled.scss';


function Header() {
    return (
        <>
            <h2 className="header">
                <div className="header--area">
                    <div className="header--title">
                        <h1>My Album</h1>
                    </div>
                    <div className="header--search">
                        <input
                            type="text"
                            placeholder="O quê você procura?"
                        />
                    </div>
                </div>
            </h2>
        </>
    );
}

export default Header;