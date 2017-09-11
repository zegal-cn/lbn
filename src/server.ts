import { Application } from '@loopback/core';

const app = new Application({
  http: {
    port: 3000
  }
});

app.start();
