import * as z from "zod"


const playerSchema = z.object({
    playerName: z.string().min(2, {
        message: "Player name must be at least 2 characters long."
    })
})

export default playerSchema