import { prisma } from "../../database/client";
import { INewHireRequestInput } from "../../interfaces/INewHireRequestInput";
import { INewHireRequestRepository } from "../interfaces/INewHireRequestRepository";

class NewHireRequestRepository implements INewHireRequestRepository {
  async create({
    first_name,
    last_name,
    middle_name,
    new_hire_phone_number,
    manager_contact_name,
    hr_contact_name,
    expected_start_date,
    company,
    location,
  }: INewHireRequestInput): Promise<INewHireRequestInput> {
    const newHireRequests = await prisma.newHireRequests.create({
      data: {
        first_name,
        last_name,
        middle_name,
        new_hire_phone_number,
        manager_contact_name,
        hr_contact_name,
        expected_start_date,
        company,
        location,
      },
    });

    return newHireRequests;
  }
}

export { NewHireRequestRepository };
