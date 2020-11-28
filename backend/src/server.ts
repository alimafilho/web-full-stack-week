import app from './app';
import database from './database';

// database.sync({force: true});
database.sync();
console.log('runnu');

const port = process.env.PORT || 5000;

app.listen(port);
console.log('Server running')