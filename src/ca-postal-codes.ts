const ab = 'T';
const bc = 'V';
const mb = 'R';
const on =  ['K', 'L', 'M', 'N', 'P'];
const nl = 'A';
const nb = 'E';
const ns = 'B';
const nt = 'X';
const nu = 'X';
const qc = ['G', 'H', 'J', 'K'];
const sk = 'S';
const yt = 'Y';
const pe = 'C';

const postalCodes: any = {
  'ab': ab,
  'bc': bc,
  'mb': mb,
  'nb': nb,
  'nl': nl,
  'ns': ns,
  'nt': nt,
  'nu': nu,
  'on': on,
  'qc': qc,
  'sk': sk,
  'yt': yt,
  'pe': pe,
  'alberta': ab,
  'british columbia': bc,
  'manitoba': mb,
  'new brunswick': nb,
  'newfoundland': nl,
  'nova scotia': ns,
  'northwest territories': nt,
  'nunavut': nu,
  'ontario': on,
  'quebec': qc,
  'saskatchewan': sk,
  'yukon': yt,
  'prince edward island': pe
}

const validate = (province: string, postal: string): boolean => {
  const prefix = postalCodes[province.toLowerCase()];
  if (prefix) {
    if (typeof(prefix) === 'string') {
      return postal.toLowerCase().startsWith(prefix.toLowerCase())
    }

    if (typeof(prefix) === 'object') {
      let match = false
      prefix.forEach((p: string) => {
        if (postal.toLowerCase().startsWith(p.toLowerCase())) {
          match = true
        }
      })

      return match
    }

    return false
  }
  return false
}
export default validate;
