import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Container,
  Button,
  TableRow,
  TableCell,
  Grid,
  Typography,
  Paper,
  Table,
  TableHead,
  TableBody,
  withStyles,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  CssBaseline,
  TextField
} from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import { useSelector, useDispatch } from 'react-redux';

import useMount from '../../hooks/useMount';
import {
  fetchEvent,
  setEventEdit,
  editEvent,
  deleteEvent
} from '../../actions/events';
import { useActions } from '../../hooks';

import useStyles from './styles';
import ModalAdd from './ModalAdd';

const Settings = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { events, eventEdit } = useSelector(({ events }) => events);
  const { register, handleSubmit } = useForm();

  const { onEditEvent, onDeleteEvent } = useActions({
    onEditEvent: editEvent,
    onDeleteEvent: deleteEvent
  });

  const handleGetEvent = useCallback(element => dispatch(fetchEvent()), [
    dispatch
  ]);

  const [description, setDescription] = useState('');
  const [dates, setDates] = useState('');
  const [hours, setHours] = useState('');
  const [id_offices, setId_offices] = useState(0);

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

  const onSubmit = ({ id }) => {
    let { _description } = description;
    let { _dates } = dates;
    let { _hours } = hours;
    let { _id_offices } = id_offices;

    if (!_description) {
      _description = eventEdit.data.description;
    }

    if (!_dates) {
      _dates = eventEdit.data.dates;
    }

    if (!_hours) {
      _hours = eventEdit.data.hours;
    }

    if (!_id_offices) {
      _id_offices = eventEdit.data.id_offices;
    }

    const items = {
      description: _description,
      dates: _dates,
      hours: _hours,
      id_offices: _id_offices
    };

    onEditEvent(items, id);
    handleClose();
  };

  useMount(async () => {
    handleGetEvent();
  });

  const handleOpenModal = (user, index) => () => {
    dispatch(setEventEdit(index, user));
  };

  const handleClose = () => {
    dispatch(setEventEdit(-1, null));
  };

  const handleCloseModalAdd = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const StyledTableCell = withStyles(() => ({
    head: {
      fontSize: 20
    }
  }))(TableCell);

  const dialogJSX = !!eventEdit.data && (
    <Dialog
      open={!!eventEdit.data}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      className={classes.app}
    >
      <DialogTitle id='alert-dialog-title'>Actualizar evento</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          <form
            className={classes.appForm}
            onSubmit={handleSubmit(onSubmit)}
            ref={register}
          >
            <Grid item>
              <input
                type='hidden'
                name='id'
                value={eventEdit.data.id}
                ref={register}
              />
            </Grid>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              label='Descripción'
              name='_description'
              autoFocus
              onChange={handleChangeDescription('_description')}
              defaultValue={eventEdit.data.description}
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
              defaultValue={eventEdit.data.dates}
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
              defaultValue={eventEdit.data.hours}
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
              defaultValue={eventEdit.data.id_offices}
              ref={register}
            />
            <Button
              className={classes.buttonForm}
              type='submit'
              color='secondary'
              variant='contained'
            >
              {'Actualizar'}
            </Button>
          </form>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );

  const renderEventsList = (lista, index) => (
    <TableRow key={lista.id}>
      <TableCell align='left'>
        <Grid container spacing={3}>
          <Grid item xs={5}>
            <Typography variant='h6'>{lista.description}</Typography>
            <Typography variant='subtitle2'>
              Hora de alarma: {lista.hours}
            </Typography>
          </Grid>
        </Grid>
      </TableCell>
      <TableCell align='right'>
        <Fab
          color='primary'
          aria-label='edit'
          className={classes.actions}
          onClick={handleOpenModal(lista, index)}
        >
          <EditIcon />
        </Fab>
        <Fab
          color='secondary'
          aria-label='delete'
          className={classes.actions}
          onClick={() => onDeleteEvent(lista.id)}
        >
          <DeleteIcon />
        </Fab>
      </TableCell>
    </TableRow>
  );

  return (
    <Container>
      <Paper>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>
                Total eventos: {events.length} - Agregar evento
                <Fab
                  color='secondary'
                  aria-label='delete'
                  className={classes.actions}
                  onClick={() => handleOpen()}
                >
                  <AddIcon />
                </Fab>
              </StyledTableCell>
            </TableRow>
          </TableHead>

          <ModalAdd open={open} handleClose={handleCloseModalAdd} />
          <TableBody>{events.map(renderEventsList)}</TableBody>
        </Table>
      </Paper>
      {dialogJSX}
    </Container>
  );
};

export default Settings;
