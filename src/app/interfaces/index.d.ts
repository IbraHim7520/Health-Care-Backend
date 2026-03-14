import { IRequestUser } from "./reqUserInterface";


declare global {
    namespace Express{
        interface Request {
            user : IRequestUser
        }
    }
}