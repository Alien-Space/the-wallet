import app from './app';

import { createSqliteConnection } from './database';

createSqliteConnection();

app.listen(3333, () => console.log('Server is running!'));
