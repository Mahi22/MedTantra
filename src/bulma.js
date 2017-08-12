import React from "react";
import classNames from "classnames";

import {
  combineModifiers,
  getHTMLProps,
  isBetween,
  is,
  isOption
} from "./helpers";

export const isMobile = is({ mobile: true });
export const isTablet = is({ tablet: true });
export const isTouch = is({ touch: true });
export const isDesktop = is({ desktop: true });
export const isWidescreen = is({ widescreen: true });

export const isLeft = is({ left: true });
export const isRight = is({ right: true });
export const isCentered = is({ centered: true });

export const isCenter = is({ center: true });
export const isFullWidth = is({ fullwidth: true });

const isColor = is({
  white: true,
  light: true,
  dark: true,
  black: true,
  primary: true,
  info: true,
  success: true,
  warning: true,
  danger: true,
});

export const isSmall = is({ small: true });
export const isMedium = is({ medium: true });
export const isLarge = is({ large: true });

const isPlatform = isOption(
  isMobile,
  isTablet,
  isDesktop,
  isTouch,
  isWidescreen,
);
const isAlign = isOption(isLeft, isCentered, isRight);
const isSize = isOption(isSmall, isMedium, isLarge);

export function getAlignmentModifiers({ isAlign: align }) {
  return isAlign(align) ? { [`is-${align}`]: true } : {};
}

export function removeAlignmentProps(props) {
  const {
    isAlign, // eslint-disable-line
    ...rest
  } = props;
  return rest;
}

export function getSizeModifiers({ isSize: size }) {
  return isSize(size) ? { [`is-${size}`]: true } : {};
}

export function removeSizeProps(props) {
  const {
    isSize, // eslint-disable-line
    ...rest
  } = props;
  return rest;
}

function getFullWidthModifiers(props) {
  return {
    "is-fullwidth": props.isFullWidth
  };
}

function removeFullWidthProps(props) {
  const { isFullWidth, ...rest } = props; // eslint-disable-line
  return rest;
}

export function getActiveModifiers(props) {
  return { "is-active": props.isActive };
}

export function removeActiveModifiers(props) {
  const { isActive, ...rest } = props;
  return rest;
}

export function getFocusedModifiers(props) {
  return { "is-focused": props.isFocused };
}

export function removeFocusedModifiers(props) {
  const { isFocused, ...rest } = props;
  return rest;
}

export function getHoveredModifiers(props) {
  return { "is-hovered": props.isHovered };
}

export function removeHoveredModifiers(props) {
  const { isHovered, ...rest } = props;
  return rest;
}

export function getStateModifiers(props) {
  return {
    ...getActiveModifiers(props),
    ...getFocusedModifiers(props),
    ...getHoveredModifiers(props)
  };
}

export function removeStateProps(props) {
  const { isActive, isFocused, isHovered, ...rest } = props;
  return rest;
}

export function getLoadingModifiers(props) {
  return {
    "is-loading": props.isLoading
  };
}

export function removeLoadingProps(props) {
  const { isLoading, ...rest } = props;
  return rest;
}

export function getColorModifiers({ isColor: color }) {
  return isColor(color) ? { [`is-${color}`]: true } : {};
}

export function removeColorProps(props) {
  const { isColor, ...rest } = props; // eslint-disable-line
  return rest;
}

const isValidHeading = isBetween(1, 6);

export function getHeadingElement({ isHeading: heading }, defaultHeading = 1) {
  return isValidHeading(heading) ? `h${heading}` : `h${defaultHeading}`;
}

export function getHeadingModifiers({ isSpaced, isSize: size }) {
  const isSize = isValidHeading(size) ? { [`is-${size}`]: true } : {}; // eslint-disable-line

  return {
    ...isSize,
    "is-spaced": isSpaced
  };
}

export function removeHeadingProps(props) {
  const { isSize, isHeading, isSpaced, isParagraph, ...rest } = props; // eslint-disable-line
  return rest;
}

const reducerModifierOnly = helper => (init, option) => {
  if (isOption(isTablet, isDesktop)(option)) {
    return { ...init, [`is-${helper}-${option}-only`]: true };
  }
  return init;
};

const reducerModifier = helper => (init, option) => {
  if (isPlatform(option)) return { ...init, [`is-${helper}-${option}`]: true };
  return init;
};

const getResponsiveModifierFactory = (modifier, helper, reducer) => {
  if (typeof modifier === "string") {
    const getModifier = reducer(helper);
    return getModifier({}, modifier.toLowerCase().trim());
  } else if (Array.isArray(modifier)) {
    return modifier
      .map(str => str.toLowerCase().trim())
      .reduce(reducer(helper), {});
  } else if (modifier === true) {
    return { [`is-${helper}`]: true };
  }

  return {};
};

const getResponsiveModifiers = (modifier, modifierOnly, helper) => {
  if (modifier) {
    return getResponsiveModifierFactory(modifier, helper, reducerModifier);
  }
  if (modifierOnly) {
    return getResponsiveModifierFactory(
      modifierOnly,
      helper,
      reducerModifierOnly
    );
  }

  return {};
};

const getAlignModifier = (modifier, helper) => (isAlign(modifier) ? { [`${helper}-${modifier}`]: true } : {});

const getColorModifier = modifier => (isColor(modifier) ? { [`has-text-${modifier}`]: true } : {});

function getHelpersModifiers({
  isFlex,
  isFlexOnly,
  isBlock,
  isBlockOnly,
  isInline,
  isInlineOnly,
  isInlineBlock,
  isInlineBlockOnly,
  isInlineFlex,
  isInlineFlexOnly,
  isHidden,
  isHiddenOnly,
  isPulled,
  isClearfix,
  isOverlay,
  isMarginless,
  isPaddingless,
  isUnselectable,
  hasTextAlign,
  hasTextColor
}) {
  return {
    ...getResponsiveModifiers(isFlex, isFlexOnly, "flex"),
    ...getResponsiveModifiers(isBlock, isBlockOnly, "block"),
    ...getResponsiveModifiers(isInline, isInlineOnly, "inline"),
    ...getResponsiveModifiers(isInlineBlock, isInlineBlockOnly, "inline-block"),
    ...getResponsiveModifiers(isInlineFlex, isInlineFlexOnly, "inline-flex"),
    ...getResponsiveModifiers(isHidden, isHiddenOnly, "hidden"),
    ...getAlignModifier(isPulled, "is-pulled"),
    ...getAlignModifier(hasTextAlign, "has-text"),
    ...getColorModifier(hasTextColor),
    "is-clearfix": isClearfix,
    "is-overlay": isOverlay,
    "is-marginless": isMarginless,
    "is-paddingless": isPaddingless,
    "is-unselectable": isUnselectable
  };
}

function removeHelpersProps(props) {
  const {
    isFlex,
    isFlexOnly,
    isBlock,
    isBlockOnly,
    isInline,
    isInlineOnly,
    isInlineBlock,
    isInlineBlockOnly,
    isInlineFlex,
    isInlineFlexOnly,
    isHidden,
    isHiddenOnly,
    isClearfix,
    isPulled,
    isOverlay,
    isMarginless,
    isPaddingless,
    isUnselectable,
    hasTextAlign,
    hasTextColor,
    ...rest
  } = props;

  return rest;
}

export function withHelpersModifiers(Component) {
  const SFC = props => {
    const className = classNames(
      {
        ...combineModifiers(props, getHelpersModifiers, getFullWidthModifiers)
      },
      props.className,  // eslint-disable-line
    );

    // TODO: spread operator isn't fully supported (yet)
    // should refactor when this is fixed in another ts release
    const rest = getHTMLProps(
      props,
      removeHelpersProps,
      removeFullWidthProps,
    );

    return className ? <Component {...rest} className={className} /> : <Component {...rest} />;
  };

  return SFC;
}
