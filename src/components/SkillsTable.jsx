import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React from 'react'
import DiceRoleMenu from './DiceRoleMenu'

const SkillsTable = (props) => {
  return (
    <Table sx={{ maxWidth: 500 }} size='small'>
        <TableHead>
            <TableRow>
                <TableCell>Skill</TableCell>
                <TableCell>Bonus</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {props.skills.map((skill) => (                                                         // create skills table
                <TableRow key={skill.skill}>
                    <TableCell>{skill.skill}</TableCell>
                    <TableCell>+{skill.prof}</TableCell>
                    <TableCell><DiceRoleMenu bonus={skill.prof}/></TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
  )
}

export default SkillsTable