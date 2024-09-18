import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Menu, MenuItem, TextField } from '@mui/material';
import React, { useRef } from 'react'

const HpMenu = (props) => {
    const [open, setOpen] = React.useState(false);
    const amount = useRef();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

    const handleTemp = () => {                                              // add temp hp
        props.health.setTempHp(amount.current.value)
    };

    const handleHeal = () => {
        if(Number(props.health.currentHp ) + Number(amount.current.value)  >= Number(props.health.maxHp)) {     // make sure heal doesnt exceed max hp
            props.health.setCurrentHp(props.health.maxHp)
        } else {
            props.health.setCurrentHp(Number(props.health.currentHp) + Number(amount.current.value))
        }
    };

    const handleDamage = () => {
        let damage = amount.current.value;
        
        if(props.health.tempHp > 0){                                                              // check if tempHp exists, if so subtract from tempHP first
            if(props.health.tempHp - damage <= 0) {
                damage = damage - props.health.tempHp
                props.health.setTempHp(0);
            } else {
                props.health.setTempHp(props.health.tempHp - damage)
                damage = 0;
            }
        }

        if(props.health.currentHp - damage <= 0) {                                                // make sure hp doesnt go negative
            props.health.setCurrentHp(0)
        } else {
            props.health.setCurrentHp(props.health.currentHp - damage)
        }
    }

  return (
    <div>
      <Button
        id="dice-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClickOpen}
      >
        Edit
      </Button>
      <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          const email = formJson.email;
          console.log(email);
          handleClose();
        },
      }}
      >
        <DialogTitle> Health </DialogTitle>
        <DialogContent>
            <TextField 
                autoFocus
                required
                margin="dense"
                id="health"
                name="health"
                label="HP ammount"
                type="number"
                fullWidth
                variant="standard"
                inputRef={amount}
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleHeal}>Heal</Button>
            <Button onClick={handleDamage}>Damage</Button>
            <Button onClick={handleTemp}>Add Temp</Button>
        </DialogActions>
      </Dialog>
      
    </div>
  )
}

export default HpMenu