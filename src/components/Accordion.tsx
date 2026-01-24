import { ChevronRight } from 'lucide-react'
import { useState } from 'react'

type Item = {
  id: string
  label: string
  content: string
}

type AccordionProps = {
  items: Item[]
}

function Accordion({ items }: AccordionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number>(-1)

  const handleExpand = (updatedIndex: number) => {
    setExpandedIndex((currentIndex) => {
      return currentIndex === updatedIndex ? -1 : updatedIndex
    })
  }

  const renderedItems = items.map((item, index) => {
    const isExpand = expandedIndex === index
    const icon = (
      <span className='text-4xl'>
        <ChevronRight
          className={`transition-transform duration-200 ${isExpand ? 'rotate-90 stroke-3 stroke-white' : 'rotate-0'}`}
        />
      </span>
    )

    return (
      <div key={item.id}>
        <div
          className={`flex items-center justify-between p-2 font-bold ${isExpand ? 'bg-blue-500 text-white' : 'bg-blue-300'} `}
          onClick={() => handleExpand(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpand && (
          <div className='p-2 bg-zinc-300 text-zinc-950'>{item.content}</div>
        )}
      </div>
    )
  })

  return <div className='flex flex-col'>{renderedItems}</div>
}

export default Accordion
