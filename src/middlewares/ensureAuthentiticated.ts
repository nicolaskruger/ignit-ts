import { NextFunction, Request, Response } from "express";
import { container } from "tsyringe"
import jwt from "jsonwebtoken";
import { UserRepository } from "../modules/accounts/repositories/implementations/UserRepository";
import { User } from "../modules/accounts/entities/User";

type IPayLoad = {
    email: string,
    sub: string
}

export interface RequestWithUser extends Request {
    user: User
}

export const ensureAuthenticated = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;

    if(!authorization) throw new Error("Token missing");

    const token = authorization.replace("Bearer ", "")

    try {
        const decoded = jwt.verify(token, '332b7b56acd24bd63d1c0e750e28a80c') as IPayLoad
        console.log({
            ...decoded
        });

        const userRepository = container.resolve(UserRepository)

        const user = await userRepository.findById(decoded.sub)

        if(!user){
            throw new Error()
        }

        req.user = user

        next()
    } catch (error) {
        throw new Error("Invalid token!")
    }


}