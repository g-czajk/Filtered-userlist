import "./UsersList.css";
import SingleUser from "./SingleUser";

const UsersList = ({ data, selected, handleSelect }) => {
    return (
        <ul className="users-list">
            {data &&
                data
                    .sort((a, b) => {
                        if (a.last_name < b.last_name) {
                            return -1;
                        }
                        if (a.last_name > b.last_name) {
                            return 1;
                        }
                        return 0;
                    })
                    .map((user, index) => (
                        <SingleUser
                            key={user.id}
                            data={data[index]}
                            selected={selected}
                            handleSelect={handleSelect}
                        />
                    ))}
        </ul>
    );
};

export default UsersList;
