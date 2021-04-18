import { IcategoriesRepository } from "../repositories/ICategoriesRepositoy"

interface IREquest {
    name: string;
    description: string;
}

class CreateCategoryService {

    constructor(private categoriesRepository: IcategoriesRepository){}


    execute({name, description}: IREquest){

        
        
        const categoryAlreadyExists = this.categoriesRepository.findByName(name)

        if(categoryAlreadyExists){
            throw new Error("Category alredy existis!")
        }

        this.categoriesRepository.create({name, description})  

    }


}


export {CreateCategoryService}