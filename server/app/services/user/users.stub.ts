import { ImmigrationStatus } from "@common/enums/immigration-status.enum";
import { UserRoles } from "@common/enums/user-roles.enum";
import { Resident, BaseUser, Caregiver } from "@common/interfaces/stakeholders/users";
import { Issue } from "@common/enums/issue.enum";
import { ExitOrientation } from "@common/enums/exit-orientation.enum";

const resident: Resident = {
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

const squarepant: Resident = {
    id: "3",
    firstName: "Spongebob",
    lastName: "Squarepants",
    email: "mrbob@gmail.com",
    phoneNumber: "123-456-7420",
    accessibleDocuments: [],
    hashedPassword: "$2b$10$1TfwRUWLBWd9lf9pwmKnceT.ZHV0PcnB/k6P6xAI5enWqSWLZ9l/O", // test
    role: UserRoles.Resident,
    birthDate: new Date(),
    caregivers: [],
    significantPeople: [],
    immigrationStatus: ImmigrationStatus.NoStatus,
    isIndigenous: false,
    isVeteran: false,
    numberOfChildren: 0,
    exitOrientation: ExitOrientation.Death,
    issues: [],
    currentLodging: "Maison B",
    borough: 'bikini bottom',
    monthlyIncome: -6900,
};

const caregiver: Caregiver = {
    id: "1",
    role: UserRoles.Caregiver,
    email: "test@test.com",
    firstName: "caregiver",
    lastName: "caregiver",
    phoneNumber: "123-456-7890",
    hashedPassword: "$2b$10$1TfwRUWLBWd9lf9pwmKnceT.ZHV0PcnB/k6P6xAI5enWqSWLZ9l/O", // test
    residents: ["2"],
    accessibleDocuments: [],
    manager: "0",
}

const admin: BaseUser = {
    id: "0",
    role: UserRoles.Admin,
    email: "test@test.com",
    firstName: "admin",
    lastName: "admin",
    phoneNumber: "123-456-7890",
    hashedPassword: "$2b$10$1TfwRUWLBWd9lf9pwmKnceT.ZHV0PcnB/k6P6xAI5enWqSWLZ9l/O", // test
    accessibleDocuments: [],
}

export const USERS = [
    resident,
    caregiver,
    squarepant,
    admin
]