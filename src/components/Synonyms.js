import React from "react";

function Synonyms(props) {
    const {meanings} = props;
    console.log(meanings);
    return (
        <>
        <div className="columns-2 md:columns-3">
        <ul className="list-disc list-inside">
      {meanings.map(meaning => meaning.meanings.map(val => {
        return val.synonyms?.map(syn => (
          <li>{syn}</li>
        ))
}))}
</ul>
    </div>   
        </>
    )
}
export default Synonyms;