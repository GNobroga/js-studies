
/**
 * 
 * @param {string[]} properties 
 * @param {any[]} propertyValues 
 */
function styles(properties, ...propertyValues) {
    properties = properties
        .map(property => property.replace(/\W/, '').trim())
        .filter(property => property !== '');

    const mapProperties = {};

    let index = 0;
    for (let property of properties) {
        if (index >= propertyValues.length) {
            throw new Error(`${property} doesn't have a specify value.`);
        }
        
        property = property.replace(/[A-Z]/, letter => `-${letter}`);
        mapProperties[property.toLowerCase()] = propertyValues[index++];
    }

    return mapProperties;
}

console.log(styles`
    backgroundColor: ${'red'};
    fontSize: ${'16px'};
    display: ${true ? 'block' : 'flex'}
`
)