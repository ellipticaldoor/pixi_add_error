import { Application, loader } from 'pixi.js';
import characterImage from './character.png';

const app = new Application();
document.body.appendChild(app.view);

loader.add(characterImage);
