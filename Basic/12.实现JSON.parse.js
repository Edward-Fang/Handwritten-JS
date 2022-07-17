const parse = (json) => {
  return eval('(' + json + ')')
}

const string = '{"name":"fjp", "age":"22"}'
console.log(parse(string).name)
