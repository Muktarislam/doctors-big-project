import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link ms-6 active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5 text-white" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5 text-white" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5 text-white" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ms-5 text-white" href="#">Pricing</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;