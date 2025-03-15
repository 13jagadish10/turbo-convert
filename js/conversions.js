import {
  binaryToBinary,
  binaryToDecimal,
  binaryToOctal,
  binaryToHexadecimal,
  binaryToBCD,
  decimalToDecimal,
  decimalToBinary,
  decimalToOctal,
  decimalToHexadecimal,
  octalToOctal,
  octalToBinary,
  octalToDecimal,
  octalToHexadecimal,
  hexadecimalToHexadecimal,
  hexadecimalToBinary,
  hexadecimalToDecimal,
  hexadecimalToOctal,
  bcdToBCD,
  bcdToDecimal,
  asciiToASCII,
  asciiToBinary,
  asciiToDecimal,
  asciiToHexadecimal,
  asciiToOctal,
  asciiToUnicode,
  unicodeToUnicode,
  unicodeToBinary,
  unicodeToDecimal,
  unicodeToHexadecimal,
  textToText,
  textToASCII,
  textToBinary,
  textToHexadecimal,
  textToBase64,
  textToURLEncoding,
  base64ToBase64,
  base64ToText,
  base64ToBinary,
  base64ToHexadecimal,
  base64ToASCII,
  urlEncodingToURLEncoding,
  urlEncodingToText,
  ipToIP,
  ipToBinary,
  ipToDecimal,
  ipToHexadecimal,
  macToMAC,
  macToBinary,
  macToDecimal,
  macToHexadecimal,
  uuidToUUID,
  uuidToBinary,
  uuidToDecimal,
  uuidToHexadecimal,
  colorToColor,
  rgbToHex,
  rgbToHSL,
  rgbToCMYK,
  hexToRGB,
  hexToHSL,
  hexToCMYK,
  hslToRGB,
  hslToHex,
  hslToCMYK,
  cmykToRGB,
  cmykToHex,
  cmykToHSL,
  bcdToBinary,
  grayToGray,
  grayToBinary,
  grayToDecimal,
  romanToRoman,
  romanToDecimal,
  romanToBinary,
  binaryToRoman,
  bcdToOctal,
  bcdToHexadecimal,
  bcdToRoman,
  octalToBCD,
  octalToRoman,
  decimalToBCD,
  decimalToRoman,
  hexadecimalToBCD,
  hexadecimalToRoman,
  romanToBCD,
  romanToOctal,
  romanToHexadecimal,
  bcdToBase64,
  bcdToURLEncoding,
  binaryToASCII,
  binaryToUnicode,
  binaryToText,
  binaryToBase64,
  binaryToURLEncoding,
  octalToASCII,
  octalToUnicode,
  octalToText,
  octalToBase64,
  octalToURLEncoding,
  decimalToASCII,
  decimalToUnicode,
  decimalToText,
  decimalToBase64,
  decimalToURLEncoding,
  hexadecimalToASCII,
  hexadecimalToUnicode,
  hexadecimalToText,
  hexadecimalToBase64,
  hexadecimalToURLEncoding,
  romanToText,
  romanToBase64,
  romanToURLEncoding,
  asciiToText,
  asciiToBase64,
  asciiToURLEncoding,
  unicodeToOctal,
  unicodeToRoman,
  unicodeToASCII,
  unicodeToText,
  unicodeToBase64,
  unicodeToURLEncoding,
  textToBCD,
  textToOctal,
  textToDecimal,
  textToUnicode,
  base64ToOctal,
  base64ToDecimal,
  base64ToUnicode,
  base64ToURLEncoding,
  urlEncodingToBase64,
  littleEndianToBigEndian,
  bigEndianToLittleEndian,
} from "./convertors.js";

document.getElementById("convertBtn").addEventListener("click", () => {
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  let inputVal = document.getElementById("inputValue").value;
  let output = document.getElementById("outputValue");
  console.log(`Converting "${inputVal}" from ${from} to ${to}`);

  let result = convert(from, to, inputVal);
  output.innerText = result;
});
const convertors = {
  // Number System Conversions
  ...{
    "Binary to Binary": binaryToBinary,
    "Binary to BCD": binaryToBCD,
    "Binary to Octal": binaryToOctal,
    "Binary to Decimal": binaryToDecimal,
    "Binary to Hexadecimal": binaryToHexadecimal,
    "Binary to Roman": binaryToRoman,

    "Decimal to Binary": decimalToBinary,
    "Decimal to BCD": decimalToBCD,
    "Decimal to Octal": decimalToOctal,
    "Decimal to Decimal": decimalToDecimal,
    "Decimal to Hexadecimal": decimalToHexadecimal,
    "Decimal to Roman": decimalToRoman,

    "Octal to Binary": octalToBinary,
    "Octal to BCD": octalToBCD,
    "Octal to Octal": octalToOctal,
    "Octal to Decimal": octalToDecimal,
    "Octal to Hexadecimal": octalToHexadecimal,
    "Octal to Roman": octalToRoman,

    "Hexadecimal to BCD": hexadecimalToBCD,
    "Hexadecimal to Binary": hexadecimalToBinary,
    "Hexadecimal to Octal": hexadecimalToOctal,
    "Hexadecimal to Decimal": hexadecimalToDecimal,
    "Hexadecimal to Hexadecimal": hexadecimalToHexadecimal,
    "Hexadecimal to Roman": hexadecimalToRoman,

    "BCD to Binary": bcdToBinary,
    "BCD to BCD": bcdToBCD,
    "BCD to Octal": bcdToOctal,
    "BCD to Decimal": bcdToDecimal,
    "BCD to Hexadecimal": bcdToHexadecimal,
    "BCD to Roman": bcdToRoman,

    "Roman to Binary": romanToBinary,
    "Roman to BCD": romanToBCD,
    "Roman to Octal": romanToOctal,
    "Roman to Decimal": romanToDecimal,
    "Roman to Hexadecimal": romanToHexadecimal,
    "Roman to Roman": romanToRoman,
  },

  // Text Encoding Conversions
  ...{
    "ASCII to ASCII": asciiToASCII,
    "ASCII to Binary": asciiToBinary,
    "ASCII to Decimal": asciiToDecimal,
    "ASCII to Hexadecimal": asciiToHexadecimal,
    "ASCII to Octal": asciiToOctal,
    "ASCII to Unicode": asciiToUnicode,
    "ASCII to Text": asciiToText,
    "ASCII to Base64": asciiToBase64,
    "ASCII to URL Encoding": asciiToURLEncoding,

    "Base64 to Base64": base64ToBase64,
    "Base64 to Text": base64ToText,
    "Base64 to Binary": base64ToBinary,
    "Base64 to Hexadecimal": base64ToHexadecimal,
    "Base64 to ASCII": base64ToASCII,
    "Base64 to Octal": base64ToOctal,
    "Base64 to Decimal": base64ToDecimal,
    "Base64 to Unicode": base64ToUnicode,
    "Base64 to URL Encoding": base64ToURLEncoding,

    "BCD to Base64": bcdToBase64,
    "BCD to URL Encoding": bcdToURLEncoding,

    "Binary to ASCII": binaryToASCII,
    "Binary to Unicode": binaryToUnicode,
    "Binary to Text": binaryToText,
    "Binary to Base64": binaryToBase64,
    "Binary to URL Encoding": binaryToURLEncoding,

    "Decimal to ASCII": decimalToASCII,
    "Decimal to Unicode": decimalToUnicode,
    "Decimal to Text": decimalToText,
    "Decimal to Base64": decimalToBase64,
    "Decimal to URL Encoding": decimalToURLEncoding,

    "Hexadecimal to ASCII": hexadecimalToASCII,
    "Hexadecimal to Unicode": hexadecimalToUnicode,
    "Hexadecimal to Text": hexadecimalToText,
    "Hexadecimal to Base64": hexadecimalToBase64,
    "Hexadecimal to URL Encoding": hexadecimalToURLEncoding,

    "Octal to ASCII": octalToASCII,
    "Octal to Unicode": octalToUnicode,
    "Octal to Text": octalToText,
    "Octal to Base64": octalToBase64,
    "Octal to URL Encoding": octalToURLEncoding,

    "Roman to Text": romanToText,
    "Roman to Base64": romanToBase64,
    "Roman to URL Encoding": romanToURLEncoding,

    "Text to BCD": textToBCD,
    "Text to Octal": textToOctal,
    "Text to Decimal": textToDecimal,
    "Text to Unicode": textToUnicode,
    "Text to Text": textToText,
    "Text to ASCII": textToASCII,
    "Text to Binary": textToBinary,
    "Text to Hexadecimal": textToHexadecimal,
    "Text to Base64": textToBase64,
    "Text to URL Encoding": textToURLEncoding,

    "Unicode to Unicode": unicodeToUnicode,
    "Unicode to Binary": unicodeToBinary,
    "Unicode to Decimal": unicodeToDecimal,
    "Unicode to Hexadecimal": unicodeToHexadecimal,
    "Unicode to Octal": unicodeToOctal,
    "Unicode to Roman": unicodeToRoman,
    "Unicode to ASCII": unicodeToASCII,
    "Unicode to Text": unicodeToText,
    "Unicode to Base64": unicodeToBase64,
    "Unicode to URL Encoding": unicodeToURLEncoding,

    "URL Encoding to URL Encoding": urlEncodingToURLEncoding,
    "URL Encoding to Text": urlEncodingToText,
    "URL Encoding to Base64": urlEncodingToBase64,
  },

  // Special Conversions
  ...{
    "IP Address to IP Address": ipToIP,
    "IP Address to Binary": ipToBinary,
    "IP Address to Decimal": ipToDecimal,
    "IP Address to Hexadecimal": ipToHexadecimal,

    "MAC Address to MAC Address": macToMAC,
    "MAC Address to Binary": macToBinary,
    "MAC Address to Decimal": macToDecimal,
    "MAC Address to Hexadecimal": macToHexadecimal,

    "UUID to UUID": uuidToUUID,
    "UUID to Binary": uuidToBinary,
    "UUID to Decimal": uuidToDecimal,
    "UUID to Hexadecimal": uuidToHexadecimal,

    "Big Endian to Little Endian": bigEndianToLittleEndian,
    "Little Endian to Big Endian": littleEndianToBigEndian,

    "RGB to Hex": rgbToHex,
    "RGB to HSL": rgbToHSL,
    "RGB to CMYK": rgbToCMYK,
    "Hex to RGB": hexToRGB,
    "Hex to HSL": hexToHSL,
    "Hex to CMYK": hexToCMYK,
    "HSL to RGB": hslToRGB,
    "HSL to Hex": hslToHex,
    "HSL to CMYK": hslToCMYK,
    "CMYK to RGB": cmykToRGB,
    "CMYK to Hex": cmykToHex,
    "CMYK to HSL": cmykToHSL,

    "BCD to Decimal": bcdToDecimal,
    "BCD to Binary": bcdToBinary,

    "Gray Code to Gray Code": grayToGray,
    "Gray Code to Binary": grayToBinary,
    "Gray Code to Decimal": grayToDecimal,
  },
};

function convert(from, to, value) {
  const key = `${from} to ${to}`;
  return convertors[key] ? convertors[key](value) : "Invalid Conversion";
}