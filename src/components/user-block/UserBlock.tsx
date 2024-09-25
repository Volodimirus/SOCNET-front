import { AngleSmallDown } from "react-flaticons";
import UserAvatar from "../../assets/images/user-avatar.png";
import "./UserBlock.scss";

export default function UserBlock() {
    return (
        <div className="user-block">
            <button className="user-block__menu">
                <img
                    src={UserAvatar}
                    className="user-block__avatar"
                    alt="User avatar"
                />
                <AngleSmallDown className="user-block__dropdown-button" />
            </button>
        </div>
    );
}
