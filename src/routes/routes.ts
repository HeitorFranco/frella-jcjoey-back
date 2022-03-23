import { Router } from "express";
import { NewHireRequestFactory } from "../modules/newHireRequest/NewHireRequestFactory";

const routes = Router();

routes.post("/new-hire-request", (request, response) => {
  NewHireRequestFactory().handle(request, response);
});

export { routes };
