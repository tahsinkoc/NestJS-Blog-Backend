import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Text } from 'src/Modal/text.entity';

@Injectable()
export class EssayService {
    constructor(
        @InjectRepository(Text)
        private EssayRepo: Repository<Text>,
    ) { }

    async create(Essay: Partial<Text>): Promise<Text> {
        const Ess = this.EssayRepo.create(Essay);
        return await this.EssayRepo.save(Ess);
    }

    async findAll(): Promise<Text[]> {
        return await this.EssayRepo.find();
    }
    async findById(id: number): Promise<Text> {
        const data = await this.EssayRepo.findOne({ where: { id } });
        if (!data) {
            throw new NotFoundException(`Post with ${id} not found`);
        }
        return data;
    }
}