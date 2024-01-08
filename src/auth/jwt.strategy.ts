import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt } from "passport-jwt";
import { Strategy } from "passport-local";
import { jwtConstant } from "./jwt.constant";
import { Injectable } from "@nestjs/common";

@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy){

    constructor() {
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: false,
          secretOrKey: jwtConstant.secret,
        });
      }


    async validate(payload:any){
        return {sub : payload.id , email :  payload.email};
    }

}