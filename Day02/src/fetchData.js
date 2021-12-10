import { request } from 'https';
import './chunkMethod.js';

export default (session) => new Promise((resolve) => {
  request({
    hostname: 'adventofcode.com',
    path: '/2021/day/2/input',
    headers: { Cookie: session },
  }, (response) => response.on('data', (data) => resolve(data.toString().split(/\s/).chunk(2)))).end();
});
