import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "src/Modal/user.entity";
import { Auth } from "src/Modal/auth";
import { v4 as uuid } from 'uuid';


type UserLogged = {
    name: string,
    token: string
}


@Injectable()

export class UserService {
    constructor(
        @InjectRepository(User)
        private UserRepository: Repository<User>,
    ) { }

    async login(name: string, password: string): Promise<UserLogged> {

        const data = await this.UserRepository.findOne({ where: { name, password } });
        if (!data) {
            throw new NotFoundException('User not found');
        } else {
            const AuthInstance = Auth.getInstance();
            const token = uuid();
            AuthInstance.save(token);
            return { name: data.name, token: token }
        }

    }
}