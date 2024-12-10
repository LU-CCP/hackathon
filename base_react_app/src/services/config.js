const TIMEOUTS = {
  GLOBAL: 20e3
};

const config = {
  baseURL: null,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZnJhbjIwMjAiLCJwYXNzIjoicGFzc3dvcmQiLCJpYXQiOjE1NzkyMzg2MzQsImV4cCI6MTU3OTY3MDYzNH0.cL45KJWlHgt8WyOdUQzNAna9H4vZTXe5wAsBQpp3PGo'
  },
  timeout: TIMEOUTS.GLOBAL
};

export { TIMEOUTS };

export default config;
