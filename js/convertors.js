import {
  isASCII,
  isBase64,
  isBCD,
  isBinary,
  isDecimal,
  isGray,
  isHex,
  isHexadecimal,
  isIp,
  isMac,
  isOctal,
  isRoman,
  isUnicode,
  isUuid,
} from "./validators.js";

export function binaryToBinary(fromVal) {
  try {
    if (!isBinary(fromVal)) return "Invalid binary format(Expected: 01)";
    let returnVal = fromVal;
    return returnVal;
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function binaryToDecimal(fromVal) {
  try {
    if (!isBinary(fromVal)) return "Invalid binary format(Expected: 01)";
    return parseInt(fromVal, 2).toString(10);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function binaryToOctal(fromVal) {
  try {
    if (!isBinary(fromVal)) return "Invalid binary format(Expected: 01)";
    return parseInt(fromVal, 2).toString(8);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function binaryToHexadecimal(fromVal) {
  try {
    if (!isBinary(fromVal)) return "Invalid binary format(Expected: 01)";
    return parseInt(fromVal, 2).toString(16).toUpperCase();
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function binaryToBCD(fromVal) {
  try {
    if (!isBinary(fromVal)) return "Invalid binary format(Expected: 01)";

    let decimalVal = parseInt(fromVal, 2);
    if (isNaN(decimalVal)) return "Invalid binary number";

    let bcd = decimalVal
      .toString()
      .split("")
      .map((digit) => {
        return parseInt(digit).toString(2).padStart(4, "0");
      })
      .join(" ");

    return bcd;
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function decimalToDecimal(fromVal) {
  try {
    if (!isDecimal(fromVal)) return "Invalid Decimal format(Expected: 1234)";
    return fromVal.toString();
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function decimalToBinary(fromVal) {
  try {
    if (!isDecimal(fromVal)) return "Invalid Decimal format(Expected: 1234)";
    return parseInt(fromVal, 10).toString(2);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function decimalToOctal(fromVal) {
  try {
    if (!isDecimal(fromVal)) return "Invalid Decimal format(Expected: 1234)";
    return parseInt(fromVal, 10).toString(8);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function decimalToHexadecimal(fromVal) {
  try {
    if (!isDecimal(fromVal)) return "Invalid Decimal format(Expected: 1234)";
    return parseInt(fromVal, 10).toString(16).toUpperCase();
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function octalToOctal(fromVal) {
  try {
    if (!isOctal(fromVal)) return "Invalid Octal format(Expected: 1234)";
    return fromVal.toString();
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function octalToBinary(fromVal) {
  try {
    if (!isOctal(fromVal)) return "Invalid Octal format(Expected: 1234)";
    return parseInt(fromVal, 8).toString(2);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function octalToDecimal(fromVal) {
  try {
    if (!isOctal(fromVal)) return "Invalid Octal format(Expected: 1234)";
    return parseInt(fromVal, 8).toString(10);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function octalToHexadecimal(fromVal) {
  try {
    if (!isOctal(fromVal)) return "Invalid Octal format(Expected: 1234)";
    return parseInt(fromVal, 8).toString(16).toUpperCase();
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function hexadecimalToHexadecimal(fromVal) {
  try {
    if (!isHexadecimal(fromVal))
      return "Invalid Hexadecimal format(Expected: AB123)";
    return fromVal.toUpperCase();
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function hexadecimalToBinary(fromVal) {
  try {
    if (!isHexadecimal(fromVal))
      return "Invalid Hexadecimal format(Expected: AB123)";
    return parseInt(fromVal, 16).toString(2);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function hexadecimalToDecimal(fromVal) {
  try {
    if (!isHexadecimal(fromVal))
      return "Invalid Hexadecimal format(Expected: AB123)";
    return parseInt(fromVal, 16).toString(10);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function hexadecimalToOctal(fromVal) {
  try {
    if (!isHexadecimal(fromVal))
      return "Invalid Hexadecimal format(Expected: AB123)";
    let decimal = parseInt(fromVal, 16);

    let octal = decimal.toString(8);

    return octal;
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function bcdToBCD(fromVal) {
  try {
    if (!isBCD(fromVal)) return "Invalid BCD format(Expected: 0001 0010 1001)";
    return fromVal.trim();
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function bcdToDecimal(fromVal) {
  try {
    if (!isBCD(fromVal)) return "Invalid BCD format(Expected: 0001 0010 1001)";

    return fromVal
      .trim()
      .split(/\s+/)
      .map((bcdDigit) => parseInt(bcdDigit, 2))
      .join("");
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function asciiToASCII(fromVal) {
  try {
    if (!isASCII(fromVal)) return "Invalid ASCII Format(Expected: 97)";
    return fromVal;
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function asciiToBinary(fromVal) {
  try {
    if (!isASCII(fromVal)) return "Invalid ASCII Format(Expected: 97)";
    return fromVal
      .split("")
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
      .join(" ");
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function asciiToDecimal(fromVal) {
  try {
    if (!isASCII(fromVal)) return "Invalid ASCII Format(Expected: 97)";
    return fromVal
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function asciiToHexadecimal(fromVal) {
  try {
    if (!isASCII(fromVal)) return "Invalid ASCII Format(Expected: 97)";
    return fromVal
      .split("")
      .map((char) =>
        char.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0")
      )
      .join(" ");
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function asciiToOctal(fromVal) {
  try {
    if (!isASCII(fromVal)) return "Invalid ASCII Format(Expected: 97)";
    return fromVal
      .split("")
      .map((char) => char.charCodeAt(0).toString(8).padStart(3, "0"))
      .join(" ");
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function asciiToUnicode(fromVal) {
  try {
    if (!isASCII(fromVal)) return "Invalid ASCII Format(Expected: 97)";
    return fromVal
      .split("")
      .map(
        (char) =>
          "\\u" + char.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")
      )
      .join(" ");
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function unicodeToUnicode(fromVal) {
  try {
    if (!isUnicode(fromVal)) return "Invalid Unicode format(Expected: \\u0041).";
    return fromVal;
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function unicodeToBinary(fromVal) {
  try {
    if (!isUnicode(fromVal)) return "Invalid Unicode format(Expected: \\u0041).";
    return fromVal
      .split("")
      .map((char) => char.codePointAt(0).toString(2).padStart(16, "0"))
      .join(" ");
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function unicodeToDecimal(fromVal) {
  try {
    if (!isUnicode(fromVal)) return "Invalid Unicode format(Expected: \\u0041).";
    return fromVal
      .split("")
      .map((char) => char.codePointAt(0))
      .join(" ");
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function unicodeToHexadecimal(fromVal) {
  try {
    if (!isUnicode(fromVal)) return "Invalid Unicode format(Expected: \\u0041).";
    return fromVal
      .split("")
      .map((char) =>
        char.codePointAt(0).toString(16).toUpperCase().padStart(4, "0")
      )
      .join(" ");
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function textToText(fromVal) {
  try {
    if (typeof fromVal !== "string") {
      return "Invalid text input";
    }
    return fromVal;
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function textToASCII(fromVal) {
  try {
    if (typeof fromVal !== "string" || fromVal.length === 0) {
      return "Invalid text input";
    }
    return fromVal
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function textToBinary(fromVal) {
  try {
    if (typeof fromVal !== "string" || fromVal.length === 0) {
      return "Invalid text input";
    }
    return fromVal
      .split("")
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
      .join(" ");
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function textToHexadecimal(fromVal) {
  try {
    if (typeof fromVal !== "string" || fromVal.length === 0) {
      return "Invalid text input";
    }
    return fromVal
      .split("")
      .map((char) =>
        char.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0")
      )
      .join(" ");
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function textToBase64(fromVal) {
  try {
    if (typeof fromVal !== "string" || fromVal.length === 0) {
      return "Invalid text input";
    }
    return btoa(fromVal);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function textToURLEncoding(fromVal) {
  try {
    if (typeof fromVal !== "string" || fromVal.length === 0) {
      return "Invalid text input";
    }
    return encodeURIComponent(fromVal);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function base64ToBase64(fromVal) {
  try {
    if (!isBase64(fromVal))
      return "Invalid Base64 input(Expected: QmhhdmVzaA==)";
    return fromVal;
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function base64ToText(fromVal) {
  if (!isBase64(fromVal)) return "Invalid Base64 input(Expected: QmhhdmVzaA==)";
  try {
    return atob(fromVal);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function base64ToBinary(fromVal) {
  if (!isBase64(fromVal)) return "Invalid Base64 input(Expected: QmhhdmVzaA==)";
  try {
    let text = atob(fromVal);
    return text
      .split("")
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
      .join(" ");
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function base64ToHexadecimal(fromVal) {
  if (!isBase64(fromVal)) return "Invalid Base64 input(Expected: QmhhdmVzaA==)";
  try {
    let text = atob(fromVal);
    return [...text]
      .map((char) => char.charCodeAt(0).toString(16).padStart(2, "0"))
      .join(" ")
      .toUpperCase();
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function base64ToASCII(fromVal) {
  if (!isBase64(fromVal)) return "Invalid Base64 input(Expected: QmhhdmVzaA==)";
  try {
    return atob(fromVal);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function urlEncodingToURLEncoding(fromVal) {
  if (typeof fromVal !== "string" || fromVal.length === 0) {
    return "Invalid URL encoding input";
  }
  return fromVal;
}

export function urlEncodingToText(fromVal) {
  if (typeof fromVal !== "string" || fromVal.length === 0) {
    return "Invalid URL encoding input";
  }
  try {
    return decodeURIComponent(fromVal);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function ipToIP(fromVal) {
  if (!isIp(fromVal)) return "Invalid IP Address(Expected: 127.0.0.1)";
  return fromVal;
}

export function ipToBinary(fromVal) {
  if (!isIp(fromVal)) return "Invalid IP Address(Expected: 127.0.0.1)";
  return fromVal
    .split(".")
    .map((num) => parseInt(num).toString(2).padStart(8, "0"))
    .join(".");
}

export function ipToDecimal(fromVal) {
  if (!isIp(fromVal)) return "Invalid IP Address(Expected: 127.0.0.1)";
  return fromVal
    .split(".")
    .reduce((acc, num) => acc * 256 + parseInt(num), 0)
    .toString();
}

export function ipToHexadecimal(fromVal) {
  if (!isIp(fromVal)) return "Invalid IP Address(Expected: 127.0.0.1)";
  return fromVal
    .split(".")
    .map((num) => parseInt(num).toString(16).padStart(2, "0"))
    .join(":")
    .toUpperCase();
}

export function macToMAC(fromVal) {
  if (!isMac(fromVal))
    return "Invalid MAC Address(Expected: 1a:2b:3c:4d:5e:6f)";
  return fromVal.toUpperCase();
}

export function macToBinary(fromVal) {
  if (!isMac(fromVal))
    return "Invalid MAC Address(Expected: 1a:2b:3c:4d:5e:6f)";
  return fromVal
    .split(/[:-]/)
    .map((num) => parseInt(num, 16).toString(2).padStart(8, "0"))
    .join(" ");
}

export function macToDecimal(fromVal) {
  if (!isMac(fromVal))
    return "Invalid MAC Address(Expected: 1a:2b:3c:4d:5e:6f)";
  return parseInt(fromVal.replace(/[:-]/g, ""), 16).toString();
}

export function macToHexadecimal(fromVal) {
  if (!isMac(fromVal))
    return "Invalid MAC Address(Expected: 1a:2b:3c:4d:5e:6f)";
  return fromVal.replace(/[:-]/g, "").toUpperCase();
}

export function uuidToUUID(fromVal) {
  if (!isUuid(fromVal))
    return "Invalid UUID Format(Expected: 550e8400-e29b-41d4-a716-446655440000)";
  return fromVal.toLowerCase();
}

export function uuidToBinary(fromVal) {
  if (!isUuid(fromVal))
    return "Invalid UUID Format(Expected: 550e8400-e29b-41d4-a716-446655440000)";

  return fromVal
    .replace(/-/g, "")
    .split("")
    .map((char) => parseInt(char, 16).toString(2).padStart(4, "0"))
    .join("");
}

export function uuidToDecimal(fromVal) {
  if (!isUuid(fromVal))
    return "Invalid UUID Format(Expected: 550e8400-e29b-41d4-a716-446655440000)";

  return BigInt("0x" + fromVal.replace(/-/g, "")).toString();
}

export function uuidToHexadecimal(fromVal) {
  try {
    if (!isUuid(fromVal))
      return "Invalid UUID Format(Expected: 550e8400-e29b-41d4-a716-446655440000)";

    return fromVal.replace(/-/g, "").toUpperCase();
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function colorToColor(fromVal) {
  return fromVal;
}

export function rgbToHex(fromVal) {
  try {
    fromVal = fromVal.trim();
    const rgbMatch = fromVal.match(/^(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})$/);
    if (!rgbMatch) {
      return "Invalid RGB format (Expected: R,G,B)";
    }

    const [_, r, g, b] = rgbMatch.map(Number);
    if (r > 255 || g > 255 || b > 255) {
      return "Invalid RGB values";
    }

    return `#${((1 << 24) | (r << 16) | (g << 8) | b)
      .toString(16)
      .slice(1)
      .toUpperCase()}`;
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function rgbToHSL(fromVal) {
  try {
    fromVal = fromVal.trim();
    const rgbMatch = fromVal.match(/^(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})$/);
    if (!rgbMatch) {
      return "Invalid RGB format (Expected: R,G,B)";
    }

    let [_, r, g, b] = rgbMatch.map(Number);
    if (r > 255 || g > 255 || b > 255) {
      return "Invalid RGB values";
    }

    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    let h,
      s,
      l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    return `${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(
      l * 100
    )}%`;
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function rgbToCMYK(fromVal) {
  try {
    fromVal = fromVal.trim();
    const rgbMatch = fromVal.match(/^(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})$/);
    if (!rgbMatch) {
      return "Invalid RGB format (Expected: R,G,B)";
    }

    let [_, r, g, b] = rgbMatch.map(Number);
    if (r > 255 || g > 255 || b > 255) {
      return "Invalid RGB values";
    }

    let c = 1 - r / 255;
    let m = 1 - g / 255;
    let y = 1 - b / 255;
    let k = Math.min(c, m, y);

    if (k === 1) {
      return "0%, 0%, 0%, 100%";
    }

    c = ((c - k) / (1 - k)) * 100;
    m = ((m - k) / (1 - k)) * 100;
    y = ((y - k) / (1 - k)) * 100;
    k *= 100;

    return `${Math.round(c)}%, ${Math.round(m)}%, ${Math.round(
      y
    )}%, ${Math.round(k)}%`;
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function hexToRGB(fromVal) {
  try {
    if (!isHex(fromVal)) return "Invalid Hex format (Expected: #RRGGBB)";

    let r = parseInt(fromVal.substring(0, 2), 16);
    let g = parseInt(fromVal.substring(2, 4), 16);
    let b = parseInt(fromVal.substring(4, 6), 16);

    return `${r}, ${g}, ${b}`;
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function hexToHSL(fromVal) {
  try {
    if (!isHex(fromVal)) return "Invalid Hex format (Expected: #RRGGBB)";
    fromVal = fromVal.trim().replace(/^#/, "");

    let r = parseInt(fromVal.substring(0, 2), 16) / 255;
    let g = parseInt(fromVal.substring(2, 4), 16) / 255;
    let b = parseInt(fromVal.substring(4, 6), 16) / 255;

    let max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    let h,
      s,
      l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    return `${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(
      l * 100
    )}%`;
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function hexToCMYK(fromVal) {
  try {
    if (!isHex(fromVal)) return "Invalid Hex format (Expected: #RRGGBB)";

    let rgb = hexToRGB(fromVal);
    if (rgb.includes("Invalid")) return rgb;

    return rgbToCMYK(rgb);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function hslToRGB(fromVal) {
  try {
    fromVal = fromVal.trim();
    const hslMatch = fromVal.match(
      /^\s*(3[0-5][0-9]|[12]?[0-9]{1,2})\s*,\s*(100|[1-9]?[0-9])%\s*,\s*(100|[1-9]?[0-9])%\s*$/
    );
    if (!match) return "Invalid HSL format(Expected: H, S%, L%)";

    if (!hslMatch) {
      return "Invalid HSL format (Expected: H, S%, L%)";
    }

    let [_, h, s, l] = hslMatch.map(Number);
    if (h > 360 || s > 100 || l > 100) {
      return "Invalid HSL values";
    }

    h /= 360;
    s /= 100;
    l /= 100;

    let r, g, b;
    if (s === 0) {
      r = g = b = l;
    } else {
      const hueToRGB = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;

      r = hueToRGB(p, q, h + 1 / 3);
      g = hueToRGB(p, q, h);
      b = hueToRGB(p, q, h - 1 / 3);
    }

    return `${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(
      b * 255
    )}`;
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function hslToHex(fromVal) {
  try {
    let match = fromVal.match(
      /^\s*(3[0-5][0-9]|[12]?[0-9]{1,2})\s*,\s*(100|[1-9]?[0-9])%\s*,\s*(100|[1-9]?[0-9])%\s*$/
    );
    if (!match) return "Invalid HSL format(Expected: H, S%, L%)";

    let h = parseInt(match[1]);
    let s = parseInt(match[2]) / 100;
    let l = parseInt(match[3]) / 100;

    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    let m = l - c / 2;

    let [r, g, b] =
      h < 60
        ? [c, x, 0]
        : h < 120
        ? [x, c, 0]
        : h < 180
        ? [0, c, x]
        : h < 240
        ? [0, x, c]
        : h < 300
        ? [x, 0, c]
        : [c, 0, x];

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return `#${((1 << 24) | (r << 16) | (g << 8) | b)
      .toString(16)
      .slice(1)
      .toUpperCase()}`;
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function hslToCMYK(fromVal) {
  try {
    let match = fromVal.match(
      /^\s*(3[0-5][0-9]|[12]?[0-9]{1,2})\s*,\s*(100|[1-9]?[0-9])%\s*,\s*(100|[1-9]?[0-9])%\s*$/
    );
    if (!match) return "Invalid HSL format(Expected: H, S%, L%)";

    let rgb = hslToHex(fromVal);
    if (rgb.startsWith("Invalid")) return rgb;

    return hexToCMYK(rgb);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function cmykToRGB(fromVal) {
  try {
    let match = fromVal.match(
      /^\s*(100|\d{1,2})%\s*,\s*(100|\d{1,2})%\s*,\s*(100|\d{1,2})%\s*,\s*(100|\d{1,2})%\s*$/
    );
    if (!match) return "Invalid CMYK format(Expected: 50%, 40%, 30%, 10%)";

    let c = parseInt(match[1]);
    let m = parseInt(match[2]);
    let y = parseInt(match[3]);
    let k = parseInt(match[4]);

    // Ensure values are within the valid range
    if (c > 100 || m > 100 || y > 100 || k > 100) return "Invalid CMYK values";

    c /= 100;
    m /= 100;
    y /= 100;
    k /= 100;

    let r = Math.round(255 * (1 - c) * (1 - k));
    let g = Math.round(255 * (1 - m) * (1 - k));
    let b = Math.round(255 * (1 - y) * (1 - k));

    return `rgb(${r}, ${g}, ${b})`;
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function cmykToHex(fromVal) {
  try {
    let match = fromVal.match(
      /^\s*(100|\d{1,2})%\s*,\s*(100|\d{1,2})%\s*,\s*(100|\d{1,2})%\s*,\s*(100|\d{1,2})%\s*$/
    );
    if (!match) return "Invalid CMYK format(Expected: 50%, 40%, 30%, 10%)";

    let rgb = cmykToRGB(fromVal);
    if (rgb.startsWith("Invalid")) return rgb;

    match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (!match) return "Invalid RGB format";

    let r = parseInt(match[1]).toString(16).padStart(2, "0");
    let g = parseInt(match[2]).toString(16).padStart(2, "0");
    let b = parseInt(match[3]).toString(16).padStart(2, "0");

    return `#${r}${g}${b}`.toUpperCase();
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function cmykToHSL(fromVal) {
  try {
    let match = fromVal.match(
      /^\s*(100|\d{1,2})%\s*,\s*(100|\d{1,2})%\s*,\s*(100|\d{1,2})%\s*,\s*(100|\d{1,2})%\s*$/
    );
    if (!match) return "Invalid CMYK format(Expected: 50%, 40%, 30%, 10%)";

    let rgb = cmykToRGB(fromVal);
    if (rgb.startsWith("Invalid")) return rgb;

    match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    if (!match) return "Invalid RGB format";

    let r = parseInt(match[1]) / 255;
    let g = parseInt(match[2]) / 255;
    let b = parseInt(match[3]) / 255;

    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    let h,
      s,
      l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }

      h *= 60;
    }

    return `hsl(${Math.round(h)}, ${Math.round(s * 100)}%, ${Math.round(
      l * 100
    )}%)`;
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function bcdToBinary(fromVal) {
  try {
    if (!isBCD(fromVal)) return "Invalid BCD format(Expected: 0001 0010 1001)";
    return fromVal
      .replace(/\s+/g, "")
      .match(/.{1,4}/g)
      .map((bcd) => parseInt(bcd, 2).toString(2).padStart(4, "0"))
      .join("");
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function grayToGray(fromVal) {
  try {
    if (!isGray(fromVal)) return "Invalid Gray code(Expected: 000)";

    return fromVal; // Gray to Gray is the same value
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function grayToBinary(fromVal) {
  try {
    if (!isGray(fromVal)) return "Invalid Gray code(Expected: 000)";

    let binary = fromVal[0];
    for (let i = 1; i < fromVal.length; i++) {
      binary += (parseInt(binary[i - 1]) ^ parseInt(fromVal[i])).toString();
    }
    return binary;
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function grayToDecimal(fromVal) {
  try {
    if (!isGray(fromVal)) return "Invalid Gray code(Expected: 000)";
    let binary = grayToBinary(fromVal);
    if (binary.startsWith("Invalid")) return binary;

    return parseInt(binary, 2).toString();
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function romanToRoman(fromVal) {
  try {
    if (!isRoman(fromVal)) return "Invalid Roman Number(Expected: MCMXI)";
    return fromVal.toUpperCase(); // Roman to Roman is unchanged
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function romanToDecimal(fromVal) {
  try {
    if (!isRoman(fromVal)) return "Invalid Roman Number(Expected: MCMXI)";

    const romanMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let decimal = 0;
    let prevValue = 0;

    fromVal
      .toUpperCase()
      .split("")
      .reverse()
      .forEach((char) => {
        let current = romanMap[char];
        decimal += current < prevValue ? -current : current;
        prevValue = current;
      });

    return decimal.toString();
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function romanToBinary(fromVal) {
  try {
    if (!isRoman(fromVal)) return "Invalid Roman Number(Expected: MCMXI)";
    let decimal = romanToDecimal(fromVal);
    if (decimal.startsWith("Invalid") || decimal === "Failed to convert")
      return decimal;

    return parseInt(decimal, 10).toString(2);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function binaryToRoman(fromVal) {
  try {
    if (!isBinary(fromVal)) return "Invalid binary format(Expected: 01)";
    let decimal = parseInt(fromVal, 2);
    return decimalToRoman(decimal);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function bcdToOctal(fromVal) {
  try {
    if (!isBCD(fromVal)) return "Invalid BCD format(Expected: 0001 0010 1001)";
    let decimal = bcdToDecimal(fromVal);
    return decimalToOctal(decimal);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function bcdToHexadecimal(fromVal) {
  try {
    if (!isBCD(fromVal)) return "Invalid BCD format(Expected: 0001 0010 1001)";
    let decimal = bcdToDecimal(fromVal);
    return decimalToHexadecimal(decimal);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function bcdToRoman(fromVal) {
  try {
    if (!isBCD(fromVal)) return "Invalid BCD format(Expected: 0001 0010 1001)";
    let decimal = bcdToDecimal(fromVal);
    return decimalToRoman(decimal);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function octalToBCD(fromVal) {
  try {
    if (!isOctal(fromVal)) return "Invalid Octal format(Expected: 1234)";
    let decimal = octalToDecimal(fromVal);
    return decimalToBCD(decimal);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function octalToRoman(fromVal) {
  try {
    if (!isOctal(fromVal)) return "Invalid Octal format(Expected: 1234)";
    let decimal = octalToDecimal(fromVal);
    return decimalToRoman(decimal);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function decimalToBCD(fromVal) {
  try {
    if (!isDecimal(fromVal)) return "Invalid Decimal format(Expected: 1234)";
    return fromVal
      .split("")
      .map((digit) => parseInt(digit, 10).toString(2).padStart(4, "0"))
      .join(" ");
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function decimalToRoman(fromVal) {
  try {
    if (!isDecimal(fromVal)) return "Invalid Decimal format(Expected: 1234)";
    let num = parseInt(fromVal, 10);
    const romanNumerals = [
      ["M", 1000],
      ["CM", 900],
      ["D", 500],
      ["CD", 400],
      ["C", 100],
      ["XC", 90],
      ["L", 50],
      ["XL", 40],
      ["X", 10],
      ["IX", 9],
      ["V", 5],
      ["IV", 4],
      ["I", 1],
    ];
    let roman = "";
    for (let [symbol, value] of romanNumerals) {
      while (num >= value) {
        roman += symbol;
        num -= value;
      }
    }
    return roman;
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function hexadecimalToBCD(fromVal) {
  try {
    if (!isHexadecimal(fromVal))
      return "Invalid Hexadecimal format(Expected: AB123)";
    let decimal = parseInt(fromVal, 16);
    return decimalToBCD(decimal.toString());
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function hexadecimalToRoman(fromVal) {
  try {
    if (!isHexadecimal(fromVal))
      return "Invalid Hexadecimal format(Expected: AB123)";
    let decimal = parseInt(fromVal, 16);
    return decimalToRoman(decimal);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function romanToBCD(fromVal) {
  try {
    if (!isRoman(fromVal)) return "Invalid Roman Number(Expected: MCMXI)";
    let decimal = romanToDecimal(fromVal);
    return decimalToBCD(decimal);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function romanToOctal(fromVal) {
  try {
    if (!isRoman(fromVal)) return "Invalid Roman Number(Expected: MCMXI)";
    let decimal = romanToDecimal(fromVal);
    return decimalToOctal(decimal);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function romanToHexadecimal(fromVal) {
  try {
    if (!isRoman(fromVal)) return "Invalid Roman Number(Expected: MCMXI)";
    let decimal = romanToDecimal(fromVal);
    return decimalToHexadecimal(decimal);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function bcdToBase64(fromVal) {
  try {
    if (!isBCD(fromVal)) return "Invalid BCD format(Expected: 0001 0010 1001)";
    let decimal = bcdToDecimal(fromVal);
    let text = String.fromCharCode(decimal);
    return btoa(text);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function bcdToURLEncoding(fromVal) {
  try {
    if (!isBCD(fromVal)) return "Invalid BCD format(Expected: 0001 0010 1001)";
    let decimal = bcdToDecimal(fromVal);
    let text = String.fromCharCode(decimal);
    return encodeURIComponent(text);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function binaryToASCII(fromVal) {
  try {
    if (!isBinary(fromVal)) return "Invalid binary format(Expected: 01)";
    let decimal = parseInt(fromVal, 2);
    return String.fromCharCode(decimal);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function binaryToUnicode(fromVal) {
  try {
    if (!isBinary(fromVal)) return "Invalid binary format(Expected: 01)";
    let decimal = parseInt(fromVal, 2);
    return "\\u" + decimal.toString(16).padStart(4, "0");
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function binaryToText(fromVal) {
  try {
    if (!isBinary(fromVal)) return "Invalid binary format(Expected: 01)";
    return fromVal
      .match(/.{8}/g)
      .map((bin) => String.fromCharCode(parseInt(bin, 2)))
      .join("");
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function binaryToBase64(fromVal) {
  try {
    if (!isBinary(fromVal)) return "Invalid binary format(Expected: 01)";
    let text = binaryToText(fromVal);
    return btoa(text);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function binaryToURLEncoding(fromVal) {
  try {
    if (!isBinary(fromVal)) return "Invalid binary format(Expected: 01)";
    let text = binaryToText(fromVal);
    return encodeURIComponent(text);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function octalToASCII(fromVal) {
  try {
    if (!isOctal(fromVal)) return "Invalid Octal format(Expected: 1234)";
    let decimal = parseInt(fromVal, 8);
    return String.fromCharCode(decimal);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function octalToUnicode(fromVal) {
  try {
    if (!isOctal(fromVal)) return "Invalid Octal format(Expected: 1234)";
    let decimal = parseInt(fromVal, 8);
    return "\\u" + decimal.toString(16).padStart(4, "0");
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function octalToText(fromVal) {
  try {
    if (!isOctal(fromVal)) return "Invalid Octal format(Expected: 1234)";
    return fromVal
      .match(/.{1,3}/g)
      .map((oct) => String.fromCharCode(parseInt(oct, 8)))
      .join("");
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function octalToBase64(fromVal) {
  try {
    if (!isOctal(fromVal)) return "Invalid Octal format(Expected: 1234)";
    let text = octalToText(fromVal);
    return btoa(text);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function octalToURLEncoding(fromVal) {
  try {
    if (!isOctal(fromVal)) return "Invalid Octal format(Expected: 1234)";
    let text = octalToText(fromVal);
    return encodeURIComponent(text);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function decimalToASCII(fromVal) {
  try {
    if (!isDecimal(fromVal)) return "Invalid Decimal format(Expected: 1234)";
    return String.fromCharCode(parseInt(fromVal, 10));
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function decimalToUnicode(fromVal) {
  try {
    if (!isDecimal(fromVal)) return "Invalid Decimal format(Expected: 1234)";
    return "\\u" + parseInt(fromVal, 10).toString(16).padStart(4, "0");
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function decimalToText(fromVal) {
  try {
    if (!isDecimal(fromVal)) return "Invalid Decimal format(Expected: 1234 or 72 101 108 108 111)";
    
    return fromVal
      .split(" ") 
      .map(num => String.fromCharCode(parseInt(num, 10))) 
      .join("");

  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}


export function decimalToBase64(fromVal) {
  try {
    if (!isDecimal(fromVal)) return "Invalid Decimal format(Expected: 1234)";

    let text = fromVal
      .split(" ")
      .map((num) => String.fromCharCode(parseInt(num, 10)))
      .join("");
    return btoa(text);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function decimalToURLEncoding(fromVal) {
  try {
    if (!isDecimal(fromVal)) return "Invalid Decimal format(Expected: 1234)";
    let text = decimalToText(fromVal.toString());
    return encodeURIComponent(text);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function hexadecimalToASCII(fromVal) {
  try {
    if (!isHexadecimal(fromVal))
      return "Invalid Hexadecimal format(Expected: AB123)";
    return String.fromCharCode(parseInt(fromVal, 16));
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function hexadecimalToUnicode(fromVal) {
  try {
    if (!isHexadecimal(fromVal))
      return "Invalid Hexadecimal format(Expected: AB123)";
    return "\\u" + parseInt(fromVal, 16).toString(16).padStart(4, "0");
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function hexadecimalToText(fromVal) {
  try {
    if (!isHexadecimal(fromVal))
      return "Invalid Hexadecimal format (Expected: AB123)";

    if (fromVal.length % 2 !== 0) return "Invalid Hexadecimal length";

    return fromVal
      .match(/.{2}/g) 
      .map((hex) => String.fromCharCode(parseInt(hex, 16)))
      .join(""); 

  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}


export function hexadecimalToBase64(fromVal) {
  try {
    if (!isHexadecimal(fromVal))
      return "Invalid Hexadecimal format(Expected: AB123)";
    let text = hexadecimalToText(fromVal.toString());
    return btoa(text);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function hexadecimalToURLEncoding(fromVal) {
  try {
    if (!isHexadecimal(fromVal))
      return "Invalid Hexadecimal format(Expected: AB123)";
    let text = hexadecimalToText(fromVal.toString());
    return encodeURIComponent(text);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function romanToText(fromVal) {
  try {
    if (!isRoman(fromVal)) return "Invalid Roman Number(Expected: MCMXI)";
    let decimal = romanToDecimal(fromVal);
    return String.fromCharCode(decimal);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function romanToBase64(fromVal) {
  try {
    if (!isRoman(fromVal)) return "Invalid Roman Number(Expected: MCMXI)";
    let text = romanToText(fromVal);
    return btoa(text);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function romanToURLEncoding(fromVal) {
  try {
    if (!isRoman(fromVal)) return "Invalid Roman Number(Expected: MCMXI)";
    let text = romanToText(fromVal);
    return encodeURIComponent(text);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function asciiToText(fromVal) {
  try {
    if (!isASCII(fromVal))
      return "Invalid ASCII Format(Expected: 97 or 72 101 108 108 111)";

    return fromVal
      .split(" ")
      .map((num) => String.fromCharCode(parseInt(num, 10)))
      .join("");
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function asciiToBase64(fromVal) {
  try {
    if (!isASCII(fromVal)) return "Invalid ASCII Format(Expected: 97)";
    let text = asciiToText(fromVal);
    return btoa(text);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function asciiToURLEncoding(fromVal) {
  try {
    if (!isASCII(fromVal)) return "Invalid ASCII Format(Expected: 97)";
    let text = asciiToText(fromVal);
    return encodeURIComponent(text);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function unicodeToOctal(fromVal) {
  try {
    if (!isUnicode(fromVal)) return "Invalid Unicode format(Expected: \\u0041).";
    let decimal = parseInt(fromVal.replace("\\u", ""), 16);
    return decimal.toString(8);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function unicodeToRoman(fromVal) {
  try {
    if (!isUnicode(fromVal)) return "Invalid Unicode format(Expected: \\u0041).";
    let decimal = parseInt(fromVal.replace("\\u", ""), 16);
    return decimalToRoman(decimal.toString());
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function unicodeToASCII(fromVal) {
  try {
    if (!isUnicode(fromVal)) return "Invalid Unicode format(Expected: \\u0041).";
    let decimal = parseInt(fromVal.replace("\\u", ""), 16);
    return decimal.toString();
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function unicodeToText(fromVal) {
  try {
    if (!isUnicode(fromVal)) return "Invalid Unicode format(Expected: \\u0041).";
    return String.fromCharCode(parseInt(fromVal.replace("\\u", ""), 16));
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function unicodeToBase64(fromVal) {
  try {
    if (!isUnicode(fromVal)) return "Invalid Unicode format(Expected: \\u0041).";
    let text = unicodeToText(fromVal);
    return btoa(text);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function unicodeToURLEncoding(fromVal) {
  try {
    if (!isUnicode(fromVal)) return "Invalid Unicode format(Expected: \\u0041).";
    let text = unicodeToText(fromVal);
    return encodeURIComponent(text);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function textToBCD(fromVal) {
  try {
    if (typeof fromVal !== "string") return "Invalid text input";
    return fromVal
      .split("")
      .map((char) => {
        let decimal = char.charCodeAt(0).toString();
        return decimal
          .split("")
          .map((digit) => parseInt(digit).toString(4).padStart(4, "0"))
          .join("");
      })
      .join(" ");
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function textToOctal(fromVal) {
  try {
    if (typeof fromVal !== "string") return "Invalid text input";
    return fromVal
      .split("")
      .map((char) => char.charCodeAt(0).toString(8))
      .join(" ");
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function textToDecimal(fromVal) {
  try {
    if (typeof fromVal !== "string") return "Invalid text input";
    return fromVal
      .split("")
      .map((char) => char.charCodeAt(0).toString(10))
      .join(" ");
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function textToUnicode(fromVal) {
  try {
    if (typeof fromVal !== "string") return "Invalid text input";
    return fromVal
      .split("")
      .map((char) => "\\u" + char.charCodeAt(0).toString(16).padStart(4, "0"))
      .join("");
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function base64ToOctal(fromVal) {
  try {
    if (!isBase64(fromVal))
      return "Invalid Base64 input(Expected: QmhhdmVzaA==)";
    let text = atob(fromVal);
    return textToOctal(text);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function base64ToDecimal(fromVal) {
  try {
    if (!isBase64(fromVal))
      return "Invalid Base64 input(Expected: QmhhdmVzaA==)";
    let text = atob(fromVal);
    return textToDecimal(text);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function base64ToUnicode(fromVal) {
  try {
    if (!isBase64(fromVal))
      return "Invalid Base64 input(Expected: QmhhdmVzaA==)";
    let text = atob(fromVal);
    return textToUnicode(text);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function base64ToURLEncoding(fromVal) {
  try {
    if (!isBase64(fromVal))
      return "Invalid Base64 input(Expected: QmhhdmVzaA==)";
    let text = atob(fromVal);
    return encodeURIComponent(text);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function urlEncodingToBase64(fromVal) {
  try {
    if (typeof fromVal !== "string") return "Invalid URL Encoding input";
    let text = decodeURIComponent(fromVal);
    return btoa(text);
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function littleEndianToBigEndian(fromVal) {
  try {
    if (!isHexadecimal(fromVal))
      return "Invalid Hexadecimal format(Expected: AB123)";

    return fromVal.match(/.{2}/g).reverse().join("");
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}

export function bigEndianToLittleEndian(fromVal) {
  try {
    if (!isHexadecimal(fromVal))
      return "Invalid Hexadecimal format(Expected: AB123)";

    return fromVal.match(/.{2}/g).reverse().join("");
  } catch (error) {
    console.log(error);
    return "Failed to convert";
  }
}
