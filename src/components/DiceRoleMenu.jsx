import { Button, Menu, MenuItem } from '@mui/material'
import React from 'react'

const DiceRoleMenu = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAdvantage = () => {                                                   // roll 2 dice and return higher roll (advantage)
    const result1 = Math.floor(Math.random() * 20 + 1) + props.bonus;               // roll d20
    const result2 = Math.floor(Math.random() * 20 + 1) + props.bonus;               // roll d20
    console.log(result1, result2);
    console.log(Math.max(result1,result2));                                         // get advantage roll result
    setAnchorEl(null);
  };

  const handleFlat = () => {                                                        // roll 1 die and return roll 
    const result = Math.floor(Math.random() * 20 + 1) + props.bonus;               // roll d20
    console.log(result);
    setAnchorEl(null);
  };


  const handleDisadvantage = () => {                                                   // roll 2 dice and return higher roll (advantage)
    const result1 = Math.floor(Math.random() * 20 + 1) + props.bonus;               // roll d20
    const result2 = Math.floor(Math.random() * 20 + 1) + props.bonus;               // roll d20
    console.log(result1, result2);
    console.log(Math.min(result1,result2));                                         // get advantage roll result
    setAnchorEl(null);
  };



  return (
    <div>
      <Button
        id="dice-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dice
      </Button>
      <Menu
        id="dice-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'dice-button',
        }}
      >
        <MenuItem onClick={handleAdvantage}>Advantage</MenuItem>
        <MenuItem onClick={handleFlat}>Flat</MenuItem>
        <MenuItem onClick={handleDisadvantage}>Disadvantage</MenuItem>
      </Menu>
    </div>
  )
}

export default DiceRoleMenu