import { Body, Controller, Get, Param, Post, Req, UnauthorizedException, Headers } from '@nestjs/common';
import { Text } from 'src/Modal/text.entity';
import { EssayService } from 'src/Services/essay.service';
import { Auth } from 'src/Modal/auth';
@Controller()
export class essayController {
    constructor(private readonly Essay: EssayService) { }

    @Post('/write')
    async write(@Body() PostData: Text, @Headers('AuthToken') AuthToken: string): Promise<Text> {
        const authInstance = Auth.getInstance();
        console.log(AuthToken)
        const result = await authInstance.check(AuthToken)
        if (!result) {
            throw new UnauthorizedException('You have to login first')
        }
        return this.Essay.create(PostData)
    }

    @Get('/write-default/:image/:title/:content')
    async create(@Param('image') image: string, @Param('title') title: string, @Param('content') content: string): Promise<string> {
        const Ess = {
            image: image,
            title: title,
            content: content
        };

        const newEssay = await this.Essay.create(Ess);
        return `Text Created Title: ${newEssay.title}`
    }

    @Get('/posts')
    async getAllPosts(): Promise<Text[]> {
        return this.Essay.findAll();
    }

    @Get('/posts/:id')
    async getCatById(@Param('id') id: string): Promise<Text> {
        return this.Essay.findById(parseInt(id, 10));
    }
}