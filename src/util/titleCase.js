const titleCase = (str) => {
  str = str.split(" ")
  return str.map(s => {
      s = s.split("")
      s[0] = s[0].toUpperCase()
      return s.join('')
  }).join(" ")
};

export default titleCase;