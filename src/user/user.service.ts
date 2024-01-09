import { Injectable, Logger, Param } from "@nestjs/common";
import {UpdateUserDto} from "./dto/Update-user.dto"
import { Repository } from "typeorm";
import { User } from "./entity/user.entity";
import { InjectEntityManager, InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "./dto/Create-user.dto";
@Injectable()
export class userServices{
    // show(bookId: number) {
    //     throw new Error("Method not implemented.");
    // }

    private logger = new Logger('userServices')
    constructor ( 
        @InjectRepository(User)
        private userRepository:Repository<User>){}

get( ):Promise<User[]>{
    // return { book:"DefualtBook", author:"DefualtAuthor"}
    this.logger.log("All user details ")
    return this.userRepository.find()
}

getUser(userId : number){
    this.logger.log(`${userId}`)
    return this.userRepository.findOne({where:{userId}})
}

findByEmail(email:string){
    return this.userRepository.findOne({where:{email}})
}

create(createUserDto:CreateUserDto){
    this.logger.log(`${createUserDto.name} is created thier email ${createUserDto.email}`)
    return this.userRepository.save(createUserDto)
}


update(updateUserDto: UpdateUserDto, userId : number){
    return this.userRepository.update(userId,updateUserDto)
}


delete(userId : number){
    this.logger.log(`${userId} is deleted `)
    return this.userRepository.delete(userId)
}

}