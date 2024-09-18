import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import Table from '@mui/material/Table';
import { Button, Card, CardContent, Stack, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';

import DiceRoleMenu from './DiceRoleMenu';
import DiceResult from './DiceResult';
import AbilityScores from './AbilityScores';

const Character = () => {
    const {id} = useParams();               // get char id from path for fetch
    const [character, setCharacter] = useState();
    const [load, setLoad] = useState(false);
  
    const [skills, setSkills] = useState([]);
    const [prof, setProf] = useState([]);


    function createSkills() {
        const str = Math.floor((character.str - 10)/2) // calc bonus for each skill
        const dex = Math.floor((character.dex - 10)/2) 
        const con = Math.floor((character.con - 10)/2) 
        const int = Math.floor((character.int - 10)/2) 
        const wis = Math.floor((character.wis - 10)/2) 
        const cha = Math.floor((character.cha - 10)/2) 

        const bonus = Math.ceil(character.level/4) + 1
        console.log(bonus)

        const skillProf = [
            {
                skill: "Acrobatics",
                prof: dex
            },
            {
                skill: "Animal Handling",
                prof: wis
            },
            {
                skill: "Arcana",
                prof: int
            },
            {
                skill: "Athletics",
                prof: str
            },
            {
                skill: "Deception",
                prof: cha
            },
            {
                skill: "History",
                prof: int
            },
            {
                skill: "Insight",
                prof: wis
            },
            {
                skill: "Intimidation",
                prof: cha
            },
            {
                skill: "Investigation",
                prof: int
            },
            {
                skill: "Medicine",
                prof: wis
            },
            {
                skill: "Nature",
                prof: int
            },
            {
                skill: "Perception",
                prof: cha
            },
            {
                skill: "Performance",
                prof: cha
            },
            {
                skill: "Persuasion",
                prof: int
            },
            {
                skill: "Sleight of Hand",
                prof: dex
            },
            {
                skill: "Stealth",
                prof: dex
            },
            {
                skill: "Survival",
                prof: wis
            }
        ]
        //console.log(character.skills)
        prof.forEach((skill) => {
            
            skillProf.forEach((s) => {
                if(skill === s.skill){
                    s.prof += bonus;
                    console.log(s.prof);
                    console.log(skill);
                    
                }
            })
        })

        setSkills(skillProf)
    }

    function updateCharacter(char,prof) {
        if(char){
            setLoad(true)
            setCharacter(char)
            setProf(prof);
            createSkills();
        }
    }
   
    

    useEffect(() => {

        const fetchCharacters = async () => {
            

            const response = await fetch(`http://localhost:8080/characters/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem('jwt')
                  }
            });
            const json = await response.json();
            console.log(json);
            
            updateCharacter(json.character, json.skills);
            
            
            console.log(character);
        }

        fetchCharacters().catch(console.error);
    },[load]);
  return (
    <div>
       { load ? (
        <div>
            <h1>{character.name}</h1>
            <p>
                {JSON.stringify(character)}
            </p>
            <AbilityScores character={character}/>
            
            <Table sx={{ maxWidth: 500 }} size='small'>
                <TableHead>
                    <TableRow>
                        <TableCell>Skill</TableCell>
                        <TableCell>Bonus</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {skills.map((skill) => (
                        <TableRow key={skill.skill}>
                            <TableCell>{skill.skill}</TableCell>
                            <TableCell>+{skill.prof}</TableCell>
                            <TableCell><DiceRoleMenu bonus={skill.prof}/></TableCell>
                            
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <DiceResult />
        </div>
        
       ) : (<p>Loading</p>)}
    </div>
  )
}

export default Character