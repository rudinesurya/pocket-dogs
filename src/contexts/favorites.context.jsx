import { createContext, useState, useEffect } from "react";
import { useBeforeunload } from 'react-beforeunload';

export const FavoritesContext = createContext({
    favorites: [],
    addItemToFavorites: (item) => {},
    removeItemFromFavorites: (item) => {},
});

export const FavoritesProvider = ({children}) => {
    const limit = 6;
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        var favorites = JSON.parse(localStorage.getItem("favorites"));
        setFavorites(favorites ?? []);
    }, []);  

    useBeforeunload((event) => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    });

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

    const value = {favorites, addItemToFavorites, removeItemFromFavorites }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}