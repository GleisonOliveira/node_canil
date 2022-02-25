import express, { Request, Response } from 'express';
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import path from 'path';
import routes from './routes';
import sass from 'node-sass';
import fs from 'fs';

const sassPathDest = path.join(__dirname, '../dist/css/main.css');
const sassPath = path.join(__dirname, 'sass/main.scss');

sass.render(
  {
    file: sassPath,
    outputStyle: 'compressed',
  },
  function (error, result) {
    if (!error) {
      fs.writeFile(sassPathDest, result.css, function (err) {
        if (err) {
          console.log(err);
        }
      });
      return;
    }

    console.log(error);
  }
);

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.static(path.join(__dirname, '../dist')));
server.use(routes);
server.use((req: Request, res: Response) => {
  res.status(404).send('Não encontrado');
});

server.listen(process.env.PORT || 3000);
