import { Category } from "src/models/category.model";
import { AbstractPromise } from "./AbstrackRepository";
export interface ICategoryRepository extends AbstractPromise<Category> {
}
