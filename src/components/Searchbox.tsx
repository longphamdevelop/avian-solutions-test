import SearchIcon from "~/icons/search";

function Searchbox() {
  return (
    <form className="search-box" method="GET">
      <input
        type="text"
        name="search"
        placeholder="Search..."
        spellCheck="false"
      />
      <button type="submit">
        <SearchIcon size={14.99} />
      </button>
    </form>
  );
}

export default Searchbox;
