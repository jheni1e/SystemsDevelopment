import * as person from "../src/models/person";

declare global {
    namespace Express {
        interface Request {
            person?: person.IPerson;
        }
    }
}