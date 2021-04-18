import { Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";



const categoriesRoutes = Router()
const categoriesRepository = new CategoriesRepository()


categoriesRoutes.post("/", (request, response) =>{

        const {name, description} = request.body
      
        const createCateCategoryService = new CreateCategoryService(categoriesRepository)

        createCateCategoryService.execute({name,description})

        return response.status(201).send()

})

categoriesRoutes.get("/", (request, response) =>{

    const allCategories = categoriesRepository.list()

    return response.json(allCategories)

})


export {categoriesRoutes}