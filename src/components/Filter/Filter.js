import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './Filter.module.css';
class Filter extends Component {
  filterInputId = nanoid();
  render() {
    const { value, onChange } = this.props;
    return (
      <div className={css.filter}>
        <label className={css.label} htmlFor={this.filterInputId}>
          Find contacts by name
        </label>
        <input
          className={css.input}
          type="text"
          name="filter"
          id={this.filterInputId}
          onChange={onChange}
          value={value}
        />
      </div>
    );
  }
}

export default Filter;
