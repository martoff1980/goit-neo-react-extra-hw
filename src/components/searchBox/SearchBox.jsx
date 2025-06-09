import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, changePhoneFilter } from '../../redux/filters/slice';
import './SearchBox.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);
  const filterPhone = useSelector(state => state.filters.number);

  return (
    <div className="search-box">
      <label>
        Find contacts by name:
        <input
          type="text"
          value={filter}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </label>

      <label>
        Find contacts by phone:
        <input
          type="text"
          value={filterPhone}
          onChange={e => dispatch(changePhoneFilter(e.target.value))}
        />
      </label>
      <div>Redux filter: {filter}</div>
      <div>Redux phone filter: {filterPhone}</div>
    </div>
  );
};

export default SearchBox;
