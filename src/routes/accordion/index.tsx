import Accordion from '@/components/Accordion'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/accordion/')({
  component: AccordionPage,
})

function AccordionPage() {
  const items = [
    {
      id: 'lk-111',
      label: 'Can I use React',
      content:
        'Yes, you can. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      id: 'lk-222',
      label: 'Can I use Vue',
      content:
        "No, you can't. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 'lk-333',
      label: 'Can I use Svelte',
      content:
        "No, you can't. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ]

  return (
    <main className='bg-white min-h-screen'>
      <h1 className='mb-8'>Accordion Documentation</h1>

      <Accordion items={items} />
    </main>
  )
}
