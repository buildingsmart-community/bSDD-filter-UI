import React, { useRef, useEffect } from 'react'
import { Form } from 'react-bootstrap'

interface Props {
  label: string
  value: true | false | undefined
  setValue: (value: true | false | undefined) => void
}

function Checkbox(props: Props) {
  const checkboxRef = useRef<HTMLInputElement>(null)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.indeterminate = false
    props.setValue(e.target.checked)
  }

  useEffect(() => {
    if (checkboxRef.current) {
      if (props.value === true) {
        checkboxRef.current.checked = true
      } else if (props.value === undefined) {
        checkboxRef.current.indeterminate = true
      }
    }
  })

  return <Form.Check ref={checkboxRef} type='checkbox' onChange={(e) => handleOnChange(e)} />
}

export default Checkbox
