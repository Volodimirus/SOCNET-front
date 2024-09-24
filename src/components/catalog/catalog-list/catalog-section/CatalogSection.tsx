import React from "react";

import CatalogSectionItem from "./catalog-section-item/CatalogSectionItem";

import CatalogSectionProps from "./CatalogSectionPropsInterface";
import CatalogSectionItemProps from "./catalog-section-item/CatalogSectionItemPropsInterface";

import "./CatalogSection.scss";

export default function CatalogSection({
    title,
    catalogItems,
}: CatalogSectionProps) {
    return (
        <div className="catalog-section">
            <h3 className="catalog-section--title">{title}</h3>
            <div className="catalog-section--items">
                {catalogItems?.map((item: CatalogSectionItemProps) => (
                    <CatalogSectionItem
                        text={item.text}
                        title={item.title}
                        avatar={item.avatar}
                        count={item.count}
                        sells={item.sells}
                        isPremium={item.isPremium}
                        boost={item.boost}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
}
