import React, { useState } from 'react'
import SWords from './Stylings/SWords.css'
function SearchWords() {
    const [data,setdata] = useState("")
    const [searchWord, setSearchWord] = useState('')
    return (
        <div className="wordContainer">
            <div className="inputClass">
                <input name="searchWord" type="text" placeholder="Search here....." onChange={(e) => { setSearchWord(e.target.value) }} />
            </div>
            <div>
                <button >Search</button>
            </div>
        </div>
    )
}

export default SearchWords
