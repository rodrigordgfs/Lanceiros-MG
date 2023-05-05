import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import md5 from 'blueimp-md5'
import { AxiosError } from 'axios'
import { z } from 'zod'

const signUpBodySchema = z.object({
  username: z
    .string()
    .min(6, {
      message: 'O usuário deve ter no mínimo 6 caracteres',
    })
    .max(20, {
      message: 'O usuário deve ter no máximo 20 caracteres',
    }),
  password: z
    .string()
    .min(6, {
      message: 'A senha deve ter no mínimo 6 caracteres',
    })
    .max(20, {
      message: 'O usuário deve ter no máximo 20 caracteres',
    }),
  name: z
    .string()
    .min(3, {
      message: 'O nome deve ter no mínimo 3 caracteres',
    })
    .max(50, {
      message: 'O nome deve ter no máximo 50 caracteres',
    }),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case 'POST':
      {
        const { username, password, name } = signUpBodySchema.parse(req.body)

        try {
          await prisma.user.create({
            data: {
              username,
              name,
              password: String(md5(password)),
            },
          })
        } catch (error) {
          return res.status(400).json({
            message:
              error instanceof AxiosError
                ? error?.response?.data.message
                : 'Erro ao criar o usuário',
          })
        }

        res.status(201).end()
      }

      break
    default:
      return res.status(405).end()
  }
}
