import { Resident, Caregiver } from "../interfaces/stakeholders/users";	
import { UserRoles } from "../enums/user-roles.enum";
import { ImmigrationStatus } from "../enums/immigration-status.enum";
import { Issue } from "../enums/issue.enum";

export const caregiverStub: Caregiver = {
    id: "1",
    role: UserRoles.Caregiver,
    email: "test@test.com",
    firstName: "Lovely",
    lastName: "Person",
    phoneNumber: "123-456-7890",
    hashedPassword:
      "$2b$10$1TfwRUWLBWd9lf9pwmKnceT.ZHV0PcnB/k6P6xAI5enWqSWLZ9l/O", // test
    residents: ["2"],
    accessibleDocuments: [],
    manager: "0",
  };

export const residentStub: Resident = {
    id: "2",
    role: UserRoles.Resident,
    birthDate: new Date(),
    email: "test@test.com",
    firstName: "resident",
    lastName: "resident",
    phoneNumber: "123-456-7890",
    hashedPassword: "$2b$10$1TfwRUWLBWd9lf9pwmKnceT.ZHV0PcnB/k6P6xAI5enWqSWLZ9l/O", // test
    accessibleDocuments: [],
    significantPeople: [],
    monthlyIncome: 1000,
    borough: "Cote-des-Neiges",
    issues: [Issue.Homelessness],
    immigrationStatus: ImmigrationStatus.Citizen,
    isIndigenous: false,
    isVeteran: false,
    numberOfChildren: 0,
    currentLodging: "Maison A",
    caregivers: ["1"],
};