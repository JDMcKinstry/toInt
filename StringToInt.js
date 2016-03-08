function StringToInt(noFloat) { var a = this.replace(/[^0-9|.]/g, '').replace(/^0+/g, ''); return noFloat ? parseInt(a) : parseFloat(a); }
Object['defineProperty'] && !String.prototype.hasOwnProperty('toInt') ? Object.defineProperty(String.prototype, 'toInt', { value: StringToInt }) : String.prototype.toInt = StringToInt;
