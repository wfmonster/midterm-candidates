import "./searchbox.styles.css";

const Searchbox = ({searchfield, searchChange}) => {
    return (
        <input  
            className="searchbox" 
            type="search" 
            placeholder="Search Candidates"
            onChange={searchChange} />
    );
}
export default Searchbox;