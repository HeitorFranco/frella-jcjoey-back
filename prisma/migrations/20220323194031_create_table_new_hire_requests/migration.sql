-- CreateTable
CREATE TABLE "new_hire_requests" (
    "id" TEXT NOT NULL,
    "submitted_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "last_activity_date" TIMESTAMP(3),
    "completed_date" TIMESTAMP(3),
    "expected_start_date" TIMESTAMP(3) NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "middle_name" VARCHAR(255),
    "manager_contact_name" VARCHAR(255) NOT NULL,
    "hr_contact_name" VARCHAR(255) NOT NULL,
    "new_hire_phone_number" VARCHAR(15) NOT NULL,
    "location" VARCHAR(255) NOT NULL,
    "company" VARCHAR(255) NOT NULL,

    CONSTRAINT "new_hire_requests_pkey" PRIMARY KEY ("id")
);
