import React, { useState } from 'react'
import axios from 'axios'
import './Stylings/SWords.css'
import { FaSearch } from 'react-icons/fa';
import { FcSpeaker } from 'react-icons/fc';
function SearchWords() {
    const [data, setdata] = useState("")
    const [searchWord, setSearchWord] = useState('')
    const [synonyms, setSynonyms] = useState('')


    const options = {
        method: 'GET',
        url: `https://languagetools.p.rapidapi.com/synonyms/${searchWord}`,
        headers: {
          'x-rapidapi-host': 'languagetools.p.rapidapi.com',
          'x-rapidapi-key': 'undefined'
        }
      };


    const getMeaning = () => {
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`)
            .then((response) => {
                setdata(response.data[0])
            })
            .catch((error) => {
                console.log(error)
                return <p>No Such word found!!!</p>
            })

        axios.request(options)
        .then((response) =>{
            setSynonyms(response.data[0])
        })
        .catch((error) =>{
            console.error(error);
        });
    }

    const playAudio = () => {
        let audio = new Audio(data.phonetics[0].audio);
        audio.play();
    }
    return (
        <div className="wordContainer">
            <h1>Vocab</h1>
            <div className="inputClass">
                <input name="searchWord" type="text" placeholder="Search here....." onChange={(e) => { setSearchWord(e.target.value) }} />
                <button onClick={getMeaning}><FaSearch size="20px" /></button>
            </div>



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

                    {data.meanings[0].definitions[0].example &&
                        (<div>

                            <h4>Example:</h4>
    
                            <p>{data.meanings[0].definitions[0].example}</p>
                        </div>
                    )}
                </div>
            )}

        </div>
    );


}

export default SearchWords
