
'use strict'

const postalCodes = {
  AB: 'T',
  BC: 'V',
  MB: 'R',
  NB: 'E',
  NL: 'A',
  NS: 'B',
  NT: 'X',
  NU: 'X',
  ON: ['K', 'L', 'M', 'N', 'P'],
  QC: ['G', 'H', 'J', 'K'],
  SK: 'S',
  YT: 'Y',
  PE: 'C'
}

module.exports.validate = function validate(province, postal) {
  const prefix = postalCodes[province]
  if (prefix) {
    if (typeof(prefix) == 'string') {
      return postal.startsWith(prefix)
    }

    if (typeof(prefix) == 'object') {
      let match = false
      prefix.forEach((p) => {
        if (postal.startsWith(p)) {
          match = true
        }
      })

      return match
    }

    return false
  }
  return false
}