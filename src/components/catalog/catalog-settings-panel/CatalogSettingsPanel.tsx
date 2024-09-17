import React, { useEffect, useState } from "react";

import Select from "react-select";

import { AngleSmallDown } from "react-flaticons";

import "./CatalogSettingsPanel.scss";

export default function CatalogSettingsPanel({ theme }: { theme: string }) {
    const catalogVariants = [{ value: "facebook", label: "Facebook" }];

    return (
        <div className="catalog-settings">
            <div className="catalog-settings--left">
                <h3 className="catalog-settings--title">Каталог товаров</h3>
                <div className="catalog-settings--buttons">
                    <button className="catalog-settings--button catalog-settings--filters">
                        <span>Фильтры</span>
                        <AngleSmallDown />
                    </button>
                    <button className="catalog-settings--button catalog-settings--reset">
                        Сбросить
                    </button>
                    <button className="catalog-settings--button catalog-settings--find">
                        Найти
                    </button>
                </div>
            </div>
            <div className="catalog-settings--right">
                <div className="catalog-settings--sort-panel">
                    <label
                        htmlFor="sorting-variants"
                        className="catalog-settings--title"
                    >
                        Сортировка по
                    </label>
                    <Select
                        options={catalogVariants}
                        placeholder="Выбрать сортировку"
                        styles={{
                            control: (baseStyles) => ({
                                ...baseStyles,
                                backgroundColor: "rgba(248, 250, 255, 4%)",
                                height: 56,
                                border: "none",
                                fontFamily: "inherit",
                                fontWeight: 500,
                                fontSize: 24,
                                lineHeight: "24px",
                                paddingTop: 0,
                                paddingLeft: 16,
                                borderRadius: 20,
                            }),
                            singleValue: (baseStyles) => ({
                                ...baseStyles,
                                color: "inherit",
                            }),
                            option: (baseStyles) => ({
                                ...baseStyles,
                                backgroundColor: "transparent",
                                color: theme === "light" ? "black" : "inherit",
                            }),
                            menu: (baseStyles) => ({
                                ...baseStyles,
                                backgroundColor: "transparent",
                            }),
                        }}
                        // className="catalog-settings--variants"
                    />
                </div>
            </div>
        </div>
    );
}
