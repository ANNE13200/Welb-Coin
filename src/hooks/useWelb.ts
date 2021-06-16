import { useContext } from 'react'
import { Context } from '../contexts/WelbProvider'

const useWelb = () => {
  const { welb } = useContext(Context)
  return welb
}

export default useWelb
