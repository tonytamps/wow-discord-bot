
## WoW Discord Bot

A Discord bot that can be used to query web services (WowHead, Blizzard, Raider.io, etc...) in chat.


## Example

You type:
```
?gear redcat
```
or
```
?gear redcat saurfang us
```

Bot says:
```
Redcat - Saurfang - US
Armory: http://us.battle.net/wow/en/character/saurfang/redcat/advanced
Item Level: 930 | 926
970 - Head - Shattered Fragments of Sindragosa  (http://www.wowhead.com/item=151810)
905 - Neck - Clasp of Burning Demise  (http://www.wowhead.com/item=147765)
895 - Shoulder - Mantle of Everburning Knowledge  (http://www.wowhead.com/item=138321)
900 - Back - Cloak of Everburning Knowledge  (http://www.wowhead.com/item=138365)
915 - Chest - Soul Queen's Ceremonial Robes  (http://www.wowhead.com/item=146995)
915 - Wrist - Oathbreaker's Cuffs  (http://www.wowhead.com/item=147001)
915 - Hands - Gloves of the Arcane Tempest  (http://www.wowhead.com/item=147146)
925 - Waist - Strife-Riddled Cinch  (http://www.wowhead.com/item=146999)
920 - Legs - Leggings of the Arcane Tempest  (http://www.wowhead.com/item=147148)
915 - Feet - Slippers of Enduring Vigilance  (http://www.wowhead.com/item=146987)
955 - Finger1 - Yathae's Thumb Ring  (http://www.wowhead.com/item=147021)
970 - Finger2 - Shard of the Exodar  (http://www.wowhead.com/item=132410)
915 - Trinket1 - Tarnished Sentinel Medallion  (http://www.wowhead.com/item=147017)
915 - Trinket2 - Terror From Below  (http://www.wowhead.com/item=147016)
944 - Mainhand - Ebonchill  (http://www.wowhead.com/item=128862)
No offhand equipped
```


## Motivation

All the other WoW Discord bots weren't suitable for the guild I was in at the time. Most other bots were "fun" or useless. I wanted a bot with simple commands and useful functions.


## Invite

No longer running.

~~You can invite the bot to your server by going here [https://discordapp.com/oauth2/authorize?&client_id=278336355057270784&scope=bot&permissions=0](https://discordapp.com/oauth2/authorize?&client_id=278336355057270784&scope=bot&permissions=0)~~

> **Note:** You can only add a bot account to a server that you have Manage Server permissions on.



## Self-hosting

Or you can fork it, create your own API keys and host it for free like I am with Now.sh

* Create a [Now.sh account](https://zeit.co/now)
* Create a [Battle.net API Key](https://dev.battle.net/apps/mykeys)
    * You need the "Game API: Basic Plan Key"
* Create a [Discord App](https://discordapp.com/developers/applications/me)
    * You need the "App Bot User Token"
* `npm install -g now`
* `now secrets add discord-api-key <discord-token-from-before>`
* `now secrets add bnet-api-key <bnet-api-key-from-before>`
* `now` (inside the project directory)


## Command Reference

* `?help` or `?commands`
    * Shows the command reference message
* `?loot`
    * Lists the rewards for doing mythic dungeons
* `?affixes` or `?affix`
    * Lists the weekly mythic dungeon affixes
* `?gear <character> [realm=saurfang] [region=us]`
    * Lists the gear for the provided character name, optional realm and region
* `?talents` or `?tals <character> [realm=saurfang] [region=us]`
    * Lists the talents for the provided character name, optional realm and region
* `?progression` or `?prog <character> [realm=saurfang] [region=us]`
    * Shows the raid progression for the provided character name, optional realm and region
    
**Note:** realm defaults to saurfang and region defaults to us.

## License

The MIT License (MIT)

Copyright (c)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Source: http://opensource.org/licenses/MIT
