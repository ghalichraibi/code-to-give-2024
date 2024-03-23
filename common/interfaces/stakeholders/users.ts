import { UserRoles } from '../../enums/user-roles.enum';
import { SignificantPerson } from './persons';
import { ExitOrientation } from '../../enums/exit-orientation.enum';
import { ImmigrationStatus } from '../../enums/immigration-status.enum';
import { Issue } from '../../enums/issue.enum';
import { DocumentId } from '../documents/base-document.interface';

export type UserId = string;

export enum UserRole {
    Caregiver = 'caregiver',
    Resident = 'resident',
    Manager = 'manager',
    Admin = 'admin',
    // can be used to give an account and read permissions to an external users - will probably not be useful for the prototype
    External = 'external', 
}

interface BaseAccount {
    email: string;
    hashedPassword: string;
}

// A user is a person that has an account in the system
export interface BaseUser extends BaseAccount {
    uid: UserId;
    firstName: string;
    lastName: string;
    role: UserRoles;
    phoneNumber: string;
    accessibleDocuments: DocumentId[];
}

interface BaseEmployee extends BaseUser {
    manager: UserId;
}

export interface Caregiver extends BaseEmployee {
    role: UserRoles.Caregiver;
    residents: UserId[];
}

export interface ExternalUser extends BaseUser {
    role: UserRoles.External;
}

export interface Resident extends BaseEmployee {
    role: UserRoles.Resident;
    birthDate: Date;
    caregivers: UserId[];
    significantPeople: SignificantPerson[];
    immigrationStatus: ImmigrationStatus
    isIndigenous: boolean;
    isVeteran: boolean;
    numberOfChildren: number;
    exitOrientation?: ExitOrientation;
    issues: Issue[];
    borough: string;
    monthlyIncome: number;
}

