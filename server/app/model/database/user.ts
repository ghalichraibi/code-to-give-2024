import { UserRoles } from '@common/enums/user-roles.enum';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { BaseUser, UserId } from '@common/interfaces/users/base-user.interface';
import { ApiProperty } from '@nestjs/swagger';

export type UserDocument = User & Document;

@Schema()
export class User implements BaseUser {
    @ApiProperty()
    @Prop({ required: true })
    role: UserRoles;
    
    @ApiProperty()
    @Prop({ required: true })
    uid: UserId;
    
    @ApiProperty()
    @Prop({ required: true })
    firstName: string;
    
    @ApiProperty()
    @Prop({ required: true })
    lastName: string;
    
    @ApiProperty()
    @Prop({ required: false })
    email: string;

    @ApiProperty()
    @Prop({ required: false })
    phoneNumber: string;

    @ApiProperty()
    @Prop({ required: true })
    hashedPassword: string;

    @ApiProperty()
    @Prop({ required: false })
    _id?: string;

    @ApiProperty()
    @Prop({ required: false })
    resident?: UserId[];

    @ApiProperty()
    @Prop({ required: false })
    manager?: UserId;

    @ApiProperty()
    @Prop({ required: false })
    documents?: string[];

    @ApiProperty()
    @Prop({ required: false })
    relation?: string[];
}

export const userSchema = SchemaFactory.createForClass(User);
