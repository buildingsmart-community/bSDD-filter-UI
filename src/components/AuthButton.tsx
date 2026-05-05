// Purpose: Compact bSDD auth indicator — single Avatar styled by auth state
import { Avatar, Loader, Menu, Text, Tooltip } from '@mantine/core';
import { IconLogout, IconUser } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../auth/useAuth';

/**
 * A compact avatar button showing bSDD authentication state.
 *
 * - Not configured: grey avatar, disabled
 * - Loading: spinner
 * - Not authenticated: blue avatar with user icon; click triggers login
 * - Authenticated: blue avatar with name initial; click opens logout menu
 */
export function AuthButton() {
  const { t } = useTranslation();
  const { isAuthenticated, isConfigured, user, login, logout, isLoading } = useAuth();

  if (isLoading) {
    return <Loader size={16} />;
  }

  const displayName = user?.name || user?.username;

  const avatar = (
    <Avatar
      size="sm"
      radius="xl"
      color={isConfigured ? 'blue' : 'gray'}
      onClick={!isConfigured || isAuthenticated ? undefined : login}
      aria-label={
        !isConfigured
          ? t('auth.notConfigured', 'bSDD login not configured')
          : isAuthenticated
            ? t('auth.authenticatedViaBsdd')
            : t('auth.loginForFasterApi')
      }
      style={{
        cursor: !isConfigured ? 'not-allowed' : 'pointer',
        opacity: !isConfigured ? 0.4 : 1,
        alignSelf: 'center',
      }}
    >
      {isAuthenticated && displayName ? displayName.charAt(0).toUpperCase() : <IconUser size={16} />}
    </Avatar>
  );

  const tooltipLabel = !isConfigured
    ? t('auth.notConfigured', 'bSDD login not configured')
    : isAuthenticated
      ? (displayName ?? t('auth.authenticatedViaBsdd'))
      : t('auth.loginForFasterApi');

  if (isAuthenticated) {
    return (
      <Menu shadow="md" width={180} position="bottom-end">
        <Tooltip label={tooltipLabel} withArrow position="bottom">
          <Menu.Target>{avatar}</Menu.Target>
        </Tooltip>
        <Menu.Dropdown>
          {displayName && (
            <>
              <Menu.Label>{t('auth.authenticatedViaBsdd')}</Menu.Label>
              <Menu.Item component="div" style={{ cursor: 'default' }}>
                <Text size="xs" c="dimmed" truncate>
                  {displayName}
                </Text>
              </Menu.Item>
              <Menu.Divider />
            </>
          )}
          <Menu.Item leftSection={<IconLogout size={14} />} onClick={logout} color="red">
            {t('auth.logout')}
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    );
  }

  return (
    <Tooltip label={tooltipLabel} withArrow position="bottom">
      {avatar}
    </Tooltip>
  );
}
