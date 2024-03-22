import { BaseUser, UserId } from './base-user.interface';
import { UserRoles } from '../../enums/user-roles.enum';

export interface Caregiver extends BaseUser {
    role: UserRoles.Caregiver;
    residents: UserId[];
    manager: UserId;
}
