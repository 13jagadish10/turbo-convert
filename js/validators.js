export function isBinary(value) {
  return /^[01]+$/.test(value);
}

export function isOctal(value) {
  return /^[0-7]+$/.test(value);
}

export function isHexadecimal(value) {
  return /^[0-9A-Fa-f]+$/.test(value);
}

export function isBCD(value) {
  return /^([01]{4}\s?)+$/.test(value.trim());
}

export function isRoman(value) {
  return /^(?=[MDCLXVI])M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(
    value
  );
}

export function isDecimal(value) {
  return /^\d+$/.test(value);
}

export function isASCII(value) {
  return /^[\x00-\x7F]+$/.test(value);
}

export function isUnicode(value) {
  return /^\\u[0-9A-Fa-f]{4}$/.test(value);
}

export function isText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export function isBase64(value) {
  return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(
    value.trim()
  );
}

export function isUrlEncoding(value) {
  return /%[0-9A-Fa-f]{2}/.test(value);
}

export function isIp(value) {
  return /^(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|1?[0-9][0-9]?)$/.test(
    value
  );
}

export function isMac(value) {
  return /^([0-9A-Fa-f]{2}:){5}[0-9A-Fa-f]{2}$/.test(value);
}

export function isUuid(value) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
    value
  );
}

export function isRgb(value) {
  let match = value.match(/^#?(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})$/);
  if (!match) return false;

  let [r, g, b] = match.slice(1, 4).map(Number);
  return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
}

export function isHex(value) {
  return /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(value);
}

export function isHsl(value) {
  let match = value.match(/^(\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%$/);
  if (!match) return false;

  let [h, s, l] = match.slice(1, 4).map(Number);
  return h >= 0 && h <= 360 && s >= 0 && s <= 100 && l >= 0 && l <= 100;
}

export function isCmyk(value) {
  let match = value.match(
    /^(\d{1,3})%,\s*(\d{1,3})%,\s*(\d{1,3})%,\s*(\d{1,3})%$/
  );
  if (!match) return false;

  let [c, m, y, k] = match.slice(1, 5).map(Number);
  return (
    c >= 0 &&
    c <= 100 &&
    m >= 0 &&
    m <= 100 &&
    y >= 0 &&
    y <= 100 &&
    k >= 0 &&
    k <= 100
  );
}

export function isGray(value) {
  let match = value.match(/^(\d{1,3})%?$/);
  if (!match) return false;

  let gray = Number(match[1]);
  return gray >= 0 && gray <= 100;
}