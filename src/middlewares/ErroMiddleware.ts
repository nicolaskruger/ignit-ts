import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";

export const errorMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {
    if(error instanceof AppError){
      return res.status(error.statusCode).json({
        msg: error.message
      })
    }
    
    return res.status(500).json({
      msg: error.message
    })

  };
  