import React from "react";

function MeaningList(props) {
    const {meanings} = props;
    return (
        <>
        <ul className="list-disc list-inside">
        {meanings.map((meaning)=>(
         meaning.meanings.map(val =>(
            val.definitions.map(def => (
                <div key={def.definition}>
                    <li>{def.definition}</li>
                    <hr />
                </div>
            ))
         ))
))}
        </ul>    
        </>
    )
}
export default MeaningList;