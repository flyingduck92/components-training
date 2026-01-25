import { CheckIcon, ChevronDownIcon } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import Panel from './Panel'

type Option = {
  label: string
  value: string
}

type DropdownProps = {
  options: Option[]
  value: Option | null
  onChange: (option: Option) => void
}

function Dropdown({ options, value, onChange }: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const divEl = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!divEl.current) {
        return
      }

      if (!divEl.current.contains(event?.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handler)

    return () => {
      document.removeEventListener('click', handler)
    }
  }, [])

  const icon = (
    <span className='text-4xl'>
      <ChevronDownIcon
        className={`transition-transform duration-200 stroke-3 ${isOpen && 'rotate-180'}`}
      />
    </span>
  )

  const iconChecked = (
    <span className='group-hover:ml-1.5'>
      <CheckIcon
        className='stroke-3 '
        size={16}
      />
    </span>
  )

  const handleClick = () => {
    setIsOpen((prev) => !prev)
  }

  const handleOptionClick = (option: Option) => {
    setIsOpen(false) // close options
    onChange(option)
  }

  const renderedOptions = options.map((option) => (
    <div
      className='group flex justify-between items-center hover:bg-sky-100 hover:font-bold hover:*:ml-1.5 transition-normal duration-200 rounded cursor-pointer p-1.5'
      key={option.value}
      onClick={() => handleOptionClick(option)}
    >
      {value?.label === option.label ? (
        <>
          <span className='flex justify-between items-center font-bold'>
            {option.label}
          </span>
          {iconChecked}
        </>
      ) : (
        <span>{option.label}</span>
      )}
    </div>
  ))

  return (
    <div
      ref={divEl}
      className='w-48 relative select-none'
    >
      <Panel
        className='flex items-center justify-between cursor-pointer p-2'
        onClick={handleClick}
      >
        {value?.label || 'Select...'}
        {icon}
      </Panel>
      {isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
    </div>
  )
}

export default Dropdown
