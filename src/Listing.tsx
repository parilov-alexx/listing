import React from 'react';

import './listing.css';

type ItemsProps = {
  title:string;
  price: string;
  currency_code: string;
  quantity: number;
  listing_id: number;
  url: string;
  MainImage: {
    url_570xN:string;
  };
}
function Listing({ items }: {items: Array<ItemsProps>}) {
  const getTitle = (title:string) => {
    if (title.length < 50) return title;
    return `${title.slice(0, 50)}...`;
  }

  interface GetPriceProps {
    price: string;
    currency_code: string;
  }

  const getPrice = ({price, currency_code}: GetPriceProps) => {
    const currencies = {
      USD: '$',
      EUR: '€',
    }

    return currencies[currency_code] ? `${currencies[currency_code]}${price}` : `${price} ${currency_code}`
  }

  const getLevel = (quantity:number) => {
    if (quantity <= 10) return 'level-low';
    if (quantity <= 20) return 'level-medium';
    return 'level-high';
  }

  const getImageUrl = (urlImage:string) => {
    return urlImage
  }

  return (
    <div className="item-list">
      {items.map((item) => {
        
        if (!item.title) return null;
        else return (
          <div className="item" key={item.listing_id}>
            <div className="item-image">
              <a href={item.url}>
                <img src={getImageUrl(item.MainImage.url_570xN)} alt={getTitle(item.title)} />
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">{getTitle(item.title)}</p>
              <p className="item-price">{getPrice({price:item.price, currency_code:item.currency_code})}</p>
              <p className={`item-quantity ${getLevel(item.quantity)}`}>{item.quantity} left</p>
            </div>
          </div>
        )
      }
      )}
    </div>
  )
}




export default Listing;