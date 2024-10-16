import { Circle } from "leaflet";

import PinHolder from "./PinHolder";
import { MIN_DISTANCE, SQUAD_MAX_DISTANCE } from "../../Vars";

/**
 * @extends PinHolder
 */
export default class MortarPin extends PinHolder {
  constructor(map, pinUrl, size, draggable = true, maxDistance = SQUAD_MAX_DISTANCE, minDistance = MIN_DISTANCE) {
    super(map, pinUrl, size, draggable);
    this.maxDistance = maxDistance;
    this.minDistance = minDistance;
  }

  /**
   * Set active state of this pinholder. Only an active Mortar marker may have min and max range circles shown.
   * @param {boolean} state - whether or not this pinHolder is "active"
   */
  setActive(state) {
    if (state) {
      this._showAttachments();
    } else {
      this._hideAttachments();
    }
  }

  /**
   * Set the max distance for this pin. Used to draw max range circle on mortar markers
   * @param {Number} maxDistance - max distance value for this pin
   */
  setMaxDistance(maxDistance) {
    console.log("setMaxDistance", maxDistance);
    this.maxDistance = maxDistance;
    if (this.maxRangeCircle) {
      console.log("maxRangeCircle", this.maxRangeCircle);
      this.maxRangeCircle.setRadius(maxDistance);
    }
  }

  /**
   * Set the min distance for this pin. Used to draw min range circle on mortar markers
   * @param {Number} minDistance - min distance value for this pin
   */
  setMinDistance(minDistance) {
    console.log("setMinDistance", minDistance);
    this.minDistance = minDistance;
    if (this.minRangeCircle) {
      console.log("minRangeCircle", this.minRangeCircle);
      this.minRangeCircle.setRadius(minDistance);
    }
  }

  /**
   * Creates min and max range circles for mortar marker
   */
  _createAttachments() {
    super._createAttachments();

    this.minRangeCircle = new Circle(this.pos, {
      draggable: "false",
      radius: this.minDistance,
      color: this.color,
      fillOpacity: 0,
      dashArray: "5, 5",
      interactive: false,
      clickable: false, // legacy support
    });

    this.maxRangeCircle = new Circle(this.pos, {
      draggable: "false",
      radius: this.maxDistance,
      color: this.color,
      fillOpacity: 0.1,
      fillColor: this.color,
      dashArray: "5, 5",
      interactive: false,
      clickable: false, // legacy support
    });

    this._attachments = [this.minRangeCircle, this.maxRangeCircle];
  }
}
