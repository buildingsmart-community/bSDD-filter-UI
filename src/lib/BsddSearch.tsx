import { useState } from 'react'
import { Form, Accordion, Row, Col, Card } from 'react-bootstrap'
import Search from './Search'
import Classifications from './Classifications'
import PropertySets from './PropertySets'
import RecursiveMode from './RecursiveMode'
import SelectDomains from './SelectDomains'
import Apply from './Apply'
import { ClassificationContractV4, DomainContractV3 } from './BsddApi'

interface Option {
  label: string
  value: string
}

interface Config {
  defaultDomains: Option[]
}

interface BsddConfig {
  baseUrl: string;
  defaultDomains: Option[];
  defaultSearch: Option;
}

interface Props {
  callback: (value: IfcEntity) => void;
  config: BsddConfig;
}

function BsddSearch(props: Props) {
  const [activeClassificationUri, setActiveClassificationUri] = useState<string>()
  const [recursiveMode, setRecursiveMode] = useState<boolean>(false)
  const [activeDomains, setActiveDomains] = useState<Option[]>(getDefaultDomains())
  const [domains, setDomains] = useState<{ [id: string]: DomainContractV3 }>({})
  const [classifications, setClassifications] = useState<ClassificationContractV4[]>([])
  const [propertySets, setPropertySets] = useState<{ [id: string]: IfcPropertySet }>({})

  function getDefaultDomains(): Option[] {
    if (props.config && props.config.defaultDomains && props.config.defaultDomains.length) {
      return props.config.defaultDomains
    }
    return []
  }

  return (
    <Card>
      <Form id='bSDD_form'>
        <Card.Body>
          {/* <Card.Title as="h4">bSDD search</Card.Title> */}
          <input type='hidden' name='ifcType' id='ifcType' value='' />
          <input type='hidden' name='name' id='name' value='' />
          <input type='hidden' name='material' id='material' value='' />
          <Row className='mb-3'>
            <Col xs={7}>
              <Search activeDomains={activeDomains} setActiveClassificationUri={setActiveClassificationUri} />
            </Col>
            <Col xs={4}>
              <SelectDomains
                activeDomains={activeDomains}
                setActiveDomains={setActiveDomains}
                setDomains={setDomains}
              />
            </Col>
            <Col>
              <RecursiveMode recursiveMode={recursiveMode} setRecursiveMode={setRecursiveMode} />
            </Col>
          </Row>

          <div className='mb-3 row'>
            <Accordion defaultActiveKey={['0', '1']} alwaysOpen>
              <Accordion.Item eventKey='0'>
                <Accordion.Header>Classifications</Accordion.Header>
                <Accordion.Body>
                  <Classifications
                    activeClassificationUri={activeClassificationUri}
                    recursiveMode={recursiveMode}
                    classifications={classifications}
                    setClassifications={setClassifications}
                    domains={domains}
                  />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='1'>
                <Accordion.Header>Propertysets</Accordion.Header>
                <Accordion.Body>
                  <PropertySets
                    classifications={classifications}
                    propertySets={propertySets}
                    setPropertySets={setPropertySets}
                    recursiveMode={recursiveMode}
                  />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <Form.Group className='mb-3 row'>
            <Apply
              callback={props.callback}
              domains={domains}
              classifications={classifications}
              propertySets={propertySets}
            />
          </Form.Group>
        </Card.Body>
      </Form>
    </Card>
  )
}

export default BsddSearch
