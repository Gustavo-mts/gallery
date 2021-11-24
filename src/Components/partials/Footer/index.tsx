import React from 'react';
import './styled.scss';

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer--copy">
                    <div className="footer--copy-photos">
                        <p>Direito das fotos reservados para <a href="https://www.pexels.com/pt-br/" target="_blank">Pexels©</a></p>
                    </div>
                    <div className="footer--copy-template">
                        <p>Direito do template reservado para <a href="https://github.com/Gustavo-mts" target="_blank">Gustavo Martins©</a> </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;