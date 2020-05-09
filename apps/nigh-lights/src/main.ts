import { Board } from 'johnny-five';
import { app } from './app/app';

const board = new Board();

board.on('ready', app);
