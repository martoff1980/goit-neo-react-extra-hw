import { useState, useEffect } from 'react';
import { Button, Box, TextField, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeFilter,
  changePhoneFilter,
  changeFilterBy,
} from '../../redux/filters/slice';
import { FaSearch, FaTimes, FaUser, FaPhone } from 'react-icons/fa';
const SearchBox3 = () => {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.filters.name);
  const filterPhone = useSelector(state => state.filters.number);
  const filterBy = useSelector(state => state.filters.filtredBy);

  const [localFilters, setLocalFilters] = useState(filterBy);
  useEffect(() => {
    setLocalFilters(filterBy);
  }, [filterBy]);

  const [inputType, setInputType] = useState('text');

  const handleInputChange = () => {
    setInputType(prev => (prev === 'tel' ? 'text' : 'tel'));
  };

  const handleFiltered = e => {
    const currentFilter =
      filterBy === 'name'
        ? changeFilter(e.target.value)
        : changePhoneFilter(e.target.value);

    dispatch(currentFilter);
  };

  const handleClick = colorButton => {
    // old way to handle button click
    /*
    if (colorButton === 'green') {
      dispatch(changeFilterBy('name'));
    }
    if (colorButton === 'red') {
      dispatch(changeFilterBy('number'));
    }
    */
    dispatch(
      colorButton === 'green'
        ? changeFilterBy('name')
        : colorButton === 'red'
        ? changeFilterBy('number')
        : null
    );
    handleInputChange();
  };

  return (
    <div className="search-box-3">
      <Box component={'div'} sx={{ marginRight: '220px', fontWeight: '600' }}>
        Find contacts by {filterBy}
      </Box>
      <FaSearch
        size="25"
        style={{
          margin: '5px 2px 0px 0px',
          paddingTop: '0px',
        }}
      />
      <TextField
        size="small"
        type={inputType}
        value={filterBy === 'name' ? filter : filterPhone}
        sx={{ width: '300px' }}
        helperText={`Current input type: ${inputType}`}
        onChange={e => handleFiltered(e, filterBy)}
      />
      <Button
        className="search-box-3-name-button"
        variant="contained"
        color={filterBy === 'name' ? 'success' : 'green'}
        onClick={() => handleClick('green')}
        size="medium"
        sx={{
          marginLeft: '5px',
          marginBottom: '10px',
          height: '30px',
        }}
      >
        <FaUser color="info" />
      </Button>
      <Button
        className="search-box-3-tel-button"
        variant="contained"
        color={filterBy === 'number' ? 'error' : 'default'}
        onClick={() => handleClick('red')}
        size="medium"
        sx={{
          marginLeft: '5px',
          marginBottom: '10px',
          height: '30px',
        }}
      >
        <FaPhone color="info" />
      </Button>
    </div>
  );
};

export default SearchBox3;
