import Button from '@/components/Button'
import Modal from '@/components/Modal'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/modal/')({
  component: ModalPage,
})

function ModalPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleOpenModal = () => setIsOpen((prev) => !prev)
  const handleClose = () => setIsOpen(false)

  const modal = (
    <Modal
      onClose={handleClose}
      // actionTrigger (Close Button)
      actionTrigger={
        <Button
          danger
          onClick={handleClose}
        >
          Close
        </Button>
      }
    >
      The Modal Description goes here lorem ipsum dolor sit amet consectetur
      adipisicing elit. Incidunt non, quidem itaque illum veritatis maiores
      cumque facilis sint iure labore natus dolorum minima adipisci soluta est
      ipsum explicabo eum quam.
    </Modal>
  )

  return (
    <main className='bg-white min-h-screen'>
      <h1 className='mb-8'>Modal Documentation</h1>

      <Button
        primary
        onClick={handleOpenModal}
      >
        Open Modal
      </Button>
      {isOpen && modal}
    </main>
  )
}
