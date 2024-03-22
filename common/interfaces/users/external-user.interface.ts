import { BaseUser } from './base-user.interface';
import { UserRoles } from '../../enums/user-roles.enum';

export interface ExternalUser extends BaseUser {
  role: UserRoles.External;
}