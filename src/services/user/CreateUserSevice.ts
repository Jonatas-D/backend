import prismaClient from '../../prisma'



interface UserRequest{
    name: string;
    email: string;
    password: string;
}


class CreateUserService{
    async execute({ name, email, password }: UserRequest){

        // verificar se ele enviou um email
        if(!email){
            throw new Error("Email incorreto")
        }
          
        //verificar se esse email ja esta cadrastrato na plataforma
       //const userAlreadyExists = await 
        
    
        //if(userAlreadyExists){
          //  throw new Error("User Already exists")
       // }

        return { name: name }
    }
}

export { CreateUserService }