import { cn } from '@sglara/cn'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type ModalProps = {
  children: React.ReactNode
  onClose: () => void
  actionTrigger: React.ReactNode
}

function ModalContainer(): HTMLElement {
  let modalContainer = document.getElementById('modal-container')
  if (!modalContainer) {
    modalContainer = document.createElement('div')
    modalContainer.id = 'modal-container'
    document.body.appendChild(modalContainer)
  }
  return modalContainer
}

function Modal({ children, onClose, actionTrigger }: ModalProps) {
  const [containerMount, setContainerMount] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setContainerMount(ModalContainer())
    document.body.classList.add('overflow-hidden')

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [])

  if (!containerMount) return null

  return createPortal(
    <div className='fixed inset-0 grid place-items-center transition-all duration-150 ease-out'>
      <div
        onClick={onClose}
        className='fixed inset-0 bg-zinc-100/80 backdrop-blur-xs'
      ></div>
      <div
        className={cn([
          'fixed w-full max-w-lg sm:max-w-xl lg:max-w-2xl bg-white shadow-md',
          'flex flex-col gap-4 justify-between p-4',
        ])}
      >
        <div>{children}</div>
        <div className='flex justify-end'>{actionTrigger}</div>
      </div>
    </div>,
    containerMount,
  )
}

export default Modal
