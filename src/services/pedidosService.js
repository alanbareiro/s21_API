const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const crearPedido = async (descripcion, clienteId) => {
    return await prisma.pedido.create({
        data:
        {                      
            descripcion,
            clienteId
        }
    });
};

const actualizarPedidos = async (descripcion, id) => {
    return await prisma.pedido.update(
        {
            where: { id: Number(id) },
            data:
            {
                descripcion
            }            
        }
    );
};

const eliminarPedido = async (id) => {
    return await prisma.pedido.delete({
        where :
        {
            id: Number(id)
        }
    });
};

const obtenerPedidos = async () => {
    return await prisma.pedido.findMany();
};

const obtenerPedido = async (clienteId) => {
    return await prisma.pedido.findMany({
        where: 
        { 
            clienteId: Number(clienteId) 
        }
    });
};



module.exports = {
    obtenerPedidos,
    obtenerPedido,
    crearPedido,
    actualizarPedidos, 
    eliminarPedido
};