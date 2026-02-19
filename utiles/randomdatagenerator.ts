import{faker} from'@faker-js/faker';

export class Randomdata
{
    static getfirstname()
    {
        return faker.person.firstName();
    }

    static getlastname()
    {
        return faker.person.lastName();
    }

    static getfullname()
    {
        return faker.person.fullName();
    }
    static getphonenumber()
    {
        return faker.phone.number();
    }
    static getUseremail():string
    {
        return faker.internet.email();
    }
    static getPassword():string
    {
        return faker.internet.password();
    }
    static getRandomCountry():string
    {
        return faker.location.country();
    }

    static getRandomstate():string
    {
        return faker.location.state();
    }
    static getRandomCity():string
    {
        return faker.location.city();
    }
    static getRandomPin()
    {
        return faker.location.zipCode();
    }
    static getRandomAddress()
    {
        return faker.location.streetAddress();
    }
    static getRandomPassword(length:number=10):string
    {
        return faker.internet.password({length})
    }
    
    static getRandomAlphanumeric(length:number=10):string
    {
        return faker.string.alphanumeric({length})
    }

      static getRandomNumeric(length:number=10):string
    {
        return faker.string.numeric({length})
    }

      static getRandomUUID(length:number=10):string
    {
        return faker.string.uuid()
    }
}