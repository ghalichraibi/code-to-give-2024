import { Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import * as fs from 'fs-extra';
import { UserRoles } from "@common/enums/user-roles.enum";
import { Resident, User, BaseUser, Caregiver, ExternalUser } from "@common/interfaces/stakeholders/users";
import { MongoClient } from "mongodb";
import { Issue } from "@common/enums/issue.enum";
import { ImmigrationStatus } from "@common/enums/immigration-status.enum";

@Injectable()
export class UserService implements OnModuleInit {
    private db;
    private usersCollection;
    private readonly logger: Logger = new Logger(UserService.name);

    async connectToDb(): Promise<void> {
        try {
            const client = new MongoClient(process.env.DATABASE_CONNECTION_STRING);
            await client.connect();
            this.db = client.db(process.env.DATABASE_NAME);
            this.usersCollection = this.db.collection('users');
        } catch (error) {
            this.logger.error('Failed to connect to the database', error);
        }
    }

    async onModuleInit(): Promise<void> {
        try {
            await this.connectToDb();
            const users = await this.usersCollection.find().toArray();
            if (users.length === 0) {
                await this.populateDB();
            }
        } catch (error) {
            this.logger.error('Failed to populate the database', error);
        }
    }


    async populateDB(): Promise<void> {
        const resident: Resident = {
            uid: "2",
            role: UserRoles.Resident,
            birthDate: new Date(),
            email: "test@test.com",
            firstName: "resident",
            lastName: "resident",
            phoneNumber: "123-456-7890",
            hashedPassword: "$2b$10$1TfwRUWLBWd9lf9pwmKnceT.ZHV0PcnB/k6P6xAI5enWqSWLZ9l/O", // test
            accessibleDocuments: [],
            significantPeople: [],
            monthlyIncome: 1000,
            borough: "Cote-des-Neiges",
            issues: [Issue.Homelessness],
            immigrationStatus: ImmigrationStatus.Citizen,
            isIndigenous: false,
            isVeteran: false,
            numberOfChildren: 0,
            currentLodging: "Maison A",
            caregivers: ["1"],
        }
        
        const caregiver: Caregiver = {
            uid: "1",
            role: UserRoles.Caregiver,
            email: "test@test.com",
            firstName: "caregiver",
            lastName: "caregiver",
            phoneNumber: "123-456-7890",
            hashedPassword: "$2b$10$1TfwRUWLBWd9lf9pwmKnceT.ZHV0PcnB/k6P6xAI5enWqSWLZ9l/O", // test
            residents: ["2"],
            accessibleDocuments: [],
            manager: "0",
        }

        const admin: BaseUser = {
            uid: "0",
            role: UserRoles.Admin,
            email: "test@test.com",
            firstName: "admin",
            lastName: "admin",
            phoneNumber: "123-456-7890",
            hashedPassword: "$2b$10$1TfwRUWLBWd9lf9pwmKnceT.ZHV0PcnB/k6P6xAI5enWqSWLZ9l/O", // test
            accessibleDocuments: [],
        }
        const users: Array<any> = [
            resident,
            caregiver,
            admin
        ]
        await this.usersCollection.insertMany(users);
    }


    async getAllResidents(): Promise<Resident> {
        try {
            const residents = await this.usersCollection.find({ role: UserRoles.Resident }).toArray();
            return Promise.resolve(residents);
        } catch (error) {
            return Promise.reject(`Failed to get residents: ${error}`);
        }
    }

    async getAllUsers(): Promise<User> {
        try {
            const users = await this.usersCollection.find().toArray();
            return Promise.resolve(users);
        } catch (error) {
            return Promise.reject(`Failed to get users: ${error}`);
        }
    }

    async getUserById(uid: string): Promise<User> {
        try {
            const user = await this.usersCollection.findOne({ uid: uid });
            return Promise.resolve(user);
        } catch (error) {
            return Promise.reject(`Failed to get user: ${error}`);
        }
    }

    async createUser(user: User): Promise<void>{
        try {
            await this.usersCollection.insertOne(user);
        } catch (error) {
            return Promise.reject(`Failed to add user: ${error}`);
        }
    }

    async updateUser(uid: string, user: User): Promise<void> {
        try {
            await this.usersCollection.updateOne({ uid: uid }, { $set: user });

        } catch (error) {
            return Promise.reject(`Failed to update user: ${error}`);
        }
    }

    async deleteUser(uid: string): Promise<void> {
        try {
            await this.usersCollection.deleteOne({ uid: uid });
        } catch (error) {
            return Promise.reject(`Failed to delete user: ${error}`);
        }
    }

    async deleteAllUsers(): Promise<void> {
        try {
            await this.usersCollection.deleteMany({});
        } catch (error) {
            return Promise.reject(`Failed to delete all users: ${error}`);
        }
    }
}

