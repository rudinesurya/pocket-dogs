import React, { useContext, useEffect, useState } from 'react';
import dogApi from '../../api/DogsApi';
import Gallery from '../../components/gallery/gallery.component';
import { FavoritesContext } from '../../contexts/favorites.context';
import Button from '../../components/button/button-component';
import './home.styles.scss';

const Home = () => {
    const [dogs, setDogs] = useState([]);
    const {favorites, addItemToFavorites, removeItemFromFavorites} = useContext(FavoritesContext);

    async function fetchData() {
        const result = [];
        for (let i = 0; i < 6; ++i) {
            const response = await dogApi.get('/');
            result.push(response.data.url);
        }
        setDogs(result);
    }

    useEffect(() => {
        fetchData();
    }, []);    


    return (
        <div className="home-container">
            <Gallery imageUrls={dogs} favorites={favorites} onAddItem={addItemToFavorites} onRemoveItem={removeItemFromFavorites} />
            <Button style={{ margin: "auto", width: "40%" }} onClick={fetchData}>Refresh Random</Button>
        </div>
    );
}

export default Home;