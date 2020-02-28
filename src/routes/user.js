import express from 'express';
import Joi from '@hapi/joi';

import User from '../models/User';
import { signUp } from '../validations/user';

const userRoutes = express.Router();

userRoutes.post('', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    await Joi.validate({ username, email, password }, signUp);

    const newUser = new User({ username, email, password });
    await newUser.save();

    res.send({ userId: newUser.id, username });
  } catch (err) {
    res.status(400).send(err);
  }
});

export default userRoutes;
