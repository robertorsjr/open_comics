import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {
  SearchContainer,
  Icon,
  SearchInput
} from './styles'

function Search() {
  return (
    <SearchContainer>
      <Icon icon={faSearch} color={'#CCCCCC'}  />
      <SearchInput placeholder={'Search'} />
    </SearchContainer>
  );
}

export default Search;