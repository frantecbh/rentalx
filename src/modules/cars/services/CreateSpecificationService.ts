import { ISpecicationsRepostory } from "../repositories/ISpecificationsRepository";

interface IREquest {
    name: string;
    description: string;
}


class CreateSpecificationService {

    constructor(private specificationsRepository: ISpecicationsRepostory){

    }

    execute({name, description}: IREquest): void{

        const specificationAlreadyExists = this.specificationsRepository.findByName(name)

        if(specificationAlreadyExists){
            throw new Error("Specification alredy existis!")
        }

            this.specificationsRepository.create({
                name,
                description
            })

        
    }


}

export {CreateSpecificationService}