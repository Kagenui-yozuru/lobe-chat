import { ActionIcon } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { MessageSquarePlus } from 'lucide-react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { DESKTOP_HEADER_ICON_SIZE } from '@/const/layoutTokens';
import { useSessionStore } from '@/store/session';

import SessionSearchBar from '../../features/SessionSearchBar';

// eslint-disable-next-line @typescript-eslint/no-unused-vars,unused-imports/no-unused-vars
export const useStyles = createStyles(({ css, token }) => ({
  logo: css`
    user-select: none;

    display: inline-block;

    font-family: 'Arial Rounded MT Bold', sans-serif;
    font-size: 20px;
    font-weight: bold;
    line-height: 36px; /* Align vertically with the icons */
    color: #000; /* Black color */
  `,
  top: css`
    position: sticky;
    top: 0;
  `,
}));

const Header = memo(() => {
  const { styles } = useStyles();
  const { t } = useTranslation('chat');
  const [createSession] = useSessionStore((s) => [s.createSession]);

  return (
    <Flexbox className={styles.top} gap={16} padding={16}>
      <Flexbox distribution={'space-between'} horizontal>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <div className={styles.logo}>Yozuru's AI</div>
        <ActionIcon
          icon={MessageSquarePlus}
          onClick={() => createSession()}
          size={DESKTOP_HEADER_ICON_SIZE}
          style={{ flex: 'none' }}
          title={t('newAgent')}
        />
      </Flexbox>
      <SessionSearchBar />
    </Flexbox>
  );
});

export default Header;
