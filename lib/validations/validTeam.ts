import * as z from 'zod'


const teamSchema = z.object({
    teamName: z.string().min(2, {
        message: "Team name must be at least 2 characters long."
    }),
})

export default teamSchema