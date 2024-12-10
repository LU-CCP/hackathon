/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-literals */
import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';

import '../alarm-animation.css';
import alarm from '../../resources/alarm.png';

const useStyles = makeStyles({
  clock: {
    marginTop: 120,
    fontFamily: 'Arial Black',
    fontSize: 200,
    letterSpacing: '1px'
  },
  alarmTitle: {
    display: 'block',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '50px'
  },
  alarmBody: {
    fontSize: '20px'
  },
  alarmButton: {
    display: 'block',
    width: '100%',
    border: 'none',
    backgroundColor: '#ff4336',
    padding: '14px 28px',
    fontSize: '16px',
    color: '#ffffff',
    cursor: 'pointer',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

const Clock = props => {
  // const beep = require('browser-beep')({ frequency: 3000 });

  // setInterval(() => {
  //   beep(2);
  // }, 1000);

  const classes = useStyles();
  const { offSet, title, hours } = props;
  const [time, setTime] = useState(new Date());
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setInterval(() => setTime(new Date()), 1000);

    setInterval(() => {
      const date = new Date();

      date.setHours(date.getHours() + offSet);

      const hora = `${date.getHours()}:${date.getMinutes()}`;
      const horaMinutos = hora.split(':')[1];
      const hoursMinutos = hours.split(':')[1];

      if (hoursMinutos - horaMinutos === 1) {
        setOpen(true);
      }

      if (hoursMinutos - horaMinutos === 3) {
        setOpen(true);
      }

      if (hoursMinutos - horaMinutos === 5) {
        setOpen(true);
      }
    }, 1000 * 60 * 2);
  }, [hours, offSet, setTime, time]);

  return (
    <div>
      <Typography className={classes.clock} variant='h1' align='center'>
        {time.getHours() + offSet}:{time.getMinutes()}:{time.getSeconds()}
      </Typography>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle>
          <span className={classes.alarmTitle}>{title}</span>
        </DialogTitle>
        <img src={alarm} alt='logo' className='App-logo' />

        <DialogContent>
          <span className={classes.alarmBody}>
            {'Faltan 3 minutos para la cita'}
          </span>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color='primary'
            className={classes.alarmButton}
          >
            Dismiss
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Clock;
