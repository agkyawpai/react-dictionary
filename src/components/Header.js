import React, { useContext, useState } from "react";
import {InputContext} from '../App';
function Header() {
    const [value, setValue] = useState("");
    const {inputValue, setInputValue} = useContext(InputContext);
    const handleInput = () => {
        setInputValue(value);
        setValue("");
    }
    const handleInputKeyDown = (e) => {
        if (e.key == "Enter") {
            setInputValue(value);
            setValue("");
            e.preventDefault();
          }
    }
    return (
        <>
            <div className="bg-sky-200">
                <div className="container mx-auto py-8">
                    <h1 className="text-3xl font-bold text-center text-gray">Dictionary</h1>
                    <p className="text-center mt-2 mb-10 text-slate-700 text-lg">Find Definitions of Words</p>
                    <div className="flex items-center justify-center mt-5">
                        <div className="flex border-2 border-gray-200 rounded">
                            <input className="px-4 py-2 md:w-80" type="text" placeholder="Search..." onKeyDown={handleInputKeyDown} onChange={(e)=>setValue(e.target.value)} value={value}></input>
                            <button className="bg-blue-400 border-l px-4 py-2 text-white" onClick={handleInput}>Search</button>
                        </div>
                    </div>
                    {inputValue && (<h3 className="text-gray-700 text-center mt-4">Result for: <span className="text-gray font-bold">{inputValue}</span></h3>)}
                    
                </div>
            </div>
        </>
    )
}
export default Header;