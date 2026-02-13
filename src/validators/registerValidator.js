import {z} from 'zod'

export const registerValidator = z.object({
    username: z.string().min(4,"User name must be at least 4 characters")
})