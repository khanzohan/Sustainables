import React from 'react';
import './collections-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionsPreview = ({ title, items }) => (
    <div className='collections-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
                .filter((item, idx) => idx < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
        </div>
    </div>
)

export default CollectionsPreview;