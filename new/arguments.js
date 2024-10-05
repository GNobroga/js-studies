function join() {
    const data = [];
    for (const i in arguments) {
        data.push(arguments[i]);
    }
    return data.join(' ');
}

console.log(join('Gabriel', 'Cardoso', 'Girarde'))