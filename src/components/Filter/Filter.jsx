import PropTypes from 'prop-types';

export const Filter = ({ getNameOrNumber }) => {
  return (
    <label>
      Find contacts by name
      <br />
      <input type="text" onKeyDown={getNameOrNumber} />
    </label>
  );
};

Filter.propTypes = {
  getNameOrNumber: PropTypes.func.isRequired,
};
