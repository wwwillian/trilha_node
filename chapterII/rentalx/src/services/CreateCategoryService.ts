import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

/**
 * [x] - Definir o tipo de retorn
 * [x] - Alterar o retorno do erro
 * [x] - Acessar o repositorio
 * [x] - Return
 */

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository) { }

  execute({ name, description }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category Already exists!");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
