import {Router} from 'express'
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService'
import { SpecicationsRepostory } from "../modules/cars/repositories/SpecificationsRepository";

const specificationRoutes = Router()

const specificationsRepsository = new SpecicationsRepostory()

specificationRoutes.post("/", (request, response) =>{

    const { name, description } = request.body

    const createSpecificationService = new CreateSpecificationService(specificationsRepsository);

    createSpecificationService.execute({name, description})

    return response.status(201).send()

})



export { specificationRoutes }