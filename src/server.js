import express from 'express';
import mongoose from 'mongoose';

import { PORT, NODE_ENV, MONGO_URI } from './config';
import { userRoutes } from './routes/index';

(async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');

    const app = express();

    app.disable('x-powered-by');

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    const apiRouter = express.Router();
    app.use('/api', apiRouter);
    apiRouter.use('/users', userRoutes);

    app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
  } catch (err) {
    console.log(err);
  }
})();
