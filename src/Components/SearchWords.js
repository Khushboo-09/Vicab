import React, { useState } from 'react'
import axios from 'axios'
import SWords from './Stylings/SWords.css'
import { FaSearch } from 'react-icons/fa';
import { FcSpeaker } from 'react-icons/fc';
function SearchWords() {
    const [data, setdata] = useState("")
    const [searchWord, setSearchWord] = useState('')

    const getMeaning = () => {
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`)
            .then((response) => {
                console.log(data)
                setdata(response.data[0])
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const playAudio = () => {
        let audio = new Audio(data.phonetics[0].audio);
        audio.play();
    }
    return (
        <div className="wordContainer">
            <div className="inputClass">
                <input name="searchWord" type="text" placeholder="Search here....." onChange={(e) => { setSearchWord(e.target.value) }} />
            </div>
            <div>
                <button onClick={getMeaning}><FaSearch size="20px" /></button>
            </div>
            <div>

                {data && (
                    <div className="showResults">
                        <h2>
                            {data.word}{" "}
                            <button onClick={() => { playAudio() }}>
                                <FcSpeaker size="26px" />
                            </button>
                        </h2>
                        <h4>Parts of speech:</h4>

                        <p>{data.meanings[0].partOfSpeech}</p>


                        <h4>Definition:</h4>

                        <p>{data.meanings[0].definitions[0].definition}</p>


                        <h4>Example:</h4>

                        <p>{data.meanings[0].definitions[0].example}</p>

                    </div>
                )}
            </div>
        </div>
    );


}

export default SearchWords
