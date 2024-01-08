import { Body, Controller, Post, UseGuards,Request, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authServices:AuthService){}

        @UseGuards(AuthGuard('local'))
        @Post('/login')
        async login(@Body() loginDto : any){
                 return this.authServices.userValidation(loginDto.email,loginDto.password)
        // async login(@Request() req: any){
                // return this.authServices.login(req.user)   
                
                // return this.authServices.validateUser(loginDto.email,loginDto.password)
            }
            // async login(@Request() req : any){
            //         console.log(req)
            //     return req.book
            // }
    }

