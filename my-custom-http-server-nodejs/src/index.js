const Server = require('./server');

const app = new Server();

const data = [];

let productSequenceId = 1;

function endpointWith(path) {
    return '/products' + (path ?? '');
}

app.get(endpointWith(), (req, res) => {
    return res.json({ data });
});

app.post(endpointWith(), (req, res) => {
    if ('name' in req.body && typeof req.body.name === 'string' && 
            req.body.name.trim() !== '' && 'price' in req.body && !isNaN(Number(req.body.price))) {

        req.body.id = productSequenceId++;
        data.push(req.body);
        return res.status(201).json({ message: 'product registred'});
    }
    return res.status(404).json({ message: 'product no registred'});
});

app.get(endpointWith('/{id}'), (req, res) => {
    const product = data.find(product => product.id === req.pathVariables.id);
    if (product) {
        return res.json(product);
    }
    return res.status(404).json({ message: 'product no registred'});
});

app.run(3000);