import express from 'express';

import User from '../models/User';
import { signUp } from '../validations/user';

const userRouter = express.Router();

userRouter.post('', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const result = signUp.validate({ username, email, password });

    if (result.error) {
      return res.json(result.error);
    }

    const newUser = new User({ username, email, password });
    await newUser.save();

    res.json({ userId: newUser.id, username });
  } catch (err) {
    res.status(400).send(err);
  }
});

export default userRouter;
