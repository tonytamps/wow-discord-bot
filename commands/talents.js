const request = require('request-promise')

const toTitleCase = str => str.charAt(0).toUpperCase() + str.substr(1)
const sort = (arr, key) => {
  return arr.sort((a, b) => {
    if (a[key] < b[key]) { return -1 }
    if (a[key] > b[key]) { return 1 }
    return 0
  })
}

module.exports = ({ character, realm, region }) => {
  return request.get(`https://${region}.api.battle.net/wow/character/${realm}/${encodeURI(character)}?fields=talents&locale=en_US&apikey=${process.env.BNET_API_KEY}`)
    .then(res => {
      const data = JSON.parse(res)
      const options = {
        embed: {
          title: 'Talents',
          fields: data.talents.filter(x => x.spec).map(x => ({
            name: x.spec.name,
            value: sort(x.talents, 'tier').map(t => t.spell.name).join('\n'),
            inline: true
          }))
        }
      }
      const response = `${toTitleCase(character)} - ${toTitleCase(realm)} - ${region.toUpperCase()}
Armory: <http://${region}.battle.net/wow/en/character/${realm}/${encodeURI(character)}/advanced>`

      return [response, options]
    })
}
