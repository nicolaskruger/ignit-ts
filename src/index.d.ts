import { User } from './modules/accounts/entities/User'

declare global{
    namespace Express {
        interface Request {
           user?: User
        }
     }
}
