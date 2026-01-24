import { createFileRoute } from '@tanstack/react-router'
import Button from '@/components/Button2'
import {
  BellIcon,
  CloudDownloadIcon,
  CopyCheckIcon,
  CopyIcon,
  DatabaseIcon,
} from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute('/button-variant/')({
  component: ButtonVariantPage,
})

function ButtonVariantPage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleCopy = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedIndex(index)
      // Reset the "Copied!" message after 2 seconds
      setTimeout(() => setCopiedIndex(null), 2000)
    } catch (err) {
      console.error('Failed to copy!', err)
    }
  }

  const buttonSamples = [
    {
      component: (
        <Button
          variant='success'
          rounded
          outline
        >
          <BellIcon /> Button 1
        </Button>
      ),
      code: `<Button variant='success' rounded outline>\n  <BellIcon /> Button 1\n</Button>`,
    },
    {
      component: (
        <Button
          variant='danger'
          outline
        >
          <CloudDownloadIcon /> Button 2
        </Button>
      ),
      code: `<Button variant='danger' outline>\n  <CloudDownloadIcon /> Button 2\n</Button>`,
    },
    {
      component: (
        <Button variant='warning'>
          <DatabaseIcon /> Button 3
        </Button>
      ),
      code: `<Button variant='warning'>\n  <DatabaseIcon /> Button 3\n</Button>`,
    },
    {
      component: <Button variant='secondary'>Button 4</Button>,
      code: `<Button variant='secondary'>\n  Button 4\n</Button>`,
    },
    {
      component: (
        <Button
          variant='danger'
          rounded
        >
          Button 5
        </Button>
      ),
      code: `<Button variant='danger' rounded>\n  Button 5\n</Button>`,
    },
    {
      component: <Button>Button 6</Button>,
      code: `<Button>\n  Button 6\n</Button>`,
    },
  ]

  return (
    <main className='space-y-8 bg-white min-h-screen'>
      <h1>Button Variants Documentation</h1>

      {buttonSamples.map((sample, index) => (
        <div
          key={index}
          className='flex items-center group'
        >
          {/* Preview Area (Fixed width to keep code aligned) */}
          <div className='w-40 flex justify-start items-center'>
            {sample.component}
          </div>

          {/* Syntax Area (Styled like the image) */}
          <div className='w-md relative'>
            <div className='absolute top-2 left-0 text-[10px] text-slate-400 uppercase tracking-widest font-bold pt-2 pl-4'>
              React / JSX
            </div>
            <pre className='bg-[#1e1e1e] text-[#d4d4d4] p-6 pt-10 rounded-md overflow-x-auto border border-slate-800 shadow-xl font-mono text-sm leading-relaxed'>
              <code>{sample.code}</code>
            </pre>

            {/* Copy Button */}
            <button
              onClick={() => handleCopy(sample.code, index)}
              className='absolute top-3 right-4 flex items-center gap-2 text-slate-500 hover:text-white transition-colors'
              title='Copy code'
            >
              <span className='text-[10px] font-bold uppercase'>
                {copiedIndex === index ? 'Copied!' : ''}
              </span>
              {copiedIndex === index ? (
                <CopyCheckIcon className='size-4 text-green-400' />
              ) : (
                <CopyIcon className='size-4' />
              )}
            </button>
          </div>
        </div>
      ))}
    </main>
  )
}
