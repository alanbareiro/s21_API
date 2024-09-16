const clienteService = require('../services/clienteService');

const crearCliente = async (req, res) => {
    try 
    {
        const { nombre, email } = req.body;
        const result = await clienteService.crearCliente(nombre, email);
        res.status(201).json(result);
    } 
    catch (error)
    {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el cliente' }); // 500 Internal Server Error
    }
   
};

const obtenerClientes = async (req, res) => {
    try 
    {
        const result = await clienteService.obtenerClientes();
        res.status(200).json(result); // 200 OK
    } 
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener los clientes' });
    }
 
};

const actualizarCliente = async (req, res) => {
    try
    {
        const id = req.params.id;
        const { nombre, email } = req.body;
        const result = await clienteService.actualizarCliente(id, nombre, email);
        if (result) 
        {
            res.status(200).json(result); // 200 OK
        } 
        else 
        {
            res.status(404).json({ error: 'Cliente no encontrado' }); // 404 Not Found
        }
    } 
    catch (error) 
    {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar el cliente' });
    }
    
};

const eliminarCliente = async (req, res) => {
    try 
    {
        const id = req.params.id;
        const result = await clienteService.eliminarCliente(id);
        if (result) 
        {
            res.sendStatus(204); // 204 No Content (eliminado con éxito)
        } else 
        {
            res.status(404).json({ error: 'Cliente no encontrado' });
        }
    }
    catch (error) 
    {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el cliente' });
    }
   
};

module.exports = {
    crearCliente,
    obtenerClientes,
    actualizarCliente,
    eliminarCliente,
};


