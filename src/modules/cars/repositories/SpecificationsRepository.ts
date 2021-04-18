import { Specification } from "../model/Specification";
import { ISpecicationsRepostory, ICreateSpecificationDTO } from "./ISpecificationsRepository";



    class SpecicationsRepostory implements ISpecicationsRepostory{

     private specifications: Specification[]

     constructor(){
         this.specifications = []
     }
   
        create({ name, description }: ICreateSpecificationDTO): void {

            const especification = new Specification();

            Object.assign(especification, {
                    name,
                    description,
                    created_at: new Date()
            })

            this.specifications.push(especification)


        }

        findByName(name: string): Specification {

            const especification = this.specifications.find(especification => Specification.name === name)

            return especification
         
        }

    }


    export{ SpecicationsRepostory }