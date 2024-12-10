import { isCancel, CancelToken } from 'apisauce';

import createExampleApi from './example';
import createOfficesApi from './offices';
import createEventsApi from './events';
import { TIMEOUTS } from './config';

const exampleApi = createExampleApi();
const officesApi = createOfficesApi();
const eventsApi = createEventsApi();

export { CancelToken, isCancel, exampleApi, officesApi, eventsApi, TIMEOUTS };
