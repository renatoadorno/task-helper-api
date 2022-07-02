import * as express from 'express';
import routes from './routes';

export default class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(routes);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Started on port ${PORT}`));
  }
}
