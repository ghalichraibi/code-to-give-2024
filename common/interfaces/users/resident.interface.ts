import { BaseUser } from "./base-user.interface.ts";
import { UserRoles } from "../../enums/user-roles.enum.ts";
import { UsersRelation } from "./users-relation.interface.ts";

export interface Resident extends BaseUser {
    role: UserRoles.Resident,
    documents: string[],
    relations: UsersRelation[],
}