import { UserRoles } from '../../enums/user-roles.enum';

export type UserId = string;

export interface BaseUser {
    role: UserRoles;
    id: UserId;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    hashedPassword: string;
}