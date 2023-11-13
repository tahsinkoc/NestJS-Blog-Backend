import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from 'src/Modal/user.entity';
import { UserService } from 'src/Services/user.service';
import { Auth } from 'src/Modal/auth';
import { v4 as uuid } from 'uuid';



@Controller()
export class userController {
    constructor(private readonly UserS: UserService) { }

    @Post('/login')
    async LoginTest(@Body() PostData: Partial<User>): Promise<any> {

        return this.UserS.login(PostData.name, PostData.password)
    }
}