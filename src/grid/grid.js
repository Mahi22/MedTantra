import { isMobile, isTablet, isDesktop } from "../bulma";
import { isBetween, isOption } from "../helpers";

const isValidSize = isBetween(1, 12);
const isPlatform = isOption(isMobile, isTablet, isDesktop);

export function getHorizontalSizeModifiers({ isSize: size }) {
  return Number.isInteger(size) && isValidSize(size)
    ? { [`is-${size}`]: true }
    : {};
}

export function removeHorizontalSizeProps(props) {
  const { isSize, ...rest } = props;
  return rest;
}

const isValidAndInteger = size =>   // eslint-disable-line
  Number.isInteger(size) ? isValidSize(size) : false;

const getModifier = (modifier, helper) => {
  if (modifier === true) {
    return { [`is-${helper}`]: true };
  } else if (typeof modifier === "string") {
    return isPlatform(modifier) ? { [`is-${helper}-${modifier}`]: true } : {};
  } else if (Array.isArray(modifier)) {
    return modifier
      .map(str => str.toLowerCase().trim())
      .reduce(
        (init, option) =>  // eslint-disable-line
          isPlatform(option)
            ? { ...init, [`is-${helper}-${option}`]: true }
            : init,
        {}
      );
  }
  return {};
};

export function getSizeModifiers(props) {
  const platformSize = {
    ...(isValidAndInteger(props.isMobile)
      ? { [`is-${props.isMobile}-mobile`]: true }
      : {}),
    ...(isValidAndInteger(props.isTablet)
      ? { [`is-${props.isTablet}-tablet`]: true }
      : {}),
    ...(isValidAndInteger(props.isDesktop)
      ? { [`is-${props.isDesktop}-desktop`]: true }
      : {})
  };

  return {
    ...platformSize,
    ...getModifier(props.isFull, "full"),
    ...getModifier(props.isNarrow, "narrow"),
    ...getModifier(props.isThreeQuarters, "three-quarters"),
    ...getModifier(props.isTwoThirds, "two-thirds"),
    ...getModifier(props.isHalf, "half"),
    ...getModifier(props.isOneThird, "one-third"),
    ...getModifier(props.isOneQuarter, "one-quarter")
  };
}

export function removeSizeProps(props) {
  const {
    isMobile,  // eslint-disable-line
    isTablet,  // eslint-disable-line
    isDesktop, // eslint-disable-line
    isFull,
    isNarrow,
    isThreeQuarters,
    isTwoThirds,
    isHalf,
    isOneThird,
    isOneQuarter,
    ...rest
  } = props;

  return rest;
}

export function getOffsetModifiers(props) {
  const platformSize = {
    ...(isValidSize(props.isOffset)
      ? { [`is-offset-${props.isOffset}`]: true }
      : {}),
    ...(isValidAndInteger(props.isOffsetMobile)
      ? { [`is-offset-${props.isOffsetMobile}-mobile`]: true }
      : {}),
    ...(isValidAndInteger(props.isOffsetTablet)
      ? { [`is-offset-${props.isOffsetTablet}-tablet`]: true }
      : {}),
    ...(isValidAndInteger(props.isOffsetDesktop)
      ? { [`is-offset-${props.isOffsetDesktop}-desktop`]: true }
      : {})
  };

  return {
    ...platformSize,
    ...getModifier(props.isOffsetThreeQuarters, "offset-three-quarters"),
    ...getModifier(props.isOffsetTwoThirds, "offset-two-thirds"),
    ...getModifier(props.isOffsetHalf, "offset-half"),
    ...getModifier(props.isOffsetOneThird, "offset-one-third"),
    ...getModifier(props.isOffsetOneQuarter, "offset-one-quarter")
  };
}

export function removeOffsetProps(props) {
  const {
    isOffset,
    isOffsetMobile,
    isOffsetTablet,
    isOffsetDesktop,
    isOffsetThreeQuarters,
    isOffsetTwoThirds,
    isOffsetHalf,
    isOffsetOneThird,
    isOffsetOneQuarter,
    ...rest
  } = props;
  return rest;
}
