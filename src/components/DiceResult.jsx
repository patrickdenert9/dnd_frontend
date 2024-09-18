import React, { useContext } from 'react'
import { AppContext } from './AppContext';
import { Card, Typography } from '@mui/material';

const DiceResult = () => {
    const {diceResult} = useContext(AppContext);
  return (
    <Card sx={{ maxWidth: "200px", minHeight: "200px", margin: "auto"}} raised={10}>
        <Typography variant='h6'>
             Dice Result: {diceResult}
        </Typography>
    </Card>
  )
}

export default DiceResult