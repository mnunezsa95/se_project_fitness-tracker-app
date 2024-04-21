import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

const SearchBar = () => (
  <div>
    <form className="flex items-center p-0">
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: "#3586FF" }} className="p-0" />
      </IconButton>
      <TextField
        id="search-bar"
        focused
        //   onInput={(e) => {
        //     setSearchQuery(e.target.value);
        //   }}
        placeholder="Search..."
        variant="standard"
        size="small"
        color="primary"
        sx={{
          input: {
            color: "#3586FF",
            "&::placeholder": {
              opacity: 1,
            },
          },
        }}
      />
    </form>
  </div>
);

export default SearchBar;
