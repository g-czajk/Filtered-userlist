import "./SingleUser.css";
import Avatar from "@material-ui/core/Avatar";
import Checkbox from "@material-ui/core/Checkbox";
import { useEffect, useState } from "react";

const SingleUser = ({ data, selected, handleSelect }) => {
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        if (selected.includes(data.id)) {
            setIsSelected(true);
        }
    }, []);

    return (
        <li
            className="single-user"
            onClick={() => {
                setIsSelected((prev) => !prev);
                handleSelect(data.id, isSelected);
            }}
        >
            <Avatar
                alt={`${data.first_name} ${data.last_name}`}
                src={data.avatar}
            >
                {data.first_name[0]}
                {data.last_name[0]}
            </Avatar>
            <div className="user-details">
                <h2 className="user-name">
                    {data.first_name} {data.last_name}
                </h2>
                <p className="user-email">{data.email}</p>
            </div>
            <Checkbox
                checked={isSelected}
                onClick={(e) => {
                    e.stopPropagation();
                    setIsSelected((prev) => !prev);
                    handleSelect(data.id, isSelected);
                }}
            />
        </li>
    );
};

export default SingleUser;
