import { useEffect, useRef } from 'react'

// This implementation was copied from alpine.js
// https://github.com/alpinejs/alpine/blob/fd9eddd2e01eac6630b2f5f52e93509fdf237bce/dist/alpine.js#L693

const useClickAway = (handler, once=false) => {
  const ref = useRef(null)

  useEffect(() => {
    const clickHandler = (event) => {
      const el = ref.current
      if (el.contains(event.target)) return
      if (el.offsetWidth < 1 && el.offsetHeight < 1) return

      handler(event)

      if (once) {
        document.removeEventListener('click', clickHandler)
      }
    }

    document.addEventListener('click', clickHandler)

    return () => {
      document.removeEventListener('click', clickHandler)
    }
  }, [])

  return ref
}

export default useClickAway

