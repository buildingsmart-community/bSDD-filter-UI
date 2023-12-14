import { Badge, Checkbox, Group, Stack, Table, Tabs, Text } from '@mantine/core';
import { MainUriSelect } from './MainUriSelect';
import { useState } from 'react';
import { BsddBridgeData } from '../../../../common/src/IfcData/bsddBridgeData';

interface SettingsProps {
  bsddBridgeData: BsddBridgeData;
}

function Settings({ bsddBridgeData }: SettingsProps) {
  const [mainDictionaryUri, setMainDictionaryUri] = useState<string>(
    'https://identifier.buildingsmart.org/uri/digibase/bim-basis-objecten/0.1',
  );
  const [filterDictionaryUris, setFilterDictionaryUris] = useState<string[]>([]);
  const subDomains = ['https:google.com', 'lalala'];

  return (
    <Tabs.Panel value={'settings'}>
      <Stack gap={'xs'} pt={'md'}>
        <Text>Selecteer hoofddomein</Text>
        <MainUriSelect mainUrl={mainDictionaryUri} setMainUrl={setMainDictionaryUri} />

        <Text>Selecteer subdomein(en)</Text>
        {subDomains.map((subDomain, index) => (
          <Checkbox
            key={index}
            label={subDomain}
            onClick={(event) => {
              if (event.currentTarget.checked) {
                setFilterDictionaryUris([...filterDictionaryUris, subDomain]);
              } else {
                setFilterDictionaryUris(filterDictionaryUris.filter((it) => it != subDomain));
              }
            }}
          >
            {subDomain}
          </Checkbox>
        ))}

        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>
                <Text>
                  <span>Settings</span>
                </Text>
              </Table.Th>
              <Table.Th>
                <Text>
                  <span>Value</span>
                </Text>
              </Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr>
              <Table.Td>
                <Text>
                  <span>Name</span>
                </Text>
              </Table.Td>
              <Table.Td>
                <Text>
                  <span>{bsddBridgeData.name ?? 'no name supplied'}</span>
                </Text>
              </Table.Td>
            </Table.Tr>

            <Table.Tr>
              <Table.Td>
                <Text>
                  <span>bsdd api environment</span>
                </Text>
              </Table.Td>
              <Table.Td>
                <Text>
                  <span>{bsddBridgeData.bsddApiEnvironment ?? 'no bsdd api environment supplied'}</span>
                </Text>
              </Table.Td>
            </Table.Tr>

            <Table.Tr>
              <Table.Td>
                <Text>
                  <span>main dictionary url</span>
                </Text>
              </Table.Td>
              <Table.Td>
                <Text>
                  <span>{bsddBridgeData.mainDictionaryUri ?? 'no main dictionary url supplied'}</span>
                </Text>
              </Table.Td>
            </Table.Tr>

            <Table.Tr>
              <Table.Td>
                <Text>
                  <span>filter dictionary urls</span>
                </Text>
              </Table.Td>
              <Table.Td>
                <Text>
                  <span>{bsddBridgeData.filterDictionaryUris.join(', ') ?? 'no filter dictionary urls supplied'}</span>
                </Text>
              </Table.Td>
            </Table.Tr>

            <Table.Tr>
              <Table.Td>
                <Text>Selected subdomains</Text>
              </Table.Td>

              <Table.Td>
                <Group>
                  {filterDictionaryUris.map((subDomain, subDomainIndex) => (
                    <Badge key={subDomainIndex}>{subDomain}</Badge>
                  ))}
                </Group>
              </Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </Stack>
    </Tabs.Panel>
  );
}

export default Settings;
