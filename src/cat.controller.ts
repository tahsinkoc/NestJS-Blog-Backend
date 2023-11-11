import { Controller, Get } from "@nestjs/common";

interface Dat {
    id: number,
    name: string
}


@Controller('tasos')
export class TasosController {
    @Get()
    findAll(): Dat {
        return (
            { id: 1, name: 'Özgür' }
        );
    }


}