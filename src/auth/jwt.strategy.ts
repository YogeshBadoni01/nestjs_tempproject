import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt,Strategy } from "passport-jwt";
import { jwtConstant } from "./auth.constant";
import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){

    private logger = new Logger('jwtStrategy')
    constructor() {
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: false,
          secretOrKey: jwtConstant.secret,
        });
      }


    async validate(payload:any){
        this.logger.log(`their are a payload error which is ${payload}`)
        return {userId : payload.sub , email :  payload.email};
    }

}