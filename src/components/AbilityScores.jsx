import { Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'
import DiceRoleMenu from './DiceRoleMenu'

const AbilityScores = (props) => {
    
  return (
    <Stack direction={"horizontal"}>
                <Card raised={true} sx={{ margin: "auto", maxWidth: "125px"}}>
                    <CardContent>
                        <Typography variant='h6' sx={{ margin: 'auto'}}>Strength</Typography>
                        <Typography variant='h6' sx={{ margin: 'auto', justifyContent: "center"}}>{props.character.str}</Typography>
                        <DiceRoleMenu bonus={Math.floor((props.character.str - 10)/2)}/>
                    </CardContent>
                </Card>
                <Card raised={true} sx={{ margin: "auto", maxWidth: "125px"}}>
                    <CardContent>
                        <Typography variant='h6' sx={{ margin: 'auto'}}>Dexterity</Typography>
                        <Typography variant='h6' sx={{ margin: 'auto', justifyContent: "center"}}>{props.character.dex}</Typography>
                        <DiceRoleMenu bonus={Math.floor((props.character.dex - 10)/2)}/>
                    </CardContent>
                </Card>
                <Card raised={true} sx={{ margin: "auto", maxWidth: "125px"}}>
                    <CardContent>
                        <Typography variant='h6' sx={{ margin: 'auto'}}>Constitution</Typography>
                        <Typography variant='h6' sx={{ margin: 'auto', justifyContent: "center"}}>{props.character.con}</Typography>
                        <DiceRoleMenu bonus={Math.floor((props.character.con - 10)/2)}/>
                    </CardContent>
                </Card>
                <Card raised={true} sx={{ margin: "auto", maxWidth: "125px"}}>
                    <CardContent>
                        <Typography variant='h6' sx={{ margin: 'auto'}}>Intelligence</Typography>
                        <Typography variant='h6' sx={{ margin: 'auto', justifyContent: "center"}}>{props.character.int}</Typography>
                        <DiceRoleMenu bonus={Math.floor((props.character.int - 10)/2)}/>
                    </CardContent>
                </Card>
                <Card raised={true} sx={{ margin: "auto", maxWidth: "125px"}}>
                    <CardContent>
                        <Typography variant='h6' sx={{ margin: 'auto'}}>Wisdom</Typography>
                        <Typography variant='h6' sx={{ margin: 'auto', justifyContent: "center"}}>{props.character.wis}</Typography>
                        <DiceRoleMenu bonus={Math.floor((props.character.wis - 10)/2)}/>
                    </CardContent>
                </Card>
                <Card raised={true} sx={{ margin: "auto", maxWidth: "125px"}}>
                    <CardContent>
                        <Typography variant='h6' sx={{ margin: 'auto'}}>Charisma</Typography>
                        <Typography variant='h6' sx={{ margin: 'auto', justifyContent: "center"}}>{props.character.cha}</Typography>
                        <DiceRoleMenu bonus={Math.floor((props.character.cha - 10)/2)}/>
                    </CardContent>
                </Card>
            </Stack>
  )
}

export default AbilityScores