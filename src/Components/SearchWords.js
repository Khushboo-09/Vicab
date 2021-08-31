import React, { useState } from 'react'
import axios from 'axios'
import './Stylings/SWords.css'
import { FaSearch } from 'react-icons/fa';
import { FcSpeaker } from 'react-icons/fc';
function SearchWords() {
    const [data, setdata] = useState("")
    const [gotData, setGotData] = useState()
    const [notFound,setNotFound] = useState('')
    const [searchWord, setSearchWord] = useState('')

    const getMeaning = () => {
        setGotData(false)
        axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`)
            .then((response) => {
                setdata( response.data[0])
                setGotData(true)
                console.log(response.data[0])
                
                
            })
            .catch((error) => {
                console.log(error)
                // return (<p>{error}</p>)
                if(gotData===false){
                    setNotFound("Sorry, word not found!! Please search another word.")
                }
            })
            
            
    }

    const playAudio = () => {
        let audio = new Audio(data.phonetics[0].audio);
        audio.play();
    }

    const handleSearchRequest =(e)=>{
        setSearchWord(e.target.value);
        setGotData(false);
        setNotFound('')
    }


    return (
        <div className="wordContainer" id="words">
            <h1>Vocab</h1>
            <div className="inputClass">
                <input name="searchWord" type="text" placeholder="Search here....." onChange={handleSearchRequest} />
                <button onClick={getMeaning}><FaSearch size="20px" /></button>
            </div> 
         
            {
                notFound!==('') &&(
                    <div className="wordNotFoundError">{notFound}</div>
                )
                
            }

            {data &&gotData && (
                <div className="showResults">
                    <h2>
                        {data.word}{" "}
                        <button onClick={() => { playAudio() }}>
                            <FcSpeaker size="26px" />
                        </button>
                    </h2>

                    {data.meanings &&
                        (data.meanings.map(meaning => {
                            return (
                                <>
                                    <h4 id = "partsOfSpeech">Part of speech:</h4>
                                    <p>{meaning.partOfSpeech}</p>
                                    {
                                        meaning.definitions.map(element => {

                                            return (
                                                <>
                                                    <h4>Definition:</h4>
                                                    <p>{element.definition}</p>
                                                    {element.example &&
                                                        (<div>
                                                            <h4>Example:</h4>
                                                            <p>{element.example}.</p>
                                                        </div>)
                                                    }
                                                    {element.synonyms.length!==0&& (
                                                        <div>
                                                            <h4 >Synonyms</h4>
                                                            <p id="synonym">{element.synonyms.map(synonym => { if(synonym.split(' ').length===1){return <pre >{synonym}</pre>} else return(null) })}</p>
                                                        </div>)
                                                    }
                                                    {element.antonyms.length!==0 && (
                                                        <div>
                                                            <h4 >Antonyms</h4>
                                                            <p id="antonyms">{element.antonyms.map(antonym => { if(antonym.split(' ').length===1){return <pre>{antonym}</pre>} else return(null) })}</p>
                                                        </div>)
                                                    }

                                                </>
                                            )

                                        })
                                    }
                                </>

                            )
                        }))
                    }





                </div>
            )
            }
        </div>
    );


}

export default SearchWords
