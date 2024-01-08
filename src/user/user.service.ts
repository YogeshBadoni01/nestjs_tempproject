import { Injectable, Param } from "@nestjs/common";
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

    constructor ( 
        @InjectRepository(User)
        private userRepository:Repository<User>){}

get( ):Promise<User[]>{
    // return { book:"DefualtBook", author:"DefualtAuthor"}
    return this.userRepository.find()
}

getUser(userId : number){
    return this.userRepository.findOne({where:{userId}})
}

findByauthor(email:string){
    return this.userRepository.findOne({where:{email}})
}

create(createUserDto:CreateUserDto){
    return this.userRepository.save(createUserDto)
}


update(updateUserDto: UpdateUserDto, userId : number){
    return this.userRepository.update(userId,updateUserDto)
}


delete(userId : number){
    return this.userRepository.delete(userId)
}

}