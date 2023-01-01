import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Accordion, Row, Col, Card } from 'react-bootstrap';
import BsddSearch from './BsddSearch';
import Classifications from './Classifications';
import RecursiveMode from './RecursiveMode';
import SelectDomains from './SelectDomains';
import Apply from './Apply';

interface Option {
  label: string;
  value: string;
}

interface Config {
  defaultDomains: Option[]
}
interface Props {
  callback: (value: any) => void;
  config: Config
}

function App(props: Props) {
  // const [api, setApi] = useState(0);

  function getDefaultDomains(): Option[] {
    if (props.config && props.config.defaultDomains && props.config.defaultDomains.length) {
      return props.config.defaultDomains;
    }
    return [];
  }

  // const [activeClassification, setActiveClassification] = useState<TextSearchResponseClassificationContractV5>({});
  const [activeClassificationUri, setActiveClassificationUri] = useState<string>();
  const [recursiveMode, setRecursiveMode] = useState<boolean>(false);
  const [activeDomains, setActiveDomains] = useState<Option[]>(getDefaultDomains());

  return (
    <Card>
      <Form id="bSDD_form">
        <Card.Body>
          {/* <Card.Title as="h4">bSDD search</Card.Title> */}
          <input type="hidden" name="ifcType" id="ifcType" value="" />
          <input type="hidden" name="name" id="name" value="" />
          <input type="hidden" name="material" id="material" value="" />
          <Row className="mb-3">
            <Col xs={7}>
              <BsddSearch
                activeDomains={activeDomains}
                setActiveClassificationUri={setActiveClassificationUri}
              />
            </Col>
            <Col xs={4}>
              <SelectDomains
                activeDomains={activeDomains}
                setActiveDomains={setActiveDomains}
              />
            </Col>
            <Col>
              <RecursiveMode
                recursiveMode={recursiveMode}
                setRecursiveMode={setRecursiveMode}
              />
            </Col>
          </Row>

          <div className="mb-3 row">
            <Accordion defaultActiveKey="0" >
              <Accordion.Item eventKey="0">
                <Accordion.Header>Classifications</Accordion.Header>
                <Accordion.Body>
                  <Classifications
                    activeClassificationUri={activeClassificationUri}
                    recursiveMode={recursiveMode}
                  />
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Propertysets</Accordion.Header>
                <Accordion.Body>
                  <div id="propertySetsContent" className="card-body collapse show" aria-labelledby="propertySetsHeader">
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <Form.Group className="mb-3 row">
            <Apply
              callback={props.callback}
            />
          </Form.Group>
        </Card.Body>
      </Form >
    </Card >
  );
}

export default App;