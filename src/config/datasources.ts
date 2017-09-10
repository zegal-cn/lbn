import {juggler, DataSourceConstructor} from '@loopback/repository';

const ds: juggler.DataSource = new DataSourceConstructor({
  name: 'db',
  connector: 'memory',
});

export const mysql = new DataSourceConstructor({
  connector: 'mysql',
  host: 'localhost',
  port: 3306,
  database: 'test',
  password: 'pass',
  user: 'root',
});
