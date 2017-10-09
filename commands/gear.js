const request = require('request-promise')

const wh = 'http://www.wowhead.com/item='
const toTitleCase = str => str.charAt(0).toUpperCase() + str.substr(1)

module.exports = ({ character, realm, region }) => {
  return request.get(`https://${region}.api.battle.net/wow/character/${realm}/${encodeURI(character)}?fields=items&locale=en_US&apikey=${process.env.BNET_API_KEY}`)
    .then(res => {

      const data = JSON.parse(res)
      const options = {}
      const offhand = data.items.offHand ? `${data.items.offHand.itemLevel} - **Offhand** - ${data.items.offHand.name}  (<${wh}${data.items.offHand.id}>)` : 'No offhand equipped'
      const response = `${toTitleCase(character)} - ${toTitleCase(realm)} - ${region.toUpperCase()}
Armory: <http://${region}.battle.net/wow/en/character/${realm}/${encodeURI(character)}/advanced>
Item Level: \`${data.items.averageItemLevel}\` | \`${data.items.averageItemLevelEquipped}\`
${data.items.head.itemLevel} - **Head** - ${data.items.head.name}  (<${wh}${data.items.head.id}>) 
${data.items.neck.itemLevel} - **Neck** - ${data.items.neck.name}  (<${wh}${data.items.neck.id}>)
${data.items.shoulder.itemLevel} - **Shoulder** - ${data.items.shoulder.name}  (<${wh}${data.items.shoulder.id}>)
${data.items.back.itemLevel} - **Back** - ${data.items.back.name}  (<${wh}${data.items.back.id}>)
${data.items.chest.itemLevel} - **Chest** - ${data.items.chest.name}  (<${wh}${data.items.chest.id}>)
${data.items.wrist.itemLevel} - **Wrist** - ${data.items.wrist.name}  (<${wh}${data.items.wrist.id}>)
${data.items.hands.itemLevel} - **Hands** - ${data.items.hands.name}  (<${wh}${data.items.hands.id}>)
${data.items.waist.itemLevel} - **Waist** - ${data.items.waist.name}  (<${wh}${data.items.waist.id}>)
${data.items.legs.itemLevel} - **Legs** - ${data.items.legs.name}  (<${wh}${data.items.legs.id}>)
${data.items.feet.itemLevel} - **Feet** - ${data.items.feet.name}  (<${wh}${data.items.feet.id}>)
${data.items.finger1.itemLevel} - **Finger1** - ${data.items.finger1.name}  (<${wh}${data.items.finger1.id}>)
${data.items.finger2.itemLevel} - **Finger2** - ${data.items.finger2.name}  (<${wh}${data.items.finger2.id}>)
${data.items.trinket1.itemLevel} - **Trinket1** - ${data.items.trinket1.name}  (<${wh}${data.items.trinket1.id}>)
${data.items.trinket2.itemLevel} - **Trinket2** - ${data.items.trinket2.name}  (<${wh}${data.items.trinket2.id}>)
${data.items.mainHand.itemLevel} - **Mainhand** - ${data.items.mainHand.name}  (<${wh}${data.items.mainHand.id}>)
${offhand}`

      return [response, options]
    })
}