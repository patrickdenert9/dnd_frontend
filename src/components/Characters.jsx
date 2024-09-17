import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Character = () => {
    const [character, setCharacter] = useState([]);

    useEffect(() => {
    

        const fetchCharacters = async () => {
            function updateCharacter(character) {
                setCharacter([...character])
        }

            const response = await fetch('http://localhost:8080/characters', {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("jwt")
                  }
            });
            const json = await response.json();

            
            updateCharacter(json);
            
            
            console.log(character);
        }

        fetchCharacters().catch(console.error);
    },[]);



  return (
    <div>
        {JSON.stringify(character)}
        <ul>
            {character.map(c =><Link to={"/characters/"+c.character.charId}><button key={c.name}>{c.character.name} {c.character.level}</button></Link> )}
        </ul>
        
    </div>
  )
}

export default Character