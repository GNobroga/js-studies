import 'reflect-metadata';

const required = Symbol.for('required');

type RequiredOptions = {
    required: boolean;
    message?: string;
};

function Required(options: RequiredOptions =  { required: true, message: '' } ): PropertyDecorator {
    return function (target: any, propertyKey: string) {
        Reflect.defineMetadata(required, options, target, propertyKey);
    }
}

class ValidationError extends Error {
    constructor(message: string) { super(message); }
}

class ObjectDTO {

    @Required()
    public name: string;

    public lastName: string;

    constructor(name) {
        this.name = name;
    }

}

const ObjectDTOProxy = new Proxy(ObjectDTO, {
    construct(target: typeof ObjectDTO, argArray: [any], newTarget: Function) {
        const obj = new target(...argArray);
        for (const key of Object.keys(obj)) {
            const metadata = Reflect.getMetadata(required, target.prototype, key) as RequiredOptions;
            if (!metadata) continue;
            if (metadata.required && !obj[key]) {
                throw new ValidationError(`A propriedade ${key} é obrigatória.`);
            }
        }
        return obj;
    }
});

const object = new ObjectDTOProxy('Gabriel');
