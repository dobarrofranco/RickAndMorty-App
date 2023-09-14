const app = require('../src/app');
const session = require('supertest');
const agent = session(app);


describe("Test de RUTAS", ()=>{
    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async () => {
            await agent.get('/rickandmorty/character/1').expect(200);
        })

        it ('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
            const response = (await agent.get('/rickandmorty/character/1')).body
            expect(response).toHaveProperty("id", "name", "species", "gender", "status", "origin", "image")
        })

        it('Si hay un error responde con status: 500', async () => {
            await agent.get('/rickandmorty/character/1123123').expect(500);
        })
    })
    
    describe("GET /rickandmorty/login", () => {
        it ("La información de Login es correcta", async () => {
            const response = (await agent.get('/rickandmorty/login?email=mr.francodobarro@gmail.com&password=pass123')).body;
            expect(response.access).toEqual(true);
        })
        it ("La información de Login es inccorrecta", async () => {
            const response = (await agent.get('/rickandmorty/login?email=asdasd@gmail.com&password=pass1123123')).body;
            expect(response.access).toEqual(false);
        })    
    })

    describe("POST /rickandmorty/fav", () => {
        const character1 = {id: 1, name: 'Juan'}
        const character2 = {id: 2, name: 'Marta'}
        it("Devuelve el elemento enviado por body", async () => {
            const response = (await agent.post('/rickandmorty/fav').send(character1)).body;
            expect(response).toContainEqual(character1);
        })
        it('Devuelve el elemento previo y el actual', async () => {
            const response = (await agent.post('/rickandmorty/fav').send(character2)).body;
            expect(response).toContainEqual(character1, character2);
        })
    })

    describe("DELETE /rickandmorty/fav/:id", () => {
        const character1 = {id: 1, name: 'Juan'}
        const character2 = {id: 2, name: 'Marta'}
        it ('Devuelve el arreglo sin modificar si no se elimina ningún personaje', async () => {
            const response = (await agent.delete('/rickandmorty/fav/1121')).body;
            expect(response).toContainEqual(character1, character2);
        })
        it('Elimina el personaje correcto por ID', async () => {
            const response = (await agent.delete('/rickandmorty/fav/1123')).body;
            expect(response).toContainEqual(character1);
        })
    })
})
