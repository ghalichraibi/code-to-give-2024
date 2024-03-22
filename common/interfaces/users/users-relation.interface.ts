import { RelationType } from '../../enums/relation-type.enum';
import { UserId } from './base-user.interface';

export interface UsersRelation  {
    type: RelationType
    resident: UserId,
    external: UserId
}