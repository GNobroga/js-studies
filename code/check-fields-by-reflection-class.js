
class Example {

    static fields = ['name', 'lastName'];

    static hasProperties(target) {
        for (const property of Example.fields) {
            if (property in target) {
                return true;
            } 
        }
        return false;
    }
}

console.log(Example.hasProperties({ name: 'Gabriel' }));