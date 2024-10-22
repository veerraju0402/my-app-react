import "./SearchResult.css";

export const SearchResult = ({ result } ,{key}) => {
  return (
    <div
      className="search-result"
      onClick={(e) => alert(`You selected ${key} ${result}!`)}
    >
      {result}
    </div>
  );
};