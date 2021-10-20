import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle)  //handle funciona como um middleware por isso não há a necessidade de passar os parâmetros do request e do response.

export { router }