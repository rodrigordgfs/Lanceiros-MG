import Image from 'next/image'
import {
  Container,
  Form,
  Header,
  Subtitle,
  InputContainer,
  Title,
  Input,
  InputLabel,
  TextInputContainer,
  InputError,
  UserIcon,
  LockIcon,
  Button,
} from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import Logo from '@/assets/logo.png'
import Head from 'next/head'
import { z } from 'zod'
import { useForm } from 'react-hook-form'

const loginFormSchema = z.object({
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

type LoginFormData = z.infer<typeof loginFormSchema>

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  async function handleLogin(data: LoginFormData) {}

  return (
    <>
      <Head>
        <title>Lanceiros MG | Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Image src={Logo} alt="Lanceiros MG" width={100} height={100} />

        <Header>
          <Title>Lanceiros Moto Grupo</Title>
          <Subtitle>Faça login e comece a usar!</Subtitle>
        </Header>

        <Form onSubmit={handleSubmit(handleLogin)}>
          <InputContainer>
            <InputLabel htmlFor="user">Usuário</InputLabel>
            <TextInputContainer>
              <UserIcon />
              <Input
                type="text"
                placeholder="lanceirosmg"
                id="username"
                disabled={isSubmitting}
                {...register('username')}
              />
            </TextInputContainer>
            {errors.username && (
              <InputError>{errors.username.message}</InputError>
            )}
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="password">Senha</InputLabel>
            <TextInputContainer>
              <LockIcon />
              <Input
                type="password"
                placeholder="*************"
                id="password"
                disabled={isSubmitting}
                {...register('password')}
              />
            </TextInputContainer>
            {errors.password && (
              <InputError>{errors.password.message}</InputError>
            )}
          </InputContainer>
          <Button>Entrar na plataforma</Button>
        </Form>
      </Container>
    </>
  )
}
