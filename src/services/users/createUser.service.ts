import { Repository } from "typeorm";
import { IUser, IUserReturn } from "../../interfaces/user.interface";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { returnUserSchema } from "../../schemas/user.schemas";
import { AppError } from "../../errors";

const createUserService = async (userData: IUser): Promise<IUserReturn> => {
    
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const findedUser = await userRepository.findOne({where: { email: userData.email}});

    if(findedUser){
        throw new AppError("User already exists", 409);
    }

    const user = userRepository.create(userData);

    await userRepository.save(user);

    const newUser:IUserReturn = returnUserSchema.parse(user);

    return newUser;
}

export default createUserService