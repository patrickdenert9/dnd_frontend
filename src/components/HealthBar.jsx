import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import React, { useState } from 'react'
import HpMenu from './HpMenu'

const HealthBar = (props) => {
    const [currentHp, setCurrentHp] = useState(props.character.currentHp);
    const [maxHp, setMaxHp] = useState(props.character.maxHp);
    const [tempHp, setTempHp] = useState(0);
  return (
    <Card sx={{ margin: "auto", maxWidth: "250px"}}>
        <CardContent>
            <Typography variant='h4'>Health</Typography>
            <Typography variant='h6'>{currentHp}/{maxHp} hp</Typography>
            { tempHp > 0 && 
            <Typography variant='h6'>{tempHp} temp hp</Typography>
            }
            <HpMenu health={{                                               // pass hp and state func to hp menu
                currentHp: currentHp,
                setCurrentHp: setCurrentHp,
                maxHp: maxHp,
                setMaxHp: setMaxHp,
                tempHp: tempHp,
                setTempHp: setTempHp
            }}/>
        </CardContent>
    </Card>
  )
}

export default HealthBar