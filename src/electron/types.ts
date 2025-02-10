import z from "zod";

export const ActionSchema = z.enum(["reset-size"]);
export type Action = z.infer<typeof ActionSchema>;
export const GameSchema = z.enum(["echoes"]);
export type Game = z.infer<typeof GameSchema>;
