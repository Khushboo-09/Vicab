import React, { useState } from 'react'
import SWords from './Stylings/SWords.css'
function SearchWords() {
    const [searchWord, setSearchWord] = useState('')
    return (
        <div className="wordContainer">
            <div className="inputClass">
                <input name="searchWord" type="text" />
            </div>
        </div>
    )
}

export default SearchWords
