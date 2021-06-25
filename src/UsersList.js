import "./UsersList.css";
import SingleUser from "./SingleUser";

const UsersList = ({ data, selected, handleSelect, offset }) => {
    return (
        <ul className="users-list">
            {data &&
                data

                    .sort((a, b) => a.last_name.localeCompare(b.last_name))
                    .map((user, index) => (
                        <SingleUser
                            key={user.id}
                            data={data[index]}
                            selected={selected}
                            handleSelect={handleSelect}
                        />
                    ))
                    .slice(offset * 10, offset * 10 + 10)}
        </ul>
    );
};

export default UsersList;
