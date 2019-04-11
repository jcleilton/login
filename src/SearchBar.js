import React from 'react'
import { SearchBar } from 'react-native-elements'
import styles from './Common/Styles'

export default props => {
    return (
        <SearchBar buttonStyle={{ backgroundColor: 'white', }} inputStyle={styles.searchText} containerStyle={styles.search}></SearchBar>
    )
}