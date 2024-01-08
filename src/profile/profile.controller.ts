import { Controller, Get } from '@nestjs/common';

@Controller('profile')
export class ProfileController {

    @Get()
    profile(){
        return {message :"this Route is protected  "};
    }
}
