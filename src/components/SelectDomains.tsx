import { useState, useEffect } from 'react'
import Select from 'react-select'
import { Api, DomainContractV3 } from './BsddApi'

const api = new Api()
api.baseUrl = 'https://test.bsdd.buildingsmart.org'

interface Option {
  label: string
  value: string
}

interface Props {
  activeDomains: Option[]
  setActiveDomains: (value: Option[]) => void
  setDomains: (value: { [id: string]: DomainContractV3 }) => void
}

export default function SelectDomains(props: Props) {
  const [selectOptions, setSelectOptions] = useState<any[]>(props.activeDomains)

  useEffect(() => {
    api.api.domainV3List().then((response) => {
      if (response.data) {
        setSelectOptions(
          response.data.map((domain) => ({
            value: domain.namespaceUri,
            label: domain.name,
          })),
        )
        props.setDomains(
          response.data.reduce((accumulator, domain) => {
            if (domain.namespaceUri) {
              return { ...accumulator, [domain.namespaceUri]: domain }
            }
            return { ...accumulator }
          }, {}),
        )
      }
    })
  }, [setSelectOptions, props.setDomains])

  const handleOnChange = (e: any) => {
    props.setActiveDomains(e.map((option: Option) => option))
  }

  return (
    <Select
      isMulti
      name='domains'
      options={selectOptions}
      className='basic-multi-select'
      classNamePrefix='select'
      placeholder={<div> filter domains...</div>}
      onChange={(e) => handleOnChange(e)}
      defaultValue={props.activeDomains.map((domain) => domain)}
    />
  )
}
