import React, { useRef, useEffect } from 'react'
import { Form } from 'react-bootstrap'

export const CHECKED = 1
export const UNCHECKED = 2
export const INDETERMINATE = -1

const IndeterminateCheckbox = (props: any) => {
  const { value, ...otherProps } = props
  const checkRef: any = useRef()

  useEffect(() => {
    checkRef.current.checked = value === CHECKED
    checkRef.current.indeterminate = value === INDETERMINATE
  }, [checkRef, value])

  return <Form.Check checked='true' type='checkbox' ref={checkRef} {...otherProps} />
}

export default IndeterminateCheckbox
