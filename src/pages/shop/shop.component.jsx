import React from 'react';
import './shop.styles.scss';
import SHOP_DATA from './shopdata.js';
import CollectionsPreview from '../../components/collections-preview/collections-preview';

class Shop extends React.Component {
    constructor() {
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
            {
                collections.map(({ id, ...otherCollectionProps }) => 
                <CollectionsPreview key={id} {...otherCollectionProps}  />
                )
            }
            </div>
        );
    }
}

export default Shop;