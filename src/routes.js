import { Router } from "express";
import User from "./app/models/Users";

const routes = new Router();

routes.get("/", async(request, response) =>{
const user = await User.create({
  name: 'Júlio',
  email: 'julioczrn@gmail.com',
    password_hash: '123456789',
  });
  return response.status(201).json(user)
});
export default routes;
