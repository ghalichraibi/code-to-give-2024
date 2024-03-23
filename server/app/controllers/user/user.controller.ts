import { Course } from '@app/model/database/course';
import { CreateCourseDto } from '@app/model/dto/course/create-course.dto';
import { UpdateCourseDto } from '@app/model/dto/course/update-course.dto';
import { CourseService } from '@app/services/course/course.service';
import { UserService } from '@app/services/user/user.service';
import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';
import { ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@ApiTags('User')
@Controller('user')
export class UserController {
    constructor(private readonly usersService: UserService) {}

    @ApiOkResponse({
        description: 'Returns all users',
        type: Course,
        isArray: true,
    })
    @ApiNotFoundResponse({
        description: 'Return NOT_FOUND http status when request fails',
    })
    @Get('/')
    async allUsers(@Res() response: Response) {
        try {
            const allUsers = await this.usersService.getAllUsers();
            response.status(HttpStatus.OK).json(allUsers);
        } catch (error) {
            response.status(HttpStatus.NOT_FOUND).send(error.message);
        }
    }
}
