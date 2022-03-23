import { INewHireRequestInput } from "../../interfaces/INewHireRequestInput";
import { INewHireRequestRepository } from "../../repositories/interfaces/INewHireRequestRepository";

class NewHireRequestService {
  constructor(private usersRepository: INewHireRequestRepository) {}

  async execute(newHireRequestData: INewHireRequestInput) {
    const newHireRequest = await this.usersRepository.create({
      ...newHireRequestData,
      expected_start_date: new Date(newHireRequestData.expected_start_date),
    });

    return { newHireRequest };
  }
}

export { NewHireRequestService };
