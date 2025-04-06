import { isApple } from '@/utils/functions/agent/device/isApple';
import { KbdModifiers } from '../../enums/KbdModifiers';

export const KBD_MAP: Record<KbdModifiers, string> = Object.freeze({
	[KbdModifiers.Command]: '⌘',
	[KbdModifiers.Shift]: '⇧',
	[KbdModifiers.Ctrl]: '⌃',
	[KbdModifiers.Option]: '⌥',
	[KbdModifiers.Enter]: '↩︎',
	[KbdModifiers.Delete]: '⌫',
	[KbdModifiers.Escape]: '⎋',
	[KbdModifiers.Tab]: '⇥',
	[KbdModifiers.Capslock]: '⇪',
	[KbdModifiers.Up]: '↑',
	[KbdModifiers.Right]: '→',
	[KbdModifiers.Down]: '↓',
	[KbdModifiers.Left]: '←',
	[KbdModifiers.Pageup]: '⇞',
	[KbdModifiers.Pagedown]: '⇟',
	[KbdModifiers.Home]: '↖︎',
	[KbdModifiers.End]: '↘︎',
	[KbdModifiers.Help]: isApple() ? 'Help' : 'F1',
	[KbdModifiers.Space]: '⎵',
});
