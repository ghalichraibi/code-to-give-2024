import { Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import * as fs from 'fs-extra';
import { User, UserDocument } from "@app/model/database/user";
import { UserRoles } from "@common/enums/user-roles.enum";
import { UserDto } from "@app/model/dto/user.dto";


@Injectable()
export class UserService implements OnModuleInit {
    constructor(@InjectModel(User.name) private readonly userModel: Model<UserDocument>, private readonly logger: Logger) {
    }

    async onModuleInit(): Promise<void> {
        await this.start();
    }

    async start() {
        if ((await this.userModel.countDocuments()) === 0) {
            await this.populateDB();
        }
    }

    async populateDB(): Promise<void> {
        const users: UserDto[] = [
            {
                uid: "0",
                role: UserRoles.Admin,
                email: "test@test.com",
                firstName: "admin",
                lastName: "admin",
                phoneNumber: "123-456-7890",
                hashedPassword: "$2b$10$1TfwRUWLBWd9lf9pwmKnceT.ZHV0PcnB/k6P6xAI5enWqSWLZ9l/O"
            },
            {
                uid: "1",
                role: UserRoles.Caregiver,
                email: "test@test.com",
                firstName: "caregiver",
                lastName: "caregiver",
                phoneNumber: "123-456-7890",
                hashedPassword: "$2b$10$1TfwRUWLBWd9lf9pwmKnceT.ZHV0PcnB/k6P6xAI5enWqSWLZ9l/O",
                resident: ["2"],
                manager: "0"
            },
            {
                uid: "1",
                role: UserRoles.Resident,
                email: "test@test.com",
                firstName: "resident",
                lastName: "resident",
                phoneNumber: "123-456-7890",
                hashedPassword: "$2b$10$1TfwRUWLBWd9lf9pwmKnceT.ZHV0PcnB/k6P6xAI5enWqSWLZ9l/O",
                documents: [],
                relation: []
            } 
        ]
        await this.userModel.insertMany(users);
        this.logger.log('Populated the database with users');
    }

    async getAllUsers(): Promise<User[]> {
        return await this.userModel.find({});
    }

    async addUser(user: UserDto): Promise<void>{
        try {
            await this.userModel.create(user);
            return Promise.resolve();
        } catch (error) {
            return Promise.reject(`Failed to insert game: ${error}`);
        }
    }
}

