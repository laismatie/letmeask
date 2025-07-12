import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod"
import { z } from "zod/v4"
import { fastifyMultipart } from "@fastify/multipart"
import { transcribeAudio } from "../../services/gemini.ts"


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

            const audioBuffer = await audio.toBuffer()
            const audioAsBase64 = audioBuffer.toString('base64')

            const transcription = await transcribeAudio(audioAsBase64, audio.mimetype)

            return {transcription}

            /*
            - Transcrever o audio
            - Gerar o vetor semantico / embeddings
            - Armazenar os vetores no banco de dados
            */ 
        }  
    )
}