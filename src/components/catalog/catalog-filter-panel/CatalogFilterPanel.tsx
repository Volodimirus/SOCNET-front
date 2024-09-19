import React from "react";

import "./CatalogFilterPanel.scss";

export default function CatalogFilterPanel() {
    return (
        <div className="catalog-filter">
            <div className="catalog-filter--button-group">
                <button className="catalog-filter--button price-btn">
                    Цена
                </button>
                <button className="catalog-filter--button count-btn">
                    Кол-во
                </button>
                <button className="catalog-filter--button sell-btn">
                    Продажи
                </button>
            </div>
        </div>
    );
}
