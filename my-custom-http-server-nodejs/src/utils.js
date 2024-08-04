/**
 * 
 * @param {string} endpointPattern 
 * @param {string} targetEndpoint
 * @returns {{ [key: string ]: string }}
*/
function extractPathVariable(endpointPattern, targetEndpoint) {
    const pattern = /\{.*\}/;
    const variables = {};
    const values = targetEndpoint.split('/').slice(1);
    const split = endpointPattern.split('/').slice(1);
    for (let i = 0 ; i < split.length ; i++) {
        const name = split.at(i);
        if (pattern.test(name)) {
            const key = [...name].filter(char => !(char === '{' || char === '}')).join('');
            if (i >= values.length) {
                return {};
            }
            let value = values[i];
            if (!isNaN(Number(value))) {
                value = parseInt(value);
            }
            variables[key] = value;
        }
    }
    return variables;
}

/**
 * @param {string} pathPattern 
 * @param {string} path 
 * @returns {boolean} 
 */
function matchesPathPattern(handler, request) {
    const pathPattern = handler.endpoint;
    const path = request.url;

    try {
        const pattern = /\{.*\}/;
        const variables = extractPathVariable(pathPattern, path);
        const variableValues = Object.values(variables);
        
        let variableValueIndex = 0;
        const pathPatternSplit = pathPattern.split('/');
        const result = pathPatternSplit.map(pathPattern => {
            if (pattern.test(pathPattern)) {
                return variableValues[variableValueIndex++];
            }
            return pathPattern;
        }).join('/');
        
        return result === path.trim() && request.method.toUpperCase() === handler.method;
    } catch(error) {
        return false;
    }
}



module.exports = {
    extractPathVariable,
    matchesPathPattern
}