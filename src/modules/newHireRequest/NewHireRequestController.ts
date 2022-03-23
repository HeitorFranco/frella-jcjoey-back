import { Request, Response } from "express";
import { INewHireRequestInput } from "../../interfaces/INewHireRequestInput";
import { NewHireRequestService } from "./NewHireRequestService";

class NewHireRequestController {
  constructor(private newHire: NewHireRequestService) {}

  async handle(request: Request, response: Response) {
    const {
      first_name,
      last_name,
      middle_name,
      new_hire_phone_number,
      manager_contact_name,
      hr_contact_name,
      expected_start_date,
      company,
      location,
    } = request.body as INewHireRequestInput;

    const { newHireRequest } = await this.newHire.execute({
      first_name,
      last_name,
      middle_name,
      new_hire_phone_number,
      manager_contact_name,
      hr_contact_name,
      expected_start_date,
      company,
      location,
    });

    return response.status(201).json(newHireRequest);
  }
}

export { NewHireRequestController };
