const express = require('express');
const cors = require('cors');

const {PrismaClient} = require('@prisma/client');
const clienteRoutes = require('./src/routes/clienteRoutes');
const pedidosRoutes = require('./src/routes/pedidosRoutes');

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/clientes', clienteRoutes);
app.use('/pedidos',pedidosRoutes);

app.get('/', (req, res) => 
    res.send('Hello World!'));

app.listen(3000, ()=>
    console.log('Server ready in http://localhost:3000')
    );
    

//#region
/*

//Crear un Cliente
app.post('/crearcliente', async (req, res) => {
    const {nombre, email} = req.body;
    const result = await prisma.cliente.create({
        data: {
            nombre,
            email
        }
    });
    res.json(result);
});

//Mostrar todos los Clientes
app.get('/clientes', async (req, res) => {
    const result = await prisma.cliente.findMany();

    res.json(result);
});

//Actualizar un cliente
app.put('/cliente/:id' , async (req, res) => {
    const idClient = req.params.id;
    const {nombre, email} = req.body;
    const result = await prisma.cliente.update({
        where: {id : Number(idClient)},
        data:
        {
            nombre,
            email
        }
    });

    res.send(result);
});

//Eliminar un cliente
app.delete('/cliente/:id', async (req, res) => {
    const idClient = req.params.id;
    const result = await prisma.cliente.delete({
        where: {id : Number(idClient)}
    });
    res.send(result);
})

*/
//#endregion