import { z } from "zod"

export const userWorkTimeDefaultValues = {
  userId: '',
  workTimeStart: new Date(),
  workTimeEnd: new Date(new Date().setFullYear(new Date().getHours() + 4)).toISOString(),
}
export const userWorkTimeValidationSchema = () => z.object({
  userId: z.string().uuid(),
  workTimeStart: z.date(),
  workTimeEnd: z.date()
})