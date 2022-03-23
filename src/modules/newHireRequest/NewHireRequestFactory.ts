import { NewHireRequestRepository } from "../../repositories/prisma/NewHireRequestRepository";
import { NewHireRequestController } from "./NewHireRequestController";
import { NewHireRequestService } from "./NewHireRequestService";

export const NewHireRequestFactory = () => {
  const newHireRequestRepository = new NewHireRequestRepository();
  const newHireRequest = new NewHireRequestService(newHireRequestRepository);
  const createUserController = new NewHireRequestController(newHireRequest);
  return createUserController;
};
