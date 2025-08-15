'use client';
import { useEffect, useCallback } from 'react';

interface KeyboardShortcutConfig {
  key: string;
  ctrlKey?: boolean;
  altKey?: boolean;
  shiftKey?: boolean;
  callback: () => void;
  description: string;
}

interface UseKeyboardShortcutsProps {
  shortcuts: KeyboardShortcutConfig[];
  enabled?: boolean;
}

export function useKeyboardShortcuts({ shortcuts, enabled = true }: UseKeyboardShortcutsProps) {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!enabled) return;

      shortcuts.forEach(shortcut => {
        const matchesKey = event.key.toLowerCase() === shortcut.key.toLowerCase();
        const matchesCtrl = !shortcut.ctrlKey || event.ctrlKey || event.metaKey;
        const matchesAlt = !shortcut.altKey || event.altKey;
        const matchesShift = !shortcut.shiftKey || event.shiftKey;

        if (matchesKey && matchesCtrl && matchesAlt && matchesShift) {
          // Only trigger if the exact modifiers match (not just subset)
          const hasRequiredCtrl = shortcut.ctrlKey ? event.ctrlKey || event.metaKey : true;
          const hasRequiredAlt = shortcut.altKey ? event.altKey : true;
          const hasRequiredShift = shortcut.shiftKey ? event.shiftKey : true;

          // Ensure no extra modifiers if not specified
          const noExtraCtrl = shortcut.ctrlKey || !(event.ctrlKey || event.metaKey);
          const noExtraAlt = shortcut.altKey || !event.altKey;
          const noExtraShift = shortcut.shiftKey || !event.shiftKey;

          if (
            hasRequiredCtrl &&
            hasRequiredAlt &&
            hasRequiredShift &&
            noExtraCtrl &&
            noExtraAlt &&
            noExtraShift
          ) {
            event.preventDefault();
            shortcut.callback();
          }
        }
      });
    },
    [shortcuts, enabled]
  );

  useEffect(() => {
    if (enabled) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
    return undefined;
  }, [handleKeyDown, enabled]);

  // Return helper function to show shortcuts to user
  const getShortcutDisplay = (shortcut: KeyboardShortcutConfig): string => {
    const parts: string[] = [];
    if (shortcut.ctrlKey) parts.push(navigator.platform.includes('Mac') ? '⌘' : 'Ctrl');
    if (shortcut.altKey) parts.push(navigator.platform.includes('Mac') ? '⌥' : 'Alt');
    if (shortcut.shiftKey) parts.push('⇧');
    parts.push(shortcut.key.toUpperCase());
    return parts.join(navigator.platform.includes('Mac') ? '' : '+');
  };

  return { getShortcutDisplay };
}
