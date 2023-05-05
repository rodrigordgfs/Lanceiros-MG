import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import md5 from 'blueimp-md5'
import { AxiosError } from 'axios'
import { z } from 'zod'

const signInBodySchema = z.object({
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
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  switch (req.method) {
    case 'POST':
      {
        const { username, password } = signInBodySchema.parse(req.body)

        let user = null
        try {
          user = await prisma.user.findFirst({
            where: {
              username,
            },
          })
        } catch (error) {
          return res.status(400).json({
            message:
              error instanceof AxiosError
                ? error?.response?.data.message
                : 'Erro ao buscar usuário',
          })
        }

        if (!user) {
          return res.status(404).json({ message: 'Usuário não encontrado' })
        }

        if (user.password !== md5(password)) {
          return res
            .status(401)
            .json({ message: 'Dados incorretos! Verifique e tente novamente' })
        }

        res.status(200).json({
          id: user.id,
          username: user.username,
          name: user.name,
          avatar_url: user.avatar_url,
          first_access: user.first_access,
        })
      }

      break
    default:
      return res.status(405).end()
  }
}
