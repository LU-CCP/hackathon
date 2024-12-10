import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Box,
  Typography,
  Container,
  CssBaseline
} from '@material-ui/core';

import { addEvent } from '../../actions/events';
import { useActions } from '../../hooks';

import useStyles from './styles';

const ModalAdd = ({ open, handleClose }) => {
  const { register, handleSubmit } = useForm();
  const classes = useStyles();

  const [description, setDescription] = useState('');
  const [dates, setDates] = useState('');
  const [hours, setHours] = useState('');
  const [id_offices, setId_offices] = useState(0);

  const { onAddEvent } = useActions({
    onAddEvent: addEvent
  });

  const handleChangeDescription = key => ({ target: { value } }) => {
    setDescription({ [key]: value });
  };

  const handleChangeDates = key => ({ target: { value } }) => {
    setDates({ [key]: value });
  };

  const handleChangeHours = key => ({ target: { value } }) => {
    setHours({ [key]: value });
  };

  const handleChangeId = key => ({ target: { value } }) => {
    setId_offices({ [key]: value });
  };

  const onSubmit = () => {
    const { _description } = description;
    const { _dates } = dates;
    const { _hours } = hours;
    const { _id_offices } = id_offices;

    const items = {
      description: _description,
      dates: _dates,
      hours: _hours,
      id_offices: _id_offices
    };

    onAddEvent(items);
    handleClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} className={classes.app}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <form
            className={classes.form}
            onSubmit={handleSubmit(onSubmit)}
            ref={register}
          >
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              label='Descripción'
              name='_description'
              autoFocus
              onChange={handleChangeDescription('_description')}
              ref={register}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='_dates'
              label='Fecha'
              onChange={handleChangeDates('_dates')}
              ref={register}
            />

            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='_hours'
              label='Hora'
              onChange={handleChangeHours('_hours')}
              ref={register}
            />
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='_id_offices'
              label='id de oficina'
              onChange={handleChangeId('_id_offices')}
              ref={register}
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Agregar Evento
            </Button>
          </form>
        </div>
        <Box mt={8} />
      </Container>
    </Dialog>
  );
};

export default ModalAdd;
