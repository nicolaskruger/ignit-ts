import { container } from 'tsyringe'
import { DataSource } from 'typeorm'
import { dataSource } from '../../database'
import { ICategoryRepository } from '../../modules/cars/repositories/ICategoryRepository'
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoryRepositories'
import { CreateCategoryController } from '../../modules/cars/useCases/createCategory/CreateCategoryController'
import { CreateCategoryUseCase } from '../../modules/cars/useCases/createCategory/CreateCategoryUseCase'
import { ListCategoryController } from '../../modules/cars/useCases/listCategory/ListCategoryController'
import { ListCategoryUseCase } from '../../modules/cars/useCases/listCategory/ListCategoryUseCase'

const containerConfig = () => {
  container.register<DataSource>(
    DataSource,
    { useValue: dataSource }
  )
  container.register<ICategoryRepository>(
    CategoriesRepository,
    { useValue: new CategoriesRepository(container.resolve(DataSource)) }
  )
  container.register<CreateCategoryUseCase>(CreateCategoryUseCase,
    { useValue: new CreateCategoryUseCase(container.resolve(CategoriesRepository)) }
  )

  container.register<CreateCategoryController>(
    CreateCategoryController,
    { useValue: new CreateCategoryController(container.resolve(CreateCategoryUseCase)) }
  )

  container.register<ListCategoryUseCase>(ListCategoryUseCase, {
    useValue: new ListCategoryUseCase(container.resolve(CategoriesRepository))
  })

  container.register<ListCategoryController>(ListCategoryController, {
    useValue: new ListCategoryController(container.resolve(ListCategoryUseCase))
  })
}

export { containerConfig }
