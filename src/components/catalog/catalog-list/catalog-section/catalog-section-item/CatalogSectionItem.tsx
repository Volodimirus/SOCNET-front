import React from "react";

import CatalogSectionItemProps from "./CatalogSectionItemPropsInterface";

import { Star } from "react-flaticons";
import { ShoppingBagAdd } from "react-flaticons";
import FacebookIcon from "../../../../../assets/images/facebook-icon.png";

import "./CatalogSectionItem.scss";

export default function CatalogSectionItem(props: CatalogSectionItemProps) {
    return (
        <div className="catalog-section--item">
            <div className="catalog-section--item-avatar">
                <img src={FacebookIcon} alt="Facebook icon" />
            </div>
            <div className="catalog-section--item-is_premium">
                <Star />
            </div>
            <div className="catalog-section--item-info">
                <h4 className="catalog-section--item-title">{props.title}</h4>
                <p className="catalog-section--item-text">{props.text}</p>
            </div>
            <div className="catalog-section--item-btn">{props.price}</div>
            <div className="catalog-section--item-btn">{props.count} шт.</div>
            <div className="catalog-section--item-btn">{props.sells}</div>
            <button className="catalog-section--item-btn to-buy">Купить</button>
            <button className="catalog-section--item-btn to-bag">
                {<ShoppingBagAdd />}
            </button>
        </div>
    );
}
