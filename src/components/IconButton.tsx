import { type ComponentProps, ReactNode } from 'react'
//extendendo todas as propriedades do button html, aí eu tenho acesso ao type: submit
interface PropsIconButton extends ComponentProps<'button'> {}

export function IconButton(props: PropsIconButton) {
  return (
    <button
      className="p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer hover:text-gray-500 hover:bg-blue transition-colors duration-300"
      {...props}
    />
  )
}
