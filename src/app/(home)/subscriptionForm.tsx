'use client'
import { Button } from '@/components/Button'
import { InputField, InputIcon, InputRoot } from '@/components/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Mail, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const subsCriptionSchema = z.object({
  name: z.string().min(2, 'Digite Seu Nome'),
  email: z.string().email('Digite um email válido'),
})
type SybscriptionShema = z.infer<typeof subsCriptionSchema>

export function SubsCriptionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SybscriptionShema>({
    resolver: zodResolver(subsCriptionSchema),
  })

  function onSubscribe(data: SybscriptionShema) {
    console.log(data)
  }
  return (
    <form
      onSubmit={handleSubmit(onSubscribe)}
      className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>
      <div className="space-y-3">
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <User />
            </InputIcon>
            <InputField
              type="text"
              placeholder="Insira seu nome"
              {...register('name')}
            />
          </InputRoot>
          {errors.name && (
            <p className="text-danger text-xs font-semibold">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <InputRoot>
            <InputIcon>
              <Mail />
            </InputIcon>
            <InputField
              type="email"
              placeholder="E-mail"
              {...register('email')}
            />
          </InputRoot>
          {errors.email && (
            <p className="text-danger text-xs font-semibold">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      <Button type="submit">
        Confirmar <ArrowRight />{' '}
      </Button>
    </form>
  )
}
