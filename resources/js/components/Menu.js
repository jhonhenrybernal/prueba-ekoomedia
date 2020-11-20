import React from 'react';
import ReactDOM from 'react-dom';

function Menu() {
    return (
        <header>
            <nav>

                <div className="navbar" id="navbar">
                    <div className="content container">
                        <div className="responsive">
                            <ul>
                                <li className="icon"><a href="#" className="close">&#9776;</a></li>
                                <li className="home"><a href="#"
                                    title="Arte humano test.net">Arte humano test</a></li>

                            </ul>
                        </div>
                        <div className="menu">
                            <ul>
                                <li className="home"><a href="/" title="Inicio">Inicio</a></li>
                                <li className="dropdown"><a href="#">Viajes</a>
                                    <ul>
                                        <li><a href="/avion">Avion</a></li>
                                        <li><a href="/avioneta">Avioneta</a></li>
                                        <li><a href="/jet">Jet</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

        </nav>
        </header>
    );
}

export default Menu;

if (document.getElementById('menu')) {
    ReactDOM.render(<Menu />, document.getElementById('menu'));
}
