import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";

const SearchBar = () => {
  const theme = useTheme();
  console.log(theme);

  return (
    <div>
      <form className="flex items-center p-0">
        <IconButton type="submit" aria-label="search">
          <SearchIcon
            style={{
              fill: theme.palette.mode === "dark" ? theme.palette.primary.main : "#FFFFFF",
            }}
            className="p-0"
          />
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
              color: theme.palette.mode === "dark" ? "#3586FF" : "#FFFFFF",
              "&::placeholder": {
                color: theme.palette.mode === "dark" ? "#3586FF" : "#FFFFFF",
                opacity: 1,
              },
            },
          }}
        />
      </form>
    </div>
  );
};
export default SearchBar;
