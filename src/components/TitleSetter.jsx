import { useEffect } from 'react'

export default function TitleSetter({ text }) {
  useEffect(() => {
    document.title = text
  }, [text])

  return <p>Current title: {text}</p>
}
