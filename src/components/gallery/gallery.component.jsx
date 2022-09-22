import PhotoItem from '../photo-item/photo-item.container';
import './gallery.styles.scss';

const Gallery = ({imageUrls, favorites, onAddItem, onRemoveItem}) => {
    return (
        <div className='gallery-container'>
            {imageUrls.map((imageUrl) => (
                <PhotoItem key={imageUrl} imageUrl={imageUrl} favorited={favorites?.includes(imageUrl)} onAddItem={onAddItem} onRemoveItem={onRemoveItem}/>
            ))}
        </div>
    );
}

export default Gallery;