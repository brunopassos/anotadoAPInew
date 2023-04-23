import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserReturn } from "../../interfaces/user.interface";
import { returnUserSchema } from "../../schemas/user.schemas";

const listOneUserService = async (email:string): Promise<IUserReturn> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const users: User[] = await userRepository.find();

    const account: User | undefined = users.find(user => user.email === email);

    const listedUser = returnUserSchema.parse(account);

    return listedUser;
}

export default listOneUserService;