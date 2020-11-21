import { useState } from 'react'

const useForm = (initialValue: string = ""): [string, any, any] => {
  const [state, setState] = useState(initialValue)
  const formHandler = (e: React.ChangeEvent<HTMLInputElement>) => setState(e.target.value)

  return [state, setState, formHandler]
}

export default useForm
