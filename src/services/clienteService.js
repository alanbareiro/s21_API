const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const crearCliente = async (nombre, email) => {
    return await prisma.cliente.create({
        data: 
        {
            nombre,
            email,
        },
    });
};

const obtenerClientes = async () => {
    return await prisma.cliente.findMany();
};

const actualizarCliente = async (id, nombre, email) => {
    return await prisma.cliente.update({
        where: { id: Number(id) },
        data: { nombre, email },
    });
};

const eliminarCliente = async (id) => {
    return await prisma.cliente.delete({
        where: { id: Number(id) },
    });
};

module.exports = {
    crearCliente,
    obtenerClientes,
    actualizarCliente,
    eliminarCliente,
};