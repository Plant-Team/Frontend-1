import {Link} from 'react-router-dom'

const Search = ({ handleChange, handleSearch }) => {
  return (
    <>
    <div className="search-wrapper">

      <form className="search-form" onSubmit={handleSearch}>
        <input className='search-input' onChange={handleChange} type="text" />
        <button className='search-button' type="submit">Search</button>
      </form>
      <Link to='/createpost'><button className='add-post'>add post</button></Link>
      

      
     
    </div>
    </>
  );
};

export default Search;
