const response = await fetch(
  'https://data.iana.org/TLD/tlds-alpha-by-domain.txt',
)

let data = (await response.text()).split('\n')

data = data.slice(1, data.length - 1).map((tld) => tld.toLowerCase())

await Deno.writeTextFile('./tld.json', JSON.stringify(data, null, 2))
await Deno.writeTextFile('./tld.min.json', JSON.stringify(data))
