import React, { useContext } from 'react';
import Gallery from '../../components/gallery/gallery.component';
import { FavoritesContext } from '../../contexts/favorites.context';
import Button from '../../components/button/button-component';
import './home.styles.scss';

const Home = () => {
    const {randoms, favorites, refreshRandoms, addItemToFavorites, removeItemFromFavorites} = useContext(FavoritesContext);

    return (
        <div className="home-container">
            <Gallery imageUrls={randoms} favorites={favorites} onAddItem={addItemToFavorites} onRemoveItem={removeItemFromFavorites} />
            <Button style={{ margin: "auto", width: "40%" }} onClick={refreshRandoms}>Refresh Random</Button>
        </div>
    );
}

export default Home;