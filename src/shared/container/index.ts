import { container } from 'tsyringe'
import { DataSource } from 'typeorm'
import { dataSource } from '../../database'
import { UserRepository } from '../../modules/accounts/repositories/implementations/UserRepository'
import { IUserReposisoty } from '../../modules/accounts/repositories/IUserRepository'
import { AuthenticateUserController } from '../../modules/accounts/useCases/authenticateUser/AuthenticateUserController'
import { AuthenticateUserUseCase } from '../../modules/accounts/useCases/authenticateUser/AuthenticateUserUseCase'
import { CreateUserController } from '../../modules/accounts/useCases/createUser/CreateUserController'
import { CreateUserUseCase } from '../../modules/accounts/useCases/createUser/CreateUserUseCase'
import { UpdateUserAvatarController } from '../../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController'
import { UpdateUserAvatarUseCase } from '../../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarUseCase'
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

  container.register<IUserReposisoty>(
    UserRepository,
    { useValue: new UserRepository(container.resolve(DataSource)) }
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

  container.register<CreateUserUseCase>(CreateUserUseCase, {
    useValue: new CreateUserUseCase(container.resolve(UserRepository))
  })

  container.register<CreateUserController>(CreateUserController, {
    useValue: new CreateUserController(container.resolve(CreateUserUseCase))
  })

  container.register<AuthenticateUserUseCase>(AuthenticateUserUseCase, {
    useValue: new AuthenticateUserUseCase(container.resolve(UserRepository))
  })

  container.register<AuthenticateUserController>(AuthenticateUserController, {
    useValue: new AuthenticateUserController(container.resolve(AuthenticateUserUseCase))
  })

  container.register<UpdateUserAvatarUseCase>(UpdateUserAvatarUseCase, {
    useValue: new UpdateUserAvatarUseCase(container.resolve(UserRepository))
  })

  container.register<UpdateUserAvatarController>(UpdateUserAvatarController, {
    useValue: new UpdateUserAvatarController(container.resolve(UpdateUserAvatarUseCase))
  })
}

export { containerConfig }
