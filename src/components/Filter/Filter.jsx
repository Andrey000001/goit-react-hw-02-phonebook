export const Filter = ({ getNameOrNumber }) => {
  const handleKeyDown = ({ target }) => {
    const { value } = target;
    getNameOrNumber(value.toLowerCase().trim());
  };

  return (
    <label>
      Find contacts by name
      <br />
      <input name="findName" type="text" onChange={handleKeyDown} />
    </label>
  );
};
