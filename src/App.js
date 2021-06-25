import "./App.css";
import Search from "./Search";
import UsersList from "./UsersList";
import { useEffect, useState } from "react";
import { Pagination } from "@material-ui/lab";

function App() {
    const [data, setData] = useState(null);
    const [filteredData, setFilteredData] = useState(null);
    const [selected, setSelected] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(null);
    const [offset, setOffset] = useState(0);

    const getData = async () => {
        setIsLoading(true);
        await fetch(
            "https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json"
        )
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
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
        if (filteredData) setCount(Math.ceil(filteredData.length / 10));
    }, [filteredData]);

    useEffect(() => {
        console.log(selected);
    }, [selected]);

    const handleFilter = (value) => {
        setOffset(0);
        setPage(1);
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
                <Pagination
                    count={count}
                    variant="outlined"
                    shape="rounded"
                    onChange={(e, page) => {
                        setOffset(page - 1);
                        setPage(page);
                    }}
                    color="primary"
                    page={page}
                />
            )}
            {filteredData && (
                <UsersList
                    data={filteredData}
                    selected={selected}
                    handleSelect={handleSelect}
                    offset={offset}
                />
            )}
            {isLoading && <div className="spin"></div>}
        </div>
    );
}

export default App;
