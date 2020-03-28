import React from 'react';
import Form from './Form'

function Header(props) {
  return (
    <header>
      <h1 className="title--big">Buscador de series</h1>
      <Form
        searchText={props.searchText}
        search={props.search}
        handleSearch={props.handleSearch}
      />
    </header>
  );
}

export default Header;
