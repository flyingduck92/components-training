import { createFileRoute } from '@tanstack/react-router'
import '../App.css'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main>
      <h1>Welcome to components Design App</h1>
      <br />
      <p>
        Github:{' '}
        <a
          className='underline'
          href='https://github.com/flyingduck92/components-training'
        >
          https://github.com/flyingduck92/components-training
        </a>
      </p>
    </main>
  )
}
