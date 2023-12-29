import mortarPinRed from "./svg/mortar_pin_red.svg";
import mortarSymbolRed from "./svg/mortar_symbol_red.svg";
import mortarPinGreen from "./svg/mortar_pin_green.svg";
import mortarSymbolGreen from "./svg/mortar_symbol_green.svg";
import mortarPinBlue from "./svg/mortar_pin_blue.svg";
import mortarSymbolBlue from "./svg/mortar_symbol_blue.svg";
import mortarPin from "./svg/mortar_pin.svg";
import mortarSymbol from "./svg/mortar_symbol.svg";

import targetPinRed from "./svg/target_pin_red.svg";
import targetSymbolRed from "./svg/target_symbol_red.svg";
import targetPinGreen from "./svg/target_pin_green.svg";
import targetSymbolGreen from "./svg/target_symbol_green.svg";
import targetPinBlue from "./svg/target_pin_blue.svg";
import targetSymbolBlue from "./svg/target_symbol_blue.svg";
import targetPin from "./svg/target_pin.svg";
import targetSymbol from "./svg/target_symbol.svg";

import fobPinRed from "./svg/fob_pin_red.svg";
import fobSymbolRed from "./svg/fob_symbol_red.svg";
import fobPinGreen from "./svg/fob_pin_green.svg";
import fobSymbolGreen from "./svg/fob_symbol_green.svg";
import fobPinBlue from "./svg/fob_pin_blue.svg";
import fobSymbolBlue from "./svg/fob_symbol_blue.svg";
import fobPin from "./svg/fob_pin.svg";
import fobSymbol from "./svg/fob_symbol.svg";


/**
 * Small utility file exporting static values that are reused often
 * @type {number}
 */
export const ICON_SIZE = 48;
export const MIN_DISTANCE = 50;

export const FOB_RANGE = 150;
export const FOB_DISTANCE = 400;

export const SQUAD_NAME = "SQUAD";
export const SQUAD_VELOCITY = 109.890938;
export const SQUAD_MAX_DISTANCE = 1232;

export const PS_MORTAR_CONFIG = [
  {
    name: "GER 8cm",
    velocity: 120.0,
    maxDistance: 1467,
    minDistance: 100,
    rangeTable: null,
  },
  {
    name: "BRIT 3″",
    velocity: 120.0,
    maxDistance: 1467,
    minDistance: 100,
    rangeTable: null,
  },
  {
    name: "BRIT 4″",
    velocity: 167.0,
    maxDistance: 2818,
    minDistance: 200,
    rangeTable: null,
  },
  {
    name: "US 6cm",
    velocity: 120.0,
    maxDistance: 1467,
    minDistance: 100,
    rangeTable: null,
  },
  {
    name: "Panzerwerfer 42",
    velocity: null,
    maxDistance: 2200,
    minDistance: 1000,
    rangeTable: [
      [1000, 50],
      [1400, 200],
      [1700, 300],
      [1900, 400],
      [2100, 500],
      [2150, 600],
      [2200, 700]
    ],
  },
  {
    name: "SDFKZ 251 8cm",
    velocity: null,
    maxDistance: 1400,
    minDistance: 350,
    rangeTable: [
      [350, 660],
      [400, 650],
      [500, 600],
      [600, 550],
      [700, 500],
      [800, 450],
      [900, 400],
      [1000, 320],
      [1100, 270],
      [1200, 200],
      [1300, 100],
      [1400, 0]
    ],
  },
  {
    name: "QF 25-pounder",
    velocity: null,
    maxDistance: 3300,
    minDistance: 1000,
    rangeTable: [
      [1000, 42],
      [1100, 52],
      [1200, 60],
      [1300, 70],
      [1400, 80],
      [1500, 90],
      [1600, 111],
      [1700, 115],
      [1800, 130],
      [1900, 142],
      [2000, 160],
      [2100, 175],
      [2200, 193],
      [2300, 212],
      [2400, 235],
      [2500, 257],
      [2600, 285],
      [2700, 310],
      [2800, 345],
      [2900, 380],
      [3000, 415],
      [3100, 465],
      [3200, 530],
      [3300, 700],
    ],
  },
  {
    name: "Bren carrier 2″",
    velocity: null,
    maxDistance: 450,
    minDistance: 100,
    rangeTable: [
      [100, 665],
      [150, 605],
      [200, 545],
      [250, 490],
      [300, 435],
      [350, 320],
      [400, 200],
      [450, 0]
    ],
  },
];

export const GRAVITY = 9.8;
export const MIL_TO_DEG_FACTOR = 360.0 / 6283.1853;
export const NATO_MIL_TO_DEG_FACTOR = 360 / 6400;
export const MAX_SUBTARGETS_COUNT = 49;

/**
 * @enum {number}
 */
export const PIN_TYPE = Object.freeze({
  UNKNOWN: -1,
  MORTAR: 0,
  TARGET: 1,
  SUBTARGET: 2,
  FOB: 3,
});

/**
 * @enum {number}
 */
export const TARGET_TYPE = Object.freeze({
  POINT: 0,
  LINE: 1,
  AREA: 2,
});

/**
 * @type {Object.<PIN_TYPE, string[][]>}
 */
const PIN_MAP = {};
PIN_MAP[PIN_TYPE.MORTAR] = [
  [mortarPinRed, mortarSymbolRed, "#F44336"],
  [mortarPinGreen, mortarSymbolGreen, "#4CAF50"],
  [mortarPinBlue, mortarSymbolBlue, "#2196F3"],
  [mortarPin, mortarSymbol, "#212121"],
];
PIN_MAP[PIN_TYPE.TARGET] = [
  [targetPinRed, targetSymbolRed, "#F44336"],
  [targetPinGreen, targetSymbolGreen, "#4CAF50"],
  [targetPinBlue, targetSymbolBlue, "#2196F3"],
  [targetPin, targetSymbol, "#212121"],
];
PIN_MAP[PIN_TYPE.FOB] = [
  [fobPinRed, fobSymbolRed, "#F44336"],
  [fobPinGreen, fobSymbolGreen, "#4CAF50"],
  [fobPinBlue, fobSymbolBlue, "#2196F3"],
  [fobPin, fobSymbol, "#212121"],
];
export { PIN_MAP };

export const COLORS = Object.freeze({
  IN_RANGE: "#1B5E20",
  OUT_OF_RANGE: "#B71C1C",
  LINE_FIRE: "#F57F17",
  AREA_FIRE: "#F57F17",
  SUBTARGET: "#01579B",
  SUBTARGET_SELECTED: "#F57F17",
});
