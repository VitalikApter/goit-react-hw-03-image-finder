import { Component } from 'react';

import css from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    items: [],
  };

  render() {
    return (
        <header className={css.Searchbar}>
        <form className={css.SearchForm}>
          <button type="submit" className={css.Button}>
            <span className={css.SearchForm-button-label}>Search</span>
          </button>
      
          <input
            className={css.input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
