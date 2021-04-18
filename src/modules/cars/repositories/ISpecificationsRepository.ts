import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO{
    name: string;
    description: string;
}

interface ISpecicationsRepostory {


    create({name, description}: ICreateSpecificationDTO): void
    findByName(name: string): Specification;
    
}

export{ ISpecicationsRepostory, ICreateSpecificationDTO }