import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { userServices } from 'src/user/user.service';

@Injectable()
export class AuthService {
    private logger = new Logger('AuthService genrated token')
    constructor(
        private userServices:userServices,
        private jwtService: JwtService,
        ){}
            
    async userValidation( email:string,password:string ){
    
        const user = await this.userServices.findByEmail(email)
        if(user && user.password === password){
                return user;
        }
        return null
    }
    async login(user:any){
        const payload = { sub:user.userId, email:user.email }
        
        this.logger.log(` \n \n${this.jwtService.sign(payload)}`)
        
        return {
            access_token : await this.jwtService.signAsync(payload)
        } 
            
            
            // access_token :  this.jwtService.sign(payload)
        
    }
        
    // async validateUser(username: string, password: string): Promise<User | null> {
    //     const user = await this.userRepository.findOne({
    //       where: { username, password },
    //       relations: ['book'], // Load the associated book
    //     });  
    //     return user || null;
    //   }
}