import 'reflect-metadata';

const required = Symbol.for('required');

type RequiredOptions = {
    message?: string;
}

function Required(options?: RequiredOptions) {
    return function Decorator(target: any, propertyName: string) {
        console.log('Entered in the decorator method' + propertyName);
        Reflect.defineMetadata(required, options, target);
        return null;
    }
}


class SomeClass {
    
    @Required()
    property: string = null;
    
}

class IllegalArgumentException extends Error {
    constructor(message?: string) {
        super(message);
    }
}
const SomeClassProxy = new Proxy(SomeClass, {
    construct(target, args, newTarget) {
        const instance = new target(...args as []);
        const properties = Object.keys(instance);     
        for (const property of properties) {
            const options = Reflect.getMetadata(required, Object.getPrototypeOf(instance), property);
            console.log(options)
            if (!options) {
                continue;
            }
            const { message } = options;
            if (!instance[property]) {
                throw new IllegalArgumentException(message ?? `The property ${property} is required`);
            }   
        }     
        return instance;
    }
});

const target = new SomeClassProxy();

