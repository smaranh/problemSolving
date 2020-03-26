export function isUniqueStr(text: string) {
    if (text.length > 128) {
      return false;
    } else {
      for (let i=0; i< text.length; i++) {
        if (text.indexOf(text[i]) !== i) {
          return false;
        }
      }
      return true;
    }
  }
  
console.log(isUniqueStr("joel"));