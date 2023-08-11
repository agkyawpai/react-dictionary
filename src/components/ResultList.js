import React, { useState, useContext, useEffect } from "react";
import {InputContext} from '../App';
import MeaningList from "./MeaningList";
import axios from 'axios';
import Example from "./Example";
import Synonyms from "./Synonyms";
import Antonyms from "./Antonyms";
axios.defaults.baseURL = 'https://api.dictionaryapi.dev/api/v2/entries/en';
function Result() {
    const {inputValue} = useContext(InputContext);
    const [response, setResponse] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchData = async() =>{
        try {
            setLoading(true);
            const res = await axios(`/${inputValue}`);
            setResponse(res.data);
            setError(null);
        } catch(err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }
    useEffect(()=>{
        if(inputValue.length) {
            fetchData(inputValue);
        }
    },[inputValue])
    if(error) {
        return <h3 className="text-center mt-10 font-semibold text-gray-500">No Definitions Found</h3>
    }
    if(loading) {
        return (
          <div className="flex flex-col space-y-3 animate-pulse p-4 container mx-auto max-w-2xl">
            <div className="h-6 bg-gray-300 mt-5 rounded-md"></div>
            <div className="h-40 bg-gray-300 mt-5 rounded-md"></div>
            <div className="h-8 bg-gray-300 mt-5 rounded-md"></div>
            <div className="h-40 bg-gray-300 mt-5 rounded-md"></div>
          </div>
        )
      }
    return (
        <>
            <div className="container mx-auto p-4 max-w-2xl">
                {response && (
                    <div>
                    <h3 className="text-2xl font-bold mt-4 mb-1">Meaning & Definitions</h3>
                    <MeaningList meanings={response} />
                    <h3 className="text-2xl font-bold mt-4 mb-1">Example:</h3>
                    <Example meanings={response} />
                    <h3 className="text-2xl font-bold mt-4 mb-1">Synonym:</h3>
                    <Synonyms meanings={response} />
                    <h3 className="text-2xl font-bold mt-4 mb-1">Antonym:</h3>
                    <Antonyms meanings={response} />
                </div>
                )}
            </div>
        </>
    )
}
export default Result;