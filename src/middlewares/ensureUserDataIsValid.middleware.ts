import { Request, Response, NextFunction } from "express";
import { ZodTypeAny } from "zod";

const ensureUserDataIsValidMiddleware = (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    
    const validatedData = schema.parse(req.body);

    req.body = validatedData;

    next();
}

export default ensureUserDataIsValidMiddleware;