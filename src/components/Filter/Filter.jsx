import { Component } from 'react';
import { FormLabel ,FormFind ,FormInput} from './Filter.styled';
class Filter extends Component {
  render() {
    const { filterData } = this.props;
    return (
      <FormFind>
        <FormLabel htmlFor="filter">Find Contatcs by name</FormLabel>
        <FormInput type="text" name="filter" onChange={filterData} />
      </FormFind>
    );
  }
}

export default Filter;
