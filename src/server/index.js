import express from 'express';
import path from 'path';
import cors from 'cors';
import compress from 'compression';

import services from './services';

const app = express();
const root = path.join(__dirname, '../../');

app.use(cors());

// #region Register Services
// GraphQL
async function startGraphQL(expressInstance) {
  await services.graphql.start();
  services.graphql.applyMiddleware({
    app: expressInstance,
  });
}
startGraphQL(app);
// #endregion

app.use(compress());
app.use('/', express.static(path.join(root, 'dist/client')));
app.use('/uploads', express.static(path.join(root, 'uploads')));
app.get('/', (req, res) => {
  res.sendFile(path.join(root, 'dist/client/index.html'));
});
app.listen(4000, () => console.log('Listening on port 4000'));
