import { Request, Response } from "express";
import UserService from "../services/UserService";

export default class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async create(req: Request, res: Response) {
    try {
      const { username, email, password } = req.body;

      const user = await this.userService.create({ username, email, password });
      return res.status(201).json(user);
    } catch (err) {
      return res.status(500);
    }
  }
}
