import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const listOneUserService = async (email:string): Promise<User | undefined> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const users: User[] = await userRepository.find();

    const account: User | undefined = users.find(user => user.email === email);

    return account;
}

export default listOneUserService;