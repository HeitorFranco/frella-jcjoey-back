import { INewHireRequestInput } from "../../interfaces/INewHireRequestInput";

interface INewHireRequestRepository {
  create({
    first_name,
    last_name,
    middle_name,
    new_hire_phone_number,
    manager_contact_name,
    hr_contact_name,
    expected_start_date,
    company,
    location,
  }: INewHireRequestInput): Promise<INewHireRequestInput>;
}

export { INewHireRequestRepository };
