import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod"
import { z } from "zod/v4"
import { fastifyMultipart } from "@fastify/multipart"


export const uploadAudioRoute: FastifyPluginCallbackZod = async (app) => {
    app.post(
        '/rooms/:roomId/audio', 
        {
            schema: {
                params: z.object({
                    roomId: z.string(),
                }),
            },
        },
        async (request, reply) => {
            const { roomId } = request.params;

            const audio = await request.file()

            if (!audio) {
                throw new Error('Audio is required');
            }

            /*
            - Transcrever o audio
            - Gerar o vetor semantico / embeddings
            - Armazenar os vetores no banco de dados
            */ 
        }  
    )
}