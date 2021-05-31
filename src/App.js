import "./App.css";
import Search from "./Search";
import UsersList from "./UsersList";
import { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState(null);
    const [filteredData, setFilteredData] = useState(null);
    const [selected, setSelected] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getData = async () => {
        setIsLoading(true);
        await fetch(
            "https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json"
        )
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err));
        setIsLoading(false);
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    useEffect(() => {
        console.log(selected);
    }, [selected]);

    const handleFilter = (value) => {
        const filteredData = data.filter(
            (user) =>
                user.first_name.toLowerCase().startsWith(value.toLowerCase()) ||
                user.last_name.toLowerCase().startsWith(value.toLowerCase())
        );
        setFilteredData(filteredData);
    };

    const handleAdd = (value) => {
        const newSelected = [...selected];
        newSelected.push(value);
        setSelected(newSelected);
    };

    const handleDelete = (value) => {
        const newSelected = selected.filter((item) => item !== value);
        setSelected(newSelected);
    };

    const handleSelect = (value, isSelected) => {
        if (!isSelected) {
            handleAdd(value);
        } else {
            handleDelete(value);
        }
    };

    return (
        <div className="App">
            <h1>Contacts</h1>
            {filteredData && <Search handleFilter={handleFilter} />}
            {filteredData && (
                <UsersList
                    data={filteredData}
                    selected={selected}
                    handleSelect={handleSelect}
                />
            )}
            {isLoading && <div className="spin"></div>}
        </div>
    );
}

export default App;
