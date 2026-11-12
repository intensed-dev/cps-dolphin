Design Foundation – Class Documentation

Version: 1.0.0
Stylesheet: foundation.css
Purpose: Shared CSS foundation for CPS Tester, WPM Tester and future browser tools.

⸻

1. Naming Convention

The foundation uses a consistent naming convention inspired by BEM.

Prefix	Purpose	Example
f-	Foundation component	.f-card
f-...--...	Component modifier	.f-button--primary
f-...__...	Component element	.f-card__header
u-	Utility class	.u-flex

Components

Components represent reusable UI elements or layout structures.

Modifiers

Modifiers change the appearance or behavior of an existing component. They are generally intended to be combined with their base class.

Example:

<button class="f-button f-button--primary">
    Continue
</button>

Elements

Elements are parts of a larger component. They are not intended to be used independently.

Example:

<div class="f-card">
    <div class="f-card__header">...</div>
    <div class="f-card__body">...</div>
</div>

Utilities

Utilities provide small, single-purpose styling rules. They can be combined freely.

⸻

2. Layout

.f-container

Centers content horizontally and limits its maximum width.

* Width: 100% minus horizontal page spacing.
* Maximum width: --f-container-width.
* Automatically centered using margin-inline: auto.

Usage:

<div class="f-container">
    Page content
</div>

.f-container--wide

Increases the maximum width to --f-container-wide.

Useful for dashboards, larger content areas and multi-column layouts.

Requires .f-container.

.f-container--full

Removes the maximum width restriction and uses the full available width.

Requires .f-container.

.f-section

Defines a vertical page section with consistent top and bottom padding.

Default spacing: --f-space-12.

.f-section--compact

Reduces vertical section spacing to --f-space-6.

Requires .f-section.

.f-stack

Creates a vertical Flexbox layout with consistent spacing between children.

* display: flex
* flex-direction: column
* Default gap: --f-space-4

Useful for forms, card content, page sections and vertically stacked elements.

.f-stack--sm

Reduces the gap to --f-space-2.

Requires .f-stack.

.f-stack--lg

Increases the gap to --f-space-8.

Requires .f-stack.

.f-cluster

Creates a horizontal Flexbox layout with wrapping enabled.

* Aligns children vertically in the center.
* Allows children to wrap onto additional lines.
* Default gap: --f-space-3.

Useful for button groups, navigation elements, badges and inline controls.

.f-grid

Creates a responsive CSS Grid.

* Uses auto-fit.
* Automatically adapts the number of columns.
* Minimum column width: 240px, constrained by available space.
* Default gap: --f-space-4.

.f-grid--2

Creates two equal-width columns.

.f-grid--3

Creates three equal-width columns.

.f-grid--4

Creates four equal-width columns.

The numbered variants override the default grid template.

.f-divider

Creates a horizontal separator.

* Height: 1px.
* Uses --f-color-border.
* No visible border.
* Full available width.

Useful for separating card sections and content groups.

⸻

3. Typography

.f-heading

Base heading style.

* Uses the primary text color.
* Bold font weight.
* Tight line height.
* Negative letter spacing.

Should be combined with a heading size modifier.

.f-heading--1

Largest heading size: --f-font-size-3xl.

Suitable for main page headings.

.f-heading--2

Heading size: --f-font-size-2xl.

Suitable for major section headings.

.f-heading--3

Heading size: --f-font-size-xl.

Suitable for card headings and subsections.

.f-heading--4

Heading size: --f-font-size-lg.

Suitable for smaller headings.

All heading variants require .f-heading.

.f-text

Standard paragraph styling.

* Uses secondary text color.
* Uses normal font size.
* Uses relaxed line height.

.f-text--small

Reduces text size to --f-font-size-sm.

Suitable for descriptions and supporting information.

Requires .f-text.

.f-text--muted

Changes the text color to --f-color-text-muted.

Suitable for low-priority information.

Requires .f-text.

.f-text--primary

Changes the text color to --f-color-primary.

Suitable for highlighted text.

Requires .f-text.

.f-text--strong

Uses the primary text color and semibold font weight.

Suitable for emphasized information.

Requires .f-text.

.f-label

Small label for inputs and informational elements.

* Block display.
* Secondary text color.
* Medium font weight.
* Bottom margin.

.f-mono

Applies the monospace font family.

Also enables tabular numerals.

Useful for:

* CPS values.
* WPM values.
* Timers.
* Scores.
* Numerical statistics.

⸻

4. Header & Navigation

.f-header

Main website header.

* Full available width.
* Relative positioning.
* Elevated stacking order.
* Secondary background.
* Bottom border.

Suitable for the primary navigation area.

.f-header__inner

Inner layout of the header.

* Flexbox.
* Horizontal alignment.
* Vertically centered children.
* Space between branding and navigation.
* Minimum height of 68px.

Should be placed inside .f-header.

.f-brand

Branding wrapper.

* Inline Flexbox.
* Vertically centered content.
* Consistent gap.
* Prevents text wrapping.

Usually contains a logo and brand name.

.f-brand__logo

Container for the brand icon or logo.

* 34 × 34px.
* Grid-centered content.
* Primary subtle background.
* Primary accent color.
* Medium border radius.

.f-brand__name

Brand name typography.

* Large font size.
* Bold font weight.
* Slightly reduced letter spacing.

.f-nav

Navigation container.

* Horizontal Flexbox.
* Vertically centered items.
* Consistent spacing.

.f-nav__link

Individual navigation link.

* Secondary text color.
* Small font size.
* Rounded corners.
* Hover background transition.

.f-nav__link--active

Indicates the currently active navigation destination.

* Primary text color.
* Primary subtle background.

Requires .f-nav__link.

⸻

5. Buttons

.f-button

Base button component.

Provides:

* Inline Flexbox alignment.
* Centered content.
* Consistent gap.
* Minimum height of 40px.
* Horizontal padding.
* Rounded corners.
* Pointer cursor.
* Hover and active transitions.

All button variants should include this class.

.f-button--primary

Primary action button.

* Primary background.
* Inverted text color.
* Lighter background on hover.

Suitable for the main action on a page.

.f-button--secondary

Secondary action button.

* Surface background.
* Visible border.
* Surface hover background.

Suitable for less important actions.

.f-button--outline

Transparent button with a visible border.

On hover, the background becomes the surface color.

.f-button--ghost

Minimal button without a permanent background.

On hover, it receives a surface background and primary text color.

.f-button--danger

Destructive action button.

* Danger background.
* Inverted text color.

Suitable for destructive actions requiring confirmation.

.f-button--sm

Reduces button height to 32px and horizontal padding.

.f-button--lg

Increases button height to 48px and horizontal padding.

.f-button--block

Sets the button width to 100%.

Useful for full-width actions.

All button variants require .f-button.

Disabled buttons automatically receive reduced opacity and a disabled cursor through the :disabled selector.

⸻

6. Cards & Panels

.f-card

General-purpose content container.

* Surface background.
* Border.
* Large border radius.
* Consistent internal padding.

Suitable for statistics, results, settings and grouped content.

.f-card--interactive

Adds hover transitions for interactive cards.

On hover:

* Background becomes lighter.
* Border becomes more visible.

Requires .f-card.

.f-card--compact

Reduces internal padding to --f-space-4.

Requires .f-card.

.f-card--flat

Removes the background and border.

Also removes internal padding.

Requires .f-card.

.f-card__header

Header section inside a card.

* Flexbox.
* Space between children.
* Vertically centered.
* Bottom margin.

Typically contains a title and an optional badge or action.

.f-card__title

Card heading.

* Large font size.
* Semibold weight.
* Primary text color.

.f-card__body

Main content section.

Uses min-width: 0 to prevent content from overflowing flex and grid layouts.

.f-card__footer

Footer section inside a card.

* Flexbox.
* Space between children.
* Top margin.
* Top padding.
* Top border.

Useful for actions, metadata and supplementary information.

.f-panel

Lightweight nested content container.

* Secondary background.
* Border.
* Medium border radius.
* Consistent padding.

Useful for grouping information inside cards.

⸻

7. Badges

.f-badge

Base badge component.

* Inline Flexbox.
* Compact padding.
* Fully rounded corners.
* Small font size.
* Medium font weight.
* Prevents text wrapping.

Suitable for statuses, categories and short metadata.

.f-badge--primary

Primary-colored badge.

.f-badge--success

Success-colored badge.

Suitable for successful states and positive results.

.f-badge--warning

Warning-colored badge.

Suitable for attention-required states.

.f-badge--danger

Danger-colored badge.

Suitable for errors and critical states.

.f-badge--info

Information-colored badge.

Suitable for informational statuses.

All badge variants require .f-badge.

⸻

8. Forms & Inputs

.f-field

Vertical wrapper for form elements.

* Flexbox column layout.
* Consistent gap.

Suitable for grouping labels, inputs and helper text.

.f-input

Standard input component.

* Full available width.
* Minimum height of 42px.
* Secondary background.
* Border.
* Rounded corners.
* No default outline.
* Focus border transition.

Includes placeholder styling and a visible focus ring.

Suitable for text inputs, numeric inputs and other form controls.

.f-input--mono

Uses monospace typography and tabular numerals.

Useful for numerical inputs and technical values.

.f-input--large

Increases input height to 54px.

Also increases horizontal padding and font size.

.f-input--error

Applies the danger border color.

Suitable for invalid input states.

All input variants require .f-input.

.f-helper

Small supporting text below an input.

* Muted text color.
* Extra-small font size.

Suitable for instructions, hints and validation descriptions.

⸻

9. Statistics & Values

.f-stat

General-purpose statistic container.

* Vertical Flexbox.
* Consistent spacing.

Suitable for displaying measurements and numerical information.

.f-stat__label

Descriptive label for a statistic.

Uses muted text color and small font size.

Examples:

* Clicks per second.
* Words per minute.
* Accuracy.
* Best score.

.f-stat__value

Prominent numerical value.

* Responsive font size.
* Bold weight.
* Tight line height.
* Negative letter spacing.
* Tabular numerals.

Suitable for large CPS, WPM and score displays.

.f-stat__unit

Unit displayed next to a statistic.

Examples:

* CPS.
* WPM.
* %.
* Seconds.

Uses secondary text color and medium font weight.

.f-stat__description

Additional information about a statistic.

Uses muted text color and extra-small font size.

⸻

10. Interaction Areas

.f-interactive

Adds interaction styling to an element.

* Pointer cursor.
* Background transition.
* Border transition.
* Color transition.

Does not implement click functionality. JavaScript or an appropriate HTML element is still required.

.f-focusable

Adds a visible keyboard focus indicator using :focus-visible.

* 2px primary outline.
* 3px outline offset.

Useful for custom interactive elements.

.f-disabled

Visually indicates an unavailable element.

* Reduced opacity.
* Disabled cursor.
* Prevents pointer interactions.

Note: This class does not replace the native disabled attribute on buttons and form controls.

⸻

11. Utility Classes

Utility classes provide small, reusable styling rules.

They are independent of components and can be combined freely.

Display

Class	Description
.u-block	Sets display: block.
.u-inline	Sets display: inline.
.u-inline-block	Sets display: inline-block.
.u-hidden	Hides an element using display: none !important.

Flexbox

Class	Description
.u-flex	Enables Flexbox.
.u-inline-flex	Enables inline Flexbox.
.u-flex-column	Sets the Flexbox direction to column.
.u-flex-wrap	Allows flex items to wrap.
.u-flex-1	Sets flex: 1.
.u-flex-none	Disables flex growth and shrinking.
.u-items-center	Centers items on the cross axis.
.u-items-start	Aligns items to the cross-axis start.
.u-items-end	Aligns items to the cross-axis end.
.u-justify-center	Centers items on the main axis.
.u-justify-between	Distributes items with space between them.
.u-justify-end	Aligns items to the main-axis end.

Gap

Class	Description
.u-gap-1	Gap of --f-space-1.
.u-gap-2	Gap of --f-space-2.
.u-gap-3	Gap of --f-space-3.
.u-gap-4	Gap of --f-space-4.
.u-gap-6	Gap of --f-space-6.
.u-gap-8	Gap of --f-space-8.

Width

Class	Description
.u-w-full	Sets width to 100%.
.u-w-auto	Uses automatic width.
.u-max-w-full	Restricts maximum width to 100%.

Height

Class	Description
.u-h-full	Sets height to 100%.
.u-min-h-screen	Sets minimum height to 100vh.

Text Alignment

Class	Description
.u-text-left	Left-aligns text.
.u-text-center	Centers text.
.u-text-right	Right-aligns text.

Text Colors

Class	Description
.u-text-primary	Primary accent color.
.u-text-secondary	Secondary text color.
.u-text-muted	Muted text color.
.u-text-success	Success color.
.u-text-danger	Danger color.

Font Weights

Class	Description
.u-font-normal	Normal font weight (400).
.u-font-medium	Medium font weight (500).
.u-font-semibold	Semibold font weight (600).
.u-font-bold	Bold font weight (700).

Margin

Class	Description
.u-mt-2	Top margin of --f-space-2.
.u-mt-4	Top margin of --f-space-4.
.u-mt-6	Top margin of --f-space-6.
.u-mt-8	Top margin of --f-space-8.
.u-mb-2	Bottom margin of --f-space-2.
.u-mb-4	Bottom margin of --f-space-4.
.u-mb-6	Bottom margin of --f-space-6.

Positioning

Class	Description
.u-relative	Sets relative positioning.
.u-absolute	Sets absolute positioning.
.u-sticky	Sets sticky positioning.
.u-fixed	Sets fixed positioning.

Overflow

Class	Description
.u-overflow-hidden	Hides overflowing content.
.u-overflow-auto	Enables automatic overflow scrolling.

Border Radius

Class	Description
.u-rounded	Applies medium border radius.
.u-rounded-lg	Applies large border radius.
.u-rounded-full	Applies fully rounded corners.

Borders & Shadows

Class	Description
.u-border	Adds a 1px border using the default border color.
.u-shadow-sm	Applies the small shadow token.
.u-shadow-md	Applies the medium shadow token.

⸻

12. Responsive Behavior

The foundation includes two responsive breakpoints.

768px

At viewport widths of 768px or less:

* Container horizontal spacing is reduced.
* Section vertical spacing is reduced.
* Explicit 2-, 3- and 4-column grids become single-column layouts.
* Header minimum height is reduced.
* Navigation spacing is reduced.
* Card padding is reduced.

480px

At viewport widths of 480px or less:

* Main heading size is reduced.
* Navigation link font size is reduced.

Note: The foundation does not implement a mobile navigation menu. That behavior must be implemented separately.

⸻

13. Accessibility

The foundation includes several accessibility-related styles.

Keyboard Focus

.f-focusable provides a visible focus indicator for keyboard navigation.

Native buttons and inputs also retain their own browser interaction behavior.

Reduced Motion

The prefers-reduced-motion: reduce media query reduces animations and transitions for users who have enabled reduced motion in their operating system.

Disabled States

.f-disabled provides a visual disabled state.

For actual form controls, use native HTML attributes such as disabled whenever possible.

⸻

14. Design Tokens

All components use CSS custom properties defined in :root.

Colors

Variable	Purpose
--f-color-bg	Main page background.
--f-color-bg-secondary	Secondary background.
--f-color-bg-tertiary	Tertiary background.
--f-color-surface	Component surface background.
--f-color-surface-hover	Hover surface background.
--f-color-text	Primary text.
--f-color-text-secondary	Secondary text.
--f-color-text-muted	Muted text.
--f-color-text-inverted	Inverted text.
--f-color-primary	Primary accent.
--f-color-primary-hover	Primary hover accent.
--f-color-primary-subtle	Subtle primary background.
--f-color-success	Success state.
--f-color-warning	Warning state.
--f-color-danger	Danger state.
--f-color-info	Informational state.
--f-color-border	Default border.
--f-color-border-hover	Hover border.
--f-color-border-focus	Focus border.

Typography

Variable	Purpose
--f-font-family	Main font family.
--f-font-mono	Monospace font family.
--f-font-size-xs	Extra-small text.
--f-font-size-sm	Small text.
--f-font-size-md	Default text.
--f-font-size-lg	Large text.
--f-font-size-xl	Extra-large text.
--f-font-size-2xl	Heading size 2.
--f-font-size-3xl	Heading size 1.
--f-font-weight-normal	Normal weight.
--f-font-weight-medium	Medium weight.
--f-font-weight-semibold	Semibold weight.
--f-font-weight-bold	Bold weight.
--f-line-height-tight	Tight line height.
--f-line-height-normal	Normal line height.
--f-line-height-relaxed	Relaxed line height.

Spacing

Variable	Value
--f-space-1	4px
--f-space-2	8px
--f-space-3	12px
--f-space-4	16px
--f-space-5	20px
--f-space-6	24px
--f-space-8	32px
--f-space-10	40px
--f-space-12	48px
--f-space-16	64px

Border Radius

Variable	Purpose
--f-radius-sm	Small radius.
--f-radius-md	Medium radius.
--f-radius-lg	Large radius.
--f-radius-xl	Extra-large radius.
--f-radius-full	Fully rounded.

Shadows

Variable	Purpose
--f-shadow-sm	Small shadow.
--f-shadow-md	Medium shadow.
--f-shadow-lg	Large shadow.

Layout

Variable	Purpose
--f-container-width	Default container maximum width.
--f-container-wide	Wide container maximum width.

Transitions

Variable	Purpose
--f-transition-fast	Fast transitions (120ms).
--f-transition-normal	Normal transitions (200ms).
--f-transition-slow	Slow transitions (350ms).

⸻

15. Usage Guidelines

1. Always use the base component class when using a modifier.
2. Prefer design tokens over hardcoded colors, spacing and typography.
3. Use semantic HTML elements wherever possible.
4. Keep tester-specific styles outside foundation.css.
5. Use utility classes for small layout adjustments, not as replacements for reusable components.
6. Avoid duplicating component styles in individual tester stylesheets.
7. Preserve responsive behavior when extending components.
8. Prefer native HTML interaction states over manually simulated states.

Suggested Stylesheet Architecture

assets/
├── css/
│   ├── foundation.css
│   ├── cps.css
│   └── wpm.css

foundation.css contains shared components and design primitives.

cps.css contains CPS-specific styling.

wpm.css contains WPM-specific styling.

The foundation should remain independent of the actual testing logic and should be reusable across future projects.