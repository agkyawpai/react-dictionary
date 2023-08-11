import React from "react";

function Example(props) {
    const {meanings} = props;
    return (
        <>
        <div>
        <ul className="list-disc list-inside">
        {meanings.map((meaning)=>(
         meaning.meanings.map(def =>(
            def.definitions.map(val => (
                <div key={val.example}>
                   {val.example ? <li>{val.example}</li> : ''}
                </div>
            ))
         ))
))}
        </ul>   
        </div> 
        </>
    )
}
export default Example;