import React, { useContext, useEffect, useState } from 'react';
import Gallery from '../../components/gallery/gallery.component';
import { FavoritesContext } from '../../contexts/favorites.context';

const Favorite = () => {
    const {favorites, removeItemFromFavorites} = useContext(FavoritesContext);

    return (
        <Gallery imageUrls={favorites} favorites={favorites} onRemoveItem={removeItemFromFavorites} />
    );
}

export default Favorite;