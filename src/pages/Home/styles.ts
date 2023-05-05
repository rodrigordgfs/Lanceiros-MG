'use client'

import { styled } from '@/styles'
import { Lock, User } from 'phosphor-react'

export const Container = styled('main', {
  maxWidth: '100%',
  maxHeight: '100%',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  '@mobile': {
    padding: '$2',
  },
})

export const Box = styled('div', {
  padding: '$16',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const Header = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  alignItems: 'center',
  marginTop: '$4',
})

export const Title = styled('h1', {
  fontSize: '$4xl',
  textAlign: 'center',
})

export const Subtitle = styled('p', {
  fontSize: '$lg',
  color: '$gray400',
  textAlign: 'center',
})

export const Form = styled('form', {
  maxWidth: 400,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  marginTop: '$6',
})

export const InputContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  marginBottom: '$4',
})

export const InputLabel = styled('label', {
  color: '$gray100',
  fontSize: '$md',
  fontWeight: '$medium',
})

export const TextInputContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '$gray700',
  border: '2px solid $gray900',
  borderRadius: '$sm',
  padding: '$4',
  gap: '$2',
  transition: 'all 0.2s ease-in-out',

  '&:has(input:focus)': {
    borderColor: '$red600',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const UserIcon = styled(User, {
  color: '$gray400',
})

export const LockIcon = styled(Lock, {
  color: '$gray400',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$md',
  color: '$white',
  fontWeight: '$regular',
  backgroundColor: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray400',
  },
})

export const InputError = styled('span', {
  fontSize: '$sm',
  color: '$red600',
})

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$md',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  backgroundColor: '$red600',
  minWidth: 150,
  width: '100%',
  padding: '$4',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',

  '&:disabled': {
    cursor: 'not-allowed',
    backgroundColor: '$gray200',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$red700',
  },
})
