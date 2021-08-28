import React, { useState } from 'react'
import SWords from './Stylings/SWords.css'
function SearchWords() {
    const [data,setdata] = useState("")
    const [searchWord, setSearchWord] = useState('')

    getMeaning = ()=>{
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`)
        .then((response)=>{
            setdata(response.data[0]);
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return (
        <div className="wordContainer">
            <div className="inputClass">
                <input name="searchWord" type="text" placeholder="Search here....." onChange={(e) => { setSearchWord(e.target.value) }} />
            </div>
            <div>
                <button onClick = {getMeaning}>Search</button>
            </div>
        </div>
    )
}

export default SearchWords
