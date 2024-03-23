import { UserRoles } from '@common/enums/user-roles.enum';
import { SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseUser, UserId } from '@common/interfaces/users/base-user.interface';

export type UserDocument = User & Document;

export class User implements BaseUser{
    role: UserRoles;
    uid: UserId;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    hashedPassword: string;
    _id?: string;

    resident?: UserId[];
    manager?: UserId;

    documents?: string[];
    relation?: string[];
}

export const userSchema = SchemaFactory.createForClass(User);
