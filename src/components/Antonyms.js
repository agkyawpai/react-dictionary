import React from "react";

function Antonyms(props) {
    const {meanings} = props;
    return (
        <div className="columns-2 md:columns-3">
        {meanings.map((meaning) =>
          meaning.meanings.map((val) =>
            val.synonyms?.map((ant) => <li>{ant}</li>)
          )
        )}
      </div>
      );
}
export default Antonyms;