[
    {
        "name": "Heartseeker",
        "type": "Physical",
        "cost": 2300,
        "passive": "PASSIVE - Every successful Basic Attack gives you 1 stack of Focus. At 5 stacks of Focus, your next Ability consumes the stacks and deals bonus Damage equal to 100% of your Physical Power to the first Enemy God hit.",
        "physicalPower": 30,
        "movementSpeed": 10,
        "physicalPenetration": 10,
        "tier": 3,
        "icon": "images/smite/items/heartseeker.jpg"
    },
    {
        "name": "Titan's Bane",
        "type": "Physical",
        "cost": 2300,
        "passive": "PASSIVE - Your Physical Damage ignores 15% of enemy gods' Physical Protection. If the god has over 65 Physical Protections, this effect scales up to ignore a larger percentage of their protection. This caps at 40% Physical Penetration at 175 or more Physical Protection.",
        "physicalPower": 30,
        "physicalPenetrationPercent": 15,
        "tier": 3,
        "icon": "images/smite/items/titan's bane.jpg"
    },
    {
        "name": "Ninja Tabi",
        "type": "Physical",
        "cost": 1550,
        "passive": "",
        "physicalPower": 20,
        "attackSpeed": 20,
        "movementSpeed": 18,
        "mana": 100,
        "shoes": true,
        "tier": 3,
        "icon": "images/smite/items/ninja tabi.jpg"
    },
    {
        "name": "Warrior Tabi",
        "type": "Physical",
        "cost": 1600,
        "passive": "",
        "physicalPower": 40,
        "movementSpeed": 18,
        "shoes": true,
        "tier": 3,
        "icon": "images/smite/items/warrior tabi.jpg"
    },
    {
        "name": "Devourer's Gauntlet",
        "type": "Physical",
        "cost": 2300,
        "passive": "PASSIVE - You permanently gain +.4 Physical Power and +.20% Physical Lifesteal per Stack, and receive 5 Stacks per god kill and 1 Stack per minion kill.",
        "physicalPower": 30,
        "physicalLifesteal": 10,
        "stacks": {
            "current": 70,
            "max": 70,
            "stacks": [
                {
                    "physicalPower": 0.5
                },
                {
                    "physicalLifesteal": 0.2
                }
            ],
            "type": "permanent"
        },
        "tier": 3,
        "icon": "images/smite/items/devourer's gauntlet.jpg"
    },
    {
        "name": "The Executioner",
        "type": "Physical",
        "cost": 2250,
        "passive": "PASSIVE - Basic attacks against an enemy reduce your target's Physical Protection by 12% for 3 seconds (max 3 stacks).",
        "physicalPower": 30,
        "attackSpeed": 25,
        "tier": 3,
        "icon": "images/smite/items/the executioner.jpg"
    },
    {
        "name": "Shield of Regrowth",
        "type": "Physical",
        "cost": 2100,
        "passive": "PASSIVE - After healing yourself from an ability, you gain +40% movement speed for 4 seconds. This cannot occur more than once every 10 seconds.",
        "hpFive": 10,
        "mpFive": 10,
        "cooldownReduction": 10,
        "health": 300,
        "tier": 3,
        "icon": "images/smite/items/shield of regrowth.jpg"
    },
    {
        "name": "Shield of Regrowth",
        "type": "Magical",
        "cost": 2100,
        "passive": "PASSIVE - After healing yourself from an ability, you gain +40% movement speed for 4 seconds. This cannot occur more than once every 10 seconds.",
        "hpFive": 10,
        "mpFive": 10,
        "cooldownReduction": 10,
        "health": 300,
        "tier": 3,
        "icon": "images/smite/items/shield of regrowth.jpg"
    },
    {
        "name": "Gladiator's Shield",
        "type": "Physical",
        "cost": 1800,
        "passive": "Passive - Anytime you hit an Enemy god with an ability you are healed for 2.5% of your maximum Health and Mana. This can only trigger once per ability.",
        "physicalPower": 20,
        "cooldownReduction": 10,
        "physicalProtection": 30,
        "tier": 3,
        "icon": "images/smite/items/gladiator's shield.jpg"
    },
    {
        "name": "Frostbound Hammer",
        "type": "Physical",
        "cost": 2300,
        "passive": "PASSIVE - Enemies hit by your basic attacks will move 30% slower and their attack speed slowed by 15% for 2 seconds.",
        "physicalPower": 25,
        "health": 300,
        "tier": 3,
        "icon": "images/smite/items/frostbound hammer.jpg"
    },
    {
        "name": "Ancile",
        "type": "Physical",
        "cost": 2000,
        "passive": "PASSIVE - Whenever you take Magical Damage from an enemy ability you unleash a shockwave that Silences all enemies within a range of 20 units for 1s. This effect cannot trigger more than once every 30s.",
        "physicalPower": 40,
        "magicalProtection": 50,
        "cooldownReduction": 10,
        "tier": 3,
        "icon": "images/smite/items/ancile.jpg"
    },
    {
        "name": "Brawler's Beat Stick",
        "type": "Physical",
        "cost": 2350,
        "passive": "PASSIVE - Enemies hit by your abilities have 40% reduced healing and regeneration for 8 seconds.",
        "physicalPower": 40,
        "physicalPenetration": 15,
        "tier": 3,
        "icon": "images/smite/items/brawler's beat stick.jpg"
    },
    {
        "name": "Runic Shield",
        "type": "Physical",
        "cost": 2150,
        "passive": "AURA - All enemies within range 55 have their Magical Power reduced by 50.",
        "physicalPower": 35,
        "magicalProtection": 50,
        "health": 100,
        "tier": 3,
        "icon": "images/smite/items/runic shield.jpg"
    },
    {
        "name": "Jotunn's Wrath",
        "type": "Physical",
        "cost": 2350,
        "passive": "PASSIVE - Your ability cooldowns are reduced by 20%.",
        "physicalPower": 40,
        "mana": 150,
        "cooldownReduction": 20,
        "physicalPenetration": 10,
        "tier": 3,
        "icon": "images/smite/items/jotunn's wrath.jpg"
    },
    {
        "name": "Qin's Sais",
        "type": "Physical",
        "cost": 2700,
        "passive": "PASSIVE - On Basic Attack hits, deal Physical Damage equal to 3% of the target’s maximum Health. If the target has over 2000 health, your basic attack bonus damage scales up. Capping at 5% max health on 2750 hp targets. This only affects gods.",
        "physicalPower": 40,
        "attackSpeed": 15,
        "maxHealthDamage": 3,
        "tier": 3,
        "icon": "images/smite/items/qin's sais.jpg"
    },
    {
        "name": "Transcendence",
        "type": "Physical",
        "cost": 2700,
        "passive": "PASSIVE - You gain 15 mana per stack, and receive 5 stacks for a god kill and 1 stack for a minion kill (max. 50 stacks). In addition, 3% of your maximum mana is converted to physical power.",
        "physicalPower": 35,
        "mana": 300,
        "mpFive": 6,
        "cooldownReduction": 10,
        "stacks": {
            "current": 50,
            "max": 50,
            "stacks": [
                {
                    "mana": 15
                }
            ],
            "type": "permanent"
        },
        "manaToPhysicalPower": 0.03,
        "tier": 3,
        "icon": "images/smite/items/transcendence.jpg"
    },
    {
        "name": "Void Shield",
        "type": "Physical",
        "cost": 2600,
        "passive": "AURA - Reduces the Physical Protection of enemies within 55 feet by 20.",
        "physicalPower": 20,
        "physicalProtection": 50,
        "health": 150,
        "enemyInAura": {
            "toggle": true
        },
        "tier": 3,
        "icon": "images/smite/items/void shield.jpg"
    },
    {
        "name": "Shifter's Shield",
        "type": "Physical",
        "cost": 2400,
        "passive": "PASSIVE - While over 50% health, you gain +20 Physical Power. While under 50% health, you gain +20 protections.",
        "physicalPower": 35,
        "physicalProtection": 15,
        "healthDependentStats": {
            "toggle": true,
            "over": [
                {
                    "physicalPower": 35
                }
            ],
            "under": [
                {
                    "physicalProtection": 35
                },
                {
                    "magicalProtection": 35
                }
            ]
        },
        "tier": 3,
        "icon": "images/smite/items/shifter's shield.jpg"
    },
    {
        "name": "Bloodforge",
        "type": "Physical",
        "cost": 2800,
        "passive": "PASSIVE - Killing an enemy god forges a shield from their blood with health equal to 200 + 10 per Player Level for 20s. While the Blood Shield is active you gain +20% movement speed.",
        "physicalPower": 75,
        "physicalLifesteal": 15,
        "toggleStats": {
            "toggle": false,
            "movementSpeed": 10
        },
        "tier": 3,
        "icon": "images/smite/items/bloodforge.jpg"
    },
    {
        "name": "Rage",
        "type": "Physical",
        "cost": 2400,
        "passive": "PASSIVE - Killing or getting an assist on an enemy god gives you 1 stack. Each stack provides 1% Critical Strike Chance. Stacks are permanent and stack up to 5 times. At 5 Stacks you gain an additional 10% Critical Strike Chance.",
        "physicalPower": 30,
        "criticalChance": 30,
        "stacks": {
            "current": 5,
            "max": 5,
            "stacks": [
                {
                    "criticalChance": 1
                }
            ],
            "type": "permanent",
            "fullBonus": {
                "criticalChance": 0
            }
        },
        "tier": 3,
        "icon": "images/smite/items/rage.jpg"
    },
    {
        "name": "Hydra's Lament",
        "type": "Physical",
        "cost": 2150,
        "passive": "PASSIVE - Increases Mp5 by 2.5 per 10% of your missing Maximum Mana.",
        "physicalPower": 40,
        "cooldownReduction": 10,
        "tier": 3,
        "icon": "images/smite/items/hydra's lament.jpg"
    },
    {
        "name": "Malice",
        "type": "Physical",
        "cost": 3000,
        "passive": "PASSIVE - If you basic attack crits, you deal an additional +75% of your total power as physical damage over the next 3s. Additional crits refresh this effect.",
        "physicalPower": 50,
        "criticalChance": 20,
        "tier": 3,
        "icon": "images/smite/items/malice.jpg"
    },
    {
        "name": "Deathbringer",
        "type": "Physical",
        "cost": 3000,
        "passive": "PASSIVE - Critical strike damage is increased by 40%.",
        "physicalPower": 40,
        "criticalChance": 35,
        "criticalStrikeDamage": 25,
        "tier": 3,
        "icon": "images/smite/items/deathbringer.jpg"
    },
    {
        "name": "Asi",
        "type": "Physical",
        "cost": 1700,
        "passive": "PASSIVE - If you drop below 35% Health, you gain an additional 25% physical lifesteal for 5 seconds. Can only occur once every 15 seconds.",
        "attackSpeed": 20,
        "physicalLifesteal": 20,
        "physicalPenetration": 10,
        "autobuilder": true,
        "toggleStats": {
            "toggle": false,
            "physicalLifesteal": 25
        },
        "tier": 2,
        "icon": "images/smite/items/asi.jpg"
    },
    {
        "name": "Winged Blade",
        "type": "Physical",
        "cost": 1850,
        "passive": "PASSIVE - When hit by a slow, you are immune to slows and your movement speed is increased by 20% for 4s. Only occurs once every 30 seconds.",
        "health": 300,
        "movementSpeed": 10,
        "crowdControl": 20,
        "toggleStats": {
            "toggle": false,
            "movementSpeed": 20
        },
        "tier": 3,
        "icon": "images/smite/items/winged blade.jpg"
    },
    {
        "name": "Soul Eater",
        "type": "Physical",
        "cost": 2300,
        "passive": "PASSIVE - Each time anything dies near you, you gain a stack. Gods, Large Jungle monsters, and Jungle bosses provide 5 stacks. At 100 Stacks, Soul Eater Evolves, gaining +10 Physical Power and allowing your Physical abilities to heal you for 15% of the damage dealt.",
        "physicalPower": 40,
        "physicalLifesteal": 10,
        "mana": 200,
        "cooldownReduction": 10,
        "toggleStats": {
            "toggle": false,
            "physicalPower": 10
        },
        "tier": 3,
        "icon": "images/smite/items/soul eater.jpg"
    },
    {
        "name": "Hastened Katana",
        "type": "Physical",
        "cost": 2200,
        "passive": "PASSIVE - Hitting an Enemy God with a Basic Attack grants Haste for 1s, causing you to be Immune from Basic Attack Movement Penalty.",
        "attackSpeed": 25,
        "movementSpeed": 10,
        "physicalPower": 20,
        "tier": 3,
        "icon": "images/smite/items/hastened katana.jpg"
    },
    {
        "name": "Hastened Ring",
        "type": "Magical",
        "cost": 2300,
        "passive": "PASSIVE - Hitting an Enemy God with a Basic Attack grants Haste for 4s, causing you to be Immune from Basic Attack Movement Penalty for the duration. Internal Cooldown 25s.",
        "attackSpeed": 25,
        "movementSpeed": 7,
        "magicalPower": 50,
        "tier": 3,
        "icon": "images/smite/items/hastened ring.jpg"
    },
    {
        "name": "Atalanta's Bow",
        "type": "Physical",
        "cost": 2200,
        "passive": "PASSIVE - Hitting Basic Attacks increases your Movement Speed by 5% per Stack. Stacks up to 3 times, stacks last for 3s",
        "attackSpeed": 30,
        "physicalPower": 30,
        "tier": 3,
        "stacks": {
            "current": 0,
            "max": 3,
            "stacks": [
                {
                    "movementSpeed": 5
                }
            ],
            "type": "temporary"
        },
        "icon": "images/smite/items/atlanta's bow.jpg"
    },
    {
        "name": "Toxic Blade",
        "type": "Physical",
        "cost": 2200,
        "passive": "PASSIVE - Enemies hit by your Basic Attacks gain a stack of 20% reduced Healing. Stacking up to 2 times, stacks last for 8s",
        "health": 100,
        "movementSpeed": 10,
        "attackSpeed": 30,
        "physicalPenetration": 15,
        "tier": 3,
        "icon": "images/smite/items/toxic blade.jpg"
    },
    {
        "name": "Witchblade",
        "type": "Physical",
        "cost": 2050,
        "passive": "AURA - All enemies within 55 units have their Attack Speed reduced by 20%.",
        "attackSpeed": 20,
        "physicalLifesteal": 15,
        "health": 100,
        "movementSpeed": 10,
        "tier": 3,
        "icon": "images/smite/items/witchblade.jpg"
    },
    {
        "name": "Runeforged Hammer",
        "type": "Physical",
        "cost": 2300,
        "passive": "PASSIVE - Enemies take 10% Bonus damage from you if they are affected by Crowd Control. Does not include Knockbacks, Blinds, or Grabs.",
        "health": 250,
        "physicalPower": 40,
        "tier": 3,
        "icon": "images/smite/items/runeforged hammer.jpg"
    },
    {
        "name": "Shillelagh",
        "type": "Physical",
        "cost": 2300,
        "passive": "",
        "health": 200,
        "physicalPower": 10,
        "mana": 100,
        "tier": 2,
        "icon": "images/smite/items/shillelagh.jpg"
    },
    {
        "name": "Blackthorn Hammer",
        "type": "Physical",
        "cost": 2200,
        "passive": "PASSIVE - While over 50% Mana, you gain +10% Cooldown Reduction. While under 50% Mana, you gain +50 MP5.",
        "health": 450,
        "physicalPower": 25,
        "mana": 200,
        "toggleStats": {
            "toggle": true,
            "cooldownReduction": 10
        },
        "tier": 3,
        "icon": "images/smite/items/blackthorn hammer.jpg"
    },
    {
        "name": "Magi's Cloak",
        "type": "Physical",
        "cost": 2150,
        "passive": "PASSIVE - Absorbs a single hard crowd control effect once every 70 seconds. When this occurs, the owner also receives 1s of cc immunity.",
        "health": 300,
        "magicalProtection": 15,
        "physicalProtection": 15,
        "tier": 3,
        "icon": "images/smite/items/magi's blessing.jpg"
    },
    {
        "name": "Reinforced Greaves",
        "type": "Physical",
        "cost": 1550,
        "passive": "PASSIVE - Every time you are damaged by a god you gain a stack that provides 5 Physical and Magical Protections. Stacks up to 5 times, Lasts 6s",
        "physicalPower": 10,
        "health": 100,
        "movementSpeed": 18,
        "crowdControl": 20,
        "stacks": {
            "current": 0,
            "max": 7,
            "stacks": [
                {
                    "physicalProtection": 3,
                    "magicalProtection": 3
                }
            ],
            "type": "temporary"
        },
        "shoes": true,
        "tier": 3,
        "icon": "images/smite/items/reinforced greaves.jpg"
    },
    {
        "name": "Hide of the Nemean Lion",
        "type": "Physical",
        "cost": 2200,
        "passive": "PASSIVE - Reflects 25% of all basic attack damage back to the attacker as physical damage.",
        "physicalProtection": 70,
        "mana": 200,
        "mpFive": 20,
        "tier": 3,
        "icon": "images/smite/items/hide of the nemean lion.jpg"
    },
    {
        "name": "Midgardian Mail",
        "type": "Physical",
        "cost": 2300,
        "passive": "PASSIVE - When hit by a basic attack, there is a 30% chance to slow your enemy's movement and attack speeds by 30% for 2 seconds.",
        "health": 300,
        "physicalProtection": 40,
        "tier": 3,
        "icon": "images/smite/items/midgardian mail.jpg"
    },
    {
        "name": "Breastplate of Valor",
        "type": "Physical",
        "cost": 2300,
        "passive": "PASSIVE - Your ability cooldowns are reduced by 25%.",
        "mana": 300,
        "cooldownReduction": 20,
        "physicalProtection": 75,
        "tier": 3,
        "icon": "images/smite/items/breastplate of valor.jpg"
    },
    {
        "name": "Mail of Renewal",
        "type": "Physical",
        "cost": 2350,
        "passive": "PASSIVE - You gain 15% of your maximum Health and Mana over the next 5 seconds when you get a kill or assist against an enemy god or Objective.",
        "health": 400,
        "cooldownReduction": 10,
        "hpFive": 10,
        "tier": 3,
        "icon": "images/smite/items/mail of renewal.jpg"
    },
    {
        "name": "Spirit Robe",
        "type": "Physical",
        "cost": 2500,
        "passive": "PASSIVE - You gain an additional 15% damage mitigation for 3s whenever you are hit with a hard crowd control ability. This can only occur once every 10 seconds.",
        "magicalProtection": 40,
        "cooldownReduction": 10,
        "physicalProtection": 40,
        "crowdControl": 20,
        "tier": 3,
        "icon": "images/smite/items/spirit robe.jpg"
    },
    {
        "name": "Hide of the Urchin",
        "type": "Physical",
        "cost": 2450,
        "passive": "PASSIVE - You gain +3 protections for each god kill or assist (max 10 stacks).",
        "health": 250,
        "magicalProtection": 30,
        "mana": 250,
        "physicalProtection": 30,
        "stacks": {
            "current": 10,
            "max": 10,
            "stacks": [
                {
                    "physicalProtection": 3
                },
                {
                    "magicalProtection": 3
                }
            ],
            "type": "permanent"
        },
        "tier": 3,
        "icon": "images/smite/items/hide of the urchin.jpg"
    },
    {
        "name": "Sovereignty",
        "type": "Physical",
        "cost": 2100,
        "passive": "AURA - All allies within 70 units gain +30 Physical Protections and +25 HP5.",
        "health": 250,
        "physicalProtection": 45,
        "tier": 3,
        "icon": "images/smite/items/sovereignty.jpg"
    },
    {
        "name": "Mystical Mail",
        "type": "Physical",
        "cost": 2700,
        "passive": "AURA - Deals 40 magical damage per second to enemies within 25 feet.",
        "health": 300,
        "physicalProtection": 40,
        "tier": 3,
        "icon": "images/smite/items/mystical mail.jpg"
    },
    {
        "name": "Pestilence",
        "type": "Physical",
        "cost": 2250,
        "passive": "AURA - The healing and regeneration of enemies within 55 units is reduced by 25%.",
        "health": 200,
        "magicalProtection": 80,
        "tier": 3,
        "icon": "images/smite/items/pestilence.jpg"
    },
    {
        "name": "Stone of Gaia",
        "type": "Physical",
        "cost": 2250,
        "passive": "PASSIVE - If you are hit by a Knockup, Knockback, Pull, or Grab you are instead enveloped by the Earth, becoming CC immune for 1s. Can only occur once every 90s. PASSIVE - Regenerates 3% of your max health every 5 seconds.",
        "health": 400,
        "hpFive": 25,
        "mpFive": 15,
        "hpFiveFromPercentMaxHealth": 0.03,
        "tier": 3,
        "icon": "images/smite/items/stone of gaia.jpg"
    },
    {
        "name": "Divine Ruin",
        "type": "Magical",
        "cost": 2300,
        "passive": "PASSIVE - Enemies hit by your abilities have 40% reduced healing and regeneration for 8 seconds.",
        "magicalPower": 80,
        "magicalPenetration": 15,
        "tier": 3,
        "icon": "images/smite/items/divine ruin.jpg"
    },
    {
        "name": "Shoes of Focus",
        "type": "Magical",
        "cost": 1550,
        "passive": "PASSIVE - You gain +15% Cooldown Reduction.",
        "movementSpeed": 18,
        "cooldownReduction": 10,
        "magicalPower": 55,
        "mana": 250,
        "shoes": true,
        "tier": 3,
        "icon": "images/smite/items/shoes of focus.jpg"
    },
    {
        "name": "Doom Orb",
        "type": "Magical",
        "cost": 1700,
        "passive": "PASSIVE - Killing or assisting an enemy minion provides you with 1 stack, granting 1% Movement Speed and 3 Magical Power per stack. Stacks last for 15s and stack up to 5 times. Enemy gods provide 5 stacks.",
        "mana": 200,
        "mpFive": 20,
        "magicalPower": 70,
        "stacks": {
            "current": 0,
            "max": 5,
            "stacks": [
                {
                    "magicalPower": 3,
                    "movementSpeed": 1
                }
            ],
            "type": "temporary"
        },
        "tier": 2,
        "autobuilder": true,
        "icon": "images/smite/items/doom orb.jpg"
    },
    {
        "name": "Shoes of the Magi",
        "type": "Magical",
        "cost": 1600,
        "passive": "+10 Magical Penetration",
        "movementSpeed": 18,
        "magicalPower": 55,
        "magicalPenetration": 10,
        "shoes": true,
        "tier": 3,
        "icon": "images/smite/items/shoes of the magi.jpg"
    },
    {
        "name": "Obsidian Shard",
        "type": "Magical",
        "cost": 2150,
        "passive": "PASSIVE - Your Magic Damage ignores 15% of the target's Magic Protection. If the target has over 40 Magical Protections, this effect scales up to ignore a larger percentage of their protections. This caps at 45% Magical Penetration at 175 or more Magical Protection.",
        "magicalPower": 60,
        "magicalPenetrationPercent": 15,
        "tier": 3,
        "icon": "images/smite/items/obsidian shard.jpg"
    },
    {
        "name": "Telkhines Ring",
        "type": "Magical",
        "cost": 2700,
        "passive": "Passive - Your Basic Attacks deal bonus damage equal to 10 + 10% of your Magical Power. This effect does not hit structures.",
        "movementSpeed": 10,
        "magicalPower": 90,
        "attackSpeed": 20,
        "tier": 3,
        "icon": "images/smite/items/telkhines ring.jpg"
    },
    {
        "name": "Shaman's Ring",
        "type": "Magical",
        "cost": 2400,
        "passive": "Passive - Dealing 100 Damage to Enemy Gods gives you a Stack. At 50 Stacks, Shaman’s Ring Evolves, gaining a new Passive that allows the wearer to deal an additional 10% Damage to targets hit by the wearer’s Abilities",
        "movementSpeed": 10,
        "magicalPower": 100,
        "tier": 3,
        "icon": "images/smite/items/shaman's ring.jpg"
    },
    {
        "name": "Spear of the Magus",
        "type": "Magical",
        "cost": 2300,
        "passive": "PASSIVE - Enemies hit by your damaging abilities have their magical protection reduced by 10 for 5 seconds (maximum 5 stacks).",
        "magicalPower": 65,
        "magicalPenetration": 15,
        "tier": 3,
        "icon": "images/smite/items/spear of the magus.jpg"
    },
    {
        "name": "Demonic Grip",
        "type": "Magical",
        "cost": 2150,
        "passive": "PASSIVE - our Basic Attacks reduce your target's Magical Protection by 12% for 3s. (max 3 stacks).",
        "attackSpeed": 30,
        "magicalPower": 65,
        "tier": 3,
        "icon": "images/smite/items/demonic grip.jpg"
    },
    {
        "name": "Polynomicon",
        "type": "Magical",
        "cost": 2300,
        "passive": "PASSIVE - Using an ability gives your next basic attack within the next 8 seconds +75% of your magical power as additional magical damage. The effect can only apply once every 3 seconds.",
        "mana": 300,
        "magicalPower": 75,
        "magicalLifesteal": 12,
        "tier": 3,
        "icon": "images/smite/items/polynomicon.jpg"
    },
    {
        "name": "Void Stone",
        "type": "Magical",
        "cost": 2150,
        "passive": "AURA - Reduces the Magical Protection of enemies within 55 feet by 20.",
        "magicalProtection": 60,
        "magicalPower": 20,
        "health": 150,
        "tier": 3,
        "enemyInAura": {
            "toggle": true
        },
        "icon": "images/smite/items/void stone.jpg"
    },
    {
        "name": "Druid Stone",
        "type": "Magical",
        "cost": 600,
        "passive": "",
        "magicalProtection": 20,
        "magicalPower": 10,
        "tier": 1,
        "icon": "images/smite/items/druid stone.jpg"
    },
    {
        "name": "Stone of Binding",
        "type": "Magical",
        "cost": 1700,
        "passive": "PASSIVE - Successfully hitting an Enemy God with hard Crowd Control will place a buff on all allies within 70 units of user. The buff provides 15 Penetration for 5s.",
        "magicalProtection": 30,
        "physicalProtection": 30,
        "magicalPower": 20,
        "tier": 2,
        "icon": "images/smite/items/stone of binding.jpg"
    },
    {
        "name": "Sage's Stone",
        "type": "Magical",
        "cost": 1400,
        "passive": "",
        "physicalProtection": 20,
        "magicalPower": 40,
        "tier": 2,
        "icon": "images/smite/items/sage's stone.jpg"
    },
    {
        "name": "Stone of Fal",
        "type": "Magical",
        "cost": 2300,
        "passive": "PASSIVE - Anytime you would be dealt more than 30% of your Max Health by a single Magical ability, that damage is instead reduced to deal exactly 30% of your max Health. This effect can only occur once every 60s.",
        "magicalProtection": 40,
        "magicalPower": 70,
        "cooldownReduction": 10,
        "tier": 3,
        "icon": "images/smite/items/stone of fal.jpg"
    },
    {
        "name": "Bancroft's Talon",
        "type": "Magical",
        "cost": 2500,
        "passive": "PASSIVE - You gain additional Magical Power and Lifesteal scaled from missing Health. This caps at 100 power and 20% Lifesteal at 25% Health.",
        "magicalPower": 100,
        "magicalLifesteal": 15,
        "mana": 150,
        "tier": 3,
        "icon": "images/smite/items/bancroft's talon.jpg"
    },
    {
        "name": "Book of the Dead",
        "type": "Magical",
        "cost": 2600,
        "passive": "PASSIVE - If you drop below 40% Health, you gain a shield equal to 20% of your total Mana. The shield lasts 6s. This effect can only occur once every 90s.",
        "magicalPower": 100,
        "mana": 200,
        "tier": 3,
        "icon": "images/smite/items/book of the dead.jpg"
    },
    {
        "name": "Chronos' Pendant",
        "type": "Magical",
        "cost": 2800,
        "passive": "PASSIVE - Every 10s the Pendant activates, subtracting 1s from all of your abilities currently on Cooldown. The initial countdown will not start until you leave the fountain.",
        "mpFive": 20,
        "cooldownReduction": 20,
        "magicalPower": 90,
        "tier": 3,
        "icon": "images/smite/items/chronos' pendant.jpg"
    },
    {
        "name": "Pythagorem's Piece",
        "type": "Magical",
        "cost": 2300,
        "passive": "AURA - Adds 12% Magical Lifesteal and 30 Magical Power or 10% Physical Lifesteal and 20 Physical Power to all allies within 70 units.",
        "magicalPower": 40,
        "magicalLifesteal": 12,
        "cooldownReduction": 10,
        "health": 200,
        "tier": 3,
        "icon": "images/smite/items/pythagorem's piece.jpg"
    },
    {
        "name": "Warlock's Staff",
        "type": "Magical",
        "cost": 2650,
        "passive": "PASSIVE - You permanently gain +3 Health and +.6 Magical Power per Stack, and receive 5 Stacks for a god kill and 1 Stack per minion kill. (Max. 100 Stacks)",
        "health": 200,
        "mana": 200,
        "magicalPower": 75,
        "stacks": {
            "current": 100,
            "max": 100,
            "stacks": [
                {
                    "health": 3
                },
                {
                    "magicalPower": 0.6
                }
            ],
            "type": "permanent"
        },
        "tier": 3,
        "icon": "images/smite/items/warlock's staff.jpg"
    },
    {
        "name": "Fortified Scepter",
        "type": "Magical",
        "cost": 1350,
        "passive": "",
        "health": 150,
        "magicalPower": 50,
        "crowdControl": 5,
        "tier": 2,
        "icon": "images/smite/items/fortified scepter.jpg"
    },
    {
        "name": "Rod of Asclepius",
        "type": "Magical",
        "cost": 2600,
        "passive": "AURA - The Healing of allies within 70 units is increased by 15%. If you are in combat, Healing of allies within 70 units is increased by an additional 20%",
        "health": 200,
        "movementSpeed": 7,
        "magicalPower": 90,
        "tier": 3,
        "icon": "images/smite/items/rod of asclepius.jpg"
    },
    {
        "name": "Ethereal Staff",
        "type": "Magical",
        "cost": 2700,
        "passive": "PASSIVE – Whenever you damage an enemy god you steal 8% maximum mana as well as 4% maximum health from the target. The Stats remain stolen for 45s and targets affected can have multiple Buffs and Debuffs at once. This can only occur once every 15 seconds.",
        "health": 200,
        "magicalPower": 90,
        "crowdControl": 20,
        "tier": 3,
        "icon": "images/smite/items/ethereal staff.jpg"
    },
    {
        "name": "Gem of Isolation",
        "type": "Magical",
        "cost": 2700,
        "passive": "PASSIVE - Enemies hit by your damaging abilities will move 25% slower for 2 seconds.",
        "health": 200,
        "magicalPower": 90,
        "crowdControl": 10,
        "tier": 3,
        "icon": "images/smite/items/gem of isolation.jpg"
    },
    {
        "name": "Book of Thoth",
        "type": "Magical",
        "cost": 2800,
        "passive": "PASSIVE - You permanently gain 10 mana per stack, and receive 5 stacks for a god kill and 1 stack for a minion kill (max 75 stacks). Additionally, 5% of your mana is converted to magical power.",
        "mana": 250,
        "mpFive": 15,
        "magicalPower": 80,
        "stacks": {
            "current": 75,
            "max": 75,
            "stacks": [
                {
                    "mana": 10
                }
            ],
            "type": "permanent"
        },
        "manaToMagicalPower": 0.03,
        "tier": 3,
        "icon": "images/smite/items/book of thoth.jpg"
    },
    {
        "name": "Soul Reaver",
        "type": "Magical",
        "cost": 2750,
        "passive": "PASSIVE – Your abilities deal an additional 2% of the targets maximum Health as Magical Damage. If the target has over 2000 Health, your ability bonus damage scales up. This effect reaches a maximum of 8% Maximum Health damage at 2750 Health.",
        "mana": 300,
        "magicalPower": 130,
        "tier": 3,
        "toggleStats": {
            "toggle": true,
            "maxHealthTrueDamage": 8
        },
        "icon": "images/smite/items/soul reaver.jpg"
    },
    {
        "name": "Soul Gem",
        "type": "Magical",
        "cost": 2750,
        "passive": "PASSIVE - Hitting an enemy with an Ability or Basic Attack gives you 1 Stack. At 5 Stacks your next Ability will deal bonus damage equal to 30% of your Magical power, and will heal yourself and allies within 20 units for 25% of your Magical Power and will consume the 5 stacks.",
        "magicalPower": 65,
        "health": 150,
        "magicalLifesteal": 12,
        "cooldownReduction": 10,
        "tier": 3,
        "icon": "images/smite/items/soul gem.jpg"
    },
    {
        "name": "Typhon's Fang",
        "type": "Magical",
        "cost": 2800,
        "passive": "PASSIVE - Your Healing obtained from Magical Lifesteal is increased by 50%. Your Magical power is increased by the amount of Magical Lifesteal you have.",
        "magicalPower": 80,
        "mana": 200,
        "magicalLifesteal": 15,
        "tier": 3,
        "icon": "images/smite/items/typhon's fang.jpg"
    },
    {
        "name": "Rod of Tahuti",
        "type": "Magical",
        "cost": 3000,
        "passive": "PASSIVE - Increases magical power by 25%.",
        "mpFive": 30,
        "magicalPower": 150,
        "magicalPowerPercentage": 0.25,
        "notShown": "Rod of Tahuti actually gives extra basic attack damage even though the item description does not say so.",
        "tier": 3,
        "icon": "images/smite/items/rod of tahuti.jpg"
    },
    {
        "name": "Winged Blade",
        "type": "Magical",
        "cost": 1850,
        "passive": "PASSIVE - When hit by a slow, you are immune to slows and your movement speed is increased by 20% for 4s. Only occurs once every 30 seconds.",
        "health": 300,
        "movementSpeed": 10,
        "crowdControl": 20,
        "toggleStats": {
            "toggle": false,
            "movementSpeed": 20
        },
        "tier": 3,
        "icon": "images/smite/items/winged blade.jpg"
    },
    {
        "name": "Witchblade",
        "type": "Magical",
        "cost": 2050,
        "passive": "AURA - All enemies within 55 feet have their attack speed reduced by 20% ",
        "attackSpeed": 20,
        "health": 100,
        "movementSpeed": 10,
        "cooldownReduction": 10,
        "tier": 3,
        "icon": "images/smite/items/witchblade.jpg"
    },
    {
        "name": "Magi's Cloak",
        "type": "Magical",
        "cost": 2150,
        "passive": "PASSIVE - Absorbs a single hard crowd control effect once every 70 seconds. When this occurs, the owner also receives 1s of cc immunity.",
        "health": 300,
        "magicalProtection": 15,
        "physicalProtection": 15,
        "tier": 3,
        "icon": "images/smite/items/magi's blessing.jpg"
    },
    {
        "name": "Reinforced Shoes",
        "type": "Magical",
        "cost": 2140,
        "passive": "PASSIVE - Resolve - Every time you are damaged by a god you gain a stack that provides 5 Physical and Magical Protections. Stacks up to 5 times, Lasts 6s",
        "health": 100,
        "movementSpeed": 18,
        "magicalPower": 20,
        "crowdControl": 20,
        "stacks": {
            "current": 0,
            "max": 7,
            "stacks": [
                {
                    "physicalProtection": 3,
                    "magicalProtection": 3
                }
            ],
            "type": "temporary"
        },
        "shoes": true,
        "tier": 3,
        "icon": "images/smite/items/reinforced shoes.jpg"
    },
    {
        "name": "Hide of the Nemean Lion",
        "type": "Magical",
        "cost": 2200,
        "passive": "PASSIVE - Reflects 20% of all basic attack damage back to the attacker as physical damage.",
        "physicalProtection": 70,
        "mana": 200,
        "tier": 3,
        "icon": "images/smite/items/hide of the nemean lion.jpg"
    },
    {
        "name": "Midgardian Mail",
        "type": "Magical",
        "cost": 2250,
        "passive": "PASSIVE - When hit by a basic attack, there is a 30% chance to slow your enemy's movement and attack speeds by 30% for 2 seconds.",
        "health": 350,
        "physicalProtection": 40,
        "tier": 3,
        "icon": "images/smite/items/midgardian mail.jpg"
    },
    {
        "name": "Breastplate of Valor",
        "type": "Magical",
        "cost": 2300,
        "passive": "PASSIVE - Your ability cooldowns are reduced by 25%.",
        "mana": 300,
        "cooldownReduction": 20,
        "physicalProtection": 65,
        "mpFive": 10,
        "tier": 3,
        "icon": "images/smite/items/breastplate of valor.jpg"
    },
    {
        "name": "Mail of Renewal",
        "type": "Magical",
        "cost": 2350,
        "passive": "PASSIVE - You gain 15% of your maximum Health and Mana over the next 5 seconds when you get a kill or assist against an enemy god or Objective.",
        "health": 400,
        "cooldownReduction": 10,
        "hpFive": 10,
        "tier": 3,
        "icon": "images/smite/items/mail of renewal.jpg"
    },
    {
        "name": "Spirit Robe",
        "type": "Magical",
        "cost": 2460,
        "passive": "PASSIVE - You gain an additional 15% damage mitigation for 3s whenever you are hit with a hard crowd control ability. This can only occur once every 10 seconds.",
        "magicalProtection": 40,
        "cooldownReduction": 10,
        "physicalProtection": 40,
        "crowdControl": 20,
        "tier": 3,
        "icon": "images/smite/items/spirit robe.jpg"
    },
    {
        "name": "Hide of the Urchin",
        "type": "Magical",
        "cost": 2450,
        "passive": "PASSIVE - You gain +3 protections for each god kill or assist (max 10 stacks).",
        "health": 250,
        "magicalProtection": 30,
        "mana": 250,
        "physicalProtection": 30,
        "stacks": {
            "current": 10,
            "max": 10,
            "stacks": [
                {
                    "physicalProtection": 3
                },
                {
                    "magicalProtection": 3
                }
            ],
            "type": "permanent"
        },
        "tier": 3,
        "icon": "images/smite/items/hide of the urchin.jpg"
    },
    {
        "name": "Sovereignty",
        "type": "Magical",
        "cost": 2100,
        "passive": "AURA - All allies within 70 units gain +30 Physical Protections and +25 HP5.",
        "health": 250,
        "physicalProtection": 45,
        "tier": 3,
        "icon": "images/smite/items/sovereignty.jpg"
    },
    {
        "name": "Mystical Mail",
        "type": "Magical",
        "cost": 2700,
        "passive": "AURA - Deals 40 magical damage per second to enemies within 25 feet.",
        "health": 300,
        "physicalProtection": 40,
        "tier": 3,
        "icon": "images/smite/items/mystical mail.jpg"
    },
    {
        "name": "Pestilence",
        "type": "Magical",
        "cost": 2250,
        "passive": "AURA - The healing and regeneration of enemies within 55 units is reduced by 25%.",
        "health": 200,
        "magicalProtection": 80,
        "tier": 3,
        "icon": "images/smite/items/pestilence.jpg"
    },
    {
        "name": "Stone of Gaia",
        "type": "Magical",
        "cost": 2250,
        "passive": "PASSIVE - If you are hit by a Knockup, Knockback, Pull, or Grab you are instead enveloped by the Earth, becoming CC immune for 1s. Can only occur once every 90s. PASSIVE - Regenerates 2% of your max health every 5 seconds.",
        "health": 400,
        "hpFive": 25,
        "mpFive": 15,
        "hpFiveFromPercentMaxHealth": 0.03,
        "tier": 3,
        "icon": "images/smite/items/stone of gaia.jpg"
    },
    {
        "name": "Morningstar",
        "type": "Physical",
        "cost": 550,
        "passive": "",
        "physicalPower": 10,
        "tier": 1,
        "icon": "images/smite/items/morningstar.jpg"
    },
    {
        "name": "Mace",
        "type": "Physical",
        "cost": 700,
        "passive": "",
        "physicalPower": 15,
        "tier": 1,
        "icon": "images/smite/items/mace.jpg"
    },
    {
        "name": "Warrior's Bane",
        "type": "Physical",
        "cost": 1500,
        "passive": "PASSIVE - All of your physical attacks gain 22% Physical Penetration.",
        "physicalPower": 20,
        "physicalPenetrationPercent": 15,
        "tier": 2,
        "icon": "images/smite/items/warrior's bane.jpg"
    },
    {
        "name": "Boots",
        "type": "Physical",
        "cost": 500,
        "passive": "",
        "movementSpeed": 6,
        "shoes": true,
        "tier": 1,
        "icon": "images/smite/items/boots.jpg"
    },
    {
        "name": "Combat Boots",
        "type": "Physical",
        "cost": 900,
        "passive": "",
        "physicalPower": 10,
        "movementSpeed": 12,
        "shoes": true,
        "tier": 2,
        "icon": "images/smite/items/combat boots.jpg"
    },
    {
        "name": "Spiked Gauntlet",
        "type": "Physical",
        "cost": 600,
        "passive": "",
        "physicalLifesteal": 7,
        "tier": 1,
        "icon": "images/smite/items/spiked gauntlet.jpg"
    },
    {
        "name": "Cursed Gauntlet",
        "type": "Physical",
        "cost": 1400,
        "passive": "",
        "physicalPower": 20,
        "physicalLifesteal": 10,
        "tier": 2,
        "icon": "images/smite/items/cursed gauntlet.jpg"
    },
    {
        "name": "Light Blade",
        "type": "Physical",
        "cost": 600,
        "passive": "",
        "attackSpeed": 15,
        "tier": 1,
        "icon": "images/smite/items/light blade.jpg"
    },
    {
        "name": "Balanced Blade",
        "type": "Physical",
        "cost": 1250,
        "passive": "",
        "physicalPower": 15,
        "attackSpeed": 15,
        "tier": 2,
        "icon": "images/smite/items/balanced blade.jpg"
    },
    {
        "name": "Enchanted Buckler",
        "type": "Physical",
        "cost": 650,
        "passive": "",
        "physicalPower": 10,
        "magicalProtection": 10,
        "tier": 1,
        "icon": "images/smite/items/enchanted buckler.jpg"
    },
    {
        "name": "Warded Shield",
        "type": "Physical",
        "cost": 1450,
        "passive": "",
        "physicalPower": 15,
        "magicalProtection": 35,
        "tier": 2,
        "icon": "images/smite/items/warded shield.jpg"
    },
    {
        "name": "Cudgel",
        "type": "Physical",
        "cost": 650,
        "passive": "",
        "health": 100,
        "physicalPower": 5,
        "tier": 1,
        "icon": "images/smite/items/cudgel.jpg"
    },
    {
        "name": "Heavy Hammer",
        "type": "Physical",
        "cost": 1350,
        "passive": "",
        "physicalPower": 20,
        "health": 150,
        "tier": 2,
        "icon": "images/smite/items/heavy hammer.jpg"
    },
    {
        "name": "Heavy Mace",
        "type": "Physical",
        "cost": 1550,
        "passive": "",
        "physicalPower": 25,
        "physicalPenetration": 10,
        "tier": 2,
        "icon": "images/smite/items/heavy mace.jpg"
    },
    {
        "name": "Hidden Dagger",
        "type": "Physical",
        "cost": 700,
        "passive": "",
        "physicalPower": 10,
        "criticalChance": 5,
        "tier": 1,
        "icon": "images/smite/items/hidden dagger.jpg"
    },
    {
        "name": "Charged Morningstar",
        "type": "Physical",
        "cost": 1200,
        "passive": "",
        "physicalPower": 20,
        "mana": 150,
        "mpFive": 4,
        "tier": 1,
        "icon": "images/smite/items/charged morningstar.jpg"
    },
    {
        "name": "Round Shield",
        "type": "Physical",
        "cost": 650,
        "passive": "",
        "physicalPower": 10,
        "physicalProtection": 5,
        "tier": 2,
        "icon": "images/smite/items/round shield.jpg"
    },
    {
        "name": "Spiked Shield",
        "type": "Physical",
        "cost": 1600,
        "passive": "PASSIVE - Reduces the Physical Protection of enemies within 55 feet by 8.",
        "physicalPower": 20,
        "physicalProtection": 30,
        "tier": 2,
        "icon": "images/smite/items/spiked shield.jpg"
    },
    {
        "name": "Tower Shield",
        "type": "Physical",
        "cost": 1200,
        "passive": "",
        "physicalPower": 20,
        "physicalProtection": 20,
        "tier": 2,
        "icon": "images/smite/items/tower shield.jpg"
    },
    {
        "name": "Short Sword",
        "type": "Physical",
        "cost": 1500,
        "passive": "",
        "physicalPower": 20,
        "criticalChance": 10,
        "tier": 2,
        "icon": "images/smite/items/short sword.jpg"
    },
    {
        "name": "Hydra's Star",
        "type": "Physical",
        "cost": 1200,
        "passive": "PASSIVE - For 8s after using an ability, your next basic attack will deal +10% of your total physical power as physical damage. The effect can only apply once every 3 seconds.",
        "physicalPower": 20,
        "cooldownReduction": 5,
        "tier": 2,
        "icon": "images/smite/items/hydra's star.jpg"
    },
    {
        "name": "Ancient Blade",
        "type": "Physical",
        "cost": 550,
        "passive": "",
        "health": 50,
        "attackSpeed": 5,
        "movementSpeed": 4,
        "tier": 1,
        "icon": "images/smite/items/ancient blade.jpg"
    },
    {
        "name": "Adventurer's Blade",
        "type": "Physical",
        "cost": 1150,
        "passive": "",
        "health": 100,
        "movementSpeed": 10,
        "tier": 2,
        "icon": "images/smite/items/adventurer's blade.jpg"
    },
    {
        "name": "Bound Gauntlet",
        "type": "Physical",
        "cost": 1050,
        "passive": "",
        "physicalPower": 15,
        "physicalLifesteal": 10,
        "mana": 75,
        "tier": 2,
        "icon": "images/smite/items/bound gauntlet.jpg"
    },
    {
        "name": "Fatalis",
        "type": "Physical",
        "cost": 1150,
        "passive": "",
        "attackSpeed": 15,
        "movementSpeed": 7,
        "tier": 2,
        "icon": "images/smite/items/fatalis.jpg"
    },
    {
        "name": "Tiny Trinket",
        "type": "Magical",
        "cost": 550,
        "passive": "",
        "magicalPower": 20,
        "magicalLifesteal": 6,
        "tier": 1,
        "icon": "images/smite/items/tiny trinket.jpg"
    },
    {
        "name": "Enchanted Trinket",
        "type": "Magical",
        "cost": 1100,
        "passive": "",
        "health": 100,
        "magicalPower": 30,
        "magicalLifesteal": 12,
        "tier": 2,
        "icon": "images/smite/items/enchanted trinket.jpg"
    },
    {
        "name": "Shoes",
        "type": "Magical",
        "cost": 500,
        "passive": "",
        "movementSpeed": 6,
        "shoes": true,
        "tier": 1,
        "icon": "images/smite/items/shoes.jpg"
    },
    {
        "name": "Magic Shoes",
        "type": "Magical",
        "cost": 900,
        "passive": "",
        "movementSpeed": 12,
        "magicalPower": 20,
        "shoes": true,
        "tier": 2,
        "icon": "images/smite/items/magic shoes.jpg"
    },
    {
        "name": "Lost Artifact",
        "type": "Magical",
        "cost": 550,
        "passive": "",
        "mpFive": 5,
        "magicalPower": 20,
        "tier": 1,
        "icon": "images/smite/items/lost artifact.jpg"
    },
    {
        "name": "Magic Focus",
        "type": "Magical",
        "cost": 650,
        "passive": "",
        "magicalPower": 25,
        "tier": 1,
        "icon": "images/smite/items/magic focus.jpg"
    },
    {
        "name": "Spell Focus",
        "type": "Magical",
        "cost": 1500,
        "passive": "PASSIVE - You gain +22% Magical Penetration.",
        "magicalPower": 45,
        "magicalPenetration": 15,
        "tier": 2,
        "icon": "images/smite/items/spell focus.jpg"
    },
    {
        "name": "Emerald Ring",
        "type": "Magical",
        "cost": 600,
        "passive": "",
        "movementSpeed": 3,
        "magicalPower": 20,
        "tier": 1,
        "icon": "images/smite/items/emerald ring.jpg"
    },
    {
        "name": "Enchanted Ring",
        "type": "Magical",
        "cost": 1200,
        "passive": "",
        "attackSpeed": 15,
        "magicalPower": 45,
        "movementSpeed": 5,
        "tier": 2,
        "icon": "images/smite/items/enchanted ring.jpg"
    },
    {
        "name": "Enchanted Spear",
        "type": "Magical",
        "cost": 1400,
        "passive": "",
        "magicalPower": 30,
        "magicalPenetration": 10,
        "tier": 2,
        "icon": "images/smite/items/enchanted spear.jpg"
    },
    {
        "name": "Ward Stone",
        "type": "Magical",
        "cost": 1350,
        "passive": "PASSIVE - Reduces the Magical Protection of enemies within 55 feet by 8.",
        "magicalProtection": 30,
        "magicalPower": 20,
        "health": 50,
        "tier": 2,
        "icon": "images/smite/items/ward stone.jpg"
    },
    {
        "name": "Talon Trinket",
        "type": "Magical",
        "cost": 1400,
        "passive": "",
        "magicalPower": 60,
        "magicalLifesteal": 8,
        "mana": 100,
        "tier": 2,
        "icon": "images/smite/items/talon trinket.jpg"
    },
    {
        "name": "Restored Artifact",
        "type": "Magical",
        "cost": 1600,
        "passive": "",
        "mpFive": 15,
        "magicalPower": 50,
        "tier": 2,
        "icon": "images/smite/items/restored artifact.jpg"
    },
    {
        "name": "Sash",
        "type": "Magical",
        "cost": 700,
        "passive": "",
        "health": 100,
        "magicalPower": 20,
        "tier": 1,
        "icon": "images/smite/items/sash.jpg"
    },
    {
        "name": "Golden Sash",
        "type": "Magical",
        "cost": 1350,
        "passive": "",
        "health": 175,
        "mana": 175,
        "magicalPower": 30,
        "tier": 2,
        "icon": "images/smite/items/golden sash.jpg"
    },
    {
        "name": "Rod of Healing",
        "type": "Magical",
        "cost": 1500,
        "passive": "AURA - The Healing of allies within 70 units is increased by 5%. If you are in combat, Healing of allies within 70 units is increased by an additional 10%.",
        "health": 100,
        "movementSpeed": 5,
        "magicalPower": 45,
        "tier": 2,
        "icon": "images/smite/items/rod of healing.jpg"
    },
    {
        "name": "Spellbook",
        "type": "Magical",
        "cost": 650,
        "passive": "",
        "mana": 75,
        "magicalPower": 20,
        "tier": 1,
        "icon": "images/smite/items/spellbook.jpg"
    },
    {
        "name": "Book of Souls",
        "type": "Magical",
        "cost": 1350,
        "passive": "",
        "mana": 125,
        "magicalPower": 65,
        "tier": 2,
        "icon": "images/smite/items/book of souls.jpg"
    },
    {
        "name": "Talisman",
        "type": "Magical",
        "cost": 650,
        "passive": "",
        "health": 75,
        "magicalProtection": 15,
        "tier": 1,
        "icon": "images/smite/items/talisman.jpg"
    },
    {
        "name": "Silver Talisman",
        "type": "Magical",
        "cost": 1250,
        "passive": "",
        "health": 125,
        "magicalProtection": 45,
        "tier": 2,
        "icon": "images/smite/items/silver talisman.jpg"
    },
    {
        "name": "Bulwark of Hope",
        "type": "Magical",
        "cost": 2400,
        "passive": "PASSIVE - When you take damage and are below 30% Health, you gain a Shield with health equal to 150 +10 per Player Level. Can only occur once every 60s.",
        "health": 200,
        "magicalProtection": 60,
        "crowdControl": 20,
        "tier": 3,
        "icon": "images/smite/items/bulwark of hope.jpg"
    },
    {
        "name": "Talisman of Energy",
        "type": "Magical",
        "cost": 2150,
        "passive": "PASSIVE - Getting a kill or assist on enemies causes you and allies within 70 units to gain stacks of energy. Energy stacks provide 2% Movement Speed, 2% Attack Speed, and 5MP5 per stack. Lasts 8s and stacks up to 6 times.",
        "health": 300,
        "magicalProtection": 60,
        "tier": 3,
        "icon": "images/smite/items/talisman of energy.jpg"
    },
    {
        "name": "Talisman of Energy",
        "type": "Physical",
        "cost": 2550,
        "passive": "PASSIVE - Getting a kill or assist on enemies causes you and allies within 70 units to gain stacks of energy. Energy stacks provide 2% Movement Speed, 2% Attack Speed, and 5MP5 per stack. Lasts 8s and stacks up to 6 times.",
        "health": 300,
        "magicalProtection": 60,
        "tier": 3,
        "icon": "images/smite/items/talisman of energy.jpg"
    },
    {
        "name": "Talisman",
        "type": "Physical",
        "cost": 725,
        "passive": "",
        "health": 100,
        "magicalProtection": 25,
        "tier": 1,
        "icon": "images/smite/items/talisman.jpg"
    },
    {
        "name": "Silver Talisman",
        "type": "Physical",
        "cost": 1225,
        "passive": "",
        "health": 125,
        "magicalProtection": 45,
        "tier": 2,
        "icon": "images/smite/items/silver talisman.jpg"
    },
    {
        "name": "Bulwark of Hope",
        "type": "Physical",
        "cost": 2400,
        "passive": "PASSIVE - When you take damage and are below 30% Health, you gain a Shield with health equal to 150 +15 per Player Level. Can only occur once every 60s.",
        "health": 200,
        "magicalProtection": 60,
        "crowdControl": 20,
        "tier": 3,
        "icon": "images/smite/items/bulwark of hope.jpg"
    },
    {
        "name": "Imperial Helmet",
        "type": "Magical",
        "cost": 600,
        "passive": "",
        "magicalPower": 10,
        "physicalProtection": 20,
        "tier": 1,
        "icon": "images/smite/items/imperial helmet.jpg"
    },
    {
        "name": "Jade Mountain Helm",
        "type": "Magical",
        "cost": 1200,
        "passive": "",
        "magicalPower": 20,
        "physicalProtection": 30,
        "tier": 2,
        "icon": "images/smite/items/jade mountain helm.jpg"
    },
    {
        "name": "Dynasty Plate Helm",
        "type": "Magical",
        "cost": 1700,
        "passive": "PASSIVE - You gain +15 Magical Penetration.",
        "magicalPower": 45,
        "physicalProtection": 35,
        "magicalPenetration": 10,
        "tier": 2,
        "icon": "images/smite/items/dynasty plate helm.jpg"
    },
    {
        "name": "Celestial Legion Helm",
        "type": "Magical",
        "cost": 2400,
        "passive": "PASSIVE - Every 2s you receive a Stack of 10 Physical Protection. Stacks are removed upon taking Physical Damage from Gods. Stacks can only be gained after not taking Physical Damage from Gods for 5s.",
        "magicalPower": 60,
        "physicalProtection": 40,
        "mpFive": 20,
        "tier": 3,
        "stacks": {
            "current": 0,
            "max": 3,
            "stacks": [
                {
                    "physicalProtection": 10
                }
            ],
            "type": "temporary"
        },
        "icon": "images/smite/items/celestial legion helm.jpg"
    },
    {
        "name": "Jade Emperor's Crown",
        "type": "Magical",
        "cost": 2400,
        "passive": "AURA - Enemies within 55 units of you have their Physical Power reduced by 30.",
        "magicalPower": 20,
        "physicalProtection": 60,
        "health": 100,
        "tier": 3,
        "icon": "images/smite/items/jade emperor's crown.jpg"
    },
    {
        "name": "Odysseus' Bow",
        "type": "Physical",
        "cost": 2100,
        "passive": "PASSIVE - Every fourth Basic Attack triggers a chain lightning, damaging the target and up to 4 nearby enemies for 30 damage +30% of your total Physical Power.",
        "attackSpeed": 40,
        "tier": 3,
        "autobuilder": true,
        "icon": "images/smite/items/odysseus' bow.jpg"
    },
    {
        "name": "Ichaival",
        "type": "Physical",
        "cost": 1700,
        "passive": "PASSIVE - Every successful Basic Attack increases your Physical Power by 7, reduces your target's Physical Power from items by 7, and reduces your targets Magical Power from items by 15 for 3s. (Max. 3 Stacks)",
        "attackSpeed": 25,
        "physicalPenetration": 10,
        "stacks": {
            "current": 0,
            "max": 3,
            "stacks": [
                {
                    "physicalPower": 7
                }
            ],
            "type": "temporary"
        },
        "autobuilder": true,
        "tier": 2,
        "icon": "images/smite/items/ichaival.jpg"
    },
    {
        "name": "Charged Bow",
        "type": "Physical",
        "cost": 1200,
        "passive": "PASSIVE - Every fourth Basic Attack triggers a chain lightning, damaging the target and up to 4 nearby enemies for 20 Physical Damage. This cannot trigger more than once every 1s.",
        "attackSpeed": 20,
        "tier": 2,
        "icon": "images/smite/items/charged bow.jpg"
    },
    {
        "name": "Short Bow",
        "type": "Physical",
        "cost": 650,
        "passive": "",
        "attackSpeed": 15,
        "tier": 1,
        "icon": "images/smite/items/short bow.jpg"
    },
    {
        "name": "Hunter's Bow",
        "type": "Physical",
        "cost": 1200,
        "passive": "",
        "physicalPower": 10,
        "attackSpeed": 20,
        "tier": 2,
        "icon": "images/smite/items/hunter's bow.jpg"
    },
    {
        "name": "Silverbranch Bow",
        "type": "Physical",
        "cost": 2200,
        "passive": "PASSIVE - For each 0.02 Attack Speed you go over cap you gain 1 Physical Power.",
        "attackSpeed": 35,
        "physicalPower": 20,
        "physicalPenetration": 10,
        "tier": 3,
        "icon": "images/smite/items/silverbranch bow.jpg"
    },
    {
        "name": "Heartward Amulet",
        "type": "Physical",
        "cost": 2100,
        "passive": "AURA - All allies within 70 units gain +15 Magical Protections and +15 MP5.",
        "health": 250,
        "magicalProtection": 55,
        "mpFive": 20,
        "tier": 3,
        "icon": "images/smite/items/heartward amulet.jpg"
    },
    {
        "name": "Heartward Amulet",
        "type": "Magical",
        "cost": 2100,
        "passive": "AURA - All allies within 70 units gain +15 Magical Protections and +15 MP5.",
        "health": 200,
        "magicalProtection": 45,
        "mpFive": 20,
        "tier": 3,
        "icon": "images/smite/items/heartward amulet.jpg"
    },
    {
        "name": "Lotus Crown",
        "type": "Magical",
        "cost": 2100,
        "passive": "PASSIVE: Any gods affected by your heals gain +20 Physical and Magical Protection for 5 seconds. Cannot be cast on the same target again for 10s.",
        "mpFive": 20,
        "magicalPower": 60,
        "physicalProtection": 30,
        "tier": 3,
        "icon": "images/smite/items/lotus crown.jpg"
    },
    {
        "name": "The Crusher",
        "type": "Physical",
        "cost": 2400,
        "passive": "PASSIVE - Your abilities deal bonus damage over time equal to 30 + 10% of your Physical Power over 2 seconds.",
        "physicalPower": 30,
        "physicalPenetration": 15,
        "attackSpeed": 20,
        "tier": 3,
        "icon": "images/smite/items/the crusher.jpg"
    },
    {
        "name": "Cloak",
        "type": "Physical",
        "cost": 650,
        "passive": "",
        "magicalProtection": 10,
        "physicalProtection": 10,
        "tier": 1,
        "icon": "images/smite/items/cloak.jpg"
    },
    {
        "name": "Cloak of Concentration",
        "type": "Physical",
        "cost": 1500,
        "passive": "",
        "magicalProtection": 30,
        "cooldownReduction": 7,
        "physicalProtection": 30,
        "tier": 2,
        "icon": "images/smite/items/cloak of concentration.jpg"
    },
    {
        "name": "Cloak",
        "type": "Magical",
        "cost": 700,
        "passive": "",
        "magicalProtection": 10,
        "physicalProtection": 10,
        "tier": 1,
        "icon": "images/smite/items/cloak.jpg"
    },
    {
        "name": "Cloak of Concentration",
        "type": "Magical",
        "cost": 1515,
        "passive": "",
        "magicalProtection": 30,
        "cooldownReduction": 7,
        "physicalProtection": 30,
        "tier": 2,
        "icon": "images/smite/items/cloak of concentration.jpg"
    },
    {
        "name": "Talaria Boots",
        "type": "Physical",
        "cost": 1600,
        "passive": "PASSIVE - You gain +20% additional Movement Speed after leaving the Fountain. This effect lasts 7s.",
        "physicalPower": 20,
        "movementSpeed": 25,
        "mpFive": 15,
        "shoes": true,
        "tier": 3,
        "icon": "images/smite/items/talaria boots.jpg"
    },
    {
        "name": "Travelers Shoes",
        "type": "Magical",
        "cost": 1600,
        "passive": "PASSIVE - You gain +20% additional Movement Speed after leaving the Fountain. This effect lasts 7s.",
        "movementSpeed": 25,
        "magicalPower": 25,
        "mpFive": 15,
        "shoes": true,
        "tier": 3,
        "icon": "images/smite/items/travelers shoes.jpg"
    },
    {
        "name": "Katana",
        "type": "Physical",
        "cost": 700,
        "passive": "",
        "physicalPower": 10,
        "movementSpeed": 5,
        "tier": 1,
        "icon": "images/smite/items/katana.jpg"
    },
    {
        "name": "Thousand Fold Blade",
        "type": "Physical",
        "cost": 1300,
        "passive": "",
        "physicalPower": 20,
        "movementSpeed": 8,
        "tier": 2,
        "icon": "images/smite/items/thousand fold blade.jpg"
    },
    {
        "name": "Masamune",
        "type": "Physical",
        "cost": 2500,
        "passive": "PASSIVE - For each enemy god within 55 units of you, you gain a stacking buff that provides 7 Magical Protection and 7 Physical Protection. Stacks up to 5 times.",
        "physicalPower": 50,
        "movementSpeed": 10,
        "health": 100,
        "tier": 3,
        "stacks": {
            "current": 1,
            "max": 5,
            "stacks": [
                {
                    "physicalProtection": 7
                },
                {
                    "magicalProtection": 7
                }
            ],
            "type": "permanent"
        },
        "icon": "images/smite/items/masamune.jpg"
    },
    {
        "name": "Stone Cutting Sword",
        "type": "Physical",
        "cost": 2500,
        "passive": "PASSIVE - Melee Basic attacks decreases enemy physical protections by 10, and increase your physical protection by 10 for 3s. ",
        "physicalPower": 50,
        "movementSpeed": 10,
        "stacks": {
            "current": 0,
            "max": 3,
            "stacks": [
                {
                    "physicalProtection": 10
                }
            ],
            "type": "temporary",
            "meleeOnly": true
        },
        "tier": 3,
        "icon": "images/smite/items/stone cutting sword.jpg"
    },
    {
        "name": "Spear of Desolation",
        "type": "Magical",
        "cost": 2600,
        "passive": "PASSIVE - Earning a Kill or Assist subtracts 1s from all Abilities currently on Cooldown.",
        "magicalPower": 100,
        "magicalPenetration": 15,
        "cooldownReduction": 10,
        "tier": 3,
        "icon": "images/smite/items/spear of desolation.jpg"
    },
    {
        "name": "Shuriken",
        "type": "Physical",
        "cost": 650,
        "passive": "",
        "physicalPower": 10,
        "tier": 1,
        "icon": "images/smite/items/shuriken.jpg"
    },
    {
        "name": "8-Pointed Shuriken",
        "type": "Physical",
        "cost": 1700,
        "passive": "",
        "physicalPower": 15,
        "criticalChance": 10,
        "attackSpeed": 10,
        "tier": 2,
        "icon": "images/smite/items/8-pointed shuriken.jpg"
    },
    {
        "name": "Wind Demon",
        "type": "Physical",
        "cost": 2700,
        "passive": "PASSIVE - Your Critical Hits increase your attack speed and movement speed for 20% for 5s.",
        "physicalPower": 30,
        "criticalChance": 20,
        "attackSpeed": 10,
        "toggleStats": {
            "toggle": false,
            "movementSpeed": 20,
            "attackSpeed": 20
        },
        "tier": 3,
        "icon": "images/smite/items/wind demon.jpg"
    },
    {
        "name": "Enchanted Kusari",
        "type": "Physical",
        "cost": 650,
        "passive": "",
        "magicalProtection": 20,
        "mpFive": 5,
        "tier": 1,
        "icon": "images/smite/items/enchanted kusari.jpg"
    },
    {
        "name": "Enchanted Kusari",
        "type": "Magical",
        "cost": 650,
        "passive": "",
        "magicalProtection": 20,
        "mpFive": 5,
        "tier": 1,
        "icon": "images/smite/items/enchanted kusari.jpg"
    },
    {
        "name": "Spellbound Kusari",
        "type": "Physical",
        "cost": 1250,
        "passive": "",
        "magicalProtection": 40,
        "mpFive": 15,
        "tier": 2,
        "icon": "images/smite/items/spellbound kusari.jpg"
    },
    {
        "name": "Spellbound Kusari",
        "type": "Magical",
        "cost": 1250,
        "passive": "",
        "magicalProtection": 40,
        "mpFive": 15,
        "tier": 2,
        "icon": "images/smite/items/spellbound kusari.jpg"
    },
    {
        "name": "Genji's Guard",
        "type": "Physical",
        "cost": 2200,
        "passive": "PASSIVE - When you take Magical Damage from Abilities your cooldowns are reduced by 3s. This can only occur once every 30s.",
        "magicalProtection": 70,
        "mpFive": 40,
        "cooldownReduction": 10,
        "health": 150,
        "tier": 3,
        "icon": "images/smite/items/genji's guard.jpg"
    },
    {
        "name": "Genji's Guard",
        "type": "Magical",
        "cost": 2200,
        "passive": "PASSIVE - When you take Magical Damage from Abilities your cooldowns are reduced by 2s. This can only occur once every 30s.",
        "magicalProtection": 70,
        "mpFive": 20,
        "cooldownReduction": 10,
        "tier": 3,
        "icon": "images/smite/items/genji's guard.jpg"
    },
    {
        "name": "Oni Hunter's Garb",
        "type": "Physical",
        "cost": 1900,
        "passive": "PASSIVE - When 3 or more enemy gods are within 55 units of you, you gain a 5% Damage Mitigation Buff.",
        "magicalProtection": 60,
        "mpFive": 30,
        "health": 100,
        "crowdControl": 20,
        "tier": 3,
        "icon": "images/smite/items/oni hunter's garb.jpg"
    },
    {
        "name": "Oni Hunter's Garb",
        "type": "Magical",
        "cost": 1900,
        "passive": "PASSIVE - When 3 or more enemy gods are within 55 units of you, you gain a 5% Damage Mitigation Buff.",
        "magicalProtection": 60,
        "mpFive": 30,
        "health": 100,
        "crowdControl": 20,
        "tier": 3,
        "icon": "images/smite/items/oni hunter's garb.jpg"
    },
    {
        "name": "Shogun's Kusari",
        "type": "Magical",
        "cost": 2200,
        "passive": "AURA - Allied gods within 70 units of you gain bonus 20% Attack Speed",
        "magicalProtection": 60,
        "mpFive": 20,
        "cooldownReduction": 10,
        "crowdControl": 20,
        "tier": 3,
        "icon": "images/smite/items/shogun's kusari.jpg"
    },
    {
        "name": "Shogun's Kusari",
        "type": "Physical",
        "cost": 2200,
        "passive": "AURA - Allied gods within 70 units of you gain bonus 20% Attack Speed",
        "magicalProtection": 60,
        "mpFive": 20,
        "cooldownReduction": 10,
        "crowdControl": 20,
        "tier": 3,
        "icon": "images/smite/items/shogun's kusari.jpg"
    },
    {
        "name": "Spectral Armor",
        "type": "Physical",
        "cost": 2100,
        "passive": "PASSIVE - Critical Strikes deal 50% bonus damage to you instead of 100%.",
        "mana": 300,
        "physicalProtection": 60,
        "crowdControl": 20,
        "mpFive": 10,
        "tier": 3,
        "icon": "images/smite/items/spectral armor.jpg"
    },
    {
        "name": "Spectral Armor",
        "type": "Magical",
        "cost": 2100,
        "passive": "PASSIVE - Critical Strikes deal 50% bonus damage to you instead of 100%.",
        "mana": 300,
        "physicalProtection": 60,
        "crowdControl": 20,
        "mpFive": 10,
        "tier": 3,
        "icon": "images/smite/items/spectral armor.jpg"
    },
    {
        "name": "Glowing Emerald",
        "type": "Physical",
        "cost": 600,
        "passive": "",
        "health": 100,
        "hpFive": 10,
        "tier": 1,
        "icon": "images/smite/items/glowing emerald.jpg"
    },
    {
        "name": "Glowing Emerald",
        "type": "Magical",
        "cost": 600,
        "passive": "",
        "health": 100,
        "hpFive": 10,
        "tier": 1,
        "icon": "images/smite/items/glowing emerald.jpg"
    },
    {
        "name": "Gauntlet of Thebes",
        "type": "Physical",
        "cost": 2150,
        "passive": "PASSIVE - For each assist on a minion, gain 1 stack. Stacks provide 1 Physical and Magical Protection. At 50 stacks this item evolves, providing an Aura of 10 Physical Protection and 10 Magical Protection.",
        "health": 200,
        "hpFive": 15,
        "toggleStats": {
            "toggle": false,
            "physicalProtection": 10,
            "magicalProtection": 10
        },
        "tier": 3,
        "icon": "images/smite/items/gauntlet of thebes.jpg"
    },
    {
        "name": "Gauntlet of Thebes",
        "type": "Magical",
        "cost": 2150,
        "passive": "PASSIVE - For each assist on a minion, gain 1 stack. Stacks provide 1 Physical and Magical Protection. At 50 stacks this item evolves, providing an Aura of 10 Physical Protection and 10 Magical Protection.",
        "health": 200,
        "hpFive": 15,
        "toggleStats": {
            "toggle": false,
            "physicalProtection": 10,
            "magicalProtection": 10
        },
        "tier": 3,
        "icon": "images/smite/items/gauntlet of thebes.jpg"
    },
    {
        "name": "Mantle of Discord",
        "type": "Physical",
        "cost": 2900,
        "passive": "PASSIVE - If you take damage below 30% health you unleash a shockwave that stuns all enemies within a range of 20 units for 1s and gain CC immunity for 1s. This effect cannot trigger more than once every 90s.",
        "physicalProtection": 60,
        "magicalProtection": 60,
        "cooldownReduction": 10,
        "tier": 3,
        "icon": "images/smite/items/mantle of discord.jpg"
    },
    {
        "name": "Mantle of Discord",
        "type": "Magical",
        "cost": 2900,
        "passive": "PASSIVE - If you take damage below 30% health you unleash a shockwave that stuns all enemies within a range of 20 units for 1s and gain CC immunity for 1s. This effect cannot trigger more than once every 90s.",
        "physicalProtection": 60,
        "magicalProtection": 60,
        "cooldownReduction": 10,
        "tier": 3,
        "icon": "images/smite/items/mantle of discord.jpg"
    },
    {
        "name": "Relic Dagger",
        "type": "Physical",
        "cost": 1850,
        "passive": "PASSIVE - Your Relics receive 30s Cooldown Reduction",
        "health": 300,
        "cooldownReduction": 10,
        "movementSpeed": 10,
        "tier": 3,
        "icon": "images/smite/items/relic dagger.jpg"
    },
    {
        "name": "Relic Dagger",
        "type": "Magical",
        "cost": 1850,
        "passive": "PASSIVE - Your Relics receive 30s Cooldown Reduction",
        "health": 300,
        "cooldownReduction": 10,
        "movementSpeed": 10,
        "tier": 3,
        "icon": "images/smite/items/relic dagger.jpg"
    },
    {
        "name": "Emperor's Armor",
        "type": "Physical",
        "cost": 2000,
        "passive": "AURA - Damageable enemy structures within 55 units have their Attack Speed decreased by 30%. Damageable allied structures within 55 units have their Attack Speed increased by 40%.",
        "health": 250,
        "physicalProtection": 40,
        "tier": 3,
        "icon": "images/smite/items/emperor's armor.jpg"
    },
    {
        "name": "Emperor's Armor",
        "type": "Magical",
        "cost": 2000,
        "passive": "AURA - Damageable enemy structures within 55 units have their Attack Speed decreased by 30%. Damageable allied structures within 55 units have their Attack Speed increased by 40%.",
        "health": 250,
        "physicalProtection": 40,
        "tier": 3,
        "icon": "images/smite/items/emperor's armor.jpg"
    },
    {
        "name": "Poisoned Star",
        "type": "Physical",
        "cost": 2400,
        "passive": "PASSIVE - Critical hits on enemy gods afflict them with a weakening poison for 2s. This poison slows them by 15% and reduces their damage output by 15%",
        "physicalPower": 20,
        "criticalChance": 20,
        "attackSpeed": 15,
        "tier": 3,
        "icon": "images/smite/items/poisoned star.jpg"
    }
]