import "./Search.css";

import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import { useEffect, useState } from "react";

const Search = ({ handleFilter }) => {
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        handleFilter(inputValue);
    }, [inputValue]);

    return (
        <div className="searchbar-wrapper">
            <SearchIcon
                style={{
                    marginLeft: 10,
                    marginRight: 10,
                    fontSize: 40,
                    color: "ccc",
                }}
            />
            <TextField
                autoFocus={true}
                label="Search"
                style={{ flexGrow: 1 }}
                color="secondary"
                InputProps={{ disableUnderline: true }}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </div>
    );
};

export default Search;
