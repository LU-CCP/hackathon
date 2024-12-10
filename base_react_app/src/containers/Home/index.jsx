/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useCallback, View } from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useSelector, useDispatch } from 'react-redux';
import { Divider } from '@material-ui/core';

import { useActions } from '../../hooks';
import { fetchOffices } from '../../actions/offices';
import useMount from '../../hooks/useMount';

import style from './styles';
import Header from './Header';
import Clock from './Clock';
import Cards from './Cards';

const Home = () => {
  const dispatch = useDispatch();

  const handleGetOffices = useCallback(element => dispatch(fetchOffices()), [
    dispatch
  ]);

  const { offices } = useSelector(({ offices }) => offices);

  useMount(async () => {
    handleGetOffices();
  });

  return (
    <div>
      <CssBaseline>
        <Grid container>
          <Grid item xs={8} style={style.backgroundClock} spacing={2}>
            <Header id={2} />
            <Clock offSet={0} title='Título cita' hours='6:44' />
          </Grid>

          <Grid item xs={4} style={style.backgroundCalendary}>
            <Cards time='12:01' title='Título1' body='Este es un body' />
            <p />
            <Cards time='13:00' title='Título2' body='Este no es un body' />
            <p />
            <Cards time='14:00' title='Título3' body='¿Este es un body?' />
          </Grid>
        </Grid>
      </CssBaseline>
    </div>
  );
};

export default Home;
