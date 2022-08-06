const Search = ({ handleChange, handleSearch }) => {
  return (
    <>
      <form onSubmit={handleSearch}>
        <input onChange={handleChange} type="text" />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default Search;
