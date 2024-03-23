import { UserRoles } from "@common/enums/user-roles.enum";
import { BaseUser, UserId } from "@common/interfaces/users/base-user.interface";


export class UserDto implements BaseUser {
    role: UserRoles;
    uid: UserId;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    hashedPassword: string;

    resident?: UserId[];
    manager?: UserId;

    documents?: string[];
    relation?: string[];
}