import { Body, Controller, Post, UseGuards,Request, Req, Logger } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authServices:AuthService){}
    private logger = new Logger('AuthController')

        @UseGuards(AuthGuard('local')) 
        @Post('/login')
        // async login(@Body() loginDto : any){
        // this.logger.log(`${this.authServices.userValidation} ${Body}`)
        // return this.authServices.userValidation(loginDto.email,loginDto.password)
       
        async login(@Request() req: any){
        this.logger.log(`${this.authServices.userValidation}`)
        return this.authServices.login(req.user)  

        // return this.authServices.validateUser(loginDto.email,loginDto.password)
        }
        // async login(@Request() req : any){
        // console.log(req)
        // return req.book
        // }
    }

