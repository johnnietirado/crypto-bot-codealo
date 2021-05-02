import {Request, Response} from 'express';
import coinbaseClient from '../vendor/coinbase';
import twilioClient from '../vendor/twilio';

const CODEALO_ACCESS_TOKEN: string = process.env['CODEALO_ACCESS_TOKEN']!;

const TransactionService = {
  buyCrypto: async (req: Request, res: Response) => {

    const auth = req.get('x-codealo-auth');

    if(!auth || auth !== CODEALO_ACCESS_TOKEN) {
      res.statusCode = 403;
      return res.send('Unauthorized. Missing access token');
    } 

    const buyParams = {
      price: '5.00', // USD
      size: '1', // ADA
      product_id: 'ADA-USD',
    }; 

    const result = await coinbaseClient.buy(buyParams);

    console.log(result);

    return res.json({success: true, result});
  }
}

export default TransactionService;