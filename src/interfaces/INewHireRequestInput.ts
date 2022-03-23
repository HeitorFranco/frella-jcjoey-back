import { Prisma } from "@prisma/client";

export type INewHireRequestInput = Prisma.XOR<
  Prisma.NewHireRequestsCreateInput,
  Prisma.NewHireRequestsUncheckedCreateInput
>;
