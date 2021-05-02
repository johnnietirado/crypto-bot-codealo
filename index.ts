require('dotenv').config()
import * as express from 'express';
import MessageService from './services/MessageService';
import TransactionService from './services/TransactionService';

const app = express();
const port = 3000;
app.get('/send-message', MessageService.sendMessage);
app.post('/buy', TransactionService.buyCrypto);

app.get('/', async (req: express.Request, res: express.Response) => {
  res.json({status: 'Up and running'});
});

app.listen(port, () => {
  console.log('Server started');
});