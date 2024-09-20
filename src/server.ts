import fastify from "fastify";
import cors from '@fastify/cors'
import { teams } from "./data/teams";
import { drivers } from "./data/drivers";

const server = fastify({ logger: true })

server.register(cors, {
    origin: "*"
})

server.get("/teams", async(request, response) => {
    response.type("application/json").code(200)

    return teams
})

server.get("/drivers", async(request, response) => {
    response.type("application/json").code(200)

    return drivers
})

interface DriverParams {
    id: string
}

server.get<{Params: DriverParams}>("/drivers/:id", async(request, response) => {
    const id = parseInt(request.params.id)
    const driver = drivers.find(d => d.id === id)

    if(!driver) {
        response.type("application/json").code(404)
        return { message: "Driver Not Found"}
    }else {
        response.type("application/json").code(200)
        return driver
    }
})

const port = 4444

server.listen({port: port}, () => {
    console.log("Servidor iniciado na porta: " + port);
})