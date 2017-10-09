const loot = {
  '0': { end: 865, weekly: 'N/A' },
  '2': { end: 870, weekly: 875 },
  '3': { end: 870, weekly: 880 },
  '4': { end: 875, weekly: 885 },
  '5': { end: 875, weekly: 890 },
  '6': { end: 880, weekly: 890 },
  '7': { end: 880, weekly: 895 },
  '8': { end: 885, weekly: 895 },
  '9': { end: 885, weekly: 900 },
  '10': { end: 890, weekly: 905 },
  '11': { end: 890, weekly: 910 },
  '12': { end: 895, weekly: 915 },
  '13': { end: 900, weekly: 920 },
  '14': { end: 905, weekly: 925 },
  '15': { end: 910, weekly: 930 },
}

module.exports = ({ character, realm, region }) => {
  const options = {
    embed: {
      title: 'Mythic Loot',
      fields: [{
        name: 'Level',
        value: Object.keys(loot).join('\n'),
        inline: true
      }, {
        name: 'End Chest',
        value: Object.keys(loot).map(k => loot[k].end).join('\n'),
        inline: true
      }, {
        name: 'Weekly Chest',
        value: Object.keys(loot).map(k => loot[k].weekly).join('\n'),
        inline: true
      }]
    }
  }

  return ['', options]
}
