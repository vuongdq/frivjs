import { Body, Controller, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { AuthPayloadDto, AuthPermission, AuthResponseDto } from "src/dto/auth.dto";
import { ResponseData } from "src/global/globalClass";
import { HttpMessage, HttpStatus } from "src/global/globalEnum";
import { ResponseType } from "src/global/globalType";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
    constructor(protected readonly authService: AuthService) {
        console.log("AuthController created");
    }
    @Post("signin")
    async signIn(@Body() auth: AuthPayloadDto,
    @Res() res: Response,
    ): Promise<ResponseType<AuthPermission|boolean>> {
        try {
            const isAuth = await this.authService.signIn(auth);
            if(!isAuth) {
                return res.json(
                    new ResponseData(isAuth,HttpStatus.ERROR, HttpMessage.ERROR),
                );
            } else {
                return res.json(
                    new ResponseData(isAuth,HttpStatus.SUCCESS, HttpMessage.SUCCESS),
                );
            }


        } catch (error) {
            return res.json(
                new ResponseData(null,HttpStatus.ERROR, HttpMessage.ERROR),
            );
        }
    }
    @Post("signup")
    async signUp(@Body() auth: AuthPayloadDto,@Res() res: Response): Promise<ResponseType<AuthResponseDto|boolean>> {
        try {
            const isAuth = await this.authService.signUp(auth);
            if(!isAuth) {
                return res.json(
                    new ResponseData(isAuth,HttpStatus.ERROR, HttpMessage.ERROR),
                );
            } else {
                return res.json(
                    new ResponseData(isAuth,HttpStatus.SUCCESS, HttpMessage.SUCCESS),
                );
            }
        } catch (error) {
            return res.json(
                new ResponseData(null,HttpStatus.ERROR, HttpMessage.ERROR),
            );
        }
    }
}