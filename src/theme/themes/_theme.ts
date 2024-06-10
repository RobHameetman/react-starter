import { Theme } from '../_internals';
import { BorderRadii, RelativeBorderRadii } from '../borders';
import { BOX_SHADOW_1 } from '../boxshadows';
import { Colors } from '../colors';
import { LengthInRem, Spacing } from '../spacing';
import { Headings, LineHeight, Text } from '../typography';

const _theme: Partial<Theme> = {};

_theme.focusColor = Colors.Tertiary;
_theme.textColor = Colors.OffBlack;
_theme.textColorInverse = Colors.OffWhite;
_theme.iconColor = _theme.textColor;
_theme.iconColorInverse = _theme.textColorInverse;

_theme.primaryBackgroundColor = Colors.OffWhite;
_theme.secondaryBackgroundColor = Colors.OffWhiteTint;
_theme.tertiaryBackgroundColor = Colors.OffBlack;

export const DefaultTheme: Theme = {
	...(_theme as Theme),

	accordionTextColor: _theme.textColor,
	accordionBorderBottom: Colors.Secondary,
	accordionBorderBottomEngaged: Colors.Primary,

	/* Alert */
	alertBorderRadius: BorderRadii['0.25rem'],
	alertBoxShadow: BOX_SHADOW_1,
	alertTextColor: _theme.textColor,

	/* Anchor */
	anchorColor: Colors.Tertiary,
	anchorColorEngaged: Colors.TertiaryEngaged,

	/* AppBar */
	appbarBackgroundColor: _theme.primaryBackgroundColor,
	appbarTextColor: _theme.textColor,
	appbarPosition: 'absolute',

	/* Autocomplete */
	autocompleteBackgroundColor: _theme.secondaryBackgroundColor,
	autocompleteBorder: `1px solid ${_theme.textColor}`,
	autocompleteBorderRadius: RelativeBorderRadii['0.25em'],
	autocompleteTextColor: _theme.textColor,
	autocompletePlaceholderColor: Colors.Grey,

	/* Breadcrumbs */
	breadcrumbColor: _theme.textColor,
	breadcrumbSize: '0.875rem',

	/* Buttons */
	buttonBorderRadius: Spacing[3] as LengthInRem,
	buttonIconColor: _theme.iconColor,
	buttonTextColor: _theme.textColor,
	buttonFilledBackgroundColor: Colors.Primary,
	buttonFilledBackgroundColorEngaged: Colors.PrimaryEngaged,
	buttonOutlinedBackgroundColorHover: Colors.SecondaryEngaged,
	buttonOutlinedBorderColor: Colors.Secondary,
	buttonOutlinedBorderColorEngaged: Colors.SecondaryEngaged,
	buttonTransparentBackgroundColorHover: Colors.SecondaryEngaged,

	/* Card */
	cardBackgroundColor: _theme.secondaryBackgroundColor,
	cardBorderRadius: BorderRadii['0.125rem'],
	cardBoxShadow: BOX_SHADOW_1,
	cardSpacing: Spacing['2rem'],

	/* Checkbox Input (BaseCheckableInput) */
	checkboxColor: Colors.Secondary,
	checkboxColorEngaged: Colors.Primary,
	checkboxBackgroundColorEngaged: Colors.SecondaryEngaged,

	/* Data Table */
	dataTableHeadColor: _theme.primaryBackgroundColor,
	dataTableHeadBorderColor: Colors.Secondary,
	dataTableBodyColor: _theme.primaryBackgroundColor,
	dataTableBodyColorEngaged: Colors.SecondaryEngaged,
	dataTableBodyColorSelected: Colors.OffBlackTint10,
	dataTableBodyBorderColor: Colors.OffBlackTint20,
	dataTableTextColor: _theme.textColor,
	dataTableIconColor: _theme.iconColor,
	dataTableIconColorEngaged: Colors.SecondaryEngaged,
	dataTableIconBorderActive: `1px solid ${Colors.Secondary}`,

	/* DatePicker */
	datepickerAccentColor: Colors.Primary,
	datepickerBackgroundColor: _theme.secondaryBackgroundColor,
	datepickerOutline: `1px solid ${Colors.Primary}`,
	datepickerOutlineSelected: `1px solid ${Colors.Primary}`,

	/* Dialog */
	dialogBackgroundColor: _theme.primaryBackgroundColor,
	dialogTextColor: _theme.textColor,
	dialogOverlayColor: Colors.OffBlack,
	dialogOverlayOpacity: 0.5,
	dialogSmallMaxWidth: '37.5rem',
	dialogMediumMaxWidth: '50rem',
	dialogLargeMaxWidth: '80rem',

	/* Divider */
	dividerColor: _theme.textColor,
	dividerHeight: '0.125em',

	/* ErrorPage */
	errorPageTitleSize: '3.75rem',
	errorPageSubtitleSize: '1.5rem',

	/* File Uploader */
	fileUploaderBackgroundColor: _theme.secondaryBackgroundColor,
	fileUploaderBorder: `1px dashed ${_theme.textColor}`,
	fileUploaderTextColor: _theme.textColor,

	/* Footer */
	footerBackgroundColor: Colors.Secondary,
	footerTextColor: _theme.textColorInverse,
	footerBottomBackgroundColor: Colors.Secondary,
	footerBottomTextColor: _theme.textColorInverse,
	footerLogoWidth: '19.94rem',
	footerLogoHeight: '7rem',

	/* Forms */
	formBackgroundColor: _theme.primaryBackgroundColor,
	formBorder: `1px solid ${Colors.Secondary}`,
	formBorderActive: `2px solid ${Colors.Tertiary}`,
	formBorderHover: `1px solid ${Colors.Tertiary}`,
	formTextColor: _theme.textColor,
	formIconColor: _theme.textColor,
	formIconColorEngaged: Colors.SecondaryEngaged,
	formIconBorderActive: `1px solid ${Colors.Secondary}`,

	/* List */
	listSpacing: Spacing['0.5rem'],
	listItemHeadingLineHeight: Headings.LineHeight as LineHeight,
	listItemHeadingFontSize: '0.875em',
	listItemContentFontSize: '0.75em',
	listItemContentLineHeight: Text.LineHeight,
	listItemContentTextColor: _theme.textColor,

	/* Loading */
	loadingColor: Colors.Primary,
	loadingDuration: '3s',
	loadingTextColor: _theme.textColor,
	loadingSize: Spacing['1.5rem'],

	/* Logo */
	logoColor: _theme.textColor,
	logoColorEngaged: Colors.PrimaryEngaged,
	logoDividerColor:
		_theme.textColor /* May not need this one depending on the fate of co-branding */,
	logoSize: Spacing['0.5rem'],

	/* MenuList */
	menuListBackgroundColor: _theme.secondaryBackgroundColor,
	menuListBorderRadius: BorderRadii['0.125rem'],
	menuListBoxShadow: `inset 0 0 0 0.0625em ${Colors.OffBlack}`,
	menuListItemLineHeight: Headings.LineHeight,
	menuListItemFontSize: '0.875em',
	menuListItemTextColor: _theme.textColor,
	menuListItemEngaged: Colors.SecondaryEngaged,
	menuOutlinedBorderColor: Colors.Secondary,

	/* NavBar */
	navbarBorderRadius: BorderRadii['0.25rem'],
	navbarLinkBackgroundColor: _theme.secondaryBackgroundColor,
	navbarLinkBackgroundColorEngaged: Colors.SecondaryEngaged,
	navbarLinkBorderColorSelected: Colors.Primary,
	navbarTextColor: _theme.textColor,

	/* Overlay */
	overlayColor: Colors.OffBlack,
	overlayOpacity: 0.5,

	/* Panel */
	panelBackgroundColor: _theme.secondaryBackgroundColor,
	panelBorderRadius: BorderRadii['0.375rem'],
	panelBoxShadow: BOX_SHADOW_1,
	panelTextColor: _theme.textColor,

	/* Password */
	passwordBackgroundColor: _theme.primaryBackgroundColor,
	passwordBorder: `1px solid ${_theme.textColor}`,
	passwordBorderRadius: RelativeBorderRadii['0.25em'],
	passwordTextColor: _theme.textColor,
	passwordPlaceholderColor: Colors.Grey,

	/* Popover */
	popoverArrowSize: Spacing['0.5rem'] * 1.5,
	popoverBackgroundColor: _theme.secondaryBackgroundColor,
	popoverBorderRadius: BorderRadii['0.375rem'],
	popoverBoxShadow: BOX_SHADOW_1,
	popoverTextColor: _theme.textColor,

	/* Progress Bar */
	progressBarColor: Colors.Primary,
	progressBarBackgroundColor: Colors.Background1,
	progressBarBorderRadius: BorderRadii['0.25rem'],
	progressBarHeight: Spacing['0.5rem'],
	progressBarTransition: 'width 0.5s',

	/* Radio */
	radioBackgroundColor: Colors.Grey,
	radioBackgroundSelectedColor: Colors.Primary,
	radioTextColor: _theme.textColor,
	radioSize: Spacing['1.5rem'],

	/* Select */
	selectBackgroundColor: _theme.secondaryBackgroundColor,
	selectBorder: `1px solid ${_theme.textColor}`,
	selectBorderRadius: RelativeBorderRadii['0.25em'],
	selectTextColor: _theme.textColor,
	selectPlaceholderColor: Colors.Grey,

	/* Stepper */
	stepperBackgroundColor: _theme.secondaryBackgroundColor,
	stepperLinkBackgroundColor: _theme.secondaryBackgroundColor,
	stepperLinkBackgroundColorSelected: Colors.Primary,
	stepperLinkTextColor: _theme.textColor,
	stepperLinkTextColorSelected: _theme.textColor,

	/* Table */
	tableHeaderBackgroundColor: Colors.Secondary,
	tableBodyBackgroundColor: _theme.secondaryBackgroundColor,
	tableBorder: `1px solid ${_theme.textColor}`,
	tableRowBoxShadow: BOX_SHADOW_1,
	tableTextColor: _theme.textColor,

	/* Tabs */
	tabBackgroundColorSelected: Colors.Primary,
	tabBorder: `1px solid ${Colors.Secondary}`,
	tabBorderSelected: `1px solid ${Colors.Primary}`,
	tabTextColor: _theme.textColor,

	/* Tag */
	tagBackgroundColor: Colors.Primary,
	tagBorder: `1px solid ${Colors.Primary}`,
	tagBorderRadius: RelativeBorderRadii['0.25em'],
	tagTextColor: _theme.textColor,

	/* Text Area */
	textAreaBackgroundColor: _theme.secondaryBackgroundColor,
	textAreaBorder: `1px solid ${_theme.textColor}`,
	textAreaBorderRadius: RelativeBorderRadii['0.25em'],
	textAreaTextColor: _theme.textColor,
	textAreaPlaceholderColor: Colors.Grey,

	/* Text Input */
	textInputBackgroundColor: _theme.secondaryBackgroundColor,
	textInputBorder: `1px solid ${Colors.Primary}`,
	textInputBorderRadius: RelativeBorderRadii['0.25em'],
	textInputTextColor: _theme.textColor,
	textInputPlaceholderColor: Colors.Grey,

	/* Tooltip */
	tooltipBackgroundColor: Colors.Secondary,
	tooltipBoxShadow: BOX_SHADOW_1,
	tooltipTextColor: _theme.textColorInverse,
};