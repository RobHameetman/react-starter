import { BorderRadii, RelativeBorderRadii } from '../../tokens/styles/borders';
import { BoxShadow } from '../../tokens/styles/boxshadows';
import { Color } from '../../tokens/styles/colors';
import { LengthInRem, Spacing } from '../../tokens/styles/spacing';
import { Headings, LineHeight, Text } from '../../tokens/styles/typography';

export interface Theme {
	readonly name: string;

	readonly focusColor: Color;
	readonly textColor: Color;
	readonly textColorInverse: Color;
	readonly iconColor: Color;
	readonly iconColorInverse: Color;

	readonly appBackgroundColor: Color;
	readonly contentBackgroundColor: Color;

	readonly accordionTextColor: Color;
	readonly accordionBorderBottom: Color;
	readonly accordionBorderBottomEngaged: Color;

	/* Alert */
	readonly alertBorderRadius: BorderRadii;
	readonly alertBoxShadow: BoxShadow;
	readonly alertTextColor: Color;

	/* Anchor */
	readonly anchorColor: Color;
	readonly anchorColorEngaged: Color;

	/* AppBar */
	readonly appbarBackgroundColor: Color;
	readonly appbarTextColor: Color;
	readonly appbarPosition: 'absolute';

	/* Autocomplete */
	readonly autocompleteBackgroundColor: Color;
	readonly autocompleteBorder: `1px solid ${Color}`;
	readonly autocompleteBorderRadius: RelativeBorderRadii;
	readonly autocompleteTextColor: Color;
	readonly autocompletePlaceholderColor: Color;

	/* Breadcrumbs */
	readonly breadcrumbColor: Color;
	readonly breadcrumbSize: '0.875rem';

	/* Buttons */
	readonly buttonBorderRadius: LengthInRem;
	readonly buttonIconColor: Color;
	readonly buttonTextColor: Color;
	readonly buttonFilledBackgroundColor: Color;
	readonly buttonFilledBackgroundColorEngaged: Color;
	readonly buttonOutlinedBackgroundColorHover: Color;
	readonly buttonOutlinedBorderColor: Color;
	readonly buttonOutlinedBorderColorEngaged: Color;
	readonly buttonTransparentBackgroundColorHover: Color;

	/* Card */
	readonly cardBackgroundColor: Color;
	readonly cardBorderRadius: BorderRadii;
	readonly cardBoxShadow: BoxShadow;
	readonly cardSpacing: Spacing;

	/* Checkbox Input (BaseCheckableInput) */
	readonly checkboxColor: Color;
	readonly checkboxColorEngaged: Color;
	readonly checkboxBackgroundColorEngaged: Color;

	/* Data Table */
	readonly dataTableHeadColor: Color;
	readonly dataTableHeadBorderColor: Color;
	readonly dataTableBodyColor: Color;
	readonly dataTableBodyColorEngaged: Color;
	readonly dataTableBodyColorSelected: Color;
	readonly dataTableBodyBorderColor: Color;
	readonly dataTableTextColor: Color;
	readonly dataTableIconColor: Color;
	readonly dataTableIconColorEngaged: Color;
	readonly dataTableIconBorderActive: `1px solid ${Color}`;

	/* DatePicker */
	readonly datepickerAccentColor: Color;
	readonly datepickerBackgroundColor: Color;
	readonly datepickerOutline: `1px solid ${Color}`;
	readonly datepickerOutlineSelected: `1px solid ${Color}`;

	/* Dialog */
	readonly dialogBackgroundColor: Color;
	readonly dialogTextColor: Color;
	readonly dialogOverlayColor: Color;
	readonly dialogOverlayOpacity: 0.5;
	readonly dialogSmallMaxWidth: '37.5rem';
	readonly dialogMediumMaxWidth: '50rem';
	readonly dialogLargeMaxWidth: '80rem';

	/* Divider */
	readonly dividerColor: Color;
	readonly dividerHeight: '0.125em';

	/* ErrorPage */
	readonly errorPageTitleSize: '3.75rem';
	readonly errorPageSubtitleSize: '1.5rem';

	/* File Uploader */
	readonly fileUploaderBackgroundColor: Color;
	readonly fileUploaderBorder: `1px dashed ${Color}`;
	readonly fileUploaderTextColor: Color;

	/* Footer */
	readonly footerBackgroundColor: Color;
	readonly footerTextColor: Color;
	readonly footerBottomBackgroundColor: Color;
	readonly footerBottomTextColor: Color;
	readonly footerLogoWidth: '19.94rem';
	readonly footerLogoHeight: '7rem';

	/* Forms */
	readonly formBackgroundColor: Color;
	readonly formBorder: `1px solid ${Color}`;
	readonly formBorderActive: `2px solid ${Color}`;
	readonly formBorderHover: `1px solid ${Color}`;
	readonly formTextColor: Color;
	readonly formIconColor: Color;
	readonly formIconColorEngaged: Color;
	readonly formIconBorderActive: `1px solid ${Color}`;

	/* List */
	readonly listSpacing: Spacing;
	readonly listItemHeadingLineHeight: typeof Headings.LineHeight;
	readonly listItemHeadingFontSize: '0.875em';
	readonly listItemContentFontSize: '0.75em';
	readonly listItemContentLineHeight: typeof Text.LineHeight;
	readonly listItemContentTextColor: Color;

	/* Loading */
	readonly loadingColor: Color;
	readonly loadingDuration: '3s';
	readonly loadingTextColor: Color;
	readonly loadingSize: Spacing;

	/* Logo */
	readonly logoColor: Color;
	readonly logoColorEngaged: Color;
	readonly logoDividerColor: Color;
	readonly logoSize: Spacing;

	/* MenuList */
	readonly menuListBackgroundColor: Color;
	readonly menuListBorderRadius: BorderRadii;
	readonly menuListBoxShadow: `inset 0 0 0 0.0625em ${Color}`;
	readonly menuListItemLineHeight: typeof Headings.LineHeight;
	readonly menuListItemFontSize: '0.875em';
	readonly menuListItemTextColor: Color;
	readonly menuListItemEngaged: Color;
	readonly menuOutlinedBorderColor: Color;

	/* NavBar */
	readonly navbarBorderRadius: BorderRadii;
	readonly navbarLinkBackgroundColor: Color;
	readonly navbarLinkBackgroundColorEngaged: Color;
	readonly navbarLinkBorderColorSelected: Color;
	readonly navbarTextColor: Color;

	/* Overlay */
	readonly overlayColor: Color;
	readonly overlayOpacity: 0.5;

	/* Panel */
	readonly panelBackgroundColor: Color;
	readonly panelBorderRadius: BorderRadii;
	readonly panelBoxShadow: BoxShadow;
	readonly panelTextColor: Color;

	/* Password */
	readonly passwordBackgroundColor: Color;
	readonly passwordBorder: `1px solid ${Color}`;
	readonly passwordBorderRadius: RelativeBorderRadii;
	readonly passwordTextColor: Color;
	readonly passwordPlaceholderColor: Color;

	/* Popover */
	readonly popoverArrowSize: Spacing;
	readonly popoverBackgroundColor: Color;
	readonly popoverBorderRadius: BorderRadii;
	readonly popoverBoxShadow: BoxShadow;
	readonly popoverTextColor: Color;

	/* Progress Bar */
	readonly progressBarColor: Color;
	readonly progressBarBackgroundColor: Color;
	readonly progressBarBorderRadius: BorderRadii;
	readonly progressBarHeight: Spacing;
	readonly progressBarTransition: 'width 0.5s';

	/* Radio */
	readonly radioBackgroundColor: Color;
	readonly radioBackgroundSelectedColor: Color;
	readonly radioTextColor: Color;
	readonly radioSize: Spacing;

	/* Select */
	readonly selectBackgroundColor: Color;
	readonly selectBorder: `1px solid ${Color}`;
	readonly selectBorderRadius: RelativeBorderRadii;
	readonly selectTextColor: Color;
	readonly selectPlaceholderColor: Color;

	/* Stepper */
	readonly stepperBackgroundColor: Color;
	readonly stepperLinkBackgroundColor: Color;
	readonly stepperLinkBackgroundColorSelected: Color;
	readonly stepperLinkTextColor: Color;
	readonly stepperLinkTextColorSelected: Color;

	/* Table */
	readonly tableHeaderBackgroundColor: Color;
	readonly tableBodyBackgroundColor: Color;
	readonly tableBorder: `1px solid ${Color}`;
	readonly tableRowBoxShadow: BoxShadow;
	readonly tableTextColor: Color;

	/* Tabs */
	readonly tabBackgroundColorSelected: Color;
	readonly tabBorder: `1px solid ${Color}`;
	readonly tabBorderSelected: `1px solid ${Color}`;
	readonly tabTextColor: Color;

	/* Tag */
	readonly tagBackgroundColor: Color;
	readonly tagBorder: `1px solid ${Color}`;
	readonly tagBorderRadius: RelativeBorderRadii;
	readonly tagTextColor: Color;

	/* Text Area */
	readonly textAreaBackgroundColor: Color;
	readonly textAreaBorder: `1px solid ${Color}`;
	readonly textAreaBorderRadius: RelativeBorderRadii;
	readonly textAreaTextColor: Color;
	readonly textAreaPlaceholderColor: Color;

	/* Text Input */
	readonly textInputBackgroundColor: Color;
	readonly textInputBorder: `1px solid ${Color}`;
	readonly textInputBorderRadius: RelativeBorderRadii;
	readonly textInputTextColor: Color;
	readonly textInputPlaceholderColor: Color;

	/* Tooltip */
	readonly tooltipBackgroundColor: Color;
	readonly tooltipBoxShadow: BoxShadow;
	readonly tooltipTextColor: Color;
}

export const isTheme = (value: unknown): value is Theme => true;
