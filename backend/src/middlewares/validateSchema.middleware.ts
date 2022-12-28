import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";

const validateSchema =
  (schema: AnySchema) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      const bodyInput = req.body;
      const validated = await schema.validate(bodyInput, {
        stripUnknown: true,
        abortEarly: false,
      });
      req.body = validated;
      next();
    } catch (error: any) {
      return res.status(400).json({
        message: error.errors?.join(", "),
      });
    }
  };

export { validateSchema };
