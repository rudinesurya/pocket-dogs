import Button from '../button/button-component';
import './photo-item.styles.scss';

const PhotoItem = ({imageUrl, favorited, onAddItem, onRemoveItem}) => {
    const ext = imageUrl.split('.').pop();
    
    return (
        <div className='photo-item-container'>
            {ext !== 'mp4' ? <img src={imageUrl}/> 
            :   <video controls>
                    <source src={imageUrl} />
                    Your browser does not support HTML5 video.
                </video>}
            
            { favorited ? 
            <Button buttonType='inverted' onClick={() => onRemoveItem(imageUrl)}>Remove</Button> 
            : <Button buttonType='inverted' onClick={() => onAddItem(imageUrl)}>Add</Button> }
            
        </div>
    );
}

export default PhotoItem;