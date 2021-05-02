import {Request, Response} from 'express';
import coinbaseClient from '../vendor/coinbase';
import twilioClient from '../vendor/twilio';

const CODEALO_ACCESS_TOKEN: string = process.env['CODEALO_ACCESS_TOKEN']!;
const FROM_PHONE: string = process.env['TWILIO_FROM_PHONE']!;

const MessageService = {
  sendMessage: async (req: Request, res: Response) => {

    const auth = req.get('x-codealo-auth');

    if(!auth || auth !== CODEALO_ACCESS_TOKEN) {
      res.statusCode = 403;
      return res.send('Unauthorized. Missing access token');
    } 
    const accounts = await coinbaseClient.getAccounts();
    const cryptos = accounts.filter((acc: any) => parseFloat(acc.balance) > 0);

    const message = cryptos.map((c: any) => {
      return `Tienes ${c.available} ${c.currency}`
    }).join('\n');

    const msgResponse = await twilioClient.messages.create({
       body: message,
       from: FROM_PHONE,
       to: '+51997170799'
     });
     
    return res.json({success: true});
  }
}

export default MessageService;