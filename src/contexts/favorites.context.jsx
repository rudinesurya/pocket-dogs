import { createContext, useState, useEffect } from "react";
import { useBeforeunload } from 'react-beforeunload';
import dogApi from '../api/DogsApi';

export const FavoritesContext = createContext({
    randoms: [],
    favorites: [],
    addItemToFavorites: (item) => {},
    removeItemFromFavorites: (item) => {},
});

export const FavoritesProvider = ({children}) => {
    const limit = 6;
    const [randoms, setRandoms] = useState([]);
    const [favorites, setFavorites] = useState([]);

    const fetchData = async () => {
        const result = [];
        for (let i = 0; i < 6; ++i) {
            const response = await dogApi.get('/');
            result.push(response.data.url);
        }
        setRandoms(result);
    }

    useEffect(() => {
        fetchData();

        var favorites = JSON.parse(localStorage.getItem("favorites"));
        setFavorites(favorites ?? []);
    }, []);  

    useBeforeunload((event) => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    });

    const refreshRandoms = () => {
        fetchData();
    }

    const addItemToFavorites = (item) => {
        if (favorites.length >= limit)
            return;

        let newArray = [...favorites, item];
        setFavorites(newArray);
    }

    const removeItemFromFavorites = (item) => {
        let newArray = favorites.filter(x => x !== item);
        setFavorites(newArray);
    }

    const value = {randoms, favorites, refreshRandoms, addItemToFavorites, removeItemFromFavorites }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}