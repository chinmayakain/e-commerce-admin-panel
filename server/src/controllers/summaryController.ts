import { Request, Response } from "express";

const getSummary = (req: Request, res: Response) => {
    return res.status(200).json({ success: true, message: "Valid route!" });
};

export { getSummary };
