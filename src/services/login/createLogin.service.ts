import jwt from "jsonwebtoken";
import { ILogin } from "../../interfaces/login.interfaces";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";
import { compare } from "bcryptjs";
import "dotenv/config";

const createLoginService = async (loginData: ILogin): Promise<string> => {
  
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepository.findOneBy({
    email: loginData.email,
  });

  if (!user) {
    throw new AppError("Wrong email or password.", 401);
  }

  const passwordMatch: boolean = await compare(loginData.password, user.password);

  if (!passwordMatch) {
    throw new AppError("Wrong email or password.", 401);
  }

  const token: string = jwt.sign(
    {
        email: loginData.email,
    },
    process.env.SECRET_KEY!,
    {
       expiresIn: "24h",
       subject: String(user.id) 
    }
  );

  return token;
};


export default createLoginService