import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Req } from "@nestjs/common";
import { userServices } from "./user.service";
import { UpdateUserDto } from "./dto/Update-user.dto";
import { CreateUserDto } from "./dto/Create-user.dto";
@Controller("user")

export class UserController{
    constructor (private userServices:userServices){}
@Get()
    getAllUser(){
        // return this.bookServices.getAllBook(req)
        return  this.userServices.get()
    }
    
@Get("/:userId")
    getUser(@Param('userId', ParseIntPipe)userId:number){
    return this.userServices.getUser(userId)
}

@Post()
    create(@Body() createUserDto:CreateUserDto,){
        return this.userServices.create(createUserDto)
    }

@Patch('/:userId')
    update(
        @Body() updateuserDto:UpdateUserDto,
        @Param('userId',ParseIntPipe) userId:number,
        ){
        return this.userServices.update(updateuserDto,userId,);
    }

   
    // @Patch('/:bookId')
    // update(
    //   @Body() updatebookDto: UpdateBookDto,
    //   @Param('bookId', ParseIntPipe) bookId: number,
    // ) {
    //   return this.bookServices.update(updatebookDto, bookId);
    // }

@Delete('/:userId')
    delete( @Param ('userId',ParseIntPipe)userId:number){
        return this.userServices.delete(userId)
    }

    
}