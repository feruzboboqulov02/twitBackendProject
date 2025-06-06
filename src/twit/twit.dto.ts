import { text } from "stream/consumers";
import {z} from "zod";

export const createTwitDto = z.object({
    text: z.string().min(1,"text is required").max(280)
})