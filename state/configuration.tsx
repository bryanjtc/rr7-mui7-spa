import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const modeAtom = atomWithStorage<'light' | 'dark' | 'system'>(
  'modeStateConfiguration',
  'light'
);

export const isDarkModeAtom = atom((get) => {
  const mode = get(modeAtom);
  const prefersDarkMode = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;
  return mode === 'dark' || (mode === 'system' && prefersDarkMode);
});
