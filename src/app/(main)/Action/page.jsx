'use client';
import cx from 'clsx';
import { ActionIcon, useMantineColorScheme, useComputedColorScheme, Group } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import classes from './action.module.css';

const Action = () =>{
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

return (
    <Group justify="center" align='center' pt={8}>
        <ActionIcon
            onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
            variant="default"
            size="xl"
            aria-label="Toggle color scheme"
        >
            {computedColorScheme === 'light' ? (
                <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
            ) : (
                <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
            )}
        </ActionIcon>
    </Group>
);
}
export default Action;  