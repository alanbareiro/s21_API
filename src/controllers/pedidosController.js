const pedidosService = require('../services/pedidosService');

const obtenerPedidos = async (req, res) => {
    const result = await pedidosService.obtenerPedidos();
    res.json(result);
};

const obtenerPedido = async (req, res) => {
    const {clienteId} = req.body;
    const result = await pedidosService.obtenerPedido(clienteId);
    res.json(result);
};

const crearPedido = async (req, res) => {
    try 
    {
        const {descripcion, clienteId} = req.body;
        const result = await pedidosService.crearPedido(descripcion, clienteId);
        res.status(201).json(result);
    }
    catch(error)
    {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el Pedido' }); // 500 Internal Server Error
    }
    res.json(result);
}

const actualizarPedido = async (req, res) => {
    const {descripcion} = req.body;
    const {id} = req.params;
    const result = await pedidosService.actualizarPedidos(descripcion, id);
    res.json(result);
}

const eliminarPedido = async (req, res) => {
    const id = req.params.id;
    const result = await pedidosService.eliminarPedido(id);
    res.json(result);
};

module.exports = {
    obtenerPedidos,
    obtenerPedido,
    crearPedido,
    actualizarPedido,
    eliminarPedido
};

