import { pgTable, uuid,timestamp, vector, text } from "drizzle-orm/pg-core";
import { rooms } from "./rooms.ts";

export const audioChunks = pgTable('audio_chunks', {
    id: uuid().primaryKey().defaultRandom(),
    roomId: uuid().references(() => rooms.id).notNull(),
    transcription: text().notNull(),
    embedding: vector({ dimensions: 1536 }).notNull(),
    createdAt: timestamp().defaultNow().notNull(),
})

export type AudioChunk = typeof audioChunks.$inferSelect;
export type NewAudioChunk = typeof audioChunks.$inferInsert;