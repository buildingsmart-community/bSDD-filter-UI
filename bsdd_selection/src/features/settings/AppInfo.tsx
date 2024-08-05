import { Accordion, Grid, Text, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';

const appVersion = import.meta.env.VITE_APP_VERSION;

interface AppInfoProps {
  id: number;
}

function AppInfo({ id }: AppInfoProps) {
  const { t } = useTranslation();

  return (
    <Accordion.Item key={id} value={id.toString()}>
      <Accordion.Control>
        <Title order={5}>{t('appInfoLabel')}</Title>
      </Accordion.Control>
      <Accordion.Panel>
        <Grid gutter="md">
          <Grid.Col span={3}>
            <Text size="xs">UI App version:</Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <Text size="xs">{appVersion}</Text>
          </Grid.Col>
        </Grid>
        <Grid gutter="md">
          <Grid.Col span={3}>
            <Text size="xs">Documentation:</Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <Text size="xs">
              <a
                href="https://github.com/buildingsmart-community/bSDD-Revit-plugin/wiki"
                target="_blank"
                rel="noreferrer"
              >
                {t('checkDocumentation')}
              </a>
            </Text>
          </Grid.Col>
        </Grid>
      </Accordion.Panel>
    </Accordion.Item>
  );
}

export default AppInfo;
