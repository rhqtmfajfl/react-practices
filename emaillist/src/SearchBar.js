import React from 'react'
import styles from './assets/scss/Searchbar.scss';
import PropTypes from 'prop-types'


export default function SearchBar({callback}) {
  return (
    <div className={styles.Searchbar}>
        찾기: <input 
          type='text'
          placeholder='찾기'
          // value={keyword}
          onChange={e => callback(e.target.value)}/>
    </div>  )
}

// export default SearchBar

SearchBar.propTypes ={
  callback: PropTypes.func.isRequired
}