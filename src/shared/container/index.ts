import { container } from 'tsyringe'
import { DataSource } from 'typeorm'
import { dataSource } from '../../database'
import { ICategoryRepository } from '../../modules/cars/repositories/ICategoryRepository'
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoryRepositories'
import { SpecificationRepository } from '../../modules/cars/repositories/implementations/SpecificationRepository'
import { ISpecificationRepository } from '../../modules/cars/repositories/ISpecificationRepository'
import { CreateCategoryController } from '../../modules/cars/useCases/createCategory/CreateCategoryController'
import { CreateCategoryUseCase } from '../../modules/cars/useCases/createCategory/CreateCategoryUseCase'
import { CreateSpecificationController } from '../../modules/cars/useCases/createSpecification/CreateSpecificationController'
import { CreateSpecificationUseCase } from '../../modules/cars/useCases/createSpecification/CreateSpecificationUseCase'
import { FindSpecificationByNameController } from '../../modules/cars/useCases/findSpecificationByName/FindSpecificationByNameController'
import { FindSpecificationByNameUseCase } from '../../modules/cars/useCases/findSpecificationByName/FindSpecificationByNameUseCase'
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

  container.register<ISpecificationRepository>(
    SpecificationRepository,
    {
      useValue: new SpecificationRepository(container.resolve(DataSource))
    }
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

  container.register<FindSpecificationByNameUseCase>(FindSpecificationByNameUseCase, {
    useValue: new FindSpecificationByNameUseCase(container.resolve(SpecificationRepository))
  })

  container.register<FindSpecificationByNameController>(FindSpecificationByNameController, {
    useValue: new FindSpecificationByNameController(container.resolve(FindSpecificationByNameUseCase))
  })

  container.register<CreateSpecificationUseCase>(CreateSpecificationUseCase, {
    useValue: new CreateSpecificationUseCase(container.resolve(SpecificationRepository))
  })

  container.register<CreateSpecificationController>(CreateSpecificationController, {
    useValue: new CreateSpecificationController(container.resolve(CreateSpecificationUseCase))
  })
}

export { containerConfig }
