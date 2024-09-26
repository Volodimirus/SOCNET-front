import CatalogSectionItemProps from "./CatalogSectionItemPropsInterface";
import { Star } from "react-flaticons";
import { ShoppingBagAdd } from "react-flaticons";
import FacebookIcon from "../../../../../assets/images/facebook-icon.png";
import "./CatalogSectionItem.scss";

export default function CatalogSectionItem(props: CatalogSectionItemProps) {
    const { title, text, avatar, isPremium, boost, price, count, sells } =
        props;

    return (
        <div className="catalog-section--item">
            <div className="catalog-section--item-avatar">
                <img src={FacebookIcon} alt="Facebook icon" />
            </div>
            {isPremium ? (
                <div className="catalog-section--item-is_premium">
                    <Star />
                </div>
            ) : (
                <></>
            )}
            <div className="catalog-section--item-info">
                <h4 className="catalog-section--item-title">
                    {props.title}
                    {boost ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="21"
                            viewBox="0 0 16 21"
                            fill="none"
                        >
                            <path
                                d="M7.96147 18.5298L7.96167 18.5296L14.2685 11.3647C14.2687 11.3644 14.269 11.3641 14.2692 11.3638C14.7159 10.8591 15.0785 10.1374 14.7593 9.43056C14.4402 8.72406 13.6586 8.51738 12.982 8.51738H11.157V3.2674C11.157 2.85904 11.103 2.47237 10.9672 2.14374C10.83 1.81148 10.5818 1.48223 10.1758 1.32983C9.77032 1.17758 9.36704 1.26181 9.04521 1.42054C8.72656 1.5777 8.43071 1.83206 8.16093 2.13829L8.16073 2.13852L1.85238 9.30516L1.85237 9.30515L1.84894 9.30911C1.40819 9.81692 1.051 10.5383 1.36974 11.2416C1.68924 11.9465 2.46852 12.1507 3.14035 12.1507H4.96535V17.4007C4.96535 17.8091 5.01935 18.1957 5.15514 18.5244C5.29244 18.8566 5.54061 19.1859 5.94655 19.3383C6.35208 19.4905 6.75535 19.4063 7.07719 19.2476C7.39584 19.0904 7.69169 18.8361 7.96147 18.5298Z"
                                fill="#3ABCFF"
                                stroke="#205089"
                                stroke-width="1.5"
                                stroke-miterlimit="10"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    ) : (
                        <></>
                    )}
                </h4>
                <p className="catalog-section--item-text">{props.text}</p>
            </div>
            <div className="catalog-section--item-btn price">{props.price}</div>
            <div className="catalog-section--item-btn count">
                {props.count} шт.
            </div>
            <div className="catalog-section--item-btn sells">{props.sells}</div>
            <button className="catalog-section--item-btn to-buy">Купить</button>
            <button className="catalog-section--item-btn to-bag">
                {<ShoppingBagAdd />}
            </button>
        </div>
    );
}
