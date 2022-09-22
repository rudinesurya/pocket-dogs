import React, { useContext } from 'react';
import { Outlet, Link } from "react-router-dom";
import { FavoritesContext } from '../../contexts/favorites.context';
import './navigation.styles.scss';
import logo from '../../logo.png';

const Navigation = () => {
    const {favorites} = useContext(FavoritesContext);

    return (
        <>
            <div className="navigation">
                <div className="nav-links-container">
                    <img src={logo} alt="My logo" />
                    <Link className="nav-link" to="/">
                        <h2>Home</h2>
                    </Link>
                    <Link className="nav-link" to="/favorite">
                        <h2>Favorites ({favorites.length})</h2>
                    </Link>
                </div>
            </div>

            <Outlet />
        </>
    )
};

export default Navigation;