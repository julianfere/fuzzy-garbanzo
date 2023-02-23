import search from "../../assets/search.svg";
import "./filter.css";

export const Filter = () => {
  return (
    <div className="filter-container">
      <input className="filter" type="text" placeholder="Buscar" />
      <img className="filter-icon" src={search} alt="glass" />
    </div>
  );
};
