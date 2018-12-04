[
    {
        "name": "Agni",
        "title": "God of Fire",
        "pantheon": "Hindu",
        "type": "Mage ",
        "attackType": "Ranged",
        "powerType": "Magical",
        "pros": "High Area Damage",
        "health": 360,
        "healthPerLevel": 71,
        "mana": 255,
        "manaPerLevel": 45,
        "speed": 355,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 1.2,
        "damage": 34,
        "damagePerLevel": 1.5,
        "physicalProtection": 11,
        "physicalProtectionPerLevel": 2.6,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 7,
        "hpFivePerLevel": 0.47,
        "mpFive": 4.7,
        "mpFivePerLevel": 0.37,
        "passive": {
            "name": "Combustion",
            "description": "After hitting with 4 basic attacks, Agni will gain a buff. On the next cast of Flame Wave or Rain Fire, all enemies hit by those abilities will be additionally set ablaze, taking damage every .5s for 3s.",
            "damage": 5,
            "powerDamage": 10,
            "ticks": 3,
            "icon": "images/smite/abilities/combustion.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Noxious Fumes",
            "description": "Agni summons a cloud of noxious fumes at his ground target location, doing damage every second. Firing any of Agni's abilities into the fumes detonates the gas, stunning all enemies in the radius.",
            "damage": [
                10,
                20,
                30,
                40,
                50
            ],
            "powerDamage": 5,
            "cooldown": 12,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "ticks": 10,
            "icon": "images/smite/abilities/noxious fumes.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Flame Wave",
            "description": "Agni summons a wave of fire in front of him that scorches all enemies in its path. Ignites Noxious Fumes.",
            "damage": [
                90,
                140,
                190,
                240,
                290
            ],
            "powerDamage": 65,
            "cooldown": [
                15,
                14,
                13,
                12,
                11
            ],
            "cost": [
                60,
                70,
                80,
                90,
                100
            ],
            "icon": "images/smite/abilities/flame wave.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Path of Flames",
            "description": "Agni blazes a path forward in a quick dash, leaving flames trailing behind him. Any enemies passing through the flames catch fire and burn for damage every .5s for 2s. Ignites Noxious Fumes. Agni is immune to Knockback while dashing.",
            "damage": [
                20,
                30,
                40,
                50,
                60
            ],
            "powerDamage": 15,
            "cooldown": 15,
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "ticks": 4,
            "icon": "images/smite/abilities/path of flames.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Rain Fire",
            "description": "Every 20 seconds, Agni gains a flaming halo that can be expended to summon a giant meteor at his ground target location. He can summon 1 every .8 seconds. Ignites Noxious Fumes.",
            "damage": [
                140,
                180,
                220,
                160,
                300
            ],
            "powerDamage": 70,
            "cooldown": 18,
            "cost": 0,
            "icon": "images/smite/abilities/rain fire.jpg"
        },
        "icon": "images/smite/gods/agni.jpg"
    },
    {
        "name": "Ah Muzen Cab",
        "title": "God of Bees",
        "pantheon": "Mayan",
        "type": "Hunter ",
        "attackType": "Ranged",
        "powerType": "Physical",
        "pros": "High Single Target Damage, High Mobility",
        "health": 450,
        "healthPerLevel": 73,
        "mana": 230,
        "manaPerLevel": 40,
        "speed": 365,
        "attackSpeed": 0.95,
        "attackSpeedPerLevel": 1.7,
        "damage": 38,
        "damagePerLevel": 2.2,
        "physicalProtection": 12,
        "physicalProtectionPerLevel": 3,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 7,
        "hpFivePerLevel": 0.71,
        "mpFive": 4.4,
        "mpFivePerLevel": 0.38,
        "passive": {
            "name": "Bees!",
            "description": "Enemies afflicted by Bees! take damage every .5s for 2s and are revealed on the minimap. The Bees! will also attack any nearby enemies that aren't already affected by Bees!, continuing to spread to nearby enemies over time. Basic Attacks from Ah Muzen Cab refresh and increase the duration up to 4s, and any target afflicted for 4s is Disarmed for 1s.",
            "damage": 8,
            "powerDamage": 5,
            "ticks": 4,
            "icon": "images/smite/abilities/bees!.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Hive",
            "description": "Bees swarm at the ground target location, creating a new hive that provides movement and attack speed buffs to Ah Muzen Cab. He also heals for a small amount every second while he remains close to the hives. The hives can only be destroyed by basic attacks (Maximum 6 hives.)",
            "cooldown": 14,
            "cost": [
                40,
                40,
                40,
                40,
                40
            ],
            "toggleStats": {
                "hpFive": [
                    4,
                    6,
                    8,
                    10,
                    12
                ],
                "attackSpeed": [
                    10,
                    17.5,
                    25,
                    32.5,
                    40
                ],
                "movementSpeed": [
                    10,
                    15,
                    20,
                    25,
                    30
                ],
                "toggle": false
            },
            "icon": "images/smite/abilities/hive.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Swarm",
            "description": "Ah Muzen Cab summons a large swarm of bees that fly forward in a path in front of him, dealing damage to all enemies hit and applying Bees to them.",
            "damage": [
                60,
                115,
                170,
                225,
                280
            ],
            "powerDamage": 80,
            "cooldown": [
                16,
                15,
                14,
                13,
                12
            ],
            "cost": [
                65,
                70,
                75,
                80,
                85
            ],
            "icon": "images/smite/abilities/swarm.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Honey",
            "description": "Ah Muzen Cab sprays honey at a moveable ground target location, slowing all enemies in the area. Bees from Hives within 55 ft and Swarm will fly over to protect the honey, dealing damage every .5 second and applying Bees! to all enemies as they leave the honey.",
            "damage": [
                13,
                25,
                37,
                49,
                61
            ],
            "powerDamage": 15,
            "cooldown": 10,
            "cost": [
                75,
                80,
                85,
                90,
                95
            ],
            "ticks": 8,
            "icon": "images/smite/abilities/honey.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Stinger",
            "description": "Ah Muzen Cab fires off an enormous stinger that deals damage to all enemies in a line, sticking into the first god that is hit, applying Bees! and crippling them for 3 seconds. If the target dies or after 3 seconds, the stinger falls onto the ground for 4 seconds. If Ah Muzen Cab picks up his stinger, he gains a significant reduction to Stinger's cooldown.",
            "damage": [
                275,
                355,
                435,
                515,
                595
            ],
            "powerDamage": 110,
            "cooldown": 90,
            "cost": 100,
            "icon": "images/smite/abilities/stinger.jpg"
        },
        "icon": "images/smite/gods/ahmuzencab.jpg"
    },
    {
        "name": "Ah Puch",
        "title": "Horrific God of Decay",
        "pantheon": "Mayan",
        "type": " Mage ",
        "attackType": "Ranged",
        "powerType": "Magical",
        "pros": "High Area Damage",
        "health": 400,
        "healthPerLevel": 75,
        "mana": 320,
        "manaPerLevel": 55,
        "speed": 365,
        "attackSpeed": 0.87,
        "attackSpeedPerLevel": 0.95,
        "damage": 37,
        "damagePerLevel": 1.5,
        "physicalProtection": 12,
        "physicalProtectionPerLevel": 2.7,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 6,
        "hpFivePerLevel": 0.45,
        "mpFive": 5,
        "mpFivePerLevel": 0.42,
        "passive": {
            "name": "Hollow Ground",
            "description": "Ah Puch is closely attuned with the dead and may exhume corpses at his will. When walking over a decaying corpse, Ah Puch lowers the cooldown of Undead Surge by 2s, restores 6% of his maximum Health and 3% of his maximum Mana.",
            "icon": "images/smite/abilities/hollow ground.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Undead Surge",
            "description": "Ah Puch raises up to two decaying corpses from the underworld that surge forward exploding on anything they touch, when they reach max distance, or when Ah Puch reactivates Undead Surge dealing damage and slowing targets hit. The corpses collapse after exploding remaining behind.",
            "damage": [
                90,
                110,
                130,
                150,
                170
            ],
            "powerDamage": 35,
            "cooldown": 14,
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "icon": "images/smite/abilities/undead surge.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Corpse Explosion",
            "description": "Ah Puch causes the target area to explode dealing damage. Corpse Explosion also causes any decaying corpses in the area to explode.",
            "damage": [
                60,
                70,
                80,
                90,
                100
            ],
            "powerDamage": 10,
            "cooldown": 8,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "secondaryDamage": {
                "damage": [
                    55,
                    80,
                    105,
                    130,
                    155
                ],
                "powerDamage": 25,
                "ticks": 6
            },
            "icon": "images/smite/abilities/corpse explosion.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Fleeting Breath",
            "description": "Ah Puch throws a charm from the underworld which awakens a decaying corpse that applies miasma to targets in an area and falls to the ground, remaining behind. Targets take damage every second. After the duration, targets take additional damage and are stunned for each time they were healed by an ability during the initial duration.",
            "damage": [
                30,
                35,
                40,
                45,
                50
            ],
            "powerDamage": 20,
            "cooldown": 10,
            "cost": 70,
            "ticks": 5,
            "icon": "images/smite/abilities/fleeting breath.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Empty the Crypts",
            "description": "Ah Puch unleashes an army of Wraiths from the Ninth Hell that swarm forward and deal damage to enemies they collide with.",
            "damage": [
                40,
                50,
                60,
                70,
                80
            ],
            "powerDamage": 10,
            "cooldown": 100,
            "cost": [
                100,
                100,
                100,
                100,
                100
            ],
            "ticks": 12,
            "icon": "images/smite/abilities/empty the crypts.jpg"
        },
        "icon": "images/smite/gods/ahpuch.jpg"
    },
    {
        "name": "Amaterasu",
        "title": "The Shining Light",
        "pantheon": "Japanese",
        "type": " Warrior ",
        "attackType": "Melee",
        "powerType": "Physical",
        "pros": "High Mobility, High Area Damage",
        "health": 470,
        "healthPerLevel": 82,
        "mana": 220,
        "manaPerLevel": 35,
        "speed": 375,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 1.2,
        "damage": 39,
        "damagePerLevel": 2,
        "physicalProtection": 18,
        "physicalProtectionPerLevel": 3,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 8,
        "hpFivePerLevel": 0.8,
        "mpFive": 4.8,
        "mpFivePerLevel": 0.4,
        "passive": {
            "name": "Illuminating Strike",
            "description": "Amaterasu illuminates enemies she hits with basic attacks. After 3 hits on the same target the enemy gains an aura, exposing their weaknesses and causing them to take more damage from all sources. Any other enemies that come near the afflicted target are weakened as well.",
            "icon": "images/smite/abilities/illuminating strike.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Divine Presence",
            "description": "Amaterasu harnesses the power of her jewel, healing herself every second for 4 seconds and creating a persistent aura that buffs nearby allied gods. Every time this ability is activated the aura switches between Valor and Benevolence.",
            "cooldown": 9,
            "cost": [
                50,
                55,
                60,
                65,
                70
            ],
            "icon": "images/smite/abilities/divine presence.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Heavenly Reflection",
            "description": "Amaterasu charges her mirror for 5 seconds. While the mirror is charging she takes decreased damage. By activating the ability again or at the end of the 5 seconds she will fire her mirror straight ahead. The mirror can be charged up by successfully attacking enemies or from taking damage, and will deal up to double the base damage when fully charged.",
            "damage": [
                50,
                90,
                130,
                170,
                210
            ],
            "powerDamage": 60,
            "cooldown": 12,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/heavenly reflection.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Glorious Charge",
            "description": "Amaterasu shines light off of her sacred blade, silencing all enemies in front of her. She then dashes forward while dealing damage, piercing through minions or stopping at the first god hit.",
            "damage": [
                70,
                130,
                190,
                250,
                310
            ],
            "powerDamage": 60,
            "cooldown": 18,
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "icon": "images/smite/abilities/glorious charge.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Dazzling Offensive",
            "description": "Amaterasu focuses the power of the heavens into an impressive 3 strike combination attack. The 2nd hit will do 20% more base damage and slow enemies. The 3rd hit will do 40% more base damage and stun enemies. She must hit an enemy target with each hit to progress the combo.",
            "damage": [
                270,
                450,
                630,
                810,
                990
            ],
            "powerDamage": 180,
            "cooldown": 75,
            "cost": 100,
            "icon": "images/smite/abilities/dazzling offensive.jpg"
        },
        "icon": "images/smite/gods/amaterasu.jpg"
    },
    {
        "name": "Anhur",
        "title": "Slayer of Enemies",
        "pantheon": "Egyptian",
        "type": "Hunter ",
        "attackType": "Ranged",
        "powerType": "Physical",
        "pros": "High Single Target Damage",
        "health": 460,
        "healthPerLevel": 78,
        "mana": 220,
        "manaPerLevel": 35,
        "speed": 365,
        "attackSpeed": 0.9,
        "attackSpeedPerLevel": 1.7,
        "damage": 40,
        "damagePerLevel": 2.5,
        "physicalProtection": 11,
        "physicalProtectionPerLevel": 2.8,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 8,
        "hpFivePerLevel": 0.69,
        "mpFive": 4.5,
        "mpFivePerLevel": 0.32,
        "passive": {
            "name": "Enfeeble",
            "description": "Anhur's spear attacks reduce the enemy targets physical protection for 3 seconds.",
            "icon": "images/smite/abilities/enfeeble.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Shifting Sands",
            "description": "Anhur erects an obelisk from the ground, blocking all player movement. The surrounding sands slow enemies and increase the damage of Anhur's basic attacks against targets in the sands.",
            "cooldown": 14,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "toggleStats": {
                "basicAttackPercentIncrease": [
                    0.04,
                    0.08,
                    0.12,
                    0.16,
                    0.2
                ],
                "toggle": false
            },
            "icon": "images/smite/abilities/shifting sands.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Impale",
            "description": "Anhur hurls his spear with great might. If the spear hits a god, they take damage and are knocked back. Gods knocked back into a wall are stunned. The spear passes through minions, doing damage to them as well.",
            "damage": [
                90,
                155,
                220,
                285,
                350
            ],
            "powerDamage": 80,
            "cooldown": 12,
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "icon": "images/smite/abilities/impale.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Disperse",
            "description": "Anhur leaps to his ground target location, doing damage and knocking back all enemies in the radius where he lands.",
            "damage": [
                70,
                110,
                150,
                190,
                230
            ],
            "powerDamage": 60,
            "cooldown": 15,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/disperse.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Desert Fury",
            "description": "Summoning the fury of the desert, Anhur hunkers down and throws empowered spears that pass through everything, doing damage to all enemies in their path. He is immune to crowd control for the duration.",
            "damage": [
                70,
                95,
                120,
                145,
                170
            ],
            "powerDamage": 30,
            "cooldown": 75,
            "cost": [
                80,
                90,
                100,
                110,
                120
            ],
            "ticks": 8,
            "icon": "images/smite/abilities/desert fury.jpg"
        },
        "icon": "images/smite/gods/anhur.jpg"
    },
    {
        "name": "Anubis",
        "title": "God of the Dead",
        "pantheon": "Egyptian",
        "type": "Mage ",
        "attackType": "Ranged",
        "powerType": "Magical",
        "pros": "High Area Damage",
        "health": 360,
        "healthPerLevel": 66,
        "mana": 280,
        "manaPerLevel": 58,
        "speed": 350,
        "attackSpeed": 0.86,
        "attackSpeedPerLevel": 0.99,
        "damage": 35,
        "damagePerLevel": 1.5,
        "physicalProtection": 10,
        "physicalProtectionPerLevel": 2.5,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 7,
        "hpFivePerLevel": 0.45,
        "mpFive": 4.8,
        "mpFivePerLevel": 0.36,
        "passive": {
            "name": "Sorrow",
            "description": "All of Anubis' abilities steal physical and magical protection from the target and he gains increased scaling to his item-based magical lifesteal. In addition, Sorrow grants Anubis an additional 30% reduction to all crowd control durations (does not stack with Resolve).",
            "icon": "images/smite/abilities/sorrow.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Plague of Locusts",
            "description": "A plague of locusts bellows forth from Anubis' mouth, smothering all enemies in the area and doing damage every .5s for 3s. Anubis is immune to knockback while channeling.",
            "damage": [
                35,
                50,
                65,
                80,
                95
            ],
            "powerDamage": 40,
            "cooldown": [
                15,
                14,
                13,
                12,
                11
            ],
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "ticks": 6,
            "icon": "images/smite/abilities/plague of locusts.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Mummify",
            "description": "Anubis fires a bandage projectile, mummifying and stunning his target.",
            "cooldown": [
                16,
                15,
                14,
                13,
                12
            ],
            "cost": 60,
            "icon": "images/smite/abilities/mummify.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Grasping Hands",
            "description": "Anubis calls for help from the underworld as hands penetrate the ground and claw at his enemies, doing damage and slowing every .5s for 2s.",
            "damage": [
                25,
                40,
                55,
                70,
                85
            ],
            "powerDamage": 35,
            "cooldown": [
                15,
                14,
                13,
                12,
                11
            ],
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "ticks": 4,
            "icon": "images/smite/abilities/grasping hands.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Death Gaze",
            "description": "Anubis focuses all of his energy into a piercing gaze, doing damage to all enemies in the path, every 0.1 seconds for 3 seconds.",
            "damage": [
                23,
                28,
                33,
                38,
                43
            ],
            "powerDamage": 15,
            "cooldown": [
                90,
                85,
                80,
                75,
                70
            ],
            "cost": 90,
            "ticks": 30,
            "icon": "images/smite/abilities/death gaze.jpg"
        },
        "icon": "images/smite/gods/anubis.jpg"
    },
    {
        "name": "Ao Kuang",
        "title": "Dragon King of the Eastern Seas",
        "pantheon": "Chinese",
        "type": "Mage ",
        "attackType": "Melee",
        "powerType": "Magical",
        "pros": "High Single Target Damage",
        "health": 400,
        "healthPerLevel": 82,
        "mana": 240,
        "manaPerLevel": 38,
        "speed": 375,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 1.95,
        "damage": 35,
        "damagePerLevel": 2.4,
        "physicalProtection": 12,
        "physicalProtectionPerLevel": 3,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 10,
        "hpFivePerLevel": 0.7,
        "mpFive": 4.8,
        "mpFivePerLevel": 0.41,
        "passive": {
            "name": "King's Sword",
            "description": "Each time Ao Kuang successfully uses his dragon form to execute an enemy God he gains a Stack that increases his Magical Power and Lifesteal. Stacks up to 3 times, Stacks are permanent.",
            "stacks": {
                "current": 0,
                "max": 3,
                "stacks": [
                    {
                        "magicalPower": 15,
                        "magicalLifesteal": 5
                    }
                ],
                "type": "permanent"
            },
            "icon": "images/smite/abilities/king's sword.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Water Illusion",
            "description": "Ao Kuang teleports forward into stealth, leaving behind a watery form of himself. He remains in stealth for 5s or until he attacks or takes damage. Ao Kuang may activate this ability again to detonate the watery form, dealing damage to nearby enemies.",
            "damage": [
                70,
                120,
                170,
                220,
                270
            ],
            "powerDamage": 60,
            "cooldown": 15,
            "cost": 70,
            "icon": "images/smite/abilities/water illusion.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Dragon Call",
            "description": "Ao Kuang summons 6 dragons to his side. For every successful basic attack Ao Kuang makes, a dragon will dive to the target dealing additional damage. This ability ends after all dragons are used, or after 10s.  Ao Kuang may activate this ability again to send forward any remaining dragons in a ranged attack. The dragons damage and slow the first enemy they hit.",
            "damage": [
                35,
                50,
                65,
                80,
                95
            ],
            "powerDamage": 30,
            "cooldown": [
                15,
                14,
                13,
                12,
                11
            ],
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/dragon call.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Wild Storm",
            "description": "Ao Kuang unleashes a storm of lightning from his sword, damaging all enemies in front of him. This hit is considered a basic attack, and will activate item effects.",
            "damage": [
                90,
                135,
                180,
                225,
                270
            ],
            "powerDamage": 40,
            "cooldown": 7,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/wild storm.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "King of the Eastern Seas",
            "description": "Ao Kuang selects a single target in melee range and grabs them, dealing damage and knocking them up into the air. If the target is under a health threshold, Ao Kuang will instead reveal his true form, becoming a Dragon and executing them.  After transforming Ao Kuang remains in the air, and may then pick a new location to land, dealing damage to enemies within range 20 and fully recharging his Sword.",
            "damage": [
                90,
                140,
                190,
                240,
                290
            ],
            "powerDamage": 50,
            "cooldown": 90,
            "cost": [
                90,
                100,
                110,
                120,
                130
            ],
            "icon": "images/smite/abilities/king of the eastern seas.jpg"
        },
        "icon": "images/smite/gods/aokuang.jpg"
    },
    {
        "name": "Aphrodite",
        "title": "Goddess of Beauty",
        "pantheon": "Greek",
        "type": "Mage ",
        "attackType": "Ranged",
        "powerType": "Magical",
        "pros": "High Sustain",
        "health": 380,
        "healthPerLevel": 68,
        "mana": 240,
        "manaPerLevel": 43,
        "speed": 355,
        "attackSpeed": 0.87,
        "attackSpeedPerLevel": 0.95,
        "damage": 32,
        "damagePerLevel": 1.45,
        "physicalProtection": 9,
        "physicalProtectionPerLevel": 2.7,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 6,
        "hpFivePerLevel": 0.45,
        "mpFive": 4.8,
        "mpFivePerLevel": 0.41,
        "passive": {
            "name": "Center of Attention",
            "description": "Aphrodite gains 4 Physical Protections and 4 Magical Protections for each friendly and enemy god within 70 units of her. Stacks up to nine times.",
            "icon": "images/smite/abilities/center of attention.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Kiss",
            "description": "Aphrodite blows a kiss to an allied god, making them her soul mate and giving them both increased movement speed. If it hits an ally, it has no cooldown. If the kiss hits an enemy god, they are stunned and Aphrodite's soul mate gets jealous, increasing their damage.",
            "cooldown": [
                16,
                15,
                14,
                13,
                12
            ],
            "cost": [
                50,
                55,
                60,
                65,
                70
            ],
            "movementSpeed": [
                4,
                8,
                12,
                16,
                20
            ],
            "icon": "images/smite/abilities/kiss.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Back Off!",
            "description": "Agitated by all the attention, Aphrodite commands enemies to get away from her, doing damage around her and knocking them back to 25 feet from her. If Aphrodite has a soul mate, an explosion originates on them in addition, dealing the same damage and slowing by 25% for 2s. If an enemy would be hit by both blasts, they will only be affected by the one originating from Aphrodite.",
            "damage": [
                80,
                140,
                200,
                260,
                320
            ],
            "powerDamage": 80,
            "cooldown": 12,
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "protections": [
                10,
                20,
                30,
                40,
                50
            ],
            "icon": "images/smite/abilities/back off!.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Love Birds",
            "description": "Aphrodite calls forth a flock of beautiful doves that fly forward in the area in front of her. The doves circle around all enemies in the path, damaging enemies every .5s for 3s. Aphrodite and her soul mate also receive healing when cast.",
            "damage": [
                15,
                25,
                35,
                45,
                55
            ],
            "powerDamage": 15,
            "cooldown": [
                16,
                15,
                14,
                13,
                12
            ],
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "ticks": 6,
            "icon": "images/smite/abilities/love birds.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Undying Love",
            "description": "Aphrodite pledges undying love to herself and her Soul Mate. While this is active, her and her Soul Mate are invulnerable to all damage for a short duration. All crowd control effects are also removed when activated.",
            "cooldown": [
                90,
                85,
                80,
                75,
                70
            ],
            "cost": 100,
            "icon": "images/smite/abilities/undying love.jpg"
        },
        "icon": "images/smite/gods/aphrodite.jpg"
    },
    {
        "name": "Apollo",
        "title": "God of Music",
        "pantheon": "Greek",
        "type": "Hunter ",
        "attackType": "Ranged",
        "powerType": "Physical",
        "pros": "High Mobility",
        "health": 450,
        "healthPerLevel": 77,
        "mana": 225,
        "manaPerLevel": 40,
        "speed": 365,
        "attackSpeed": 0.95,
        "attackSpeedPerLevel": 1.7,
        "damage": 40,
        "damagePerLevel": 2.6,
        "physicalProtection": 12,
        "physicalProtectionPerLevel": 2.7,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 8,
        "hpFivePerLevel": 0.69,
        "mpFive": 4.6,
        "mpFivePerLevel": 0.4,
        "passive": {
            "name": "Audacity",
            "description": "After 10 successful basic attacks, Apollo gains Audacity, attacking with both hands and increasing his attack speed by 100% for the next 5 attacks (hit or miss) he makes.",
            "toggleStats": {
                "attackSpeed": 100,
                "toggle": false
            },
            "icon": "images/smite/abilities/audacity.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "So Beautiful",
            "description": "Apollo strums a single cord on his Lyre. It's so beautiful it hurts, and all enemies in a long range line take damage.",
            "damage": [
                80,
                140,
                180,
                260,
                320
            ],
            "powerDamage": 80,
            "cooldown": [
                11,
                11,
                11,
                11,
                11
            ],
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "icon": "images/smite/abilities/so beautiful.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Serenade",
            "description": "Apollo uses his amazing voice to mesmerize all nearby enemies and bolster himself with additional protections. Any damage done breaks the effect.",
            "cooldown": [
                17,
                16,
                15,
                14,
                13
            ],
            "cost": 75,
            "toggleStats": {
                "physicalProtection": [
                    10,
                    15,
                    20,
                    25,
                    30
                ],
                "toggle": false
            },
            "icon": "images/smite/abilities/serenade.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "The Moves",
            "description": "Apollo runs forward and slides on his knees, dealing damage, knocking aside all enemies and adding a stack of Audacity for each enemy hit. At the end of the slide, the movement speed is decreased for enemies and increased for himself and allies.",
            "damage": [
                70,
                115,
                160,
                205,
                250
            ],
            "powerDamage": 60,
            "cooldown": 15,
            "cost": 70,
            "icon": "images/smite/abilities/the moves.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Across The Sky",
            "description": "Apollo rides his chariot across the sky, choosing when to land, dealing damage every .2s for .8s.",
            "damage": [
                70,
                95,
                120,
                145,
                170
            ],
            "powerDamage": 30,
            "cooldown": [
                110,
                110,
                110,
                110,
                110
            ],
            "cost": 10,
            "ticks": 3,
            "icon": "images/smite/abilities/across the sky.jpg"
        },
        "icon": "images/smite/gods/apollo.jpg"
    },
    {
        "name": "Arachne",
        "title": "The Weaver",
        "pantheon": "Greek",
        "type": "Assassin ",
        "attackType": "Melee",
        "powerType": "Physical",
        "pros": "High Single Target Damage, Great Jungler",
        "health": 445,
        "healthPerLevel": 79,
        "mana": 210,
        "manaPerLevel": 41,
        "speed": 375,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 2,
        "damage": 38,
        "damagePerLevel": 2.2,
        "physicalProtection": 13,
        "physicalProtectionPerLevel": 3,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 9,
        "hpFivePerLevel": 0.67,
        "mpFive": 4.8,
        "mpFivePerLevel": 0.46,
        "passive": {
            "name": "Predator",
            "description": "Arachne's basic attacks gain 1.5% physical damage for every 5% of a target's missing health. ",
            "icon": "images/smite/abilities/predator.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Venomous Bite",
            "description": "Upon activation, Arachne's next basic attack within 5s does additional damage and infects the target with Venom, dealing damage over time and healing Arachne every 0.5s for 3s.",
            "damage": [
                50,
                75,
                100,
                125,
                150
            ],
            "powerDamage": 35,
            "cooldown": [
                15,
                14,
                13,
                12,
                11
            ],
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/venomous bite.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Cocoon",
            "description": "Arachne spindles her webbing, and her next 3 successful basic attacks are executed with increased attack speed. If all three attacks hit the same target, that target is stunned.",
            "cooldown": 15,
            "cost": 70,
            "icon": "images/smite/abilities/cocoon.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Web",
            "description": "Arachne spins a wall of web. Enemies who pass through the web are slowed, revealed to Arachne, and leave a trail of web behind them that increases Arachne's movement speed and makes her immune to slows.  Breaking the web also spawns Broodlings, which deal damage to nearby enemies. Arachne can only have 2 walls active at a time. 240s Lifetime.",
            "damage": [
                20,
                30,
                40,
                50,
                60
            ],
            "cooldown": 18,
            "cost": [
                50,
                55,
                60,
                65,
                70
            ],
            "icon": "images/smite/abilities/web.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Night Crawler",
            "description": "Arachne flips up to her infinite web, hanging upside down above the lane and increasing her movement speed. She may leap off the web to deal damage to all enemies in the target area.",
            "damage": [
                150,
                250,
                350,
                450,
                550
            ],
            "powerDamage": 100,
            "cooldown": [
                90,
                85,
                80,
                75,
                70
            ],
            "cost": 100,
            "icon": "images/smite/abilities/night crawler.jpg"
        },
        "icon": "images/smite/gods/arachne.jpg"
    },
    {
        "name": "Ares",
        "title": "God of War",
        "pantheon": "Greek",
        "type": "Guardian ",
        "attackType": "Melee",
        "powerType": "Magical",
        "pros": "High Crowd Control, High Defense",
        "health": 485,
        "healthPerLevel": 90,
        "mana": 200,
        "manaPerLevel": 37,
        "speed": 365,
        "attackSpeed": 0.9,
        "attackSpeedPerLevel": 1.25,
        "damage": 38,
        "damagePerLevel": 1.55,
        "physicalProtection": 20,
        "physicalProtectionPerLevel": 3,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 8,
        "hpFivePerLevel": 0.67,
        "mpFive": 4.6,
        "mpFivePerLevel": 0.42,
        "passive": {
            "name": "Blessed Presence",
            "description": "Each completed aura item that Ares' owns grants him 30 additional magical power.",
            "auraItemsPassive": {
                "magicalPower": 30
            },
            "icon": "images/smite/abilities/blessed presence.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Shackles",
            "description": "Chains extend from Ares' shield, doing damage to all enemies in its path.  Hitting a god shackles them to Ares, cripples them, preventing movement abilities, dealing the same damage every second while slowing them and buffing Ares.  While shackled, Ares can fire another chain for free within 2s.",
            "damage": [
                25,
                45,
                65,
                85,
                105
            ],
            "powerDamage": 15,
            "cooldown": 15,
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "ticks": 2,
            "icon": "images/smite/abilities/shackles.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Bolster Defenses",
            "description": "Ares strengthens the defenses of himself and all nearby allies, granting protections and reducing crowd control durations. For each shackled enemy, the protection buffs are increased.",
            "cooldown": 15,
            "cost": [
                40,
                45,
                50,
                55,
                60
            ],
            "icon": "images/smite/abilities/bolster defenses.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Searing Flesh",
            "description": "Flames pour forth from Ares' shield, engulfing enemies in a cone in front of him for damage every .5s for 4s.  Ares is immune to knockback for the duration.",
            "damage": [
                15,
                20,
                25,
                30,
                35
            ],
            "powerDamage": 7,
            "cooldown": 12,
            "cost": [
                55,
                60,
                65,
                70,
                75
            ],
            "ticks": 8,
            "icon": "images/smite/abilities/searing flesh.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "No Escape",
            "description": "Ares throws chains out to all enemy gods in an area around him.  All enemies hit by the chains are pulled to Ares after 2.5s, taking damage and are stunned plus additional time for each enemy god hit by the ability.",
            "damage": [
                200,
                275,
                350,
                425,
                500
            ],
            "powerDamage": 40,
            "cooldown": 100,
            "cost": [
                80,
                85,
                90,
                95,
                100
            ],
            "icon": "images/smite/abilities/no escape.jpg"
        },
        "icon": "images/smite/gods/ares.jpg"
    },
    {
        "name": "Artemis",
        "title": "Goddess of the Hunt",
        "pantheon": "Greek",
        "type": "Hunter ",
        "attackType": "Ranged",
        "powerType": "Physical",
        "pros": "High Single Target Damage",
        "health": 450,
        "healthPerLevel": 75,
        "mana": 205,
        "manaPerLevel": 34,
        "speed": 365,
        "attackSpeed": 0.95,
        "attackSpeedPerLevel": 1.7,
        "damage": 35,
        "damagePerLevel": 2.5,
        "physicalProtection": 12,
        "physicalProtectionPerLevel": 3,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 8,
        "hpFivePerLevel": 0.68,
        "mpFive": 4.4,
        "mpFivePerLevel": 0.25,
        "passive": {
            "name": "Still Target",
            "description": "Artemis gains a critical strike chance buff on each successful hit.",
            "stacks": {
                "current": 0,
                "max": 3,
                "stacks": [
                    {
                        "criticalChance": 5
                    }
                ],
                "type": "temporary"
            },
            "icon": "images/smite/abilities/still target.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Transgressors Fate",
            "description": "Artemis places a trap on the ground. Enemy gods coming within 5 units of her traps activate them, rooting and crippling the enemy god, preventing movement abilities and dealing damage every second for 3s. ",
            "damage": [
                25,
                40,
                55,
                70,
                85
            ],
            "powerDamage": 30,
            "cooldown": [
                18,
                16,
                14,
                12,
                10
            ],
            "cost": 45,
            "ticks": 3,
            "icon": "images/smite/abilities/transgressors fate.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Vengeful Assault",
            "description": "Artemis attacks at a furious pace, increasing her attack and movement speed significantly.",
            "cooldown": [
                18,
                17,
                16,
                15,
                14
            ],
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "toggleStats": {
                "attackSpeed": [
                    40,
                    50,
                    60,
                    70,
                    80
                ],
                "movementSpeed": [
                    20,
                    20,
                    20,
                    20,
                    20
                ],
                "toggle": false
            },
            "icon": "images/smite/abilities/vengeful assault.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Suppress the Insolent",
            "description": "Artemis fires a volley into a ground target, suppressing all of her enemies. Enemies caught within the volley are damaged and are slowed.",
            "damage": [
                80,
                130,
                180,
                230,
                280
            ],
            "powerDamage": 40,
            "cooldown": 10,
            "cost": [
                50,
                55,
                60,
                65,
                70
            ],
            "icon": "images/smite/abilities/suppress the insolent.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Calydonian Boar",
            "description": "Artemis summons the great Calydonian Boar on her enemies, doing damage to the nearest enemy god and stunning them and itself. The boar is immune until he hits the first god and then continues to charge other gods for its lifetime. Artemis is also immune to crowd control for 3s.",
            "damage": [
                150,
                225,
                300,
                375,
                450
            ],
            "powerDamage": 100,
            "cooldown": 90,
            "cost": [
                80,
                90,
                100,
                110,
                120
            ],
            "icon": "images/smite/abilities/calydonian boar.jpg"
        },
        "icon": "images/smite/gods/artemis.jpg"
    },
    {
        "name": "Artio",
        "title": "The Bear Goddess",
        "pantheon": "Celtic",
        "type": "Guardian",
        "attackType": "Melee",
        "powerType": "Magical",
        "pros": "August 1, 2017",
        "health": 500,
        "healthPerLevel": 95,
        "mana": 210,
        "manaPerLevel": 39,
        "speed": 365,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 1.2,
        "damage": 38,
        "damagePerLevel": 1.8,
        "physicalProtection": 20,
        "physicalProtectionPerLevel": 3.2,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 8,
        "hpFivePerLevel": 0.9,
        "mpFive": 4.6,
        "mpFivePerLevel": 0.43,
        "passive": {
            "name": "Decompose",
            "description": "Enemy gods hit by Artio's Druid or Bear damaging abilities will begin to decompose. This effect decreases their Physical and Magical Protections. This effect stacks",
            "icon": "images/smite/abilities/decompose.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Energy Surge",
            "description": "Druid: Artio pulses out a strong wave of energy that damages enemies. She will heal herself and allies within 55 units for each enemy god hit by this ability Bear Form: Artio slashes twice with her claws, damaging enemies with each swipe.",
            "damage": [
                70,
                100,
                130,
                160,
                190
            ],
            "powerDamage": 35,
            "cooldown": 12,
            "cost": [
                50,
                55,
                60,
                65,
                70
            ],
            "icon": "images/smite/abilities/energy surge.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Entangling Vines",
            "description": "Druid Form: Artio creates a thicket of vines around herself that cripples enemy gods and decreases their Magical or Physical Power as long as they are in the area. Bear Form: Artio lets out a ferocious roar that Stuns all nearby enemies and increases her own Physical and Magical Protections for 4s.",
            "cooldown": 14,
            "cost": [
                50,
                55,
                60,
                65,
                70
            ],
            "icon": "images/smite/abilities/entangling vines.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Life Tap",
            "description": "Druid Form: Artio channels for 2s, draining the life from enemies. While channeling she deals damage up to 5 times and heals herself up to 5 times. Each hit increasingly Slows enemies and enemies hit all 5 times are Rooted for 1s. Bear Form: Artio charges forward at an increased movement speed for 3s. Enemies she charges through take damage and are Slowed for 2s.",
            "damage": [
                15,
                25,
                35,
                45,
                55
            ],
            "powerDamage": 10,
            "cooldown": 15,
            "cost": [
                50,
                55,
                60,
                65,
                70
            ],
            "ticks": 5,
            "icon": "images/smite/abilities/life tap.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Shapeshift",
            "description": "Active: Artio Shapeshifts between her Druid stance and Bear stance. Passive: Every time Artio hits at least 1 enemy with an ability she gains 1 stack of Invigoration. Invigoration stacks increase her Movement Speed and MP5. Stacks last 4s, and stack up to 8 times.",
            "cooldown": 1,
            "cost": 0,
            "icon": "images/smite/abilities/shapeshift.jpg"
        },
        "icon": "images/smite/gods/artio.jpg"
    },
    {
        "name": "Athena",
        "title": "Goddess of Wisdom",
        "pantheon": "Greek",
        "type": "Guardian ",
        "attackType": "Melee",
        "powerType": "Magical",
        "pros": "High Crowd Control, High Defense",
        "health": 500,
        "healthPerLevel": 100,
        "mana": 190,
        "manaPerLevel": 34,
        "speed": 365,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 1.2,
        "damage": 35,
        "damagePerLevel": 1.5,
        "physicalProtection": 20,
        "physicalProtectionPerLevel": 3.2,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 8,
        "hpFivePerLevel": 0.9,
        "mpFive": 4.6,
        "mpFivePerLevel": 0.42,
        "passive": {
            "name": "Reach",
            "description": "After using any ability, Athena's next basic attack is a ranged attack, hitting all enemies it passes through, and dealing an additional +25% of her magical power as damage.",
            "icon": "images/smite/abilities/reach.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Preemptive Strike",
            "description": "Athena powers up for a dash. While dashing, Athena will pass through minions and stop and hit the first enemy god she encounters, dealing damage and slowing all she hits. If she hits an enemy, Athena gains one stack of Block (max 3), absorbing the next basic attack from any god that hits her.",
            "damage": [
                80,
                130,
                180,
                230,
                280
            ],
            "powerDamage": 50,
            "cooldown": 14,
            "cost": [
                60,
                70,
                80,
                90,
                100
            ],
            "icon": "images/smite/abilities/preemptive strike.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Confound",
            "description": "Athena releases a shockwave of power from her shield, taunting enemy gods, and forcing them to fight or chase her.",
            "cooldown": 18,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/confound.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Shield Wall",
            "description": "Athena summons a group of Athenian warriors who do damage upon arrival, and after 2s strike for additional damage.",
            "damage": [
                60,
                95,
                130,
                165,
                200
            ],
            "powerDamage": 50,
            "cooldown": 14,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "secondaryDamage": {
                "damage": [
                    80,
                    150,
                    220,
                    290,
                    360
                ],
                "powerDamage": 50
            },
            "icon": "images/smite/abilities/shield wall.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Defender of Olympus",
            "description": "Athena picks a single allied god anywhere in the world, and launches herself up into the air, landing next to that god 4.2 seconds later. During that 4.2 seconds, the allied god mitigates 20% of the damage it's taking. Enemies nearby when Athena lands take damage.",
            "damage": [
                350,
                430,
                510,
                590,
                670
            ],
            "powerDamage": 90,
            "cooldown": [
                110,
                110,
                110,
                110,
                110
            ],
            "cost": [
                80,
                90,
                100,
                110,
                120
            ],
            "icon": "images/smite/abilities/defender of olympus.jpg"
        },
        "icon": "images/smite/gods/athena.jpg"
    },
    {
        "name": "Awilix",
        "title": "Goddess of the Moon",
        "pantheon": "Mayan",
        "type": "Assassin ",
        "attackType": "Melee",
        "powerType": "Physical",
        "pros": "High Single Target Damage, High Mobility",
        "health": 475,
        "healthPerLevel": 77,
        "mana": 220,
        "manaPerLevel": 38,
        "speed": 370,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 1.89,
        "damage": 38,
        "damagePerLevel": 2.16,
        "physicalProtection": 13,
        "physicalProtectionPerLevel": 3,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 10,
        "hpFivePerLevel": 0.68,
        "mpFive": 3.9,
        "mpFivePerLevel": 0.27,
        "passive": {
            "name": "Initiative",
            "description": "If Awilix strikes first from out of combat, she increases her physical power for a short duration.",
            "icon": "images/smite/abilities/initiative.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Summon Suku",
            "description": "Awilix mounts her Panther Suku, gaining movement speed but decreasing strafe speed. Awilix may leap off of Suku to deal damage to all enemies in the target area.  Canceling this ability before leaping will not trigger its cooldown.",
            "damage": [
                80,
                130,
                180,
                230,
                280
            ],
            "powerDamage": 80,
            "cooldown": 15,
            "cost": [
                50,
                55,
                60,
                65,
                70
            ],
            "icon": "images/smite/abilities/summon suku.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Feather Step",
            "description": "Awilix flips over the last enemy she hit within 1.5s, rooting, crippling, and dealing damage as she passes over them. The damage dealt is modified based on the next attack in Awilix's basic attack progression.  If the next attack is her third attack, then she also hits all targets in the area around her.",
            "damage": [
                40,
                75,
                110,
                145,
                180
            ],
            "powerDamage": 50,
            "cooldown": 8,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/feather step.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Moonlight Charge",
            "description": "Suku comes to Awilix's aid, rushing forward and damaging all enemies. If hit from behind, enemies are also knocked up into the air.",
            "damage": [
                90,
                130,
                170,
                210,
                250
            ],
            "powerDamage": 70,
            "cooldown": 12,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/moonlight charge.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Gravity Surge",
            "description": "Awilix calls upon the power of the moon, immediately pulling to her the closest enemy god she is facing that is either Leaping or Knocked Up into the air. The target god takes damage when it lands.  Awilix is then bathed in moonlight, gaining bonus attack speed and Physical Power for 5s.",
            "damage": [
                200,
                250,
                300,
                350,
                400
            ],
            "powerDamage": 80,
            "cooldown": [
                90,
                85,
                80,
                75,
                70
            ],
            "cost": 100,
            "icon": "images/smite/abilities/gravity surge.jpg"
        },
        "icon": "images/smite/gods/awilix.jpg"
    },
    {
        "name": "Bacchus",
        "title": "God of Wine",
        "pantheon": "Roman",
        "type": "Guardian ",
        "attackType": "Melee",
        "powerType": "Magical",
        "pros": "High Crowd Control, High Defense",
        "health": 495,
        "healthPerLevel": 86,
        "mana": 200,
        "manaPerLevel": 40,
        "speed": 365,
        "attackSpeed": 0.88,
        "attackSpeedPerLevel": 1,
        "damage": 37,
        "damagePerLevel": 1.5,
        "physicalProtection": 19,
        "physicalProtectionPerLevel": 3,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 8,
        "hpFivePerLevel": 0.8,
        "mpFive": 4.8,
        "mpFivePerLevel": 0,
        "passive": {
            "name": "Drunk-O-Meter",
            "description": "Bacchus loves the drink and as Bacchus drinks from his jug, he becomes more intoxicated, gaining buffs when he gets Tipsy and Smashed.",
            "icon": "images/smite/abilities/drunk-o-meter.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Chug",
            "description": "Bacchus takes a drink from his jug, giving him additional buffs.  Bacchus celebrates when he kills an enemy god, giving him 10% on his meter.",
            "cooldown": 10,
            "cost": [
                40,
                45,
                50,
                55,
                60
            ],
            "icon": "images/smite/abilities/chug.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Belly Flop",
            "description": "Bacchus jumps into the air and, not so gracefully, comes slamming to the ground belly first, knocking all enemies into the air and dealing damage. If he is Tipsy, all enemies are also slowed after they land.",
            "damage": [
                90,
                130,
                170,
                210,
                250
            ],
            "powerDamage": 70,
            "cooldown": 16,
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "icon": "images/smite/abilities/belly flop.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Belch of the Gods",
            "description": "Bacchus lets out an obnoxiously loud belch, doing damage every .5s for 2s. If he is Tipsy, enemies are stunned for 1s and their healing is debuffed.",
            "damage": [
                25,
                40,
                55,
                70,
                85
            ],
            "powerDamage": 15,
            "cooldown": 14,
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "ticks": 4,
            "icon": "images/smite/abilities/belch of the gods.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Intoxicate",
            "description": "Bacchus smashes his jug of wine on the ground, intoxicating all nearby enemies and doing damage. If he is Smashed, Bacchus also gains a magical power buff because of his anger over his lost wine!",
            "damage": [
                250,
                325,
                400,
                475,
                550
            ],
            "powerDamage": 70,
            "cooldown": 90,
            "cost": 95,
            "icon": "images/smite/abilities/intoxicate.jpg"
        },
        "icon": "images/smite/gods/bacchus.jpg"
    },
    {
        "name": "Bakasura",
        "title": "The Great Devourer",
        "pantheon": "Hindu",
        "type": "Assassin ",
        "attackType": "Melee",
        "powerType": "Physical",
        "pros": "High Single Target Damage",
        "health": 455,
        "healthPerLevel": 78,
        "mana": 200,
        "manaPerLevel": 39,
        "speed": 370,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 1.6,
        "damage": 38,
        "damagePerLevel": 2.2,
        "physicalProtection": 13,
        "physicalProtectionPerLevel": 2.8,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 9,
        "hpFivePerLevel": 0.68,
        "mpFive": 4.8,
        "mpFivePerLevel": 0.46,
        "passive": {
            "name": "Insatiable Hunger",
            "description": "Bakasura's attack and movement speed temporarily increases for each enemy that he kills.",
            "icon": "images/smite/abilities/insatiable hunger.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Take Down",
            "description": "Bakasura leaps to his ground target location, doing damage to all enemies in the area and reducing their physical protection.",
            "damage": [
                100,
                160,
                220,
                280,
                340
            ],
            "powerDamage": 60,
            "cooldown": 12,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/take down.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Eat Minion",
            "description": "Bakasura grabs a minion and devours it, healing himself and gaining a protections buff. Buff wielding minions must be at 33% health to be consumed. Up to 6 minions are stored for Regurgitate.",
            "cooldown": [
                15,
                15,
                15,
                15,
                15
            ],
            "cost": 55,
            "icon": "images/smite/abilities/eat minion.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Butcher Blades",
            "description": "Bakasura passively gains physical power. When activated, he gains additional true damage on each strike for the duration.",
            "damage": [
                10,
                25,
                40,
                55,
                70
            ],
            "cooldown": 14,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/butcher blades.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Regurgitate",
            "description": "Bakasura exposes his head, regurgitating all of the minions consumed by his Eat Minion ability at his ground target location that slows and cripples enemy players.  Bakasura's basic attacks become cone attacks and he is immune to crowd control for a short duration.",
            "cooldown": [
                90,
                85,
                80,
                75,
                70
            ],
            "cost": [
                80,
                90,
                100,
                110,
                120
            ],
            "icon": "images/smite/abilities/regurgitate.jpg"
        },
        "icon": "images/smite/gods/bakasura.jpg"
    },
    {
        "name": "Bastet",
        "title": "Goddess of Cats",
        "pantheon": "Egyptian",
        "type": "Assassin ",
        "attackType": "Melee",
        "powerType": "Physical",
        "pros": "High Single Target Damage",
        "health": 415,
        "healthPerLevel": 80,
        "mana": 230,
        "manaPerLevel": 39,
        "speed": 375,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 1.98,
        "damage": 38,
        "damagePerLevel": 2.13,
        "physicalProtection": 12,
        "physicalProtectionPerLevel": 2.9,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 9,
        "hpFivePerLevel": 0.72,
        "mpFive": 4.4,
        "mpFivePerLevel": 0.25,
        "passive": {
            "name": "Open Wound",
            "description": "When Bastet hits an enemy with Pounce, Razor Whip or Declaw, she wounds the target for a brief time.  If the target has a wound, those abilities deal additional damage and remove the wound instead.",
            "icon": "images/smite/abilities/open wound.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Pounce",
            "description": "Bastet pounces to her target location, damaging enemies within the radius. For 4 seconds after pouncing, you can press the button again to pounce back to your initial location. Bastet moves 25% faster while in the return pounce state.",
            "damage": [
                80,
                145,
                210,
                275,
                340
            ],
            "powerDamage": 100,
            "cooldown": 12,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/pounce.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Razor Whip",
            "description": "Bastet swipes at her enemies, causing them to bleed for damage every second for the duration.",
            "damage": [
                30,
                50,
                70,
                90,
                110
            ],
            "powerDamage": 20,
            "cooldown": 13,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "ticks": 4,
            "icon": "images/smite/abilities/razor whip.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Declaw",
            "description": "Bastet throws her dagger, which detonates on her target dealing damage and slowing the enemies in the area.",
            "damage": [
                70,
                120,
                170,
                220,
                270
            ],
            "powerDamage": 100,
            "cooldown": 10,
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "icon": "images/smite/abilities/declaw.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Cat Call",
            "description": "Bastet summons 3 cats that attack nearby targets, slowing and damaging them.  Sensing the smell of blood, the cats will attack bleeding enemies first.",
            "damage": [
                25,
                35,
                45,
                55,
                65
            ],
            "powerDamage": 20,
            "cooldown": 90,
            "cost": [
                90,
                95,
                100,
                105,
                110
            ],
            "icon": "images/smite/abilities/cat call.jpg"
        },
        "icon": "images/smite/gods/bastet.jpg"
    },
    {
        "name": "Bellona",
        "title": "Goddess of War",
        "pantheon": "Roman",
        "type": " Warrior ",
        "attackType": "Melee",
        "powerType": "Physical",
        "pros": "High Defense",
        "health": 480,
        "healthPerLevel": 85,
        "mana": 220,
        "manaPerLevel": 35,
        "speed": 375,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 1.2,
        "damage": 36,
        "damagePerLevel": 2,
        "physicalProtection": 18,
        "physicalProtectionPerLevel": 3,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 8,
        "hpFivePerLevel": 0.8,
        "mpFive": 4.8,
        "mpFivePerLevel": 0.4,
        "passive": {
            "name": "Master of War",
            "description": "Upon giving or receiving hits from basic attacks, Bellona gains protections and movement speed for 4s. (max 5 stacks).",
            "stacks": {
                "current": 0,
                "max": 5,
                "stacks": [
                    {
                        "magicalProtection": 4
                    },
                    {
                        "physicalProtection": 4
                    },
                    {
                        "movementSpeed": 3
                    }
                ],
                "type": "temporary"
            },
            "icon": "images/smite/abilities/master of war.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Shield Bash",
            "description": "Bellona dashes forward and bashes with her shield, dealing damage and slowing enemies. Bellona gains 1 stack of block for each enemy hit. Block absorbs all damage from a single basic attack and reflects a portion of the damage around her. Bellona then makes basic attacks with sword and shield until out of combat, and every 3 successful basic attacks she gains another stack of block (max 3).",
            "damage": [
                80,
                120,
                160,
                200,
                240
            ],
            "powerDamage": 40,
            "cooldown": 15,
            "cost": 75,
            "icon": "images/smite/abilities/shield bash.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Bludgeon",
            "description": "Bellona summons a Hammer and spins, hitting every enemy around her and then smashing forward in an overhand attack. Each enemy god hit in the spin increases the damage of the overhand attack. Bellona now makes basic attacks with her Hammer until out of combat. Every Hammer attack hits all enemies in melee range.",
            "damage": [
                30,
                60,
                90,
                120,
                150
            ],
            "powerDamage": 25,
            "cooldown": [
                14,
                13,
                12,
                11,
                10
            ],
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "secondaryDamage": {
                "damage": [
                    70,
                    130,
                    190,
                    250,
                    310
                ],
                "powerDamage": 60
            },
            "icon": "images/smite/abilities/bludgeon.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Scourge",
            "description": "Bellona summons a Scourge, dealing damage to all enemies in a line. Enemies hit are Disarmed, and cannot make basic attacks. Bellona now makes basic attacks with a Scourge until out of combat, which has extended range (+4) and every third attack heals Bellona.",
            "damage": [
                60,
                100,
                140,
                180,
                220
            ],
            "powerDamage": 50,
            "cooldown": [
                20,
                19,
                18,
                17,
                16
            ],
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "icon": "images/smite/abilities/scourge.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Eagle's Rally",
            "description": "Bellona plants a Roman flag, granting protections and increased physical power to allied gods. Enemies directly under where the flag is placed take damage and are stunned for 1s.",
            "damage": [
                100,
                200,
                300,
                400,
                500
            ],
            "powerDamage": 50,
            "cooldown": [
                75,
                75,
                75,
                75,
                75
            ],
            "cost": 100,
            "icon": "images/smite/abilities/eagle's rally.jpg"
        },
        "icon": "images/smite/gods/bellona.jpg"
    },
    {
        "name": "Cabrakan",
        "title": "Destroyer of Mountains",
        "pantheon": "Mayan",
        "type": "Guardian",
        "attackType": "Melee",
        "powerType": "Magical",
        "pros": "High Crowd Control, High Defense",
        "health": 490,
        "healthPerLevel": 90,
        "mana": 200,
        "manaPerLevel": 34,
        "speed": 365,
        "attackSpeed": 0.9,
        "attackSpeedPerLevel": 1.2,
        "damage": 38,
        "damagePerLevel": 1.5,
        "physicalProtection": 20,
        "physicalProtectionPerLevel": 3.3,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 8,
        "hpFivePerLevel": 0.75,
        "mpFive": 4.6,
        "mpFivePerLevel": 0.42,
        "passive": {
            "name": "Shadow Zone",
            "description": "Allies near Cabrakan take 5% reduced damage.",
            "icon": "images/smite/abilities/shadow zone.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Seismic Crush",
            "description": "Cabrakan becomes enraged, increasing his movement speed. While active, Cabrakan's next successful basic attack will stun and do bonus damage. Additionally, Cabrakan is immune to slows and roots while this ability is active.",
            "damage": [
                100,
                145,
                190,
                235,
                280
            ],
            "powerDamage": 50,
            "cooldown": [
                18,
                17,
                16,
                15,
                14
            ],
            "cost": [
                50,
                55,
                60,
                65,
                70
            ],
            "icon": "images/smite/abilities/seismic crush.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Refraction Shield",
            "description": "Passive: Cabrakan gains increased protections from his shields. As his shields take damage they store energy and gain stacks but shed those protections per stack.  Active: Cabrakan slams his shields together creating a concussive blast and damaging enemies in front of him. If his shields have max stacks then the enemies hit are stunned.",
            "damage": [
                100,
                155,
                210,
                265,
                320
            ],
            "powerDamage": 50,
            "cooldown": 10,
            "cost": [
                65,
                70,
                75,
                80,
                85
            ],
            "icon": "images/smite/abilities/refraction shield.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Tremors",
            "description": "Cabrakan repeatedly slams the ground with his shields creating an earthquake and causing enemies around him to tremble. Enemies caught in the earthquake are damaged and are slowly sucked in towards Cabrakan.",
            "damage": [
                22,
                32,
                42,
                52,
                62
            ],
            "powerDamage": 35,
            "cooldown": 8,
            "cost": [
                15,
                20,
                25,
                30,
                35
            ],
            "ticks": 20,
            "icon": "images/smite/abilities/tremors.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Tectonic Shift",
            "description": "Cabrakan stomps the ground creating a wall of earth and a fissure that travels out in front of him and damages any enemies caught in its path. The walls may be destroyed if they take enough damage. Cabrakan may destroy his own walls with a single basic attack.",
            "damage": [
                150,
                250,
                350,
                450,
                550
            ],
            "powerDamage": 70,
            "cooldown": 75,
            "cost": 100,
            "icon": "images/smite/abilities/tectonic shift.jpg"
        },
        "icon": "images/smite/gods/cabrakan.jpg"
    },
    {
        "name": "Camazotz",
        "title": "Deadly God of Bats",
        "pantheon": "Mayan",
        "type": "Assassin",
        "attackType": "Melee",
        "powerType": "Physical",
        "pros": "Great Jungler, Has Healing",
        "health": 440,
        "healthPerLevel": 78,
        "mana": 240,
        "manaPerLevel": 35,
        "speed": 375,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 2,
        "damage": 37,
        "damagePerLevel": 2.9,
        "physicalProtection": 13,
        "physicalProtectionPerLevel": 3,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0,
        "hpFive": 8,
        "hpFivePerLevel": 0.67,
        "mpFive": 4.4,
        "mpFivePerLevel": 0.3,
        "passive": {
            "name": "Essence Drinker",
            "description": "Anytime a god dies they leave behind a pool of their essence in the spot they were slain. Camazotz may stand inside these pools to drink the essence, replenishing his health and mana. If Camazotz is out of combat he drinks faster.",
            "icon": "images/smite/abilities/essence drinker.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Screech",
            "description": "Camazotz screeches loudly and launches a sound wave that pierces through minions and deals damage. If the screech hits an enemy god, the sound wave will echo. If Camazotz is hit by an echo, he gains vision of the god that was hit by screech for the next 15s and gains bonus Physical Power for the duration.",
            "damage": [
                90,
                130,
                170,
                210,
                250
            ],
            "powerDamage": 60,
            "cooldown": 13,
            "cost": [
                50,
                55,
                60,
                65,
                70
            ],
            "toggleStats": {
                "physicalPower": [
                    10,
                    15,
                    20,
                    25,
                    30
                ],
                "toggle": false
            },
            "icon": "images/smite/abilities/screech.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Vampire Bats",
            "description": "Camazotz commands a swarm of bats to fly out and attack a single target, damaging and slowing them and then carrying back health. If the target was a jungle buff monster they will be marked and Camazotz will receive a stackable Vampirism buff that lasts 210s in addition to the health. Marked monsters will not provide Camazotz with another stack of Vampirism.",
            "damage": [
                70,
                110,
                150,
                190,
                230
            ],
            "powerDamage": 130,
            "cooldown": 10,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/vampire bats.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Devour",
            "description": "Camazotz Leaps forward a short distance dealing damage on impact and healing himself per enemy hit.",
            "damage": [
                80,
                140,
                200,
                260,
                320
            ],
            "powerDamage": 75,
            "cooldown": 15,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/devour.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Bat Out of Hell",
            "description": "Camazotz flies into the air, becoming CC immune for the next 3s. While flying, he may swoop forward to deal damage. He may do this up to 3 times, landing on the 3rd time. Hitting more than one enemy god per swoop will deal additional to enemies beyond the first.",
            "damage": [
                100,
                145,
                190,
                235,
                280
            ],
            "powerDamage": 40,
            "cooldown": 90,
            "cost": 100,
            "ticks": 3,
            "icon": "images/smite/abilities/bat out of hell.jpg"
        },
        "icon": "images/smite/gods/camazotz.jpg"
    },
    {
        "name": "Cernunnos",
        "title": "The Horned God",
        "pantheon": "Celtic",
        "type": "Hunter",
        "attackType": "Ranged",
        "powerType": "Physical",
        "pros": "High Area Damage, High Crowd Control",
        "health": 480,
        "healthPerLevel": 80,
        "mana": 220,
        "manaPerLevel": 37,
        "speed": 365,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 1.4,
        "damage": 37,
        "damagePerLevel": 2.5,
        "physicalProtection": 13,
        "physicalProtectionPerLevel": 2.9,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 8,
        "hpFivePerLevel": 0.69,
        "mpFive": 4.5,
        "mpFivePerLevel": 0.32,
        "passive": {
            "name": "Heavy Glaive",
            "description": "Cernunnos wields a Glaive as a weapon. His basic attacks deal additional damage to all enemies in melee range while he is throwing it. The additional damage from Heavy Throw does not proc any effects from items or abilities.",
            "toggleStats": {
                "basicAttackPercentIncrease": 0.25,
                "toggle": false
            },
            "icon": "images/smite/abilities/heavy glaive.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Shifter of Seasons",
            "description": "Cernunnos imbues his glaive with the power of the 4 seasons. Activating this ability rotates him through 4 different bonuses to his basic attacks.",
            "cooldown": 0.5,
            "cost": [
                0,
                0,
                0,
                0,
                0
            ],
            "icon": "images/smite/abilities/shifter of seasons.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Bramble Blast",
            "description": "Cernunnos fires a bramble forward in a line that roots a single enemy hit. Upon hitting an enemy, wall, or reaching max range it will explode dealing damage and spawning an area of brambles at the location. This area deals damage every .5s, and persists for 5s.",
            "damage": [
                40,
                80,
                120,
                160,
                200
            ],
            "powerDamage": 75,
            "cooldown": 15,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/bramble blast.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Horn Charge",
            "description": "Cernunnos charges forward, damaging and crashing through all types of enemies.",
            "damage": [
                70,
                125,
                180,
                235,
                290
            ],
            "powerDamage": 80,
            "cooldown": [
                17,
                16,
                15,
                14,
                13
            ],
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "icon": "images/smite/abilities/horn charge.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "The Wild Hunt",
            "description": "Cernunnos selects an area where The Wild Hunt will begin. After a 1s delay, enemies in the area will be damaged and Polymorphed into wild boars. Polymorphed targets are silenced and disarmed. Polymorph is not affected by diminishing returns.",
            "damage": [
                200,
                250,
                300,
                350,
                400
            ],
            "powerDamage": 90,
            "cooldown": 100,
            "cost": [
                100,
                110,
                120,
                130,
                140
            ],
            "icon": "images/smite/abilities/the wild hunt.jpg"
        },
        "icon": "images/smite/gods/cernunnos.jpg"
    },
    {
        "name": "Chaac",
        "title": "God of Rain",
        "pantheon": "Mayan",
        "type": "Warrior ",
        "attackType": "Melee",
        "powerType": "Physical",
        "pros": "High Sustain",
        "health": 480,
        "healthPerLevel": 85,
        "mana": 205,
        "manaPerLevel": 35,
        "speed": 375,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 1,
        "damage": 39,
        "damagePerLevel": 2.1,
        "physicalProtection": 18,
        "physicalProtectionPerLevel": 3,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 7,
        "hpFivePerLevel": 0.8,
        "mpFive": 4.7,
        "mpFivePerLevel": 0.39,
        "passive": {
            "name": "Overflow",
            "description": "After 5 successful basic attacks, the next ability Chaac uses costs no mana.",
            "icon": "images/smite/abilities/overflow.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Thunder Strike",
            "description": "Chaac throws his axe forward, damaging all enemies in a radius around its landing location. The axe remains idle in the ground for 5s or until another ability is used.",
            "damage": [
                80,
                140,
                200,
                260,
                320
            ],
            "powerDamage": 60,
            "cooldown": 10,
            "cost": [
                50,
                55,
                60,
                65,
                70
            ],
            "icon": "images/smite/abilities/thunder strike.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Torrent",
            "description": "Chaac spins his axe around him, damaging all enemies, and gaining protections for each enemy hit (max 5). If his axe is out from Thunder Strike, he will first dash to the axe location, doing 50% base damage to enemies he passes through and then executing his spin attack.",
            "damage": [
                100,
                150,
                200,
                250,
                300
            ],
            "powerDamage": 70,
            "cooldown": 15,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/torrent.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Rain Dance",
            "description": "Chaac summons a rainstorm around his current location for 6s. While it rains, he regains health, and enemies are caught in the mud and slowed.  If his axe is out from Thunder Strike, a rainstorm will also spawn at that location.",
            "cooldown": 18,
            "cost": [
                75,
                80,
                85,
                90,
                95
            ],
            "icon": "images/smite/abilities/rain dance.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Storm Call",
            "description": "Chaac charges his lighting axe and unleashes a blast, silencing and damaging all enemies around him. While in the air, Chaac has 50% damage mitigation and is immune to CC effects.  If triggered within range of Chaac's axe from Thunder Strike, Storm Call will super-charge, dealing additional damage and also knocking up enemies.",
            "damage": [
                250,
                300,
                350,
                400,
                450
            ],
            "powerDamage": 120,
            "cooldown": 75,
            "cost": [
                80,
                90,
                100,
                110,
                120
            ],
            "secondaryDamage": {
                "damage": [
                    50,
                    75,
                    100,
                    125,
                    150
                ],
                "powerDamage": 20
            },
            "icon": "images/smite/abilities/storm call.jpg"
        },
        "icon": "images/smite/gods/chaac.jpg"
    },
    {
        "name": "Chang'e",
        "title": "Faerie of the Moon",
        "pantheon": "Chinese",
        "type": "Mage ",
        "attackType": "Ranged",
        "powerType": "Magical",
        "pros": "High Sustain, High Mobility",
        "health": 375,
        "healthPerLevel": 70,
        "mana": 290,
        "manaPerLevel": 43,
        "speed": 355,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 0.95,
        "damage": 32,
        "damagePerLevel": 1.45,
        "physicalProtection": 11,
        "physicalProtectionPerLevel": 2.7,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 6,
        "hpFivePerLevel": 0.45,
        "mpFive": 5.5,
        "mpFivePerLevel": 0.44,
        "passive": {
            "name": "Jade Rabbit",
            "description": "Chang'e can purchase or sell items from anywhere and her Jade Rabbit companion will fetch them. When the rabbit reaches the store then returns, the transaction completes. Only one item can be purchased or sold in this way at a time. Chang'e also gains +25% movement speed with no backpedal penalty when using her dances.",
            "icon": "images/smite/abilities/jade rabbit.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Crescent Moon Dance",
            "description": "Chang'e flings a crescent moon in an arc, dealing damage to all enemies in its path.",
            "damage": [
                80,
                120,
                160,
                200,
                240
            ],
            "powerDamage": 60,
            "cooldown": 6,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/crescent moon dance.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Moonlit Waltz",
            "description": "Chang'e performs an evasive spin dance, unable to be hit during the action.  For each tick of damage from an ability that was avoided, Chang'e restores mana to herself and her allies.",
            "cooldown": [
                20,
                18,
                17,
                15,
                14
            ],
            "cost": 60,
            "icon": "images/smite/abilities/moonlit waltz.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Moonflower Dance",
            "description": "Chang'e twirls, scattering flowers around her, and healing herself and all nearby allies and damaging nearby enemies.  Moonflower Dance also reduces the healing of all nearby enemies.",
            "damage": [
                65,
                90,
                115,
                140,
                165
            ],
            "powerDamage": 50,
            "cooldown": 12,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/moonflower dance.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Waxing Moon",
            "description": "Chang'e's Waxing Moon dance is captivating, with this dance dealing damage and stunning enemies in front of her.  Each subsequent god that is stunned is stunned for longer than the previous one.",
            "damage": [
                160,
                225,
                290,
                355,
                420
            ],
            "powerDamage": 70,
            "cooldown": 90,
            "cost": [
                80,
                90,
                100,
                110,
                120
            ],
            "icon": "images/smite/abilities/waxing moon.jpg"
        },
        "icon": "images/smite/gods/chang'e.jpg"
    },
    {
        "name": "Chiron",
        "title": "The Great Teacher",
        "pantheon": "Greek",
        "type": " Hunter ",
        "attackType": "Ranged",
        "powerType": "Physical",
        "pros": "High Movement Speed, Has Healing",
        "health": 460,
        "healthPerLevel": 75,
        "mana": 225,
        "manaPerLevel": 40,
        "speed": 380,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 1.1,
        "damage": 35,
        "damagePerLevel": 2.35,
        "physicalProtection": 12,
        "physicalProtectionPerLevel": 2.8,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 6,
        "hpFivePerLevel": 0.65,
        "mpFive": 4.4,
        "mpFivePerLevel": 0.38,
        "passive": {
            "name": "Herbal Medicine",
            "description": "Every 12s Chiron collects herbs for a poultice, which increases all healing Chiron receives for each poultice he carries. Each time he uses an ability, the lowest health ally within 30' is healed, consuming a poultice.",
            "icon": "images/smite/abilities/herbal medicine.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Training Excercise",
            "description": "Chiron warns his teammates to evade the area, removing crowd control effects so they can escape before it explodes, damaging and crippling all enemies in the area.",
            "damage": [
                80,
                135,
                190,
                245,
                300
            ],
            "powerDamage": 80,
            "cooldown": 13,
            "cost": [
                55,
                60,
                65,
                70,
                75
            ],
            "icon": "images/smite/abilities/training excercise.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Masterful Shot",
            "description": "Chiron passively marks his enemies as targets when he damages them with Basic Attacks or Centaurus, reducing their Physical Protections by 3%. He may activate this ability to fire seeking arrows at all marked targets within range, damaging and slowing them.",
            "damage": [
                55,
                100,
                145,
                190,
                235
            ],
            "powerDamage": 70,
            "cooldown": 16,
            "cost": 65,
            "icon": "images/smite/abilities/masterful shot.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Giddyup!",
            "description": "Chiron gallops forward damaging enemies, knockup up minions, and kicking enemy gods behind him. Chiron may fire Basic Attacks while charging.",
            "damage": [
                70,
                95,
                120,
                145,
                160
            ],
            "powerDamage": 50,
            "cooldown": 16,
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "toggleStats": {
                "physicalPower": [
                    10,
                    20,
                    30,
                    40,
                    50
                ],
                "toggle": false
            },
            "icon": "images/smite/abilities/giddyup!.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Centaurus",
            "description": "Chiron is transformed into a constellation, and can fire three long distance shots, even through walls. If Chiron would be killed during this ability, he does not die until he runs out of time or shots. Killing an enemy in this state returns Chiron to life with health equal to the damage dealt instead. Applies target mark.",
            "damage": [
                130,
                175,
                220,
                265,
                310
            ],
            "powerDamage": 90,
            "cooldown": 90,
            "cost": [
                80,
                90,
                100,
                110,
                120
            ],
            "ticks": 3,
            "icon": "images/smite/abilities/centaurus.jpg"
        },
        "icon": "images/smite/gods/chiron.jpg"
    },
    {
        "name": "Chronos",
        "title": "Keeper of Time",
        "pantheon": "Greek",
        "type": "Mage ",
        "attackType": "Ranged",
        "powerType": "Magical",
        "pros": "Medium Crowd Control, High Mobility",
        "health": 370,
        "healthPerLevel": 70,
        "mana": 240,
        "manaPerLevel": 42,
        "speed": 360,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 0.8,
        "damage": 40,
        "damagePerLevel": 1.5,
        "physicalProtection": 11,
        "physicalProtectionPerLevel": 2.9,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 7,
        "hpFivePerLevel": 0.48,
        "mpFive": 4.4,
        "mpFivePerLevel": 0.44,
        "passive": {
            "name": "Wheel of Time",
            "description": "The wheel of time is always spinning and for Chronos, it is no different. Depending on where the wheel is when activating Accelerate, it provides a different benefit to Chronos.",
            "select": {
                "options": [
                    {
                        "label": "Off"
                    },
                    {
                        "label": "Section I",
                        "hpFiveFromPercentMaxHealth": 0.015
                    },
                    {
                        "label": "Section III",
                        "magicalPowerPercentage": 0.25
                    },
                    {
                        "label": "Section IV",
                        "basicAttackPowerPercentContribution": 0.45
                    }
                ],
                "current": ""
            },
            "icon": "images/smite/abilities/wheel of time.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Time Rift",
            "description": "Chronos creates a rift in time, damaging all enemies in the area.",
            "damage": [
                80,
                125,
                170,
                215,
                260
            ],
            "powerDamage": 80,
            "cooldown": 5,
            "cost": [
                50,
                55,
                60,
                65,
                70
            ],
            "icon": "images/smite/abilities/time rift.jpg",
            "stacks": {
                "current": 0,
                "max": 25,
                "stacks": [
                    {
                        "magicalPower": 3
                    }
                ],
                "type": "permanent"
            }
        },
        "abilityTwo": {
            "level": 5,
            "name": "Accelerate",
            "description": "Chronos accelerates himself over time, allowing him to move faster initially and gain speed over time. While active, his attack speed is increased and he is not affected by the attacking movement speed debuff. This ability also stops the Wheel of Time.",
            "cooldown": 15,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "toggleStats": {
                "attackSpeed": [
                    15,
                    20,
                    25,
                    30,
                    35
                ],
                "movementSpeed": [
                    37,
                    39,
                    41,
                    43,
                    45
                ],
                "toggle": false
            },
            "icon": "images/smite/abilities/accelerate.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Stop Time",
            "description": "Shooting forward spinning gears of time, any enemies hit by Chronos' attack are slowed to a stun, taking damage on the initial hit and again when they are stunned.",
            "damage": [
                50,
                70,
                90,
                110,
                130
            ],
            "powerDamage": 40,
            "cooldown": [
                18,
                17,
                16,
                15,
                14
            ],
            "cost": [
                65,
                70,
                75,
                80,
                85
            ],
            "ticks": 2,
            "icon": "images/smite/abilities/stop time.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Rewind",
            "description": "Chronos travels through time to where he was 8 seconds ago, gaining health and mana back to the values of that time.  All of his cooldowns are instantly reset as well.",
            "cooldown": [
                100,
                95,
                90,
                85,
                80
            ],
            "cost": 100,
            "icon": "images/smite/abilities/rewind.jpg"
        },
        "icon": "images/smite/gods/chronos.jpg"
    },
    {
        "name": "Cu Chulainn",
        "title": "The Hound of Ulster",
        "pantheon": "Celtic",
        "type": "Warrior",
        "attackType": "Melee",
        "powerType": "Physical",
        "pros": "High Crowd Control, High Area Damage",
        "health": 465,
        "healthPerLevel": 82,
        "mana": 100,
        "manaPerLevel": 0,
        "speed": 370,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 1.25,
        "damage": 38,
        "damagePerLevel": 2,
        "physicalProtection": 17,
        "physicalProtectionPerLevel": 3,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 7,
        "hpFivePerLevel": 0.75,
        "mpFive": 0,
        "mpFivePerLevel": 0,
        "passive": {
            "name": "Berserk",
            "description": "Cu Chulainn's Mana, Mp5, and Mana Heals are instead applied to his Health pool. Abilities consume Rage, which stops regen at 25, but he gains Rage upon Hitting with his Abilities as well as 1 Rage for Basic Attacks and when he or allies are Damaged. After 3s above 85, he goes Berserk. While Berserk, Cu Chulainn gains Power and a Health Shield.",
            "icon": "images/smite/abilities/berserk.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Barbed Spear (Ground Slam)",
            "description": "Cu Chulainn thrusts his spear forward, damaging all enemies in front of him and stunning less powerful minions. Successfully hitting an enemy with this ability restores 6 Rage (to a max of 18). Barbs from his spear stick in opponents and reduce their Healing taken for 4s. In his Berserk Form, Cu Chulainn instead slams his massive arms down, damaging and rooting all Enemies in front of him.",
            "damage": [
                75,
                135,
                195,
                255,
                315
            ],
            "powerDamage": 45,
            "cooldown": [
                16,
                15,
                14,
                13,
                12
            ],
            "cost": [
                9,
                9,
                9,
                9,
                9
            ],
            "icon": "images/smite/abilities/barbed spear (ground slam).jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Vent Anger",
            "description": "Cu Chulainn vents his anger as superheated steam, increasing his Movement Speed and draining his Rage. Every .5s while in this state, all enemies within range are damaged by the heat. Vent Anger does not return Rage. In his Berserk form, Cu Chulainn Vents Anger automatically.",
            "damage": [
                10,
                15,
                20,
                25,
                30
            ],
            "powerDamage": 5,
            "cooldown": 6,
            "cost": 16,
            "icon": "images/smite/abilities/vent anger.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Salmon's Leap (Furious Charge)",
            "description": "Cu Chulainn vaults over his spear, leaping to a target location and slamming it down to damage enemies around and in front of him. Successfully hitting an enemy with this ability restores 6 Rage (to a max of 18). In his Berserk Form, Cu Chulainn instead charges forward damaging and driving all enemies back with him.",
            "damage": [
                65,
                120,
                175,
                230,
                285
            ],
            "powerDamage": 60,
            "cooldown": 16,
            "cost": 9,
            "icon": "images/smite/abilities/salmon's leap (furious charge).jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Spear of Mortal Pain (War Cry)",
            "description": "Cu Chulainn swings his spear Gae Bulg in a circle around him, Damaging and Knocking Up all Enemies. Successfully hitting an enemy with this ability restores 12 Rage (to a max of 36). In his Berserk Form, Cu Chulainn instead gives a terrifying yell, Damaging all Enemies and causing them to Tremble.",
            "damage": [
                175,
                250,
                325,
                400,
                475
            ],
            "powerDamage": 65,
            "cooldown": 100,
            "cost": 14,
            "icon": "images/smite/abilities/spear of mortal pain (war cry).jpg"
        },
        "icon": "images/smite/gods/cuchulainn.jpg"
    },
    {
        "name": "Cupid",
        "title": "God of Love",
        "pantheon": "Roman",
        "type": "Hunter ",
        "attackType": "Ranged",
        "powerType": "Physical",
        "pros": "High Single Target Damage, High Sustain",
        "health": 445,
        "healthPerLevel": 72,
        "mana": 230,
        "manaPerLevel": 39,
        "speed": 365,
        "attackSpeed": 0.95,
        "attackSpeedPerLevel": 1.8,
        "damage": 35,
        "damagePerLevel": 2.3,
        "physicalProtection": 11,
        "physicalProtectionPerLevel": 3,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 8,
        "hpFivePerLevel": 0.67,
        "mpFive": 4.6,
        "mpFivePerLevel": 0.35,
        "passive": {
            "name": "Lovestruck",
            "description": "Every hit with a basic attack gives Cupid a stack that increases the damage and healing of his abilities.  At 8 stacks, Heart Bomb and Fields of Love will also apply a 1s stun.",
            "icon": "images/smite/abilities/lovestruck.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Heart Bomb",
            "description": "Cupid fires an arrow of love at the target, causing damage when it hits and slowing them.  After a short time, the targets heart explodes, dealing the damage again to the target and all enemies within the radius.",
            "damage": [
                50,
                80,
                110,
                140,
                170
            ],
            "powerDamage": 90,
            "cooldown": 12,
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "ticks": 2,
            "icon": "images/smite/abilities/heart bomb.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Share the Love",
            "description": "Cupid places 3 floating hearts at his ground target location that heal himself or allied gods when picked up. Cupid regenerates mana for each heart that is picked up by an ally.",
            "cooldown": 14,
            "cost": 50,
            "icon": "images/smite/abilities/share the love.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Flutter",
            "description": "Cupid flutters quickly forward, leaving a trail behind him that increases all allies movement speed. Cupid also gains attack speed for a short time after fluttering!",
            "cooldown": [
                16,
                15,
                14,
                13,
                12
            ],
            "cost": 70,
            "toggleStats": {
                "attackSpeed": [
                    4,
                    8,
                    12,
                    16,
                    20
                ],
                "movementSpeed": [
                    30,
                    30,
                    30,
                    30,
                    30
                ],
                "toggle": false
            },
            "icon": "images/smite/abilities/flutter.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Fields of Love",
            "description": "Cupid fires arrows of love at his ground target location, slowing enemies in the area and crippling them, preventing movement abilities. The arrows grow and explode, dealing damage and mesmerizing enemies. Any damage done breaks the mesmerize effect. ",
            "damage": [
                220,
                300,
                380,
                460,
                540
            ],
            "powerDamage": 100,
            "cooldown": 90,
            "cost": [
                80,
                90,
                100,
                110,
                120
            ],
            "icon": "images/smite/abilities/fields of love.jpg"
        },
        "icon": "images/smite/gods/cupid.jpg"
    },
    {
        "name": "Da Ji",
        "title": "The Nine-Tailed Fox",
        "pantheon": "Chinese",
        "type": "Assassin",
        "attackType": "Melee",
        "powerType": "Physical",
        "pros": "High Single Target Damage",
        "health": 440,
        "healthPerLevel": 76,
        "mana": 210,
        "manaPerLevel": 40,
        "speed": 375,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 2,
        "damage": 39,
        "damagePerLevel": 2.25,
        "physicalProtection": 14,
        "physicalProtectionPerLevel": 3,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 9,
        "hpFivePerLevel": 0.7,
        "mpFive": 4.6,
        "mpFivePerLevel": 0.37,
        "passive": {
            "name": "Torture Blades",
            "description": "Da Ji's sharp claws cause her enemies to Bleed when struck by her basic attacks. Bleeding causes the enemy to take additional damage every 1s for 2s (This damage does not trigger Item effects). Bleed can stack any number of times on the same target.",
            "damage": 7,
            "powerDamage": 20,
            "ticks": 2,
            "icon": "images/smite/abilities/torture blades.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Horrible Burns",
            "description": "Da Ji heats up her claws, causing her next successfully hit Basic Attack to burn the target, dealing instant bonus damage, additional damage every 1s for 3s and Slowing them for 3s.",
            "damage": [
                30,
                60,
                90,
                120,
                150
            ],
            "powerDamage": 45,
            "cooldown": 9,
            "cost": [
                50,
                50,
                50,
                50,
                50
            ],
            "icon": "images/smite/abilities/horrible burns.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "One Thousand Cuts",
            "description": "Da Ji lashes out with her claws at nearby enemies, executing 4 strikes that damage all enemies in range and apply the Bleed from Torture Blades. While this ability is channeling Da Ji moves freely in all directions, gains 40% increased Movement Speed, immunity to Slows and Knockups, and her tails mitigate Damage dealt to her by Enemy Gods who are behind her.",
            "damage": [
                15,
                40,
                65,
                90,
                115
            ],
            "powerDamage": 30,
            "cooldown": 13,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/one thousand cuts.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Trickster Spirit",
            "description": "Da Ji selects a single allied or enemy target and teleports to their location after a short delay. Upon arriving at the target, she lashes out with her claws, dealing damage and applying the Bleed from Torture Blades to all enemies around her.",
            "damage": [
                70,
                110,
                150,
                190,
                230
            ],
            "powerDamage": 85,
            "cooldown": 17,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "ticks": 4,
            "icon": "images/smite/abilities/trickster spirit.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Paolao",
            "description": "Da Ji Summons her signature torture device, the Paolao. As she hovers above the device she may fire up to 3 shots. Enemy gods hit take damage and become Chained and Slowed. At the end of her ability Chained enemies are pulled to the Paolao becoming Stunned and then taking damage 3 times over 2s. If a god hit by this ability becomes Crowd Control immune at any time, they break the Chain on them and cannot be Chained again until this ability ends.",
            "damage": [
                70,
                80,
                90,
                100,
                110
            ],
            "powerDamage": 60,
            "cooldown": 100,
            "cost": 100,
            "icon": "images/smite/abilities/paolao.jpg"
        },
        "icon": "images/smite/gods/daji.jpg"
    },
    {
        "name": "Erlang Shen",
        "title": "The Illustrious Sage",
        "pantheon": "Chinese",
        "type": "Warrior",
        "attackType": "Melee",
        "powerType": "Physical",
        "pros": "High Single Target Damage, High Attack Speed",
        "health": 475,
        "healthPerLevel": 8,
        "mana": 220,
        "manaPerLevel": 3,
        "speed": 375,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 1,
        "damage": 39,
        "damagePerLevel": 2,
        "physicalProtection": 17,
        "physicalProtectionPerLevel": 3,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 8,
        "hpFivePerLevel": 0.6,
        "mpFive": 4.7,
        "mpFivePerLevel": 0.3,
        "passive": {
            "name": "Howling Celestial Dog",
            "description": "Each time Erlang Shen hits an enemy with a Basic Attack, his dog hits as well for 15% of his Basic Attack power, which trigger items for Basic Attacks at 15% of their normal damage and can Critical Hit.",
            "icon": "images/smite/abilities/howling celestial dog.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Spot Weakness",
            "description": "Erlang Shen opens his third eye and analyzes the enemy's strengths and weaknesses. When activated, Erlang Shen gains additional Physical Damage on each strike, and ignores Basic Attack movement penalties for the duration. While on Cooldown, successful Basic Attacks reduce the Cooldown of this ability.",
            "damage": [
                25,
                40,
                55,
                70,
                85
            ],
            "powerDamage": 10,
            "cooldown": 14,
            "cost": [
                60,
                60,
                60,
                60,
                60
            ],
            "icon": "images/smite/abilities/spot weakness.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Pin",
            "description": "Erlang Shen launches a spear that damages enemies on impact. Enemies in the dead center of the effect when it lands are Crippled and Rooted in place.",
            "damage": [
                85,
                130,
                175,
                220,
                265
            ],
            "powerDamage": 45,
            "cooldown": 16,
            "cost": [
                50,
                55,
                60,
                65,
                70
            ],
            "icon": "images/smite/abilities/pin.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "72 Transformations",
            "description": "Erlang Shen transforms into an Mink or Turtle and charges forward. Mink: Damages all enemies, stopping on first god hit and increasing Attack Speed for 6s. Turtle: Knocks up all enemies in path and gains a health shield for 12s.",
            "damage": [
                75,
                125,
                175,
                225,
                275
            ],
            "powerDamage": 40,
            "cooldown": [
                18,
                17,
                16,
                15,
                14
            ],
            "cost": [
                65,
                70,
                75,
                80,
                85
            ],
            "toggleStats": {
                "attackSpeed": [
                    10,
                    15,
                    20,
                    25,
                    30
                ],
                "movementSpeed": [
                    30,
                    30,
                    30,
                    30,
                    30
                ],
                "toggle": false
            },
            "icon": "images/smite/abilities/72transformations.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "9 Turns Blessing",
            "description": "Erlang Shen Taunts nearby Enemy gods, gaining Damage Mitigation for the next 4s. Afterwards, if Erlang Shen is still alive he is Healed for a flat amount plus 20% of his Maximum Health.",
            "cooldown": 85,
            "cost": [
                80,
                85,
                90,
                95,
                100
            ],
            "icon": "images/smite/abilities/9 turns blessing.jpg"
        },
        "icon": "images/smite/gods/erlangshen.jpg"
    },
    {
        "name": "Fafnir",
        "title": "Lord of Glittering Gold",
        "pantheon": "Norse",
        "type": "Guardian",
        "attackType": "Melee",
        "powerType": "Magical",
        "pros": "High Defense, High Mobility",
        "health": 495,
        "healthPerLevel": 90,
        "mana": 200,
        "manaPerLevel": 40,
        "speed": 365,
        "attackSpeed": 0.9,
        "attackSpeedPerLevel": 1.2,
        "damage": 37,
        "damagePerLevel": 1.55,
        "physicalProtection": 21,
        "physicalProtectionPerLevel": 3.4,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 7,
        "hpFivePerLevel": 0.5,
        "mpFive": 4.5,
        "mpFivePerLevel": 0.45,
        "passive": {
            "name": "Endless Greed",
            "description": "Fafnir gains 4 bonus gold from all minions, structures, kills and assists. Fafnir also gains bonus Protections based on the amount of gold he is currently holding. The bonuses gained from this ability are capped at 1000 gold in hand.",
            "stacks": {
                "current": 0,
                "max": 30,
                "stacks": [
                    {
                        "magicalProtection": 1,
                        "physicalProtection": 1
                    }
                ],
                "type": "permanent"
            },
            "icon": "images/smite/abilities/endless greed.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Cursed Strength",
            "description": "Fafnir hurls his hammer forward, dealing damage to enemies in its path. If Fafnir hits a god the hammer stops short and Stuns them for 1s. The Stunned god also radiates out a cursed pulse, Slowing them and nearby enemies for 3s.In dragon form, this ability deals increased damage that ticks every second for 3s. Also, the cursed pulse shreds Protections in addition to Slowing.",
            "damage": [
                80,
                125,
                170,
                215,
                260
            ],
            "powerDamage": 50,
            "cooldown": 15,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/cursed strength.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Coerce",
            "description": "Fafnir coerces his allies into fighting harder, boosting Attack Speed for 5s and healing himself. While Coerce is active Fafnir does additional bonus Magic Damage whenever the affected ally damages an enemy. In dragon form, This ability has a larger area of effect and can buff multiple allies.",
            "cooldown": 16,
            "cost": [
                50,
                55,
                60,
                65,
                70
            ],
            "icon": "images/smite/abilities/coerce.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Underhanded Tactics",
            "description": "Fafnir leaps to a target location and executes a despicable strike, dealing damage and disarming enemies in front of him for 2s. In dragon form, Fafnir can leap much further. Also, this ability deals increased damage that ticks every second for 3s and Fafnir Stuns the enemy closest to him for 2s in addition to Disarming.",
            "damage": [
                80,
                120,
                160,
                200,
                240
            ],
            "powerDamage": 60,
            "cooldown": 18,
            "cost": 60,
            "icon": "images/smite/abilities/underhanded tactics.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Dragonic Corruption",
            "description": "Fafnir transforms into a terrifying dragon and is untargetable during the process. When he emerges in dragon form, nearby enemies are poisoned, taking damage every second for 3s. He remains in this form for a duration or until the ability is activated again. As a dragon, his abilities have additional effects and his basic attack changes to a Dragon Breath that deals damage 3 times per second. Dragon Breath can not proc item hit effects.",
            "damage": [
                80,
                100,
                120,
                140,
                160
            ],
            "powerDamage": 40,
            "cooldown": 90,
            "cost": 70,
            "icon": "images/smite/abilities/dragonic corruption.jpg"
        },
        "icon": "images/smite/gods/fafnir.jpg"
    },
    {
        "name": "Fenrir",
        "title": "The Unbound",
        "pantheon": "Norse",
        "type": "Assassin ",
        "attackType": "Melee",
        "powerType": "Physical",
        "pros": "High Single Target Damage, High Mobility",
        "health": 455,
        "healthPerLevel": 78,
        "mana": 230,
        "manaPerLevel": 35,
        "speed": 370,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 1.7,
        "damage": 38,
        "damagePerLevel": 2.3,
        "physicalProtection": 14,
        "physicalProtectionPerLevel": 3,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 8,
        "hpFivePerLevel": 0.73,
        "mpFive": 4.2,
        "mpFivePerLevel": 0.26,
        "passive": {
            "name": "Unbound Runes",
            "description": "Fenrir gains efficiency as he attacks.  Every hit from a basic attack activates 1 rune, up to a max of 5.  Each of Fenrir's abilities gain an additional benefit when used at maximum runes and the runes are consumed.  Enemy gods that Fenrir kills will fully activate all of his runes.",
            "icon": "images/smite/abilities/unbound runes.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Unchained",
            "description": "Fenrir leaps forward, dealing damage to all enemies when he lands.  At full runes, the leap stuns the enemies hit.  If the leap hits a god, the cooldown is halved.",
            "damage": [
                95,
                155,
                215,
                275,
                335
            ],
            "powerDamage": 80,
            "cooldown": 15,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/unchained.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Seething Howl",
            "description": "Fenrir rears back and howls, inspiring himself with a physical power and lifesteal buff.  At full runes, the buff is increased by 50%.",
            "cooldown": 13,
            "cost": 60,
            "icon": "images/smite/abilities/seething howl.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Brutalize",
            "description": "Fenrir pounces to his ground target location.  If there was an enemy in the radius, he strikes them 4 times, dealing damage with each strike while being immune to knockups.  At full runes, each strike deals 75% damage to nearby enemies.",
            "damage": [
                45,
                75,
                105,
                135,
                165
            ],
            "powerDamage": 50,
            "cooldown": 14,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "ticks": 4,
            "icon": "images/smite/abilities/brutalize.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Ragnarok",
            "description": "Upon Ragnarok, Fenrir grows massive in size, becoming immune to cc while moving faster.  Fenrir bites enemy gods, dealing physical damage and carrying them away.  Biting a cc immune target deals the damage but ends his ultimate.  At full runes, his protections double.",
            "damage": [
                200,
                275,
                350,
                420,
                500
            ],
            "powerDamage": 120,
            "cooldown": 90,
            "cost": 100,
            "icon": "images/smite/abilities/ragnarok.jpg"
        },
        "icon": "images/smite/gods/fenrir.jpg"
    },
    {
        "name": "Freya",
        "title": "Queen of the Valkyries",
        "pantheon": "Norse",
        "type": "Mage ",
        "attackType": "Melee",
        "powerType": "Magical",
        "pros": "High Area Damage, Medium Crowd Control",
        "health": 405,
        "healthPerLevel": 80,
        "mana": 220,
        "manaPerLevel": 37,
        "speed": 370,
        "attackSpeed": 0.95,
        "attackSpeedPerLevel": 1.95,
        "damage": 35,
        "damagePerLevel": 1.5,
        "physicalProtection": 14,
        "physicalProtectionPerLevel": 2.8,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 7,
        "hpFivePerLevel": 0.52,
        "mpFive": 4.5,
        "mpFivePerLevel": 0.39,
        "passive": {
            "name": "Brisingamen's Blessing",
            "description": "Freya's necklace grants her additional magical lifesteal.",
            "magicalLifesteal": 15,
            "icon": "images/smite/abilities/brisingamen's blessing.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Irradiate",
            "description": "Freya activates a buff that makes her basic attacks do additional magical damage.",
            "damage": [
                40,
                55,
                70,
                85,
                100
            ],
            "powerDamage": 25,
            "cooldown": 11,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/irradiate.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Pulse",
            "description": "Freya activates a buff that makes her basic attacks ranged, dealing additional magical damage and slowing the target and all nearby enemies. The area effect and slow is lost when Irradiate is active.",
            "damage": [
                25,
                35,
                45,
                55,
                65
            ],
            "powerDamage": 15,
            "cooldown": 11,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/pulse.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Banish",
            "description": "At her ground target location, Freya banishes her enemies into the air for a short time.  The enemies can't be hit or take action while in the air.",
            "cooldown": [
                19,
                18,
                17,
                16,
                15
            ],
            "cost": [
                70,
                65,
                60,
                55,
                50
            ],
            "icon": "images/smite/abilities/banish.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Valkyrie's Discretion",
            "description": "Freya uses her Cloak of Feathers to fly above the battlefield where she fires down blasts of magical damage up to 4 times while flying.  Freya can't be hit when at full ascension and can right click to cancel it early.",
            "damage": [
                100,
                135,
                170,
                205,
                240
            ],
            "powerDamage": 35,
            "cooldown": 90,
            "cost": [
                90,
                95,
                100,
                105,
                110
            ],
            "ticks": 4,
            "icon": "images/smite/abilities/valkyrie's discretion.jpg"
        },
        "icon": "images/smite/gods/freya.jpg"
    },
    {
        "name": "Ganesha",
        "title": "God of Success",
        "pantheon": "Hindu",
        "type": "Guardian",
        "attackType": "Melee",
        "powerType": "Magical",
        "pros": "High Crowd Control, High Defense",
        "health": 495,
        "healthPerLevel": 95,
        "mana": 200,
        "manaPerLevel": 40,
        "speed": 360,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 1.2,
        "damage": 38,
        "damagePerLevel": 1.55,
        "physicalProtection": 20,
        "physicalProtectionPerLevel": 3.2,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 6,
        "hpFivePerLevel": 0.67,
        "mpFive": 4.6,
        "mpFivePerLevel": 0.42,
        "passive": {
            "name": "Good Fortune",
            "description": "Any time Ganesha deals a killing blow, the nearest Friendly God receives credit for the kill and Ganesha receives the rewards for an assist instead. In addition, his assist range is increased by 20 and time before he loses assist credit is increased by 5s.",
            "icon": "images/smite/abilities/good fortune.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Turn of Fate",
            "description": "Ganesha curses his Enemies with his considerable willpower, damaging them. For each Enemy he hits (up to a maximum of 5), all Allied Gods within 55 units of Ganesha gain bonus Damage.",
            "damage": [
                90,
                150,
                210,
                270,
                330
            ],
            "powerDamage": 55,
            "cooldown": 14,
            "cost": [
                65,
                70,
                75,
                80,
                85
            ],
            "icon": "images/smite/abilities/turn of fate.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Ohm",
            "description": "Ganesha begins chanting and rises into the lotus position, where he is slowed slightly but allows him to travel freely in all directions. While chanting, he silences Enemy gods in a cone in front of him and increases Physical Protections for all nearby Allied Gods.",
            "cooldown": [
                14,
                13,
                12,
                11,
                10
            ],
            "cost": [
                55,
                60,
                65,
                70,
                75
            ],
            "icon": "images/smite/abilities/ohm.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Remove Obstacles",
            "description": "Ganesha charges forward, hooking an enemy with his goad, holding them in place and damaging the enemy before knocking them up. While dashing, Ganesha passes through player-made deployables.",
            "damage": [
                75,
                120,
                160,
                200,
                240
            ],
            "powerDamage": 45,
            "cooldown": [
                14,
                13,
                12,
                11,
                10
            ],
            "cost": [
                55,
                60,
                65,
                70,
                75
            ],
            "icon": "images/smite/abilities/remove obstacles.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Dharmic Pillars",
            "description": "Ganesha summons the Four Great Pillars of Righteousness to imprison his Enemies. Between each pair of pillars a magical field is created, and Enemies who pass through the field take Damage, are Slowed, and have their Protections reduced for 3s. Enemy Minions and Jungle Monsters take 40% of this Damage.",
            "damage": [
                90,
                130,
                170,
                210,
                250
            ],
            "powerDamage": 40,
            "cooldown": 75,
            "cost": [
                80,
                90,
                100,
                110,
                120
            ],
            "icon": "images/smite/abilities/dharmic pillars.jpg"
        },
        "icon": "images/smite/gods/ganesha.jpg"
    },
    {
        "name": "Geb",
        "title": "God of Earth",
        "pantheon": "Egyptian",
        "type": "Guardian ",
        "attackType": "Melee",
        "powerType": "Magical",
        "pros": "High Crowd Control, High Defense",
        "health": 510,
        "healthPerLevel": 90,
        "mana": 190,
        "manaPerLevel": 34,
        "speed": 360,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 1.2,
        "damage": 38,
        "damagePerLevel": 1.5,
        "physicalProtection": 19,
        "physicalProtectionPerLevel": 3,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 8,
        "hpFivePerLevel": 0.8,
        "mpFive": 4.6,
        "mpFivePerLevel": 0.4,
        "passive": {
            "name": "Hard as Rock",
            "description": "Crits only do +25% damage to Geb, rather than the normal +100%.",
            "icon": "images/smite/abilities/hard as rock.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Roll Out",
            "description": "Geb turns into a mass of rolling earth, damaging and slowing enemies he encounters, stopping at the first god he hits. He increases speed as he travels, his damage scaling from 50% to maximum over 3s. Once at his top speed, Geb becomes CC immune, and will also knockback enemy gods.",
            "damage": [
                100,
                175,
                250,
                325,
                400
            ],
            "powerDamage": 75,
            "cooldown": [
                14,
                13,
                12,
                11,
                10
            ],
            "cost": [
                50,
                55,
                60,
                65,
                70
            ],
            "icon": "images/smite/abilities/roll out.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Shock Wave",
            "description": "Geb creates a shock wave, which ripples out from him in a cone, causing damage and knockup to all enemies. The damage decreases the further the enemy is from Geb, down to 50% at the maximum range.",
            "damage": [
                90,
                160,
                230,
                300,
                370
            ],
            "powerDamage": 50,
            "cooldown": 15,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/shock wave.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Stone Shield",
            "description": "Geb targets himself or an ally to put a shield around. The shield blocks all damage and Knockback effects, and lasts until its time expires or it takes enough damage to be destroyed. The Shield also cleanses any CC when applied.",
            "cooldown": 18,
            "cost": 60,
            "icon": "images/smite/abilities/stone shield.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Cataclysm",
            "description": "Geb pulls apart the earth, dealing magical damage to all enemy gods based on a percent of their current health, and stunning them.",
            "maxHealthDamage": [
                15,
                20,
                25,
                30,
                35
            ],
            "cooldown": 90,
            "cost": 200,
            "icon": "images/smite/abilities/cataclysm.jpg"
        },
        "icon": "images/smite/gods/geb.jpg"
    },
    {
        "name": "Guan Yu",
        "title": "Saint of War",
        "pantheon": "Chinese",
        "type": "Warrior ",
        "attackType": "Melee",
        "powerType": "Physical",
        "pros": "High Sustain, High Mobility",
        "health": 470,
        "healthPerLevel": 84,
        "mana": 220,
        "manaPerLevel": 35,
        "speed": 375,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 0.9,
        "damage": 37,
        "damagePerLevel": 2,
        "physicalProtection": 16,
        "physicalProtectionPerLevel": 3,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 6,
        "hpFivePerLevel": 0.7,
        "mpFive": 4.8,
        "mpFivePerLevel": 0.45,
        "passive": {
            "name": "Painless",
            "description": "Each time Guan Yu deals or receives damage he gains a stack. Stacks are gained from minions and gods. At max stacks the next ability used will have a boosted effect.",
            "icon": "images/smite/abilities/painless.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Conviction",
            "description": "Guan Yu's courageous leadership is infectious and, when focused, heals himself and his allies and increases physical protections for 3s. Healing friendly gods reduces all cooldowns by 2s.",
            "cooldown": 12,
            "cost": [
                60,
                60,
                60,
                60,
                60
            ],
            "icon": "images/smite/abilities/conviction.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Warrior's Will",
            "description": "Guan Yu charges forward, his Green Dragon Crescent Blade extended in front of him. All enemies in his path take damage and are slowed.  Hitting enemy gods lowers all of Guan Yu's cooldowns by 2s. Guan Yu is immune to roots, cripples, and knockups while dashing.",
            "damage": [
                80,
                135,
                190,
                245,
                300
            ],
            "powerDamage": 60,
            "cooldown": 12,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/warrior's will.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Taolu Assault",
            "description": "Guan Yu spins his blade in a controlled but furious display, slicing enemies for damage every .3s for 3s.  Each hit debuffs the enemies' protections. Guan Yu is immune to knockback for the duration.",
            "damage": [
                15,
                25,
                35,
                45,
                55
            ],
            "powerDamage": 20,
            "cooldown": 15,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "ticks": 10,
            "icon": "images/smite/abilities/taolu assault.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Cavalry Charge",
            "description": "Guan Yu mounts his warhorse and charges for 4s. While mounted, he can steer and click to attack and is immune to crowd control. Enemies hit take damage and are slowed. Each hit increases damage from consecutive hits against that target by 20%. Enemies hit on the dismount are stunned. Right-click to dismount early.",
            "damage": [
                85,
                115,
                145,
                175,
                205
            ],
            "powerDamage": 30,
            "cooldown": 90,
            "cost": [
                80,
                90,
                100,
                110,
                120
            ],
            "icon": "images/smite/abilities/cavalry charge.jpg"
        },
        "icon": "images/smite/gods/guanyu.jpg"
    },
    {
        "name": "Hachiman",
        "title": "Lord of the Eight Banners",
        "pantheon": "Japanese",
        "type": "Hunter",
        "attackType": "Ranged",
        "powerType": "Physical",
        "pros": "High Single Target Damage, High Mobility",
        "health": 455,
        "healthPerLevel": 77,
        "mana": 230,
        "manaPerLevel": 36,
        "speed": 360,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 1.3,
        "damage": 36,
        "damagePerLevel": 2.5,
        "physicalProtection": 11,
        "physicalProtectionPerLevel": 2.75,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 7,
        "hpFivePerLevel": 0.69,
        "mpFive": 4.5,
        "mpFivePerLevel": 0.37,
        "passive": {
            "name": "Master of Arms",
            "description": "Hachiman grows stronger as he lands his blows. Hitting enemies with Basic Attacks energizes Hachiman, granting him a stack of MP5. Stacks up to 5 times, stacks last 8s.",
            "icon": "images/smite/abilities/master of arms.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Eagle Eye",
            "description": "When Hachiman toggles on this ability, instead of Basic Attacking he fires a series of arrows that do additional damage that falls off at long range. Each hit may trigger item effects for basic attacks, and can critical hit.",
            "damage": [
                10,
                15,
                20,
                20,
                25
            ],
            "powerDamage": 0,
            "cooldown": 14,
            "cost": [
                50,
                60,
                70,
                80,
                90
            ],
            "icon": "images/smite/abilities/eagle eye.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Heavenly Banner",
            "description": "Hachiman calls down sacred banners from heaven, damaging all enemies in range, granting himself Attack Speed, and leaving a banner which buffs his and allied Attack Speed while within range.",
            "damage": [
                75,
                130,
                185,
                240,
                295
            ],
            "powerDamage": 45,
            "cooldown": 13,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "toggleStats": {
                "attackSpeed": [
                    5,
                    7.5,
                    10,
                    12.5,
                    15
                ],
                "toggle": false
            },
            "icon": "images/smite/abilities/heavenly banner.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Iaijutsu",
            "description": "Hachiman dashes forward, damaging and passing through enemies. Upon reaching his destination, Hachiman swings his blade in a full circle, hitting all enemies in range. If hit by both attacks, enemy Gods are stunned.",
            "damage": [
                40,
                70,
                100,
                130,
                160
            ],
            "powerDamage": 40,
            "cooldown": [
                18,
                18,
                17,
                17,
                16
            ],
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "icon": "images/smite/abilities/iaijutsu.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Mounted Archery",
            "description": "Hachiman leaps on his horse and charges forward. While mounted, he is immune to Crowd Control and can aim separately from the direction of his horse. He may fire to launch an arrow at every Enemy God within a cone.",
            "damage": [
                225,
                285,
                335,
                390,
                445
            ],
            "powerDamage": 95,
            "cooldown": 90,
            "cost": [
                80,
                90,
                100,
                110,
                120
            ],
            "icon": "images/smite/abilities/mounted archery.jpg"
        },
        "icon": "images/smite/gods/hachiman.jpg"
    },
    {
        "name": "Hades",
        "title": "King of the Underworld",
        "pantheon": "Greek",
        "type": "Mage",
        "attackType": "Ranged",
        "powerType": "Magical",
        "pros": "High Defense, High Sustain",
        "health": 450,
        "healthPerLevel": 80,
        "mana": 265,
        "manaPerLevel": 53,
        "speed": 355,
        "attackSpeed": 0.95,
        "attackSpeedPerLevel": 1.05,
        "damage": 32,
        "damagePerLevel": 1.5,
        "physicalProtection": 18,
        "physicalProtectionPerLevel": 2.6,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 5,
        "hpFivePerLevel": 0.54,
        "mpFive": 5,
        "mpFivePerLevel": 0.36,
        "passive": {
            "name": "Blight",
            "description": "Hades' normal staff attacks apply a debuff to the enemy, called Blight. This debuff stays on the target and can be refreshed. If an enemy is afflicted by Blight, each of Hades' other powers have an additional effect.",
            "icon": "images/smite/abilities/blight.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Death From Below",
            "description": "Hades descends into the ground and erupts from below at his ground location, doing damage to all enemies in the area. If the enemy is Blighted, they are also slowed. Applies Blight.",
            "damage": [
                70,
                120,
                170,
                220,
                270
            ],
            "powerDamage": 60,
            "cooldown": 14,
            "cost": [
                50,
                55,
                60,
                65,
                70
            ],
            "icon": "images/smite/abilities/death from below.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Shroud of Darkness",
            "description": "Hades silences all enemies in a cone in front of him. If the enemy is Blighted, they are also feared. Applies Blight.",
            "cooldown": [
                14,
                13,
                12,
                11,
                10
            ],
            "cost": 60,
            "icon": "images/smite/abilities/shroud of darkness.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Devour Souls",
            "description": "Hades devours the souls of his enemies, dealing damage in a radius around him. If the enemy is Blighted, the enemy explodes dealing damage to nearby enemies and healing your allies. Enemy gods only take 50% of the damage from detonating Blights. Consumes Blight.",
            "damage": [
                75,
                115,
                155,
                195,
                235
            ],
            "powerDamage": 70,
            "cooldown": [
                11,
                11,
                11,
                11,
                11
            ],
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/devour souls.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Pillar of Agony",
            "description": "Hades calls to all enemy souls nearby, pulling them closer to him over time, doing damage every .5s for 4s. If the enemy is Blighted, their protections are reduced.  Hades also gains protections for the duration.",
            "damage": [
                45,
                60,
                75,
                90,
                105
            ],
            "powerDamage": 30,
            "cooldown": 90,
            "cost": 100,
            "ticks": 8,
            "icon": "images/smite/abilities/pillar of agony.jpg"
        },
        "icon": "images/smite/gods/hades.jpg"
    },
    {
        "name": "He Bo",
        "title": "God of the Yellow River",
        "pantheon": "Chinese",
        "type": "Mage ",
        "attackType": "Ranged",
        "powerType": "Magical",
        "pros": "High Area Damage, Medium Crowd Control",
        "health": 400,
        "healthPerLevel": 67,
        "mana": 298,
        "manaPerLevel": 56,
        "speed": 355,
        "attackSpeed": 0.86,
        "attackSpeedPerLevel": 0.9,
        "damage": 34,
        "damagePerLevel": 1.45,
        "physicalProtection": 9,
        "physicalProtectionPerLevel": 2.6,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 6,
        "hpFivePerLevel": 0.45,
        "mpFive": 4.9,
        "mpFivePerLevel": 0.4,
        "passive": {
            "name": "Steady Flow",
            "description": "Each time He Bo uses an ability, he gains the Steady Flow buff which increases his magical power. The timer refreshes when another ability is used.",
            "stacks": {
                "current": 0,
                "max": 3,
                "stacks": [
                    {
                        "magicalPowerPercentage": 0.05
                    }
                ],
                "type": "temporary"
            },
            "icon": "images/smite/abilities/steady flow.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Water Cannon",
            "description": "He Bo fires a short burst of water from his hands, damaging all enemies in front of him.",
            "damage": [
                70,
                125,
                180,
                235,
                290
            ],
            "powerDamage": 80,
            "cooldown": 3,
            "cost": [
                40,
                50,
                60,
                70,
                80
            ],
            "icon": "images/smite/abilities/water cannon.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Atlas of the Yellow River",
            "description": "He Bo unfurls his scroll in a line, releasing flood waters and causing enemies inside to move slower and He Bo and his allies to move faster while inside.",
            "cooldown": 12,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/atlas of the yellow river.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Waterspout",
            "description": "He Bo calls forth a geyser, causing it to burst out with tremendous force at his target location, damaging and slowing enemies while knocking them into the air.",
            "damage": [
                80,
                130,
                180,
                230,
                280
            ],
            "powerDamage": 75,
            "cooldown": 10,
            "cost": [
                65,
                70,
                75,
                80,
                85
            ],
            "icon": "images/smite/abilities/waterspout.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Crushing Wave",
            "description": "He Bo transforms into a wave and crashes forward, damaging all enemies in his path.",
            "damage": [
                370,
                450,
                530,
                610,
                690
            ],
            "powerDamage": 115,
            "cooldown": 90,
            "cost": 100,
            "icon": "images/smite/abilities/crushing wave.jpg"
        },
        "icon": "images/smite/gods/hebo.jpg"
    },
    {
        "name": "Hel",
        "title": "Goddess of the Underworld",
        "pantheon": "Norse",
        "type": "Mage ",
        "attackType": "Ranged",
        "powerType": "Magical",
        "pros": "High Single Target Damage, High Sustain",
        "health": 380,
        "healthPerLevel": 67,
        "mana": 300,
        "manaPerLevel": 57,
        "speed": 355,
        "attackSpeed": 0.86,
        "attackSpeedPerLevel": 0.9,
        "damage": 33,
        "damagePerLevel": 1.5,
        "physicalProtection": 9,
        "physicalProtectionPerLevel": 2.6,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 5,
        "hpFivePerLevel": 0.43,
        "mpFive": 5,
        "mpFivePerLevel": 0.45,
        "passive": {
            "name": "Stance Attunement",
            "description": "When Hel is in a stance, she gradually attunes to the strengths of that stance, gaining up to 20% damage in the Dark Stance and 20% healing in the Light Stance.",
            "icon": "images/smite/abilities/stance attunement.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Decay (Restoration)",
            "description": "DECAY (Dark Stance) - Hel fires a projectile that explodes on contact, doing damage to all enemies in a 15 ft radius. RESTORATION (Light Stance) - Hel fires a projectile that does damage to a single target and heals Hel on a successful hit.",
            "damage": [
                70,
                120,
                170,
                220,
                270
            ],
            "powerDamage": 50,
            "cooldown": 8,
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "icon": "images/smite/abilities/decay (restoration).jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Hinder (Cleanse)",
            "description": "HINDER (Dark Stance) - Hel debuffs all enemies at her ground target, reducing their magical protection and slowing them for a short time. CLEANSE (Light Stance) - Hel buffs all allies at her ground target, removing all crowd control abilities instantly and protecting them from future ones for a short time.",
            "cooldown": [
                14,
                13,
                12,
                11,
                10
            ],
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "icon": "images/smite/abilities/hinder (cleanse).jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Repulse (Inspire)",
            "description": "REPULSE (Dark Stance) - Hel conjures a burst of dark energy, damaging all nearby enemies.  INSPIRE (Light Stance) - A burst of white matter soothes all nearby allies pain, healing them and granting increased movement speed.",
            "damage": [
                80,
                130,
                180,
                230,
                280
            ],
            "powerDamage": 70,
            "cooldown": 12,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/repulse (inspire).jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Switch Stances (Light)",
            "description": "Dark Stance - Hel's abilities cause damage and she gains magical power. Light Stance - Hel's abilities heal and support her allies and she gains MP5.  Half of the benefits gained from the stance are also shared with allied gods within 30 units.",
            "cooldown": 2,
            "cost": 0,
            "icon": "images/smite/abilities/switch stances (light).jpg"
        },
        "icon": "images/smite/gods/hel.jpg"
    },
    {
        "name": "Hercules",
        "title": "Champion of Rome",
        "pantheon": "Roman",
        "type": "Warrior ",
        "attackType": "Melee",
        "powerType": "Physical",
        "pros": "High Single Target Damage, High Sustain",
        "health": 480,
        "healthPerLevel": 86,
        "mana": 205,
        "manaPerLevel": 32,
        "speed": 375,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 0.8,
        "damage": 39,
        "damagePerLevel": 2,
        "physicalProtection": 18,
        "physicalProtectionPerLevel": 3,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 7,
        "hpFivePerLevel": 0.63,
        "mpFive": 4.3,
        "mpFivePerLevel": 0.4,
        "passive": {
            "name": "Strength From Pain",
            "description": "Everytime Hercules takes Damage from Gods, he gains 5 Physical Power +1 multiplied by your level, stacking up to 3 times and lasting 5s.",
            "icon": "images/smite/abilities/strength from pain.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Driving Strike",
            "description": "Hercules delivers a mighty strike, driving all enemies back, damaging and stunning them. Hecules is immune to Knockback during the dash.",
            "damage": [
                85,
                155,
                225,
                295,
                365
            ],
            "powerDamage": 90,
            "cooldown": 14,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/driving strike.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Earthbreaker",
            "description": "Hercules smashes the ground, sending a shockwave forward that does damage to all enemies in the path. Enemies at the end of the shockwave are thrown into the air towards Hercules.",
            "damage": [
                80,
                125,
                170,
                215,
                260
            ],
            "powerDamage": 50,
            "cooldown": 14,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/earthbreaker.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Mitigate Wounds",
            "description": "When Hercules activates this ability, he gains health every second over the next 4 seconds.  A percentage of the damage taken during this time is returned to him as additional healing over the following 10 seconds.",
            "cooldown": 17,
            "cost": [
                60,
                60,
                60,
                60,
                60
            ],
            "icon": "images/smite/abilities/mitigate wounds.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Excavate",
            "description": "Hercules rips a huge boulder from the ground. Throwing the boulder does damage where the boulder lands. The boulder continues rolling, doing the same damage to all enemies in its path. Subsequent hits on the same enemy do 50% less damage per hit. Hercules is immune to crowd control while casting.",
            "damage": [
                300,
                425,
                550,
                675,
                800
            ],
            "powerDamage": 100,
            "cooldown": 90,
            "cost": 100,
            "icon": "images/smite/abilities/excavate.jpg"
        },
        "icon": "images/smite/gods/hercules.jpg"
    },
    {
        "name": "Hou Yi",
        "title": "Defender of the Earth",
        "pantheon": "Chinese",
        "type": "Hunter ",
        "attackType": "Ranged",
        "powerType": "Physical",
        "pros": "High Area Damage, High Single Target Damage",
        "health": 480,
        "healthPerLevel": 78,
        "mana": 240,
        "manaPerLevel": 38,
        "speed": 370,
        "attackSpeed": 0.95,
        "attackSpeedPerLevel": 1.2,
        "damage": 40,
        "damagePerLevel": 2.8,
        "physicalProtection": 13,
        "physicalProtectionPerLevel": 2.8,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 8,
        "hpFivePerLevel": 0.68,
        "mpFive": 5,
        "mpFivePerLevel": 0.35,
        "passive": {
            "name": "Suntouched",
            "description": "After taking a critical hit, Hou Yi can't be critically hit again for 3s.",
            "icon": "images/smite/abilities/suntouched.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Ricochet",
            "description": "Hou Yi draws back his bow for a powerful shot. After firing, if this arrow bounces off of a wall it gains +70 units distance and +50% bonus damage per bounce up to a maximum of 2 bounces. This arrow will stun if the target has Mark of the Golden Crow.",
            "damage": [
                75,
                120,
                165,
                210,
                255
            ],
            "powerDamage": 65,
            "cooldown": 10,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/ricochet.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Mark of the Golden Crow",
            "description": "Hou Yi marks an enemy with Mark of the Golden Crow. Marked enemies take extra damage for every 10% of their missing health from Hou Yi�s abilities and basic attacks. Marked enemies are visible to Hou Yi on the minimap including stealthed gods. The mark lasts for 10s.",
            "cooldown": 18,
            "cost": 50,
            "toggleStats": {
                "damageIncreasePercentForEveryPercentMissingEnemyHealth": [
                    0.1,
                    0.2,
                    0.3,
                    0.4,
                    0.5
                ],
                "toggle": false
            },
            "icon": "images/smite/abilities/mark of the golden crow.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Divebomb",
            "description": "Hou Yi launches into the air, holding his bow above his head as he glides forward. After a short time Hou Yi quickly dives to the ground damaging  any enemies in the immediate area. If the target has Mark of the Golden Crow they are knocked back.",
            "damage": [
                70,
                110,
                150,
                190,
                230
            ],
            "powerDamage": 60,
            "cooldown": 15,
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "icon": "images/smite/abilities/divebomb.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Sunbreaker",
            "description": "Hou Yi shoots nine arrows into the sky, striking one sun with each arrow. The nine suns come crashing down one by one, dealing damage in a target area over time. A target with Mark of the Golden Crow will have their movement speed slowed by 20% for .25s on every hit.",
            "damage": [
                80,
                90,
                100,
                110,
                120
            ],
            "powerDamage": 25,
            "cooldown": 90,
            "cost": 100,
            "ticks": 9,
            "icon": "images/smite/abilities/sunbreaker.jpg"
        },
        "icon": "images/smite/gods/houyi.jpg"
    },
    {
        "name": "Hun Batz",
        "title": "The Howler Monkey God",
        "pantheon": "Mayan",
        "type": "Assassin ",
        "attackType": "Melee",
        "powerType": "Physical",
        "pros": "High Single Target Damage",
        "health": 460,
        "healthPerLevel": 75,
        "mana": 220,
        "manaPerLevel": 38,
        "speed": 370,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 1.89,
        "damage": 38,
        "damagePerLevel": 2.16,
        "physicalProtection": 13,
        "physicalProtectionPerLevel": 3,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 10,
        "hpFivePerLevel": 0.68,
        "mpFive": 3.9,
        "mpFivePerLevel": 0.27,
        "passive": {
            "name": "Infused Strikes",
            "description": "Using an ability gives Hun Batz's next basic attack within the next 3 seconds an increased critical strike chance.",
            "icon": "images/smite/abilities/infused strikes.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Somersault",
            "description": "Hun Batz flips through the air, crashing down at his target location, doing damage to all nearby enemies and slowing them.",
            "damage": [
                50,
                90,
                130,
                170,
                210
            ],
            "powerDamage": 70,
            "cooldown": [
                15,
                14,
                13,
                12,
                11
            ],
            "cost": 60,
            "icon": "images/smite/abilities/somersault.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Overhand Smash",
            "description": "Hun Batz smashes his staff to the ground in front of him, doing damage to all enemies.",
            "damage": [
                75,
                130,
                185,
                240,
                295
            ],
            "powerDamage": 95,
            "cooldown": [
                12,
                11,
                10,
                9,
                8
            ],
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/overhand smash.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Sacred Monkey",
            "description": "Hun Batz commands a monkey through the air that pounces on enemy targets, doing damage on each pounce, hitting each god only once.  Pressing the button again teleports Hun Batz to the next target hit.",
            "damage": [
                80,
                135,
                190,
                245,
                300
            ],
            "powerDamage": 70,
            "cooldown": 13,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/sacred monkey.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Fear No Evil",
            "description": "Hun Batz summons a totem from the ground to ward off all evil.  Any enemy caught within the radius is feared directly away from the totem and takes damage every .25s.",
            "damage": [
                30,
                35,
                40,
                45,
                50
            ],
            "powerDamage": 15,
            "cooldown": 100,
            "cost": 100,
            "ticks": 4,
            "icon": "images/smite/abilities/fear no evil.jpg"
        },
        "icon": "images/smite/gods/hunbatz.jpg"
    },
    {
        "name": "Isis",
        "title": "Goddess of Magic",
        "pantheon": "Egyptian",
        "type": "Mage ",
        "attackType": "Ranged",
        "powerType": "Magical",
        "pros": "High Crowd Control, High Area Damage",
        "health": 365,
        "healthPerLevel": 68,
        "mana": 280,
        "manaPerLevel": 51,
        "speed": 355,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 0,
        "damage": 35,
        "damagePerLevel": 1.5,
        "physicalProtection": 9,
        "physicalProtectionPerLevel": 2.7,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 6,
        "hpFivePerLevel": 0.45,
        "mpFive": 4.8,
        "mpFivePerLevel": 0.43,
        "passive": {
            "name": "Funeral Rites",
            "description": "Isis shares additional HP5 and MP5 with nearby allies. For every player death she witnesses, her aura gains an additional stack (max 10). Stacks reset on death.",
            "stacks": {
                "current": 0,
                "max": 10,
                "stacks": [
                    {
                        "hpFive": 2,
                        "mpFive": 2
                    }
                ],
                "type": "temporary"
            },
            "icon": "images/smite/abilities/funeral rites.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Wing Gust",
            "description": "Isis flaps her wings, gaining increased movement speed with no backpedal penalty, and sending forth 4 wing gusts in a line, each dealing magical damage to all targets in their path. Isis is immune to root and knockback effects while casting.",
            "damage": [
                35,
                55,
                75,
                95,
                115
            ],
            "powerDamage": 40,
            "cooldown": 10,
            "cost": [
                80,
                85,
                90,
                95,
                100
            ],
            "ticks": 4,
            "icon": "images/smite/abilities/wing gust.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Spirit Ball",
            "description": "Isis sends forth a ball of spirit energy. As the ball travels, it gains in power up to 1.5x at max range. At any time, Isis can activate the ability to detonate the ball, dealing magical damage and stunning enemies within 10 ft, scaling in duration up to 1.5s at max range.",
            "damage": [
                70,
                110,
                150,
                190,
                230
            ],
            "powerDamage": 70,
            "cooldown": 10,
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "icon": "images/smite/abilities/spirit ball.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Dispel Magic",
            "description": "Isis silences enemies at her target location. Enemies hit also lose a portion of their magical protections and are slowed for a duration. Allies affected by Isis' Funeral Rites aura gain the missing protections during this time.",
            "cooldown": 18,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/dispel magic.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Circle of Protection",
            "description": "Isis plants her staff at her target location for 5s. Allies within its radius take less damage. Any damage dealt within the radius charges up the staff. If Isis activates the staff again, it explodes, dealing damage to enemies inside and healing allies.",
            "damage": [
                180,
                215,
                250,
                285,
                320
            ],
            "powerDamage": 50,
            "cooldown": 90,
            "cost": [
                80,
                90,
                100,
                110,
                120
            ],
            "icon": "images/smite/abilities/circle of protection.jpg"
        },
        "icon": "images/smite/gods/isis.jpg"
    },
    {
        "name": "Izanami",
        "title": "Matron of the Dead",
        "pantheon": "Japanese",
        "type": "Hunter",
        "attackType": "Ranged",
        "powerType": "Physical",
        "pros": "Pusher, High Area Damage",
        "health": 450,
        "healthPerLevel": 77,
        "mana": 210,
        "manaPerLevel": 35,
        "speed": 365,
        "attackSpeed": 0.95,
        "attackSpeedPerLevel": 1.7,
        "damage": 36,
        "damagePerLevel": 2.4,
        "physicalProtection": 11,
        "physicalProtectionPerLevel": 2.9,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 6,
        "hpFivePerLevel": 0.7,
        "mpFive": 4.4,
        "mpFivePerLevel": 0.38,
        "passive": {
            "name": "Death Draws Nigh",
            "description": "The closer Izanami gets to death, the more powerful she becomes. Izanami gains 4% Physical Penetration for each 15% of her Health that is missing, up to a maximum of 20%.",
            "stacks": {
                "current": 0,
                "max": 5,
                "stacks": [
                    {
                        "penetrationPercent": 4
                    }
                ],
                "type": "permanent"
            },
            "icon": "images/smite/abilities/death draws nigh.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Sickle Storm",
            "description": "For 6s, Izanami throws her kama sickles even faster and more furiously. While active she gains Attack Speed, and her Basic Attacks no longer return to her, instead applying Bonus Damage in addition to 100% of her Basic Attack power per hit.",
            "cooldown": 10,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "toggleStats": {
                "attackSpeed": [
                    55,
                    60,
                    65,
                    70,
                    75
                ],
                "basicAttackFlatIncrease": [
                    5,
                    10,
                    15,
                    20,
                    25
                ],
                "toggle": false
            },
            "icon": "images/smite/abilities/sickle storm.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Spectral Projection",
            "description": "Izanami sends forth a demonic visage of herself to strike down her enemies, damaging and Slowing all Enemies in a line. If an Enemy God is killed while slowed by this ability, future uses of the slow will be increased by 6% per kill up to twice, for a maximum of 30%.",
            "damage": [
                65,
                115,
                165,
                215,
                265
            ],
            "powerDamage": 90,
            "cooldown": [
                16,
                15,
                14,
                13,
                12
            ],
            "cost": 70,
            "icon": "images/smite/abilities/spectral projection.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Fade Away",
            "description": "Izanami descended into the underworld, becoming Stealthed, and leaps away from her current position. Taking damage, or firing a damaging Ability or Basic Attack breaks her Stealth.",
            "cooldown": [
                20,
                19,
                18,
                17,
                16
            ],
            "cost": [
                70,
                70,
                70,
                70,
                70
            ],
            "icon": "images/smite/abilities/fade away.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Dark Portal",
            "description": "Izanami summons a dark portal which Damages and Silences all Enemies in range.",
            "damage": [
                220,
                320,
                420,
                520,
                620
            ],
            "powerDamage": 100,
            "cooldown": 80,
            "cost": 100,
            "icon": "images/smite/abilities/dark portal.jpg"
        },
        "icon": "images/smite/gods/izanami.jpg"
    },
    {
        "name": "Janus",
        "title": "God of Portals and Transitions",
        "pantheon": "Roman",
        "type": "Mage ",
        "attackType": "Ranged",
        "powerType": "Magical",
        "pros": "High Mobility, High Area Damage",
        "health": 400,
        "healthPerLevel": 70,
        "mana": 350,
        "manaPerLevel": 58,
        "speed": 360,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 0.8,
        "damage": 34,
        "damagePerLevel": 1.45,
        "physicalProtection": 8,
        "physicalProtectionPerLevel": 2.6,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 6,
        "hpFivePerLevel": 0.45,
        "mpFive": 5,
        "mpFivePerLevel": 0.45,
        "passive": {
            "name": "Passages",
            "description": "Any time Janus transitions through a portal or over a threshold he becomes aged and wizened, gaining additional magical scaling on his next ability cast.",
            "toggleStats": {
                "magicalScaling": 15,
                "toggle": false
            },
            "icon": "images/smite/abilities/passages.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Portal",
            "description": "Janus creates a portal in the world. If placed on a wall, the portal will create a passage through to the other side of the wall that Janus or any Ally may use. The portal may be entered from either side, but closes after 1 use.  If placed on the ground, enemies and Janus will fall into the portal, being teleported into the air above it. Enemies take damage upon landing, and are considered banished during the fall.",
            "damage": [
                80,
                130,
                180,
                230,
                280
            ],
            "powerDamage": 60,
            "cooldown": 12,
            "cost": 70,
            "icon": "images/smite/abilities/portal.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Unstable Vortex",
            "description": "Janus creates two unstable portals, far too small to fit into, and flings them forward dealing damage to enemies in their path. Enemies hit by both portals take 30% damage on the second hit.",
            "damage": [
                100,
                165,
                230,
                295,
                360
            ],
            "powerDamage": 80,
            "cooldown": 10,
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "icon": "images/smite/abilities/unstable vortex.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Threshold",
            "description": "Passive: Janus increases the movement speed of himself and allies each time they go through a portal or over a Threshold (max 2 stacks).  Active: Janus opens a multi-dimensional rift. Enemies who pass over the rift are slowed, and marked with Phase. Targets in Phase take additional magical scaling damage when hit by Janus' damaging abilities.",
            "cooldown": 15,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "toggleStats": {
                "magicalScaling": [
                    20,
                    30,
                    40,
                    50,
                    60
                ],
                "movementSpeed": [
                    10,
                    15,
                    20,
                    25,
                    30
                ],
                "toggle": false
            },
            "icon": "images/smite/abilities/threshold.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Through Space and Time",
            "description": "Janus blasts a ball of multi-dimensional energy across the battlefield, burning a portal into every surface it encounters within range 500. These portals last 10s, may be used by allies, and do not vanish after the first use.  Enemies hit by the energy ball take damage, increasing in magical scaling the further the energy travels. Janus is immune to crowd control while firing.",
            "damage": [
                300,
                400,
                500,
                600,
                700
            ],
            "powerDamage": 75,
            "cooldown": 110,
            "cost": 100,
            "toggleStats": {
                "abilityMagicalScaling": 100,
                "toggle": false,
                "label": "Max Distance"
            },
            "icon": "images/smite/abilities/through space and time.jpg"
        },
        "icon": "images/smite/gods/janus.jpg"
    },
    {
        "name": "Jing Wei",
        "title": "The Oathkeeper",
        "pantheon": "Chinese",
        "type": " Hunter ",
        "attackType": "Ranged",
        "powerType": "Physical",
        "pros": "High Mobility",
        "health": 445,
        "healthPerLevel": 78,
        "mana": 205,
        "manaPerLevel": 36,
        "speed": 370,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 1.4,
        "damage": 38,
        "damagePerLevel": 2.7,
        "physicalProtection": 11,
        "physicalProtectionPerLevel": 2.9,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 7,
        "hpFivePerLevel": 0.68,
        "mpFive": 4.4,
        "mpFivePerLevel": 0.3,
        "passive": {
            "name": "Rapid Reincarnation",
            "description": "When exiting the fountain, Jing Wei prepares for takeoff and then ascends into the sky, allowing her to fly over obstacles at an increased speed.",
            "icon": "images/smite/abilities/rapid reincarnation.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Persistent Gust",
            "description": "Jing Wei creates a gust of wind that damages and knocks up enemies when summoned. The gust persists for 6s and continues to knock up and deal additional damage to enemies every 1s. If Jing Wei walks onto the area she is knocked up and gains a 25% attack speed buff for 7s.",
            "damage": [
                90,
                140,
                190,
                240,
                290
            ],
            "powerDamage": 90,
            "cooldown": 14,
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "secondaryDamage": {
                "damage": [
                    10,
                    20,
                    30,
                    40,
                    50
                ],
                "powerDamage": 5
            },
            "toggleStats": {
                "attackSpeed": [
                    20,
                    25,
                    30,
                    35,
                    40
                ],
                "toggle": false
            },
            "icon": "images/smite/abilities/persistent gust.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Explosive Bolts",
            "description": "Jing Wei loads her crossbow with explosive bolts that augment her next 3 Basic Attacks. These attacks are wider, have increased critical chance, and deal area of effect damage.",
            "cooldown": [
                14,
                14,
                14,
                14,
                14
            ],
            "cost": 50,
            "toggleStats": {
                "criticalStrikeChance": [
                    0,
                    5,
                    10,
                    15,
                    20
                ],
                "toggle": false
            },
            "icon": "images/smite/abilities/explosive bolts.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Agility",
            "description": "Jing Wei dashes straight forward. She may use this ability while knocked into the air for a longer range dash. She also gains a 4s increase to Physical Damage and Movement Speed upon using Agility. The effect of this buff is increased if Agility is used from the air.",
            "cooldown": [
                18,
                18,
                17,
                17,
                16
            ],
            "cost": [
                75,
                70,
                65,
                60,
                55
            ],
            "toggleStats": {
                "physicalPower": [
                    10,
                    15,
                    20,
                    25,
                    30
                ],
                "movementSpeed": [
                    20,
                    20,
                    20,
                    20,
                    20
                ],
                "toggle": false
            },
            "icon": "images/smite/abilities/agility.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Air Strike",
            "description": "Jing Wei channels briefly before taking to the sky. She then flies forward and upward while covering the area below her in explosions that damage all enemies in the area. After her attack she hovers for up to 2s before landing at a ground target location.",
            "damage": [
                220,
                310,
                400,
                490,
                580
            ],
            "powerDamage": 100,
            "cooldown": 90,
            "cost": [
                100,
                110,
                120,
                130,
                140
            ],
            "icon": "images/smite/abilities/air strike.jpg"
        },
        "icon": "images/smite/gods/jingwei.jpg"
    },
    {
        "name": "Kali",
        "title": "Goddess of Destruction",
        "pantheon": "Hindu",
        "type": "Assassin ",
        "attackType": "Melee",
        "powerType": "Physical",
        "pros": "High Single Target Damage, High Sustain",
        "health": 470,
        "healthPerLevel": 74,
        "mana": 205,
        "manaPerLevel": 34,
        "speed": 375,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 2.16,
        "damage": 37,
        "damagePerLevel": 2.32,
        "physicalProtection": 15,
        "physicalProtectionPerLevel": 2.9,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 9,
        "hpFivePerLevel": 0.68,
        "mpFive": 4.3,
        "mpFivePerLevel": 0.21,
        "passive": {
            "name": "Marked for Death",
            "description": "A random enemy god is selected as Kali's Death Mark. Kali gains a physical penetration bonus against that god, and if she lands the killing blow, she heals for 80% of her maximum health and recieves a +25% gold bonus. A new Death Mark is selected any time her current target dies, or if Kali dies it is set to whoever last hit her.",
            "toggleStats": {
                "penetrationPercent": 10,
                "penetrationPercentPerLevel": 1,
                "toggle": false
            },
            "icon": "images/smite/abilities/marked for death.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Nimble Strike",
            "description": "Kali leaps forward, damaging enemies in the target area and healing herself for a percent of their missing health.",
            "damage": [
                70,
                120,
                170,
                220,
                270
            ],
            "powerDamage": 80,
            "cooldown": 12,
            "cost": 70,
            "icon": "images/smite/abilities/nimble strike.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Lash",
            "description": "Kali throws several blades, that converge upon the target location. Each does damage and causes bleed. Kali gains physical lifesteal against targets affected by this bleed.",
            "damage": [
                35,
                45,
                55,
                65,
                75
            ],
            "powerDamage": 20,
            "cooldown": [
                12,
                12,
                12,
                12,
                12
            ],
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/lash.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Incense",
            "description": "Kali hurls her incense at her feet, exploding it. Enemies hit are stunned, while Kali gains a physical power bonus.",
            "cooldown": 18,
            "cost": 70,
            "icon": "images/smite/abilities/incense.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Destruction",
            "description": "Kali becomes an unstoppable force of destruction, creating a damage aura around her. During this time, she can be reduced to 1 health, but cannot die. She is immune to knockup, slow effects and protected from root, but still vulnerable to stuns. If Kali is under 15% of her total health at the end of the duration, she will heal to 15% health.",
            "damage": [
                25,
                30,
                35,
                40,
                45
            ],
            "powerDamage": 5,
            "cooldown": 90,
            "cost": [
                60,
                70,
                80,
                90,
                100
            ],
            "icon": "images/smite/abilities/destruction.jpg"
        },
        "icon": "images/smite/gods/kali.jpg"
    },
    {
        "name": "Khepri",
        "title": "The Dawn Bringer",
        "pantheon": "Egyptian",
        "type": " Guardian ",
        "attackType": "Melee",
        "powerType": "Magical",
        "pros": "High Crowd Control, High Defense",
        "health": 490,
        "healthPerLevel": 90,
        "mana": 190,
        "manaPerLevel": 34,
        "speed": 365,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 1.2,
        "damage": 38,
        "damagePerLevel": 1.5,
        "physicalProtection": 19,
        "physicalProtectionPerLevel": 3,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 8,
        "hpFivePerLevel": 0.8,
        "mpFive": 5,
        "mpFivePerLevel": 0.4,
        "passive": {
            "name": "Fortitude",
            "description": "Every 5s, Khepri applies a shield to himself and nearby Allied Gods for 3% of the target's Maximum Health for 15s. The rate is slowed to every 10s while in combat. (Max 15%)",
            "icon": "images/smite/abilities/fortitude.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Abduct",
            "description": "Khepri lunges forward, dealing damage to enemies he passes through. If he connects with an enemy god he stops, grabs them, and starts pulling them backwards. Enemies are silenced for the duration of the pull.",
            "damage": [
                80,
                130,
                180,
                230,
                280
            ],
            "powerDamage": 40,
            "cooldown": 15,
            "cost": 60,
            "icon": "images/smite/abilities/abduct.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Rising Dawn",
            "description": "Khepri rolls the sun forward, setting ablaze all enemies it touches, reducing physical protections, and dealing damage over time. Allies that are hit take reduced damage from enemies for the duration.",
            "damage": [
                10,
                13,
                16,
                19,
                22
            ],
            "powerDamage": 5,
            "cost": 40,
            "ticks": 10,
            "icon": "images/smite/abilities/rising dawn.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Solar Flare",
            "description": "Khepri calls down the sun's ire at the target location, dealing damage and rooting all targets in the area.",
            "damage": [
                60,
                115,
                170,
                225,
                280
            ],
            "powerDamage": 30,
            "cooldown": 18,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/solar flare.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Scarab's Blessing",
            "description": "Khepri blesses an allied god, immediately cleansing them of all crowd control as well as granting them Power, Movement Speed, and immunity to slow effects. If the marked ally would die while blessed, they are instead revived with a percentage of their maximum Health at Khepri's location.",
            "cooldown": 110,
            "cost": [
                80,
                90,
                100,
                110,
                120
            ],
            "icon": "images/smite/abilities/scarab's blessing.jpg"
        },
        "icon": "images/smite/gods/khepri.jpg"
    },
    {
        "name": "Kukulkan",
        "title": "Serpent of the Nine Winds",
        "pantheon": "Mayan",
        "type": "Mage ",
        "attackType": "Ranged",
        "powerType": "Magical",
        "pros": "High Area Damage, Pusher",
        "health": 365,
        "healthPerLevel": 68,
        "mana": 265,
        "manaPerLevel": 45,
        "speed": 355,
        "attackSpeed": 0.87,
        "attackSpeedPerLevel": 0.91,
        "damage": 34,
        "damagePerLevel": 1.45,
        "physicalProtection": 13,
        "physicalProtectionPerLevel": 3,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 7,
        "hpFivePerLevel": 0.46,
        "mpFive": 5,
        "mpFivePerLevel": 0.45,
        "passive": {
            "name": "Power Of The Wind Jewel",
            "description": "Increases magical power by 5% of maximum mana.",
            "manaToMagicalPower": 5,
            "icon": "images/smite/abilities/power of the wind jewel.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Zephyr",
            "description": "Kukulkan fires a projectile breath attack that hits the first enemy in its path, doing damage and slowing all enemies in the area around the impact.",
            "damage": [
                60,
                105,
                150,
                195,
                240
            ],
            "powerDamage": 75,
            "cooldown": 7,
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "icon": "images/smite/abilities/zephyr.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Slipstream",
            "description": "Kukulkan channels the wind, allowing him to move faster. Additionally, Kukulkan is immune to slows for 1s when activated.",
            "cooldown": [
                15,
                14,
                13,
                12,
                11
            ],
            "cost": 65,
            "icon": "images/smite/abilities/slipstream.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Whirlwind",
            "description": "Kukulkan summons a tornado at his ground target location. A smaller tornado branches off onto any enemies that come within the radius, doing damage every .5s for 3s and is refreshed if enemies stay within the radius.",
            "damage": [
                10,
                20,
                30,
                40,
                50
            ],
            "powerDamage": 15,
            "cooldown": [
                15,
                14,
                13,
                12,
                11
            ],
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "ticks": 12,
            "icon": "images/smite/abilities/whirlwind.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Spirit Of The Nine Winds",
            "description": "Kukulkan summons the Spirit Of The Nine Winds to breathe down destruction onto his enemies in a path in front of him, doing damage and knocking all of the enemies to the side.",
            "damage": [
                400,
                500,
                600,
                700,
                800
            ],
            "powerDamage": 120,
            "cooldown": 70,
            "cost": [
                100,
                110,
                120,
                130,
                140
            ],
            "icon": "images/smite/abilities/spirit of the nine winds.jpg"
        },
        "icon": "images/smite/gods/kukulkan.jpg"
    },
    {
        "name": "Kumbhakarna",
        "title": "The Sleeping Giant",
        "pantheon": "Hindu",
        "type": "Guardian ",
        "attackType": "Melee",
        "powerType": "Magical",
        "pros": "High Crowd Control, High Defense",
        "health": 490,
        "healthPerLevel": 100,
        "mana": 200,
        "manaPerLevel": 34,
        "speed": 365,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 1.2,
        "damage": 38,
        "damagePerLevel": 1.5,
        "physicalProtection": 18,
        "physicalProtectionPerLevel": 3.2,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 8,
        "hpFivePerLevel": 0.75,
        "mpFive": 4.6,
        "mpFivePerLevel": 0.42,
        "passive": {
            "name": "Sleepy",
            "description": "Kumbhakarna does not die when he reaches 0 health, instead he falls asleep. He will awaken after 8s at 25% health and mana, unless hit with 6 basic attacks (+1 every 5 levels) while sleeping. This passive has a 240s cooldown.",
            "icon": "images/smite/abilities/sleepy.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Throw Back",
            "description": "Kumbhakarna sleepily runs forward. If he hits an enemy he stops and deals damage. If the enemy is a minion, he throws them, dealing increased damage to each enemy they hit.",
            "damage": [
                70,
                140,
                210,
                280,
                350
            ],
            "powerDamage": 50,
            "cooldown": 13,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/throw back.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Groggy Strike",
            "description": "Kumbhakarna smashes down, damaging all enemies in front of him and rooting them.",
            "damage": [
                90,
                140,
                190,
                240,
                290
            ],
            "powerDamage": 50,
            "cooldown": 10,
            "cost": [
                50,
                55,
                60,
                65,
                70
            ],
            "icon": "images/smite/abilities/groggy strike.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Mighty Yawn",
            "description": "Kumbhakarna lets out a mighty Yawn that mesmerizes all enemies in range. If awakened early, enemies are slowed. Kumbhakarna may use this ability while asleep.",
            "cooldown": 15,
            "cost": [
                50,
                55,
                60,
                65,
                70
            ],
            "icon": "images/smite/abilities/mighty yawn.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Epic Uppercut",
            "description": "Kumbhakarna moves forward, stops at the first enemy god he encounters, and delivers a massive melee attack that uppercuts the enemy directly into the air. When the enemy lands, it deals area damage and causes knockup to enemies nearby.",
            "damage": [
                75,
                100,
                125,
                150,
                175
            ],
            "powerDamage": 15,
            "cooldown": 75,
            "cost": [
                90,
                85,
                80,
                75,
                70
            ],
            "secondaryDamage": {
                "damage": [
                    250,
                    350,
                    450,
                    550,
                    650
                ],
                "powerDamage": 40
            },
            "icon": "images/smite/abilities/epic uppercut.jpg"
        },
        "icon": "images/smite/gods/kumbhakarna.jpg"
    },
    {
        "name": "Kuzenbo",
        "title": "King Kappa",
        "pantheon": "Japanese",
        "type": "Guardian",
        "attackType": "Melee",
        "powerType": "Magical",
        "pros": "High Crowd Control, High Defense",
        "health": 500,
        "healthPerLevel": 100,
        "mana": 200,
        "manaPerLevel": 34,
        "speed": 365,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 1.2,
        "damage": 38,
        "damagePerLevel": 1.5,
        "physicalProtection": 18,
        "physicalProtectionPerLevel": 3.2,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 8,
        "hpFivePerLevel": 0.85,
        "mpFive": 4.6,
        "mpFivePerLevel": 0.42,
        "passive": {
            "name": "Sleepy",
            "description": "Kumbhakarna does not die when he reaches 0 health, instead he falls asleep. He will awaken after 8s at 25% health and mana, unless hit with 6 basic attacks (+1 every 5 levels) while sleeping. This passive has a 240s cooldown.",
            "icon": "images/smite/abilities/sleepy.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "NeNe Kappa",
            "description": "Kuzenbo summons and throws the powerful NeNe Kappa, who can ricochet off of walls. After firing, if the NeNe Kappa bounces off of a wall it will travel 70 units from that point up to a maximum of 2 bounces. If an Enemy God is hit by the NeNe Kappa, it will burst forth from it's shell and attack them.",
            "damage": [
                70,
                105,
                140,
                175,
                210
            ],
            "powerDamage": 55,
            "cooldown": 16,
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "icon": "images/smite/abilities/nene kappa.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Shell Spikes",
            "description": "The spikes on Kuzenbo's back extend out, damaging enemies who attack Kuzenbo. While active, each time Kuzenbo takes damage, the cooldown on NeNe Kappa is reduced. Kuzenbo may activate this ability even while under the effects of Crowd Control.",
            "cooldown": [
                14,
                13.5,
                13,
                12.5,
                12
            ],
            "cost": [
                50,
                55,
                60,
                65,
                70
            ],
            "icon": "images/smite/abilities/shell spikes.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Sumo Slam",
            "description": "Kuzenbo charges forward, immune to slows and roots, damaging Enemy minions and using his immense strength to push the first Enemy God he hits along with him. Each subsequent Enemy he hits deals damage to both that god and the god Kuzenbo is pushing. Colliding with a wall will also deal damage to the pushed god. Pushed targets can be hit a maximum of 3 times.",
            "damage": [
                80,
                110,
                140,
                170,
                200
            ],
            "powerDamage": 35,
            "cooldown": [
                12,
                12,
                12,
                12,
                12
            ],
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/sumo slam.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Watery Grave",
            "description": "Kuzenbo pulls himself inwards under his shell and spins, summoning fierce currents that knock enemies back, increase his movement speed, and allow him to move freely in all directions. Damage after the first spin is reduced by 50%.",
            "damage": [
                80,
                130,
                180,
                230,
                280
            ],
            "powerDamage": 40,
            "cooldown": 75,
            "cost": 100,
            "secondaryDamage": {
                "damage": [
                    225,
                    300,
                    375,
                    450,
                    525
                ],
                "powerDamage": 40
            },
            "icon": "images/smite/abilities/watery grave.jpg"
        },
        "icon": "images/smite/gods/kuzenbo.jpg"
    },
    {
        "name": "Loki",
        "title": "The Trickster",
        "pantheon": "Norse",
        "type": "Assassin ",
        "attackType": "Melee",
        "powerType": "Physical",
        "pros": "High Single Target Damage",
        "health": 395,
        "healthPerLevel": 75,
        "mana": 210,
        "manaPerLevel": 35,
        "speed": 375,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 1.9,
        "damage": 38,
        "damagePerLevel": 2.4,
        "physicalProtection": 11,
        "physicalProtectionPerLevel": 2.9,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 8,
        "hpFivePerLevel": 0.7,
        "mpFive": 4.2,
        "mpFivePerLevel": 0.35,
        "passive": {
            "name": "Behind You!",
            "description": "Loki deals more damage from his basic attacks when hitting enemies from behind. His basic attacks also utilize a five swing progressive chain.",
            "icon": "images/smite/abilities/behind you!.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Vanish",
            "description": "Loki disappears in a puff of smoke. While invisible, he moves faster, removes and gains immunity to Slow effects, and takes 25% less damage. His next basic attack from stealth (or for 2s after) applies a bleed to his target, dealing damage every .5s and reveals Loki.",
            "damage": [
                30,
                45,
                60,
                75,
                90
            ],
            "powerDamage": 25,
            "cooldown": 15,
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "ticks": 4,
            "icon": "images/smite/abilities/vanish.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Decoy",
            "description": "Loki spawns a decoy version of himself that taunts all nearby enemy minions. After a short time, the decoy explodes dealing damage to all enemies in the radius.",
            "damage": [
                90,
                140,
                190,
                240,
                290
            ],
            "powerDamage": 100,
            "cooldown": 12,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/decoy.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Aimed Strike",
            "description": "Upon activation, Loki's next basic attack does additional damage with a short time. The enemy hit is also slowed.",
            "damage": [
                60,
                100,
                140,
                180,
                220
            ],
            "powerDamage": 100,
            "cooldown": [
                12,
                11,
                10,
                9,
                8
            ],
            "cost": 50,
            "icon": "images/smite/abilities/aimed strike.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Assassinate",
            "description": "Upon activation, Loki teleports to his ground target location. If an enemy god is within the radius, Loki will backstab that target doing damage and stunning them.",
            "damage": [
                150,
                225,
                300,
                375,
                450
            ],
            "powerDamage": 120,
            "cooldown": 90,
            "cost": 100,
            "icon": "images/smite/abilities/assassinate.jpg"
        },
        "icon": "images/smite/gods/loki.jpg"
    },
    {
        "name": "Medusa",
        "title": "The Gorgon",
        "pantheon": "Greek",
        "type": "Hunter ",
        "attackType": "Ranged",
        "powerType": "Physical",
        "pros": "High Single Target Damage",
        "health": 547,
        "healthPerLevel": 77,
        "mana": 254,
        "manaPerLevel": 34,
        "speed": 365,
        "attackSpeed": 0.96,
        "attackSpeedPerLevel": 1.4,
        "damage": 41,
        "damagePerLevel": 2.6,
        "physicalProtection": 15,
        "physicalProtectionPerLevel": 3,
        "magicalProtection": 31,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 9,
        "hpFivePerLevel": 0.68,
        "mpFive": 5,
        "mpFivePerLevel": 0.25,
        "passive": {
            "name": "Sidewinder",
            "description": "Medusa suffers no movement penalty when side strafing and half of the movement penalty when moving backward.",
            "icon": "images/smite/abilities/sidewinder.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Viper Shot",
            "description": "Medusa shoots out 3 vipers in rapid succession that poisons the targets hit dealing damage over time.",
            "damage": [
                15,
                20,
                25,
                30,
                35
            ],
            "powerDamage": 10,
            "cooldown": 10,
            "cost": [
                50,
                55,
                60,
                65,
                70
            ],
            "ticks": 4,
            "icon": "images/smite/abilities/viper shot.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Acid Spray",
            "description": "Medusa hurls back and spits out acid that damages the first target hit and sprays out acid in a cone behind them dealing damage to every enemy hit. Acid spray will explode on statues Medusa has created.",
            "damage": [
                90,
                135,
                180,
                225,
                270
            ],
            "powerDamage": 70,
            "cooldown": 14,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/acid spray.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Lacerate",
            "description": "Medusa quickly slithers forward grabbing and slashing the first enemy god she gets to. The slash leaves the enemy reeling in pain, reducing their healing for a short time.",
            "damage": [
                80,
                130,
                180,
                230,
                280
            ],
            "powerDamage": 80,
            "cooldown": 15,
            "cost": 70,
            "icon": "images/smite/abilities/lacerate.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Petrify",
            "description": "Medusa removes her mask revealing her true face, delivering a powerful blast from her horrifying Gorgon gaze. Enemies take damage and are stunned if they are looking at Medusa. Enemies not looking at medusa take 75% damage and are slowed. Enemy gods that are killed by Medusa's gaze will turn to stone and remain behind as a reminder to others.",
            "damage": [
                300,
                400,
                500,
                600,
                700
            ],
            "powerDamage": 100,
            "cooldown": 90,
            "cost": 100,
            "icon": "images/smite/abilities/petrify.jpg"
        },
        "icon": "images/smite/gods/medusa.jpg"
    },
    {
        "name": "Mercury",
        "title": "Messenger of the Gods",
        "pantheon": "Roman",
        "type": "Assassin ",
        "attackType": "Melee",
        "powerType": "Physical",
        "pros": "High Single Target Damage, High Mobility",
        "health": 400,
        "healthPerLevel": 75,
        "mana": 200,
        "manaPerLevel": 40,
        "speed": 381,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 2.4,
        "damage": 38,
        "damagePerLevel": 2.13,
        "physicalProtection": 12,
        "physicalProtectionPerLevel": 2.9,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 10,
        "hpFivePerLevel": 0.7,
        "mpFive": 4.4,
        "mpFivePerLevel": 0.35,
        "passive": {
            "name": "Fastest God Alive",
            "description": "For every 1 ft traveled, Mercury gains a 0.1% physical power bonus on his next basic attack (max 50%).  Mercury also gains additional physical power equal to 25% of movement speed from items or abilities.",
            "icon": "images/smite/abilities/fastest god alive.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Made You Look",
            "description": "Mercury moves in the blink of an eye, dealing one melee attack to every enemy within the target area. Each hit may trigger item effects for basic attacks, and can critical hit.",
            "damage": [
                70,
                105,
                140,
                175,
                210
            ],
            "powerDamage": 60,
            "cooldown": 8,
            "cost": 50,
            "icon": "images/smite/abilities/made you look.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Maximum Velocity",
            "description": "Passive: Mercury gains increased movement speed.  Active: Mercury increases his attack speed for the duration.",
            "cooldown": [
                18,
                17,
                16,
                15,
                14
            ],
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/maximum velocity.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Special Delivery",
            "description": "Mercury dashes forward, knocking aside minions, grabbing the first enemy god he encounters and spinning them. The enemy god takes damage until the effect ends, and Mercury throws the god in the direction of his choice.",
            "damage": [
                10,
                15,
                20,
                25,
                30
            ],
            "powerDamage": 20,
            "cooldown": 15,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "ticks": 4,
            "icon": "images/smite/abilities/special delivery.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Sonic Boom",
            "description": "Mercury gathers energy for a powerful dash, with the range extending as he does so. He travels the distance faster than the speed of sound, dealing damage to all enemies, stunning them and spinning them around in a random direction.",
            "damage": [
                200,
                275,
                350,
                425,
                500
            ],
            "powerDamage": 100,
            "cooldown": 90,
            "cost": [
                80,
                90,
                100,
                110,
                120
            ],
            "icon": "images/smite/abilities/sonic boom.jpg"
        },
        "icon": "images/smite/gods/mercury.jpg"
    },
    {
        "name": "Ne Zha",
        "title": "The Third Lotus Prince",
        "pantheon": "Chinese",
        "type": "Assassin ",
        "attackType": "Melee",
        "powerType": "Physical",
        "pros": "High Single Target Damage, Medium Crowd Control",
        "health": 400,
        "healthPerLevel": 75,
        "mana": 200,
        "manaPerLevel": 35,
        "speed": 375,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 2.1,
        "damage": 39,
        "damagePerLevel": 2.2,
        "physicalProtection": 11,
        "physicalProtectionPerLevel": 2.9,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 10,
        "hpFivePerLevel": 0.71,
        "mpFive": 3.9,
        "mpFivePerLevel": 0.27,
        "passive": {
            "name": "Righteous Spirit",
            "description": "Ne Zha gains stacks from successful Basic Attack and ability hit, and 2x stacks from Critical Hits. Each stack provides him with .5% crit chance. Stacks are lost after being out of combat for 5s.",
            "icon": "images/smite/abilities/immortal spirit.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Universe Ring Toss",
            "description": "Ne Zha throws the Universe Ring, bouncing several times, dealing damage, applying a physical protection debuff for 3s and slowing for 1s.  Each hit also stacks a movement speed buff on Ne Zha for 2s.  Subsequent hits on the same target deal 25% less damage.",
            "damage": [
                70,
                100,
                125,
                150,
                175
            ],
            "powerDamage": 20,
            "cooldown": 14,
            "cost": [
                50,
                55,
                60,
                65,
                70
            ],
            "icon": "images/smite/abilities/universe ring toss.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Flaming Spear",
            "description": "Ne Zha empowers himself with fighting spirit, igniting his spear for increased Attack Speed and Critical Strike Chance for a short duration.",
            "cooldown": [
                18,
                17,
                16,
                15,
                14
            ],
            "cost": [
                55,
                60,
                65,
                70,
                75
            ],
            "icon": "images/smite/abilities/flaming spear.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Armillary Sash",
            "description": "Ne Zha throws out his Armillary Sash hitting the first enemy god in its path.  The target is stunned as Ne Zha yanks himself toward the target, dealing a powerful blow to all enemies in the area when he arrives.",
            "damage": [
                70,
                100,
                130,
                160,
                190
            ],
            "powerDamage": 100,
            "cooldown": [
                14,
                14,
                14,
                14,
                14
            ],
            "cost": 75,
            "icon": "images/smite/abilities/armillary sash.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Wind Fire Wheels",
            "description": "Ne Zha dashes forward. If he hits an enemy god, he knocks it skyward for 4s, unleashing a combo (successfully timed clicks during the combo result in critical strikes), then smashing back to Earth, dealing additional damage to enemies in the radius as he flips back to his starting location.",
            "damage": [
                40,
                60,
                80,
                100,
                120
            ],
            "powerDamage": 30,
            "cooldown": 90,
            "cost": [
                80,
                90,
                100,
                110,
                120
            ],
            "icon": "images/smite/abilities/wind fire wheels.jpg"
        },
        "icon": "images/smite/gods/nezha.jpg"
    },
    {
        "name": "Neith",
        "title": "Weaver of Fate",
        "pantheon": "Egyptian",
        "type": "Hunter ",
        "attackType": "Ranged",
        "powerType": "Physical",
        "pros": "High Crowd Control, High Sustain",
        "health": 435,
        "healthPerLevel": 75,
        "mana": 230,
        "manaPerLevel": 39,
        "speed": 365,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 1.6,
        "damage": 38,
        "damagePerLevel": 2.5,
        "physicalProtection": 12,
        "physicalProtectionPerLevel": 3,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 6,
        "hpFivePerLevel": 0.54,
        "mpFive": 4.4,
        "mpFivePerLevel": 0.35,
        "passive": {
            "name": "Broken Weave",
            "description": "A Broken Weave appears at the last location that each enemy god dies.  The Broken Weaves give her abilities secondary effects when used on the Broken Weaves.  These weaves last for 1 minute.",
            "icon": "images/smite/abilities/broken weave.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Spirit Arrow",
            "description": "Neith fires a shot that passes through everything.  The first enemy hit takes damage and is rooted. Successive enemies take 75% of the damage and root duration.  If the Spirit Arrow hits a Broken Weave, the Weave detonates, dealing an additional 100% of the damage and applying the root to all enemies in the area.",
            "damage": [
                80,
                140,
                200,
                260,
                320
            ],
            "powerDamage": 8,
            "cooldown": 15,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/spirit arrow.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Unravel",
            "description": "Neith neatly unravels the world weaves, damaging all enemies in the target area, reducing their attack speed, and healing Neith for each enemy hit, up to 3. Any Broken Weaves in the area are removed, healing Neith an additional amount.",
            "damage": [
                70,
                100,
                130,
                160,
                190
            ],
            "powerDamage": 80,
            "cooldown": 15,
            "cost": 70,
            "icon": "images/smite/abilities/unravel.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Back Flip",
            "description": "Neith back flips through the air, creating a Broken Weave as she leaps while damaging and slowing enemies in the area in front of her.",
            "damage": [
                80,
                120,
                160,
                200,
                240
            ],
            "powerDamage": 80,
            "cooldown": 15,
            "cost": [
                70,
                80,
                90,
                100,
                110
            ],
            "icon": "images/smite/abilities/back flip.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "World Weaver",
            "description": "Neith charges up and fires an arrow across the world, seeking its target through obstacles.  Enemy gods take damage and are stunned.  The arrow can be fired quicker for diminished results.",
            "damage": [
                230,
                295,
                360,
                425,
                490
            ],
            "powerDamage": 120,
            "cooldown": 90,
            "cost": [
                80,
                90,
                100,
                110,
                120
            ],
            "icon": "images/smite/abilities/world weaver.jpg"
        },
        "icon": "images/smite/gods/neith.jpg"
    },
    {
        "name": "Nemesis",
        "title": "Goddess of Revenge",
        "pantheon": "Greek",
        "type": "Assassin ",
        "attackType": "Melee",
        "powerType": "Physical",
        "pros": "High Mobility",
        "health": 470,
        "healthPerLevel": 76,
        "mana": 210,
        "manaPerLevel": 38,
        "speed": 375,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 2.16,
        "damage": 39,
        "damagePerLevel": 2.25,
        "physicalProtection": 11,
        "physicalProtectionPerLevel": 3,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 8,
        "hpFivePerLevel": 0.7,
        "mpFive": 4.3,
        "mpFivePerLevel": 0.4,
        "passive": {
            "name": "Scales of Fate",
            "description": "Nemesis holds the scales of balance. Hitting enemies with basic attacks tips the scales in her favor, stealing a portion of her target's physical and magical power from items (stacking). Stolen magical power is converted to physical power for Nemesis at one half the value.",
            "icon": "images/smite/abilities/scales of fate.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Swift Vengeance",
            "description": "Nemesis dashes in a line, dealing damage to enemies in her path and may dash again within 2s. Using another ability during this time cancels the second dash.",
            "damage": [
                50,
                80,
                110,
                140,
                170
            ],
            "powerDamage": 25,
            "cooldown": 14,
            "cost": [
                50,
                60,
                70,
                80,
                90
            ],
            "icon": "images/smite/abilities/swift vengeance.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Slice and Dice",
            "description": "Nemesis swings her blade, dealing damage in an area in front of her. Enemies in the center of her swing are struck for 2x damage and slowed for 2s.",
            "damage": [
                40,
                70,
                100,
                130,
                160
            ],
            "powerDamage": 60,
            "cooldown": 13,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/slice and dice.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Retribution",
            "description": "Nemesis activates a temporary shield around herself that protects her from a set amount of damage, or until time expires. A percentage of incoming damage from gods is healed and reflected back to the source. Hard crowd control effects remove the shield.",
            "cooldown": 16,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/retribution.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Divine Judgement",
            "description": "Nemesis chooses a single enemy god, reducing their health and movement speed and stealing a portion of their protections for a time period. Her movement speed is also increased during this time.",
            "maxHealthDamage": [
                20,
                22.5,
                25,
                27.5,
                30
            ],
            "cooldown": [
                90,
                90,
                90,
                90,
                90
            ],
            "cost": [
                90,
                95,
                100,
                105,
                110
            ],
            "icon": "images/smite/abilities/divine judgement.jpg"
        },
        "icon": "images/smite/gods/nemesis.jpg"
    },
    {
        "name": "Nike",
        "title": "Goddess of Victory",
        "pantheon": "Greek",
        "type": "Warrior",
        "attackType": "Melee",
        "powerType": "Physical",
        "pros": "High Defense, Medium Crowd Control",
        "health": 470,
        "healthPerLevel": 80,
        "mana": 220,
        "manaPerLevel": 38,
        "speed": 375,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 1.2,
        "damage": 37,
        "damagePerLevel": 2,
        "physicalProtection": 15,
        "physicalProtectionPerLevel": 3,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 7,
        "hpFivePerLevel": 0.8,
        "mpFive": 4.6,
        "mpFivePerLevel": 0.39,
        "passive": {
            "name": "To Victory!",
            "description": "Nike sets three goals that the team can achieve to gain increased strength. Upon completing a goal, Nike's team gains a Laurel that increases Power and Movement Speed. This Laurel can increase up to 3 times.",
            "icon": "images/smite/abilities/to victory!.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Rend",
            "description": "Nike slams the ground twice, sending out fissures that deal damage. If a target is hit twice, that target loses protections for 5 seconds. If Nike's 'Plan of Action' is active, Rend gains an additional attack. If a target is hit three times, that target is disarmed.",
            "damage": [
                50,
                80,
                110,
                140,
                170
            ],
            "powerDamage": 40,
            "cooldown": 14,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/rend.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Plan of Action",
            "description": "Nike draws upon her vast battle experience to plan her next move.",
            "damage": [
                20,
                30,
                40,
                50,
                60
            ],
            "powerDamage": 0,
            "cooldown": [
                18,
                17,
                16,
                15,
                14
            ],
            "cost": [
                30,
                35,
                40,
                45,
                50
            ],
            "icon": "images/smite/abilities/plan of action.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Valiant Leap",
            "description": "Nike leaps into the air, then crashes down at a location dealing damage and knocking up enemies.",
            "damage": [
                65,
                115,
                165,
                215,
                265
            ],
            "powerDamage": 60,
            "cooldown": 18,
            "cost": [
                55,
                60,
                65,
                70,
                75
            ],
            "icon": "images/smite/abilities/valiant leap.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Sentinel of Zeus",
            "description": "Nike transforms into an armored sentinel and sends out a shockwave that damages and slows enemies around her. While in this form, she gains 40% of her max health as a shield.",
            "damage": [
                100,
                165,
                230,
                295,
                360
            ],
            "powerDamage": 70,
            "cooldown": 100,
            "cost": [
                90,
                95,
                100,
                105,
                110
            ],
            "maxHealthDamage": [
                30,
                35,
                40,
                45,
                50
            ],
            "icon": "images/smite/abilities/sentinel of zeus.jpg"
        },
        "icon": "images/smite/gods/nike.jpg"
    },
    {
        "name": "Nox",
        "title": "Goddess of Night",
        "pantheon": "Roman",
        "type": "Mage ",
        "attackType": "Ranged",
        "powerType": "Magical",
        "pros": "High Area Damage",
        "health": 365,
        "healthPerLevel": 75,
        "mana": 250,
        "manaPerLevel": 38,
        "speed": 360,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 0.8,
        "damage": 34,
        "damagePerLevel": 1.5,
        "physicalProtection": 18,
        "physicalProtectionPerLevel": 2.6,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 8,
        "hpFivePerLevel": 0.6,
        "mpFive": 5,
        "mpFivePerLevel": 0.4,
        "passive": {
            "name": "Flame of the Night",
            "description": "Nox's candles gather energy from all abilities she uses. For every ability Nox casts a candle is lit. For every candle lit Nox gains +3% magical power. When Nox takes damage one of her candles is blown out.",
            "stacks": {
                "current": 0,
                "max": 4,
                "stacks": [
                    {
                        "magicalPowerPercentage": 0.03
                    }
                ],
                "type": "temporary"
            },
            "icon": "images/smite/abilities/flame of the night.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Shadow Lock",
            "description": "Nox extends her shadow, rooting a single enemy god in place and dealing damage over time. Nox must channel to maintain hold on the target, but may cancel this ability early.",
            "damage": [
                30,
                40,
                50,
                60,
                70
            ],
            "powerDamage": 20,
            "cooldown": 10,
            "cost": [
                50,
                55,
                60,
                65,
                70
            ],
            "ticks": 4,
            "icon": "images/smite/abilities/shadow lock.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Siphon Darkness",
            "description": "Nox creates a void of darkness that silences all enemies within. After a short duration it explodes, dealing damage.",
            "damage": [
                90,
                160,
                230,
                300,
                370
            ],
            "powerDamage": 100,
            "cooldown": 13,
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "icon": "images/smite/abilities/siphon darkness.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Shadow Step",
            "description": "Nox dashes forward, dealing damage to all enemies. If she hits an allied god, she leaps into their shadow, traveling with them. When Nox exits a shadow, she deals damage again in a radius around her. Nox may cancel this ability early to exit shadows.",
            "damage": [
                70,
                110,
                150,
                190,
                230
            ],
            "powerDamage": 70,
            "cooldown": 15,
            "cost": 90,
            "icon": "images/smite/abilities/shadow step.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Night Terror",
            "description": "Nox unleashes a vortex of dark energy that explodes on contact with an enemy god, dealing damage to all enemies in range 20 and applying damage over time. Enemies hit are also weakened, dealing less damage for the duration.",
            "damage": [
                200,
                250,
                300,
                350,
                400
            ],
            "powerDamage": 75,
            "cooldown": [
                90,
                85,
                80,
                75,
                70
            ],
            "cost": 100,
            "icon": "images/smite/abilities/night terror.jpg"
        },
        "icon": "images/smite/gods/nox.jpg"
    },
    {
        "name": "Nu Wa",
        "title": "Guardian of Heaven",
        "pantheon": "Chinese",
        "type": "Mage ",
        "attackType": "Ranged",
        "powerType": "Magical",
        "pros": "Pusher",
        "health": 400,
        "healthPerLevel": 75,
        "mana": 265,
        "manaPerLevel": 43,
        "speed": 355,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 1.7,
        "damage": 35,
        "damagePerLevel": 1.5,
        "physicalProtection": 9,
        "physicalProtectionPerLevel": 2.7,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 7,
        "hpFivePerLevel": 0.45,
        "mpFive": 4.6,
        "mpFivePerLevel": 0.43,
        "passive": {
            "name": "Strength of Wood",
            "description": "After 5 successful basic attacks, Nu Wa's next basic attack will root enemies.",
            "icon": "images/smite/abilities/strength of wood.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Mysterious Fog",
            "description": "Nu Wa condenses moisture into fog at her location which then rolls forward away from her. She and all allies are stealthed while inside the fog, and have increased movement speed. Attacking breaks the stealth effect.  Enemies that run into the fog take damage, and continue to take 20% of that damage again every second they are in the fog.",
            "damage": [
                50,
                75,
                100,
                125,
                150
            ],
            "powerDamage": 50,
            "cooldown": 15,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/mysterious fog.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Clay Soldiers",
            "description": "Nu Wa conjures Clay Soldiers from the earth. These soldiers have health equal to 200 plus 20% of Nu Wa's maximum health, and deal damage with basic attacks. Enemies hit by their initial charge will take damage and have their magical protections reduced.",
            "damage": [
                20,
                30,
                40,
                50,
                60
            ],
            "powerDamage": 0,
            "cooldown": 18,
            "cost": [
                60,
                70,
                80,
                90,
                100
            ],
            "icon": "images/smite/abilities/clay soldiers.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Shining Metal",
            "description": "Nu Wa launches a mass of shining metal, damaging all enemies it hits. If it hits one of her Clay Soldiers, it explodes, dealing additional damage and stunning enemies.",
            "damage": [
                90,
                130,
                170,
                210,
                250
            ],
            "secondaryDamage": {
                "damage": [
                    30,
                    60,
                    90,
                    120,
                    150
                ],
                "powerDamage": 25
            },
            "powerDamage": 75,
            "cooldown": 10,
            "cost": 50,
            "icon": "images/smite/abilities/shining metal.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Fire Shards",
            "description": "Nu Wa flies up into the clouds, gaining visibility on all enemy gods, and summoning fire shards from the sky to damage each of them.",
            "damage": [
                100,
                175,
                250,
                325,
                400
            ],
            "powerDamage": 40,
            "cooldown": 110,
            "cost": 100,
            "icon": "images/smite/abilities/fire shards.jpg"
        },
        "icon": "images/smite/gods/nuwa.jpg"
    },
    {
        "name": "Odin",
        "title": "The Allfather",
        "pantheon": "Norse",
        "type": "Warrior ",
        "attackType": "Melee",
        "powerType": "Physical",
        "pros": "High Defense, High Sustain",
        "health": 475,
        "healthPerLevel": 86,
        "mana": 195,
        "manaPerLevel": 32,
        "speed": 370,
        "attackSpeed": 0.92,
        "attackSpeedPerLevel": 1.1,
        "damage": 38,
        "damagePerLevel": 2,
        "physicalProtection": 17,
        "physicalProtectionPerLevel": 3,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 9,
        "hpFivePerLevel": 0.63,
        "mpFive": 4.1,
        "mpFivePerLevel": 0.4,
        "passive": {
            "name": "Path to Valhalla",
            "description": "Whenever any god dies on the battleground, Odin gains 10% movement speed and 10% power for 10s. This buff can stack up to five times.",
            "icon": "images/smite/abilities/path to valhalla.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Lunge",
            "description": "Odin lunges to his target location, doing damage to all nearby enemies.",
            "damage": [
                120,
                165,
                210,
                255,
                300
            ],
            "powerDamage": 70,
            "cooldown": [
                15,
                14,
                13,
                12,
                11
            ],
            "cost": [
                45,
                50,
                55,
                60,
                65
            ],
            "icon": "images/smite/abilities/lunge.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Raven Shout",
            "description": "Odin summons a flock of Ravens that create a shield around him. When the shield expires it explodes outward, dealing damage to nearby enemies based on how much health it had remaining. If the shield is at full health, it deals additional bonus damage.  The shield will not expire while Odin is using Lunge, and will always detonate upon landing.",
            "damage": [
                125,
                218.25,
                312.5,
                406.25,
                500
            ],
            "powerDamage": 75,
            "cooldown": 15,
            "cost": [
                50,
                55,
                60,
                65,
                70
            ],
            "icon": "images/smite/abilities/raven shout.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Gungnir's Might",
            "description": "Odin does a sweeping spear attack that hits twice dealing damage and slowing all enemies around him on the first hit.",
            "damage": [
                45,
                65,
                85,
                105,
                125
            ],
            "powerDamage": 30,
            "cooldown": 10,
            "cost": 70,
            "ticks": 2,
            "icon": "images/smite/abilities/gungnir's might.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Ring of Spears",
            "description": "Odin summons a wall of spears that blocks his and enemy movement, but allies may move freely through. It does not block attacks. Enemies inside the ring have their attack speed lowered, and are unable to heal. Odin is immune to Slow and Root effects while in his Ring.",
            "cooldown": 75,
            "cost": 100,
            "icon": "images/smite/abilities/ring of spears.jpg"
        },
        "icon": "images/smite/gods/odin.jpg"
    },
    {
        "name": "Osiris",
        "title": "Broken God of the Afterlife",
        "pantheon": "Egyptian",
        "type": "Warrior ",
        "attackType": "Melee",
        "powerType": "Physical",
        "pros": "High Defense, High Attack Speed",
        "health": 475,
        "healthPerLevel": 85,
        "mana": 230,
        "manaPerLevel": 40,
        "speed": 375,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 1.4,
        "damage": 39,
        "damagePerLevel": 2.25,
        "physicalProtection": 17,
        "physicalProtectionPerLevel": 3,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 6,
        "hpFivePerLevel": 0.8,
        "mpFive": 4.7,
        "mpFivePerLevel": 0.39,
        "passive": {
            "name": "Fragmented",
            "description": "Each time Osiris uses an ability he burns away a fragment of his body, gaining physical damage mitigation for each missing fragment. After losing 8 fragments, he becomes his spirit form. He may walk through enemies and enemy blockers, and his basic attacks do not incur a movement penalty. This effect lasts for 6 successful basic attacks.",
            "icon": "images/smite/abilities/fragmented.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Sickle Strike",
            "description": "Osiris throws his Sickle forward. It stops at the first enemy hit, dealing damage and slowing them. The Sickle remains for the duration of the slow.",
            "damage": [
                60,
                110,
                160,
                210,
                260
            ],
            "powerDamage": 40,
            "cooldown": 5,
            "cost": 30,
            "icon": "images/smite/abilities/sickle strike.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Spirit Flail",
            "description": "Osiris imbues his flail with spiritual energy, striking at the target ground location. Enemies hit take damage, and Osiris gains movement speed. If an enemy is under the effect of Sickle Strike, the target slow is increased in power and duration.",
            "damage": [
                70,
                125,
                180,
                235,
                290
            ],
            "powerDamage": 75,
            "cooldown": 10,
            "cost": [
                50,
                55,
                60,
                65,
                70
            ],
            "icon": "images/smite/abilities/spirit flail.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Judgement Tether",
            "description": "Osiris flings out mummy wraps, tethering himself to all nearby enemies. Targets hit deal reduced damage over the next 4s. The tether can be broken by targets moving far enough away from Osiris. Targets still in range when the duration expires are stunned.",
            "cooldown": 15,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/judgement tether.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Lord of the Afterlife",
            "description": "Osiris sheds any remaining fragments, gaining the benefit of his passive, and leaps forward. Osiris targets all enemy gods in the landing area, and rips a fragment of their spirits out, dealing damage and preventing them from healing. Targets are rooted for 0.4s during the attack. Enemy minions in the target area also take damage.",
            "damage": [
                220,
                320,
                420,
                520,
                620
            ],
            "powerDamage": 80,
            "cooldown": 75,
            "cost": 100,
            "icon": "images/smite/abilities/lord of the afterlife.jpg"
        },
        "icon": "images/smite/gods/osiris.jpg"
    },
    {
        "name": "Poseidon",
        "title": "God of the Oceans",
        "pantheon": "Greek",
        "type": "Mage ",
        "attackType": "Ranged",
        "powerType": "Magical",
        "pros": "High Area Damage",
        "health": 380,
        "healthPerLevel": 67,
        "mana": 245,
        "manaPerLevel": 40,
        "speed": 360,
        "attackSpeed": 0.87,
        "attackSpeedPerLevel": 1.2,
        "damage": 35,
        "damagePerLevel": 1.5,
        "physicalProtection": 8,
        "physicalProtectionPerLevel": 2.2,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 6,
        "hpFivePerLevel": 0.5,
        "mpFive": 4.6,
        "mpFivePerLevel": 0.4,
        "passive": {
            "name": "Changing Tides",
            "description": "Poseidon's Movement speed increases and his abilities do additional damage as his Tide Level increases. Successful basic attack hits increase his Tide, and using abilities decreases it.",
            "icon": "images/smite/abilities/changing tides.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Tidal Surge",
            "description": "Poseidon summons forth a wave that travels in a line, dealing damage and pushing back all enemies in its path.",
            "damage": [
                100,
                140,
                180,
                220,
                260
            ],
            "powerDamage": 70,
            "cooldown": 10,
            "cost": [
                60,
                70,
                80,
                90,
                100
            ],
            "icon": "images/smite/abilities/tidal surge.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Trident",
            "description": "Poseidon activates his Trident, granting Move speed and making his basic attacks fire 2 additional shots in a spread for 6s. The shots deal magical damage plus 20% of Poseidon's Magical Power. All shots increase Poseidon's Tide on successful hit.",
            "damage": [
                30,
                40,
                50,
                60,
                70
            ],
            "powerDamage": 20,
            "cooldown": [
                20,
                18,
                16,
                14,
                12
            ],
            "cost": [
                65,
                70,
                75,
                80,
                85
            ],
            "icon": "images/smite/abilities/trident.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Whirlpool",
            "description": "Poseidon summons a whirlpool at his ground target location that cripples targets, preventing movement abilities, and pulls targets toward the center dealing magical damage every .5s for 3s. Reduces Poseidon's Tide by 25% when cast.",
            "damage": [
                15,
                25,
                35,
                45,
                55
            ],
            "powerDamage": 15,
            "cooldown": [
                15,
                14,
                13,
                12,
                11
            ],
            "cost": [
                15,
                14,
                13,
                12,
                11
            ],
            "icon": "images/smite/abilities/whirlpool.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Release the Kraken!",
            "description": "Poseidon releases the Kraken, damaging and slowing targets in its radius. Enemies in the center of the effect when it spawns take additional damage, are bounced into the air and stunned.",
            "damage": [
                175,
                210,
                245,
                280,
                315
            ],
            "powerDamage": 45,
            "cooldown": 90,
            "cost": [
                100,
                110,
                120,
                130,
                140
            ],
            "icon": "images/smite/abilities/release the kraken!.jpg"
        },
        "icon": "images/smite/gods/poseidon.jpg"
    },
    {
        "name": "Ra",
        "title": "Sun God",
        "pantheon": "Egyptian",
        "type": "Mage ",
        "attackType": "Ranged",
        "powerType": "Magical",
        "pros": "High Sustain, Pusher",
        "health": 385,
        "healthPerLevel": 68,
        "mana": 255,
        "manaPerLevel": 48,
        "speed": 360,
        "attackSpeed": 0.88,
        "attackSpeedPerLevel": 1,
        "damage": 34,
        "damagePerLevel": 1.5,
        "physicalProtection": 10,
        "physicalProtectionPerLevel": 2.5,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 7,
        "hpFivePerLevel": 0.48,
        "mpFive": 4.8,
        "mpFivePerLevel": 0.44,
        "passive": {
            "name": "Speed of Light",
            "description": "Every time Ra uses an ability, his movement speed is increased.",
            "stacks": {
                "current": 0,
                "max": 3,
                "stacks": [
                    {
                        "movementSpeed": 6
                    }
                ],
                "type": "temporary"
            },
            "icon": "images/smite/abilities/speed of light.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Celestial Beam",
            "description": "Ra summons a moving beam of intense light from the sky, doing damage to anyone caught under the beam.",
            "damage": [
                95,
                155,
                215,
                275,
                335
            ],
            "powerDamage": 90,
            "cooldown": 10,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/celestial beam.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Divine Light",
            "description": "Light starts to emanate from Ra, stacking a slow every .3s on enemies near him. After 2s, the light detonates, doing damage and increasing the slow duration. Any enemies facing Ra at the time of the explosion are also blinded.",
            "damage": [
                70,
                120,
                170,
                220,
                270
            ],
            "powerDamage": 55,
            "cooldown": 12,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/divine light.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Solar Blessing",
            "description": "Ra summons a pillar of blessed light.  Allies inside the blessing are healed every second.  Enemies are damaged every second.",
            "damage": [
                20,
                32,
                44,
                56,
                68
            ],
            "powerDamage": 20,
            "cooldown": 18,
            "cost": [
                65,
                75,
                85,
                95,
                105
            ],
            "ticks": 6,
            "icon": "images/smite/abilities/solar blessing.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Searing Pain",
            "description": "Ra calls on the power of the sun to decimate his foes in an extreme blast of heat in front of him, doing damage to all enemies unlucky enough to find themselves in the path.",
            "damage": [
                400,
                475,
                550,
                625,
                700
            ],
            "powerDamage": 100,
            "cooldown": [
                80,
                75,
                70,
                65,
                60
            ],
            "cost": 90,
            "icon": "images/smite/abilities/searing pain.jpg"
        },
        "icon": "images/smite/gods/ra.jpg"
    },
    {
        "name": "Raijin",
        "title": "Master of Thunder",
        "pantheon": "Japanese",
        "type": " Mage ",
        "attackType": "Ranged",
        "powerType": "Magical",
        "pros": "Pusher, High Mobility",
        "health": 385,
        "healthPerLevel": 80,
        "mana": 255,
        "manaPerLevel": 43,
        "speed": 355,
        "attackSpeed": 0.87,
        "attackSpeedPerLevel": 0.9,
        "damage": 34,
        "damagePerLevel": 1.5,
        "physicalProtection": 9,
        "physicalProtectionPerLevel": 3.1,
        "magicalProtection": 25,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 6,
        "hpFivePerLevel": 0.45,
        "mpFive": 4.6,
        "mpFivePerLevel": 0.46,
        "passive": {
            "name": "Charged Tempo",
            "description": "For every 5 Abilities cast, Raijin reduces the Cooldown of all Abilities currently on Cooldown (including the one just cast) by 1s.",
            "icon": "images/smite/abilities/static crescendo.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Percussive Storm",
            "description": "Raijin pounds his drums sending forth a peal of thunder in a line, then another, then two at once, each growing wider as it travels. The thunder deals Magical Damage to Enemies it hits, and stops on the first Enemy God in its path. This ability grants one Static Charge each time he strikes the drums, for a total of 3 Charges.",
            "damage": [
                25,
                40,
                55,
                70,
                85
            ],
            "powerDamage": 25,
            "cooldown": 10,
            "cost": [
                50,
                55,
                60,
                65,
                70
            ],
            "ticks": 4,
            "icon": "images/smite/abilities/percussive storm.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Raiju",
            "description": "Raijin marks a target enemy by dismissing his ally Riaju, who hides in the enemy's navel. While asleep, Raiju reveals the target to Raijin's team on the minimap. The next time Raijin damages the target, Raiju awakens and claws his way out, damaging the target and 5 nearby enemies in his attempt to flee. Dismissing Raiju grants Raijin a single Charge.",
            "damage": [
                9,
                15,
                21,
                27,
                33
            ],
            "powerDamage": 8,
            "ticks": 5,
            "cooldown": [
                15,
                14,
                13,
                12,
                11
            ],
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/raiju.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Thunder Crash",
            "description": "Raijin sends a bolt of lightning crashing down at his ground target location damaging and mesmerizing enemies, while Raijin himself ascends into the sky. Shortly thereafter he crashing down at that location, doing a second burst of damage to all Enemies in the area. Raijin gains one Charge when he sends the bolt of lightning, and another when he arrives in a crash of thunder.",
            "damage": [
                20,
                25,
                30,
                35,
                40
            ],
            "powerDamage": 20,
            "cooldown": 15,
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "secondaryDamage": {
                "damage": [
                    40,
                    50,
                    60,
                    70,
                    80
                ],
                "powerDamage": 20
            },
            "icon": "images/smite/abilities/thunder crash.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Taiko Drums",
            "description": "Raijin flies above the battlefield, beating his drum 4 times to summon peals of thunder. With each hit, he has a choice of three beats:",
            "damage": [
                120,
                150,
                180,
                210,
                260
            ],
            "powerDamage": 50,
            "cooldown": 100,
            "cost": 90,
            "ticks": 4,
            "icon": "images/smite/abilities/taiko drums.jpg"
        },
        "icon": "images/smite/gods/raijin.jpg"
    },
    {
        "name": "Rama",
        "title": "Seventh Avatar of Vishnu",
        "pantheon": "Hindu",
        "type": "Hunter ",
        "attackType": "Ranged",
        "powerType": "Physical",
        "pros": "High Mobility, High Attack Speed",
        "health": 460,
        "healthPerLevel": 76,
        "mana": 205,
        "manaPerLevel": 34,
        "speed": 365,
        "attackSpeed": 0.95,
        "attackSpeedPerLevel": 1.7,
        "damage": 40,
        "damagePerLevel": 2.5,
        "physicalProtection": 12,
        "physicalProtectionPerLevel": 2.8,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 8,
        "hpFivePerLevel": 0.65,
        "mpFive": 4.5,
        "mpFivePerLevel": 0.25,
        "passive": {
            "name": "Astral Quiver",
            "description": "Rama's Astral Quiver generates an Astral Arrow every 12s. Also, every basic attack that Rama lands will reduce the amount of time to generate an arrow by 2s. Astral Arrows are used with his other abilities. ",
            "icon": "images/smite/abilities/astral quiver.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Astral Strike",
            "description": "Rama switches to a more powerful arrow that pierces and slows enemies. This ability consumes 1 of Rama's Astral Arrows and deals bonus damage with every shot. Rama cannot toggle this ability if he has no Astral Arrows.   The slow can be stacked up to 3 times.",
            "damage": [
                10,
                20,
                30,
                40,
                50
            ],
            "powerDamage": 0,
            "cooldown": 0,
            "cost": 20,
            "icon": "images/smite/abilities/astral strike.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Pick Me Up",
            "description": "Passive: Any time an enemy is hit by an Astral Arrow there is a % chance that an Astral Arrow pickup will appear on the ground (Only procs on the first enemy hit by Astral Strike). The pickup adds one Arrow to Rama's Astral Arrow count.  Active: Rama gains increased attack speed.",
            "cooldown": [
                15,
                14,
                13,
                12,
                11
            ],
            "cost": [
                80,
                85,
                90,
                95,
                100
            ],
            "toggleStats": {
                "attackSpeed": [
                    30,
                    35,
                    40,
                    45,
                    50
                ],
                "toggle": false
            },
            "icon": "images/smite/abilities/pick me up.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Rolling Assault",
            "description": "Rama performs a roll in the direction he is currently traveling. After performing a dodge roll, for 5s Rama's next basic attack will consume an astral arrow that cripples the target and deals bonus damage. Rama incurs no movement penalty during this shot. ",
            "damage": [
                20,
                40,
                60,
                80,
                100
            ],
            "powerDamage": 0,
            "cooldown": [
                11,
                11,
                11,
                11,
                11
            ],
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "icon": "images/smite/abilities/rolling assault.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Astral Barrage",
            "description": "Rama launches into the air and shoots 3 powerful arrows at the ground, each successive shot increasing in damage: 50%, 75%, 100% and decreasing in AOE size: 30, 20, 15.",
            "damage": [
                200,
                300,
                400,
                500,
                600
            ],
            "powerDamage": 60,
            "cooldown": 90,
            "cost": [
                100,
                110,
                120,
                130,
                140
            ],
            "icon": "images/smite/abilities/astral barrage.jpg"
        },
        "icon": "images/smite/gods/rama.jpg"
    },
    {
        "name": "Ratatoskr",
        "title": "The Sly Messenger",
        "pantheon": "Norse",
        "type": "Assassin ",
        "attackType": "Melee",
        "powerType": "Physical",
        "pros": "Great Jungler, High Mobility",
        "health": 495,
        "healthPerLevel": 73,
        "mana": 281,
        "manaPerLevel": 41,
        "speed": 375,
        "attackSpeed": 1.02,
        "attackSpeedPerLevel": 2,
        "damage": 41,
        "damagePerLevel": 2.25,
        "physicalProtection": 15,
        "physicalProtectionPerLevel": 3,
        "magicalProtection": 31,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 10,
        "hpFivePerLevel": 0.7,
        "mpFive": 5,
        "mpFivePerLevel": 0.46,
        "passive": {
            "name": "Acorn of Yggdrasil",
            "description": "Ratatoskr spawns with a powerful Magic Acorn from the World Tree in his inventory, replacing his item slot for Boots. He can upgrade this acorn through the item store from anywhere on the map to increase his Power and Movement Speed. The fully upgraded acorn adds self healing to his abilities.",
            "icon": "images/smite/abilities/acorn of yggdrasil.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Dart",
            "description": "Ratatoskr dashes forward, damaging and slowing enemies for 3s. Dart pierces through minions and stops at the first god hit.",
            "damage": [
                70,
                105,
                140,
                175,
                210
            ],
            "powerDamage": 70,
            "cooldown": 14,
            "cost": [
                50,
                55,
                60,
                65,
                70
            ],
            "icon": "images/smite/abilities/dart.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Flurry of Acorns",
            "description": "Ratatoskr spins around in a flurry of attacks, damaging nearby enemies and reducing their Physical Protections up to 4 times.",
            "damage": [
                10,
                14,
                18,
                22,
                26
            ],
            "powerDamage": 15,
            "cooldown": 14,
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "icon": "images/smite/abilities/flurry of acorns.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Acorn Blast",
            "description": "Ratatoskr shoots a blast of three acorns forward in a cone, each dealing damage. Enemies hit by more than one acorn will take additional damage and enemies hit by all 3 acorns are stunned for 1s.",
            "damage": [
                40,
                55,
                70,
                85,
                100
            ],
            "powerDamage": 30,
            "cooldown": 10,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/acorn blast.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Through the Cosmos",
            "description": "Ratatoskr charges up then leaps from the ground to a branch above his head. He may jump to 2 more branches before choosing a landing location. Upon landing he deals damage and Knocks up enemies. Through the Cosmos can be canceled or timed out from any of the branches, causing Ratatoskr to strike down at the current target location.",
            "damage": [
                200,
                260,
                320,
                380,
                440
            ],
            "powerDamage": 70,
            "cooldown": [
                110,
                105,
                100,
                95,
                90
            ],
            "cost": [
                100,
                100,
                100,
                100,
                100
            ],
            "icon": "images/smite/abilities/through the cosmos.jpg"
        },
        "icon": "images/smite/gods/ratatoskr.jpg"
    },
    {
        "name": "Ravana",
        "title": "Demon King of Lanka",
        "pantheon": "Hindu",
        "type": "Assassin ",
        "attackType": "Melee",
        "powerType": "Physical",
        "pros": "High Single Target Damage, High Sustain",
        "health": 400,
        "healthPerLevel": 75,
        "mana": 230,
        "manaPerLevel": 35,
        "speed": 370,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 1.7,
        "damage": 39,
        "damagePerLevel": 2.2,
        "physicalProtection": 13,
        "physicalProtectionPerLevel": 0.9,
        "magicalProtection": 16,
        "magicalProtectionPerLevel": 2.9,
        "hpFive": 8,
        "hpFivePerLevel": 0.7,
        "mpFive": 4.4,
        "mpFivePerLevel": 0.35,
        "passive": {
            "name": "Chain of Blows",
            "description": "Each successive hit within 5 seconds adds to Ravana's combo chain, allowing Prana Onslaught to do an additional 7.5% damage for each hit in the combo, up to a maximum of 60% total. Hits on towers will not be counted, and additional hits above 8 will not count towards this damage again until Prana Onslaught has been fired.",
            "icon": "images/smite/abilities/chain of blows.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Prana Onslaught",
            "description": "Ravana throws a powerful punch, projecting his prana with it to damage and slow all enemies in front of him.",
            "damage": [
                80,
                135,
                190,
                245,
                300
            ],
            "powerDamage": 80,
            "cooldown": 9,
            "cost": [
                30,
                38,
                45,
                53,
                60
            ],
            "icon": "images/smite/abilities/prana onslaught.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Overhead Kick",
            "description": "Ravana performs a high kick sending a shockwave forward to damage all enemies in a line and rendering him unable to be damaged during the action",
            "damage": [
                70,
                105,
                140,
                175,
                210
            ],
            "powerDamage": 70,
            "cooldown": [
                18,
                17,
                16,
                15,
                14
            ],
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/overhead kick.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "10-Hand Shadow Fist",
            "description": "Ravana's fists fly forward, damaging and passing through minions and damaging and rooting the first god hit. Damaging enemies heals Ravana based on damage dealt.",
            "damage": [
                100,
                140,
                180,
                220,
                260
            ],
            "powerDamage": 70,
            "cooldown": 18,
            "cost": [
                55,
                60,
                65,
                70,
                75
            ],
            "icon": "images/smite/abilities/10-hand shadow fist.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Mystic Rush",
            "description": "Ravana rushes to his target, damaging them and knocking aside all enemies in his path. The target is then linked to Ravana, doing full damage to him while all other enemies do reduced damage.",
            "damage": [
                200,
                275,
                350,
                425,
                500
            ],
            "powerDamage": 100,
            "cooldown": [
                110,
                105,
                100,
                95,
                90
            ],
            "cost": [
                80,
                90,
                100,
                110,
                120
            ],
            "icon": "images/smite/abilities/mystic rush.jpg"
        },
        "icon": "images/smite/gods/ravana.jpg"
    },
    {
        "name": "Scylla",
        "title": "Horror of the Deep",
        "pantheon": "Greek",
        "type": "Mage ",
        "attackType": "Ranged",
        "powerType": "Magical",
        "pros": "High Area Damage",
        "health": 365,
        "healthPerLevel": 75,
        "mana": 298,
        "manaPerLevel": 56,
        "speed": 355,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 0.8,
        "damage": 34,
        "damagePerLevel": 1.45,
        "physicalProtection": 9,
        "physicalProtectionPerLevel": 2.6,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 6,
        "hpFivePerLevel": 0.45,
        "mpFive": 4.9,
        "mpFivePerLevel": 0.4,
        "passive": {
            "name": "Quick Learner",
            "description": "Each of Scylla's abilities gain an additional effect at max rank. In addition, Scylla gains 20 magical power for each max rank ability.",
            "icon": "images/smite/abilities/quick learner.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Sic 'Em",
            "description": "Scylla sends two hounds forward, damaging, rooting, and crippling the first enemy hit.  At max rank, two additional enemies nearby the first target will also be hit.",
            "damage": [
                60,
                110,
                160,
                210,
                260
            ],
            "powerDamage": 75,
            "cooldown": 10,
            "cost": [
                60,
                70,
                80,
                90,
                100
            ],
            "icon": "images/smite/abilities/sic 'em.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Crush",
            "description": "Scylla creates a magical field that slows enemies. After 5s it detonates and causes damage. Scylla may activate the ability again to detonate it early. At max rank, enemies in the area also have their Magic Protection reduced, and targets hit by the damage are slowed for an additional 1s.",
            "damage": [
                90,
                150,
                210,
                270,
                330
            ],
            "powerDamage": 100,
            "cooldown": 10,
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "icon": "images/smite/abilities/crush.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Sentinel",
            "description": "Passive: Scylla gains MP5.  Active: Scylla summons a sentinel to the target area, granting vision of enemies for 5s. Scylla may activate the ability again within 5s to move to the sentinel location. At max rank, the vision is granted through line of sight blockers, and placement range increases.",
            "cooldown": 15,
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "icon": "images/smite/abilities/sentinel.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "I'm a Monster",
            "description": "Scylla reveals her true nature, becoming CC immune for the next 6s, and gaining movement speed. She may make one powerful attack during this time. If she kills an enemy god with the attack, she gains another 6s and may attack again.  At max rank, the movement speed bonus doubles.",
            "damage": [
                400,
                500,
                600,
                700,
                800
            ],
            "powerDamage": 120,
            "cooldown": 90,
            "cost": 100,
            "icon": "images/smite/abilities/i'm a monster.jpg"
        },
        "icon": "images/smite/gods/scylla.jpg"
    },
    {
        "name": "Serqet",
        "title": "Goddess of Venom",
        "pantheon": "Egyptian",
        "type": "Assassin ",
        "attackType": "Melee",
        "powerType": "Physical",
        "pros": "High Single Target Damage, High Mobility",
        "health": 400,
        "healthPerLevel": 74,
        "mana": 240,
        "manaPerLevel": 40,
        "speed": 370,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 2.16,
        "damage": 39,
        "damagePerLevel": 2.25,
        "physicalProtection": 14,
        "physicalProtectionPerLevel": 2.9,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 9,
        "hpFivePerLevel": 0.7,
        "mpFive": 4.3,
        "mpFivePerLevel": 0.29,
        "passive": {
            "name": "Catalyst",
            "description": "Serqet's Basic Attacks apply Catalyst, which consumes her lingering Poisons. If the target is affected by two or three different lingering poisons, they take additional damage.",
            "icon": "images/smite/abilities/catalyst.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Deathbane",
            "description": "Serqet dashes three times from side to side, dealing damage and applying Deathbane Poison to each enemy hit. This ability can critical hit, and Serqet is immune to knockup while dashing.  Deathbane Poison reduces a target's physical protection for a short time, after which it remains in a lingering dormant state for 20s.",
            "damage": [
                60,
                80,
                100,
                120,
                140
            ],
            "powerDamage": 45,
            "cooldown": 10,
            "cost": 60,
            "icon": "images/smite/abilities/deathbane.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Cobra's Kiss",
            "description": "Serqet launches her two blades forward, dealing damage and applying the Cobra's Kiss Poison.  Cobra's Kiss Poision drives gods to madness, forcing them to attack nearby allies, or walk harmlessly towards Serqet. After the madness, Cobra's Kiss remains in a lingering dormant state for 20s.",
            "damage": [
                50,
                75,
                100,
                125,
                150
            ],
            "powerDamage": 50,
            "cooldown": 18,
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "secondaryDamage": {
                "damage": [
                    50,
                    75,
                    100,
                    125,
                    150
                ],
                "powerDamage": 50
            },
            "icon": "images/smite/abilities/cobra's kiss.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Ambush",
            "description": "Serqet vanishes, rooting herself in place. She may leap once, revealing herself and dealing damage to enemies. She will stay hidden until she leaps or cancels this ability. Enemy gods within range 12.5 will also reveal her.",
            "damage": [
                80,
                140,
                200,
                260,
                320
            ],
            "powerDamage": 50,
            "cooldown": 18,
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "icon": "images/smite/abilities/ambush.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Last Breath",
            "description": "Serqet leaps to an enemy, stunning them, applying the Last Breath poison, then pushing them 30 units away.  The Last Breath poison deals damage over the next 5s, and prevents healing. If an enemy dies while infected with Last Breath, they will explode, applying the poison to all nearby enemies.",
            "damage": [
                200,
                310,
                420,
                530,
                640
            ],
            "powerDamage": 0,
            "cooldown": 90,
            "cost": 100,
            "icon": "images/smite/abilities/last breath.jpg"
        },
        "icon": "images/smite/gods/serqet.jpg"
    },
    {
        "name": "Skadi",
        "title": "Goddess of Winter",
        "pantheon": "Norse",
        "type": " Hunter ",
        "attackType": "Ranged",
        "powerType": "Physical",
        "pros": "High Crowd Control, Pusher",
        "health": 470,
        "healthPerLevel": 78,
        "mana": 220,
        "manaPerLevel": 35,
        "speed": 375,
        "attackSpeed": 0.95,
        "attackSpeedPerLevel": 1.6,
        "damage": 35,
        "damagePerLevel": 2.5,
        "physicalProtection": 11,
        "physicalProtectionPerLevel": 2.8,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 8,
        "hpFivePerLevel": 0.69,
        "mpFive": 4.5,
        "mpFivePerLevel": 0.32,
        "passive": {
            "name": "Kaldr, The Winter Wolf",
            "description": "Kaldr fights by Skadi's side and has 2 forms: Beast and Elemental. While in Beast form he can attack enemies and be attacked. While Elemental he is immune to attacks and regenerates health over time. His forms can be controlled with Skadi's Rune of the Hunt but he will be forced into Elemental form if he loses all Hit Points.",
            "icon": "images/smite/abilities/kaldr, the winter wolf.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Piercing Cold",
            "description": "Skadi throws an icy spear forward, dealing damage to enemies and Slowing them for 3s. Kaldr's basic attacks deal double damage to targets afflicted by Piercing Cold.",
            "damage": [
                90,
                140,
                190,
                240,
                290
            ],
            "powerDamage": 80,
            "cooldown": 14,
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "icon": "images/smite/abilities/piercing cold.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Rune of the Hunt",
            "description": "Toggle: Skadi marks an enemy for Kaldr to hunt. While toggled on, Kaldr assumes Beast form, chasing and attacking the marked enemy. If a marked enemy dies Kaldr attacks other enemies nearby. When toggled off, Kaldr stops attacking and returns to Skadi, reverting to his Elemental form on the way. This ability can be activated at rank 0 and Kaldr gains new skills as it ranks up.",
            "cooldown": 5,
            "cost": 0,
            "icon": "images/smite/abilities/rune of the hunt.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Permafrost",
            "description": "Skadi freezes the ground for 5s at a target location. The icy area deals damage to enemies that touch it and continues to deal additional damage every .5s they stay on it. Gods who step on the ice lose control of their movement and slide across. Also, Skadi's movement speed increases by 40% while standing on the area.",
            "damage": [
                70,
                100,
                130,
                160,
                190
            ],
            "powerDamage": 50,
            "cooldown": 18,
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "secondaryDamage": {
                "damage": [
                    5,
                    10,
                    15,
                    20,
                    25
                ],
                "powerDamage": 5
            },
            "icon": "images/smite/abilities/permafrost.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Winter's Grasp",
            "description": "Snowstorms surround Skadi and Kaldr. Upon activation, enemies in range become Rooted and Kaldr is restored to full health. The storms persist for 5s while dealing damage to enemies every .5s and making Kaldr immune to damage.",
            "damage": [
                10,
                20,
                30,
                40,
                50
            ],
            "powerDamage": 5,
            "cooldown": 90,
            "cost": [
                80,
                90,
                0,
                110,
                120
            ],
            "icon": "images/smite/abilities/winter's grasp.jpg"
        },
        "icon": "images/smite/gods/skadi.jpg"
    },
    {
        "name": "Sobek",
        "title": "God of the Nile",
        "pantheon": "Egyptian",
        "type": "Guardian ",
        "attackType": "Melee",
        "powerType": "Magical",
        "pros": "High Crowd Control, High Defense",
        "health": 490,
        "healthPerLevel": 81,
        "mana": 210,
        "manaPerLevel": 35,
        "speed": 365,
        "attackSpeed": 0.85,
        "attackSpeedPerLevel": 1.4,
        "damage": 38,
        "damagePerLevel": 1.5,
        "physicalProtection": 19,
        "physicalProtectionPerLevel": 3,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 6,
        "hpFivePerLevel": 0.75,
        "mpFive": 4.5,
        "mpFivePerLevel": 0.43,
        "passive": {
            "name": "Blessing of the Nile",
            "description": "Sobek's basic attacks that hit an enemy grant him protections for a short time.",
            "icon": "images/smite/abilities/blessing of the nile.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Charge Prey",
            "description": "Sobek charges forward at a frenzied pace. If Sobek hits an enemy, he does damage and throws the enemy behind himself. Sobek is immune to knockups while dashing.",
            "damage": [
                70,
                110,
                150,
                190,
                230
            ],
            "powerDamage": 50,
            "cooldown": 15,
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "icon": "images/smite/abilities/charge prey.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Tail Whip",
            "description": "Sobek whips around in a circle, knocking enemies back and doing damage.",
            "damage": [
                80,
                125,
                170,
                215,
                260
            ],
            "powerDamage": 40,
            "cooldown": 14,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/tail whip.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Sickening Strike",
            "description": "Sobek does an axe attack that damages all enemies in front of him and lowers their healing received.  In addition, Sobek heals for each enemy hit, up to 3.",
            "damage": [
                60,
                100,
                140,
                180,
                220
            ],
            "powerDamage": 30,
            "cooldown": 13,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/sickening strike.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Lurking in the Waters",
            "description": "Sobek submerges himself, where he regens mana, is immune to crowd control and he slows all enemies. When Sobek emerges, he damages all enemies in the radius. Cancelling the ability decreases the damage.",
            "damage": [
                350,
                500,
                650,
                800,
                950
            ],
            "powerDamage": 80,
            "cooldown": 90,
            "cost": [
                80,
                90,
                100,
                110,
                120
            ],
            "icon": "images/smite/abilities/lurking in the waters.jpg"
        },
        "icon": "images/smite/gods/sobek.jpg"
    },
    {
        "name": "Sol",
        "title": "Goddess of the Sun",
        "pantheon": "Norse",
        "type": " Mage ",
        "attackType": "Ranged",
        "powerType": "Magical",
        "pros": "High Single Target Damage, High Mobility",
        "health": 400,
        "healthPerLevel": 75,
        "mana": 300,
        "manaPerLevel": 57,
        "speed": 370,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 1.8,
        "damage": 34,
        "damagePerLevel": 1.45,
        "physicalProtection": 9,
        "physicalProtectionPerLevel": 2.6,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 6,
        "hpFivePerLevel": 0.45,
        "mpFive": 5,
        "mpFivePerLevel": 0.4,
        "passive": {
            "name": "Unstable Manifestation",
            "description": "Sol gains Heat as she uses abilities and hits with basic attacks. She gains +1% Magical Power and +1% Attack Speed for every 3% Heat. At 100% Heat, Sol's Basic Attacks gain +20% Damage. Heat decreases over time.",
            "stacks": {
                "current": 0,
                "max": 25,
                "stacks": [
                    {
                        "attackSpeed": 1,
                        "magicalPowerPercentage": 0.008
                    }
                ],
                "type": "temporary",
                "stacksPerBasicAttack": 1,
                "fullStackBonus": [
                    {
                        "basicAttackPercentIncrease": 0.2
                    }
                ]
            },
            "icon": "images/smite/abilities/unstable manifestation.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Radiance",
            "description": "Sol burns bright, gaining a large amount of Heat, Healing herself over time, and igniting the ground around her. Enemies that walk onto the fire take damage over time.",
            "damage": [
                30,
                50,
                70,
                90,
                110
            ],
            "powerDamage": 25,
            "cooldown": 13,
            "cost": [
                60,
                70,
                80,
                90,
                100
            ],
            "ticks": 3,
            "icon": "images/smite/abilities/radiance.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Stellar Burst",
            "description": "Sol's next basic attack explodes, creating a shockwave that travels out, dealing damage. At full size, the wave retracts, dealing damage again and slowing enemies.",
            "damage": [
                40,
                70,
                100,
                130,
                160
            ],
            "ticks": 2,
            "powerDamage": 35,
            "cooldown": 10,
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "icon": "images/smite/abilities/stellar burst.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Disapparate",
            "description": "Sol burns down her manifestation, gaining movement speed and ignoring all movement penalties, while leaving a trail of fire behind her that damages enemies. After 3s Sol loses corporeal form for a short time and her trail explodes. Sol may leave her incorporeal form early.",
            "damage": [
                20,
                40,
                60,
                80,
                100
            ],
            "powerDamage": 25,
            "cooldown": 15,
            "cost": 60,
            "ticks": 6,
            "toggleStats": {
                "movementSpeed": [
                    20,
                    25,
                    30,
                    35,
                    40
                ],
                "toggle": false
            },
            "icon": "images/smite/abilities/disapparate.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Supernova",
            "description": "Sol unleashes all her flame and fury from the sky, striking 8 times along a moveable ground target location. Enemies are knocked back on the first strike, and take only 20% damage on successive hits.",
            "damage": [
                150,
                200,
                250,
                300,
                350
            ],
            "powerDamage": 50,
            "cooldown": 90,
            "cost": 100,
            "secondaryDamage": {
                "damage": [
                    150,
                    200,
                    250,
                    300,
                    350
                ],
                "powerDamage": 50,
                "ticks": 7,
                "damageMultiplier": 0.3
            },
            "icon": "images/smite/abilities/supernova.jpg"
        },
        "icon": "images/smite/gods/sol.jpg"
    },
    {
        "name": "Sun Wukong",
        "title": "Monkey King",
        "pantheon": "Chinese",
        "type": "Warrior ",
        "attackType": "Melee",
        "powerType": "Physical",
        "pros": "High Defense, High Mobility",
        "health": 470,
        "healthPerLevel": 82,
        "mana": 205,
        "manaPerLevel": 35,
        "speed": 370,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 0.9,
        "damage": 39,
        "damagePerLevel": 2,
        "physicalProtection": 18,
        "physicalProtectionPerLevel": 3,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 8,
        "hpFivePerLevel": 0.8,
        "mpFive": 4.3,
        "mpFivePerLevel": 0.38,
        "passive": {
            "name": "Undefeated Body",
            "description": "When Sun Wukong is below 35% health, he gains +10% critical chance and +10 protections, plus another 1% critical chance and 1 protection for his current level.",
            "icon": "images/smite/abilities/undefeated body.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "The Magic Cudgel",
            "description": "Sun Wukong's Magic Cudgel grows in length, and he slams it down, damaging all enemies in front of him.",
            "damage": [
                80,
                120,
                160,
                200,
                240
            ],
            "powerDamage": 60,
            "cooldown": 12,
            "cost": [
                50,
                60,
                70,
                80,
                90
            ],
            "icon": "images/smite/abilities/the magic cudgel.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Master's Will",
            "description": "Sun Wukong strikes around him, damaging and slowing all enemies.",
            "damage": [
                80,
                130,
                180,
                230,
                280
            ],
            "powerDamage": 65,
            "cooldown": 10,
            "cost": 60,
            "icon": "images/smite/abilities/master's will.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "72 Transformations",
            "description": "Sun Wukong transforms into an Eagle, Tiger, or Ox, and charges forward.  Eagle: Is the fastest of the three forms. Immune to Slow and Root effects.  Tiger: Mauls the first enemy runs into, stunning and causing damage.  Ox: Knocks aside all enemies in his path and causes damage. Immune to Slow, Root, and Knockup effects.",
            "cooldown": [
                18,
                17,
                16,
                15,
                14
            ],
            "cost": [
                65,
                70,
                75,
                80,
                85
            ],
            "icon": "images/smite/abilities/72 transformations.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Somersault Cloud",
            "description": "Sun Wukong leaps onto his cloud, leaving a decoy behind to fight. While on the cloud Sun Wukong is invisible, and regenerates health. He may leap off before the duration expires, dealing damage. The decoy inherits a percentage of Sun Wukong's current strength and defense. The decoy is killed instantly if hit by a hard CC. If the decoy dies, Sun Wukong is revealed on his cloud.",
            "damage": [
                200,
                250,
                300,
                350,
                400
            ],
            "powerDamage": 120,
            "cooldown": [
                110,
                105,
                100,
                95,
                90
            ],
            "cost": 100,
            "icon": "images/smite/abilities/somersault cloud.jpg"
        },
        "icon": "images/smite/gods/sunwukong.jpg"
    },
    {
        "name": "Susano",
        "title": "God of the Summer Storm",
        "pantheon": "Japanese",
        "type": "Assassin ",
        "attackType": "Melee",
        "powerType": "Physical",
        "pros": "High Crowd Control, High Mobility",
        "health": 435,
        "healthPerLevel": 76,
        "mana": 225,
        "manaPerLevel": 38,
        "speed": 370,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 2.16,
        "damage": 38,
        "damagePerLevel": 2.2,
        "physicalProtection": 14,
        "physicalProtectionPerLevel": 2.9,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 9,
        "hpFivePerLevel": 0.7,
        "mpFive": 4.2,
        "mpFivePerLevel": 0.27,
        "passive": {
            "name": "Gathering Storm",
            "description": "For each trained Ability that is on Cooldown, Susano gains bonus Movement Speed.",
            "stacks": {
                "current": 0,
                "max": 4,
                "stacks": [
                    {
                        "movementSpeed": 4
                    }
                ],
                "type": "temporary"
            },
            "icon": "images/smite/abilities/swift as the summer storm.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Storm Kata",
            "description": "Susano moves thrice in quick succession; after each attack he has up to 3s to fire the next one.",
            "damage": [
                40,
                65,
                90,
                115,
                140
            ],
            "powerDamage": 55,
            "cooldown": [
                16,
                15,
                14,
                13,
                12
            ],
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "ticks": 2,
            "icon": "images/smite/abilities/storm kata.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Wind Siphon",
            "description": "Susano commands the winds to blow, dealing damage in a cone in front of him. Enemies in the center of the attack are pulled towards him.",
            "damage": [
                80,
                105,
                130,
                155,
                180
            ],
            "powerDamage": 60,
            "cooldown": 16,
            "cost": [
                80,
                75,
                70,
                65,
                60
            ],
            "icon": "images/smite/abilities/wind siphon.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Jet Stream",
            "description": "Susano throws forward a gust of air which creates a whirlwind, dealing damage every .75s for 3s.",
            "damage": [
                20,
                30,
                40,
                50,
                60
            ],
            "powerDamage": 30,
            "cooldown": [
                16,
                16,
                16,
                16,
                16
            ],
            "cost": [
                45,
                50,
                55,
                60,
                65
            ],
            "ticks": 4,
            "icon": "images/smite/abilities/jet stream.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Typhoon",
            "description": "Susano summons a hurricane at his location that pulls Enemies towards the center while growing to up to twice its size. Susano may activate this ability again to launch the storm in the direction he is facing, knocking up opponents in its path.",
            "damage": [
                175,
                225,
                275,
                325,
                375
            ],
            "powerDamage": 140,
            "cooldown": 100,
            "cost": [
                80,
                85,
                90,
                95,
                100
            ],
            "icon": "images/smite/abilities/typhoon.jpg"
        },
        "icon": "images/smite/gods/susano.jpg"
    },
    {
        "name": "Sylvanus",
        "title": "Keeper of the Wild",
        "pantheon": "Roman",
        "type": "Guardian",
        "attackType": "Ranged",
        "powerType": "Magical",
        "pros": "High Crowd Control, High Sustain",
        "health": 510,
        "healthPerLevel": 90,
        "mana": 190,
        "manaPerLevel": 34,
        "speed": 365,
        "attackSpeed": 0.8,
        "attackSpeedPerLevel": 0.6,
        "damage": 35,
        "damagePerLevel": 1.5,
        "physicalProtection": 19,
        "physicalProtectionPerLevel": 0.9,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 3,
        "hpFive": 8,
        "hpFivePerLevel": 0.8,
        "mpFive": 4.6,
        "mpFivePerLevel": 0.4,
        "passive": {
            "name": "Nature's Protection",
            "description": "Enemies that successfully land a basic attack on Sylvanus have a 25% chance to be rooted for 1s. This may only happen once every 12s.",
            "icon": "images/smite/abilities/nature's protection.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Verdant Growth",
            "description": "Sylvanus throws a seed to a target location. If it hits an enemy they will take damage and become rooted. If the seed lands on the ground, after 10s it will grow into a flower providing MP5 to nearby allies. The pod can be destroyed by basic attacks, exploding and releasing poisonous spores that reduce protections of nearby enemies.",
            "damage": [
                80,
                120,
                160,
                200,
                240
            ],
            "powerDamage": 35,
            "cooldown": [
                16,
                15,
                14,
                13,
                12
            ],
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/verdant growth.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Wisps",
            "description": "Sylvanus releases wisps that seek out nearby allies and enemies. Allies are healed and protected while enemies take damage over time.",
            "damage": [
                10,
                15,
                20,
                25,
                30
            ],
            "powerDamage": 10,
            "cooldown": 18,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "ticks": 5,
            "icon": "images/smite/abilities/wisps.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Nature's Grasp",
            "description": "Sylvanus's treant launches his rooty hand out in front of him. The hand stops at the first enemy god hit, stunning them and pulling them back towards Sylvanus.",
            "cooldown": [
                20,
                19,
                18,
                17,
                16
            ],
            "cost": [
                70,
                65,
                60,
                55,
                50
            ],
            "icon": "images/smite/abilities/nature's grasp.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Wrath of Terra",
            "description": "Sylvanus's treant slams his large trunks into the ground causing large thorny roots to break out of the ground around him. Enemies hit are knocked up and poisoned.",
            "damage": [
                60,
                70,
                80,
                90,
                100
            ],
            "powerDamage": 25,
            "cooldown": 90,
            "cost": 100,
            "ticks": 5,
            "icon": "images/smite/abilities/wrath of terra.jpg"
        },
        "icon": "images/smite/gods/sylvanus.jpg"
    },
    {
        "name": "Terra",
        "title": "The Earth Mother",
        "pantheon": "Roman",
        "type": "Guardian",
        "attackType": "Melee",
        "powerType": "Magical",
        "pros": "High Sustain, High Area Damage",
        "health": 500,
        "healthPerLevel": 95,
        "mana": 200,
        "manaPerLevel": 35,
        "speed": 365,
        "attackSpeed": 0.9,
        "attackSpeedPerLevel": 1.4,
        "damage": 38,
        "damagePerLevel": 1.55,
        "physicalProtection": 20,
        "physicalProtectionPerLevel": 3.2,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 8,
        "hpFivePerLevel": 0.8,
        "mpFive": 4.6,
        "mpFivePerLevel": 0.4,
        "passive": {
            "name": "Standing Stones",
            "description": "Terra's abilities create Standing Stones. As long as any Standing Stones are on the battleground Terra becomes Knockup immune and her Basic Attacks will Slow enemies. If Terra Shatters her stones, This Buff will remain active for 3s afterward.",
            "icon": "images/smite/abilities/standing stones.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Force of Nature",
            "description": "Terra gains momentum, causing her to dash forward and deal damage to enemies she passes through. Terra may charge through her own Standing Stones to Shatter them. If she does she may charge one more time within the next 3s.",
            "damage": [
                60,
                110,
                160,
                210,
                260
            ],
            "powerDamage": 30,
            "cooldown": 15,
            "cost": 50,
            "icon": "images/smite/abilities/force of nature.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Crushing Earth",
            "description": "Terra raises up two Standing Stone walls on either side of a target location, Slowing enemies in between by 20%. As long as both stones stand, Terra may activate this ability again to slam the stones together, damaging and Stunning enemies in between for 1.5s. These stones can be Shattered into a cone of shrapnel with Force of Nature, damaging enemies in the area.",
            "damage": [
                50,
                85,
                120,
                155,
                190
            ],
            "powerDamage": 35,
            "cooldown": 15,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "ticks": 2,
            "icon": "images/smite/abilities/crushing earth.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Monolith",
            "description": "Terra summons a Standing Stone monolith surging with natural energy. The monolith heals nearby allied gods every .5s. Terra can Shatter this stone with Force of Nature to Root enemies in the area for 1.5s and create a damaging area that lasts 5s.",
            "damage": [
                10,
                12,
                14,
                16,
                18
            ],
            "powerDamage": 5,
            "cooldown": 18,
            "cost": [
                60,
                70,
                80,
                90,
                100
            ],
            "ticks": 10,
            "icon": "images/smite/abilities/monolith.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Terra's Blessing",
            "description": "Terra channels her strength into the entire world, buffing all of her allies for 10s. While active, Terra and her allies gain increased Movement Speed, reduction of Mana costs for abilities, and increased Cooldown Reduction. Terra also summons 4 stone around herself and each of her teammates. If any one of them take damage 4 times the stones will activate and heal that god.",
            "cooldown": [
                110,
                110,
                110,
                110,
                110
            ],
            "cost": 100,
            "toggleStats": {
                "movementSpeed": [
                    20,
                    20,
                    20,
                    20,
                    20
                ],
                "cooldown": [
                    20,
                    25,
                    30,
                    35,
                    40
                ],
                "toggle": false
            },
            "icon": "images/smite/abilities/terra's blessing.jpg"
        },
        "icon": "images/smite/gods/terra.jpg"
    },
    {
        "name": "Thanatos",
        "title": "Hand of Death",
        "pantheon": "Greek",
        "type": "Assassin ",
        "attackType": "Melee",
        "powerType": "Physical",
        "pros": "High Sustain",
        "health": 390,
        "healthPerLevel": 75,
        "mana": 240,
        "manaPerLevel": 38,
        "speed": 370,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 1.7,
        "damage": 39,
        "damagePerLevel": 2.3,
        "physicalProtection": 14,
        "physicalProtectionPerLevel": 2.9,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 8,
        "hpFivePerLevel": 0.67,
        "mpFive": 4.4,
        "mpFivePerLevel": 0.38,
        "passive": {
            "name": "Harvester of Souls",
            "description": "Enemy gods within his ultimate's execute health threshold are revealed to Thanatos. Dealing the killing blow to enemies also empowers Thanatos, healing him based on the max hp of his target and reducing his active cooldowns. Additionally, all of Thanatos' abilities cost health and mana to use.",
            "icon": "images/smite/abilities/harvester of souls.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Death Scythe",
            "description": "Thanatos flings his scythe at an enemy, dealing damage and an additional 10% of the target's maximum health against enemy gods. Enemies hit are slowed for 3s and heal Thanatos based on damage dealt. Consumes 5% of Thanatos' max hp when used.",
            "damage": [
                100,
                170,
                240,
                310,
                380
            ],
            "powerDamage": 60,
            "maxHealthDamage": 10,
            "cooldown": 13,
            "cost": [
                25,
                35,
                45,
                55,
                65
            ],
            "icon": "images/smite/abilities/death scythe.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Scent of Death",
            "description": "Thanatos senses death, gaining immunity to slow effects and additional move speed and physical penetration for 6s. His speed bonus increases up to double when moving toward an enemy god within the instant kill health threshold of his ultimate. Consumes 5% of Thanatos' max hp when used.",
            "cooldown": 13,
            "cost": [
                20,
                25,
                30,
                35,
                40
            ],
            "icon": "images/smite/abilities/scent of death.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Soul Reap",
            "description": "Thanatos swings his scythe, dealing physical damage and silencing enemies he hits. Thanatos moves at a reduced rate while swinging. Consumes 5% of Thanatos' max hp when used.",
            "damage": [
                100,
                150,
                200,
                250,
                300
            ],
            "powerDamage": 70,
            "cooldown": 15,
            "cost": [
                25,
                30,
                35,
                40,
                45
            ],
            "icon": "images/smite/abilities/soul reap.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Hovering Death",
            "description": "Thanatos flaps his wings and ascends for 5s, unable to be hit. While airborn, he moves unimpeded at increased speed and can click to dive to his target location, dealing damage. Enemies below a health threshold are instantly killed. All others are stunned. Consumes 10% of Thanatos' max hp when used.",
            "damage": [
                90,
                125,
                160,
                195,
                230
            ],
            "powerDamage": 80,
            "cooldown": 90,
            "cost": [
                40,
                50,
                60,
                70,
                80
            ],
            "icon": "images/smite/abilities/hovering death.jpg"
        },
        "icon": "images/smite/gods/thanatos.jpg"
    },
    {
        "name": "The Morrigan",
        "title": "Phantom Queen",
        "pantheon": "Celtic",
        "type": "Mage",
        "attackType": "Ranged",
        "powerType": "Magical",
        "pros": "High Area Damage",
        "health": 400,
        "healthPerLevel": 75,
        "mana": 250,
        "manaPerLevel": 38,
        "speed": 365,
        "attackSpeed": 0.87,
        "attackSpeedPerLevel": 1,
        "damage": 34,
        "damagePerLevel": 2.4,
        "physicalProtection": 12,
        "physicalProtectionPerLevel": 3,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0,
        "hpFive": 10,
        "hpFivePerLevel": 0.7,
        "mpFive": 4.5,
        "mpFivePerLevel": 0.4,
        "passive": {
            "name": "Doomsayer",
            "description": "The 3rd hit of The Morrigan's hit chain will explode, dealing damage to all enemies within range and Dooming all enemies hit. Doomed enemies will take additional Basic Attack damage over time.",
            "icon": "images/smite/abilities/doomsayer.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Deadly Aspects",
            "description": "When activated, The Morrigan begins combining the power from all three of her forms. When activated again, they simultaneously damage and stun enemies in front of them.",
            "damage": [
                80,
                135,
                190,
                245,
                300
            ],
            "powerDamage": 80,
            "cooldown": 12,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/deadly aspects.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Dark Omen",
            "description": "The Morrigan launches a wave of dark magic at her enemies that deals damage, deals bonus damage to minions, and applies an Omen to enemy gods for 8 seconds. Gods with an Omen will take bonus damage the next time they are hit by any damaging ability.",
            "damage": [
                40,
                70,
                100,
                130,
                160
            ],
            "powerDamage": 40,
            "cooldown": 7,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/dark omen.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Confusion",
            "description": "The Morrigan creates a phantom of herself while becoming stealthed and increasing her Movement Speed. The phantom runs to the targeted area, deals no damage, and will die if it takes any damage. If the Morrigan attacks or takes damage, she will be revealed and lose her increased Movement Speed.",
            "cooldown": 15,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/confusion.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Changeling",
            "description": "The Morrigan selects a God from the current match and becomes a copy of them. She copies all of their current stats and may use all of their abilities for the duration. She retains her own Relics and cannot use Consumables. The Rank of her abilities will transfer to the skills of the god she copies. This ability's cooldown will be increased to match the target God's ultimate if she uses it while transformed.",
            "cooldown": [
                160,
                140,
                120,
                100,
                80
            ],
            "cost": 100,
            "icon": "images/smite/abilities/changeling.jpg"
        },
        "icon": "images/smite/gods/themorrigan.jpg"
    },
    {
        "name": "Thor",
        "title": "God of Thunder",
        "pantheon": "Norse",
        "type": "Assassin ",
        "attackType": "Melee",
        "powerType": "Physical",
        "pros": "High Single Target Damage, Medium Crowd Control",
        "health": 475,
        "healthPerLevel": 76,
        "mana": 240,
        "manaPerLevel": 38,
        "speed": 370,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 1.45,
        "damage": 39,
        "damagePerLevel": 2.4,
        "physicalProtection": 14,
        "physicalProtectionPerLevel": 2.9,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 9,
        "hpFivePerLevel": 0.69,
        "mpFive": 4.4,
        "mpFivePerLevel": 0.29,
        "passive": {
            "name": "Warrior's Madness",
            "description": "Thor gains physical power for each enemy god within 30 units of him.",
            "icon": "images/smite/abilities/warrior's madness.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Mjolnir's Attunement",
            "description": "Thor throws Mjolnir forward, doing damage to all enemies in its path. If hit twice, minions will take half damage while gods take double damage from the return. While the hammer is flying, pressing the button again will teleport Thor to his hammer.",
            "damage": [
                50,
                90,
                130,
                170,
                210
            ],
            "powerDamage": 30,
            "cooldown": 12,
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "icon": "images/smite/abilities/mjolnir's attunement.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Tectonic Rift",
            "description": "Thor slams his hammer on the ground, causing a fissure to appear in front of him, stunning enemies and blocking movement.",
            "cooldown": 17,
            "cost": 75,
            "icon": "images/smite/abilities/tectonic rift.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Berserker Barrage",
            "description": "Thor spins his hammer around him, doing damage every .4s.  Thor is immune to knockup for the duration.",
            "damage": [
                20,
                40,
                60,
                80,
                100
            ],
            "powerDamage": 45,
            "cooldown": 11,
            "cost": [
                65,
                70,
                75,
                80,
                85
            ],
            "ticks": 5,
            "icon": "images/smite/abilities/berserker barrage.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Anvil of Dawn",
            "description": "After a short buildup, Thor leaps into the air. While in the air, Thor can target a great distance away to come crashing down in the area, dealing damage and stunning all enemies in the radius.",
            "damage": [
                150,
                200,
                250,
                300,
                350
            ],
            "powerDamage": 120,
            "cooldown": 90,
            "cost": [
                80,
                90,
                100,
                110,
                120
            ],
            "icon": "images/smite/abilities/anvil of dawn.jpg"
        },
        "icon": "images/smite/gods/thor.jpg"
    },
    {
        "name": "Thoth",
        "title": "Arbiter of the Damned",
        "pantheon": "Egyptian",
        "type": "Mage",
        "attackType": "Ranged",
        "powerType": "Magical",
        "pros": "High Area Damage",
        "health": 365,
        "healthPerLevel": 75,
        "mana": 245,
        "manaPerLevel": 49,
        "speed": 355,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 1.2,
        "damage": 32,
        "damagePerLevel": 1.5,
        "physicalProtection": 9,
        "physicalProtectionPerLevel": 2.6,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 6,
        "hpFivePerLevel": 0.45,
        "mpFive": 4.6,
        "mpFivePerLevel": 0.44,
        "passive": {
            "name": "Dead Reckoning",
            "description": "Thoth pens the names of his fallen opponents in his book, recording their weaknesses. After killing 30 enemies, Thoth gains a stack of 3 Magical Penetration. He unlocks a new stack every 4 levels, up to a maximum of 5 stacks at level 17.",
            "stacks": {
                "current": 0,
                "max": 4,
                "stacks": [
                    {
                        "magicalPenetration": 3
                    }
                ],
                "type": "temporary"
            },
            "icon": "images/smite/abilities/dead reckoning.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Hieroglyphic Assault",
            "description": "Thoth raises into the air, ignoring the Basic Attack Movement penalty and conjuring 3 Hieroglyphs. His next 3 Basic Attacks pass through Enemies and apply Ability Damage instead. If these attacks pass through the Glyph of Pain, their range is increased by 30.",
            "damage": [
                40,
                60,
                80,
                100,
                120
            ],
            "powerDamage": 25,
            "cooldown": 8,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "ticks": 3,
            "icon": "images/smite/abilities/hieroglyphic assault.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Evade and Punish",
            "description": "Thoth dashes in the direction he is currently traveling. After dashing, for 5s Thoth's next basic attack instead fires a magical projectile at the target which slows and deals ability damage. If these attacks pass through the Glyph of Pain, Both the Dash and the Projectile's range are increased by 30.",
            "damage": [
                70,
                110,
                150,
                190,
                230
            ],
            "powerDamage": 60,
            "cooldown": [
                16,
                15,
                14,
                13,
                12
            ],
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "icon": "images/smite/abilities/evade and punish.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Glyph of Pain",
            "description": "From his book, Thoth conjures forth a Hieroglyph in front of him. Thoth's ability projectile passing through the glyph receive increased damage, and a range increase of 30. Thoth and allies Basic Attack projectiles receive a reduced damage bonus, but no range increase.",
            "cooldown": 5,
            "cost": [
                25,
                30,
                35,
                40,
                45
            ],
            "icon": "images/smite/abilities/glyph of pain.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Final Judgement",
            "description": "Thoth begins summoning pages from his book, up to a maximum of four. When all four have been summoned, he sends them forward damaging all Enemies in their path. Thoth may activate this ability again to fire the ability early, doing a reduced amount of damage based on the number of pages currently summoned.",
            "damage": [
                360,
                430,
                500,
                570,
                640
            ],
            "powerDamage": 100,
            "cooldown": 90,
            "cost": 100,
            "icon": "images/smite/abilities/final judgement.jpg"
        },
        "icon": "images/smite/gods/thoth.jpg"
    },
    {
        "name": "Tyr",
        "title": "The Lawgiver",
        "pantheon": "Norse",
        "type": "Warrior ",
        "attackType": "Melee",
        "powerType": "Physical",
        "pros": "High Defense, Medium Crowd Control",
        "health": 475,
        "healthPerLevel": 80,
        "mana": 230,
        "manaPerLevel": 40,
        "speed": 375,
        "attackSpeed": 1,
        "attackSpeedPerLevel": 0.9,
        "damage": 39,
        "damagePerLevel": 2,
        "physicalProtection": 15,
        "physicalProtectionPerLevel": 3,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 8,
        "hpFivePerLevel": 0.72,
        "mpFive": 4.4,
        "mpFivePerLevel": 0.29,
        "passive": {
            "name": "Unyielding",
            "description": "Stuns, Taunts, Fears, Intoxicate, and Mesmerize cannot affect Tyr for longer than 1s.",
            "icon": "images/smite/abilities/unyielding.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Fearless",
            "description": "Tyr charges forward, immune to knockup, damaging enemies.  Assault Stance: Tyr pushes all enemies along with him, hitting them 2 times and knocking them up in the air.  Guard Stance: Tyr hits each enemy only once, passing through them.",
            "damage": [
                70,
                120,
                170,
                220,
                270
            ],
            "powerDamage": 50,
            "cooldown": 15,
            "cost": [
                50,
                55,
                60,
                65,
                70
            ],
            "icon": "images/smite/abilities/fearless.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Power Cleave",
            "description": "Tyr makes a massive melee attack, hitting all enemies within a 180 degree cone.Assault Stance: Enemies that are knocked up in the air are knocked away. Guard Stance: Heals Tyr for each enemy hit (max 3).   ",
            "damage": [
                80,
                115,
                150,
                185,
                220
            ],
            "powerDamage": 65,
            "cooldown": [
                12,
                11,
                10,
                9,
                8
            ],
            "cost": [
                50,
                50,
                50,
                50,
                50
            ],
            "icon": "images/smite/abilities/power cleave.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Change Stance",
            "description": "Tyr changes between Assault and Guard stances. Changing stances refreshes the cooldown on Fearless and Power Cleave.  Assault Stance: Gain Physical Power.Guard Stance: Gain Protections.",
            "cooldown": [
                12,
                12,
                11,
                11,
                10
            ],
            "cost": 0,
            "icon": "images/smite/abilities/change stance.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Lawbringer",
            "description": "Tyr leaps through the air, bringing indiscriminate justice upon all enemies in the target area, and slowing them.",
            "damage": [
                150,
                225,
                300,
                375,
                450
            ],
            "powerDamage": 120,
            "cooldown": [
                90,
                85,
                80,
                75,
                70
            ],
            "cost": [
                80,
                90,
                100,
                110,
                120
            ],
            "icon": "images/smite/abilities/lawbringer.jpg"
        },
        "icon": "images/smite/gods/tyr.jpg"
    },
    {
        "name": "Ullr",
        "title": "The Glorious One",
        "pantheon": "Norse",
        "type": "Hunter ",
        "attackType": "Ranged",
        "powerType": "Physical",
        "pros": "High Sustain",
        "health": 480,
        "healthPerLevel": 80,
        "mana": 230,
        "manaPerLevel": 40,
        "speed": 360,
        "attackSpeed": 0.95,
        "attackSpeedPerLevel": 1.5,
        "damage": 38,
        "damagePerLevel": 2.4,
        "physicalProtection": 13,
        "physicalProtectionPerLevel": 3,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 8,
        "hpFivePerLevel": 0.71,
        "mpFive": 4.4,
        "mpFivePerLevel": 0.38,
        "passive": {
            "name": "Weapon Master",
            "description": "When Ullr uses an ability in either stance his cooldowns in the opposite stance are reduced.",
            "icon": "images/smite/abilities/weapon master.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Bladed Arrow (Thrown Axe)",
            "description": "Ranged: Ullr fires a bladed arrow in a line, dealing damage and passing through all targets it hits.  Melee: Ullr throws an axe in a line, hitting a single target dealing damage and stunning it.",
            "damage": [
                90,
                140,
                190,
                240,
                290
            ],
            "powerDamage": 80,
            "cooldown": 14,
            "cost": [
                50,
                50,
                50,
                50,
                50
            ],
            "icon": "images/smite/abilities/bladed arrow (thrown axe).jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Expose Weakness (Invigorate)",
            "description": "Ranged: Ullr gains bonus physical power for 5s. Melee: Ullr gains bonus move speed for 5s.These effects are lost if Ullr changes stances. ",
            "cooldown": [
                16,
                16,
                16,
                16,
                16
            ],
            "cost": [
                50,
                50,
                50,
                50,
                50
            ],
            "toggleStats": {
                "physicalPower": [
                    25,
                    30,
                    35,
                    40,
                    45
                ],
                "toggle": false
            },
            "icon": "images/smite/abilities/expose weakness (invigorate).jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Hail of Arrows (Glory Bound)",
            "description": "Ranged: Ullr fires a volley at his target location, dealing damage. Melee: Ullr leaps to his target location, dealing damage in an AoE on arrival.",
            "damage": [
                80,
                120,
                160,
                200,
                240
            ],
            "powerDamage": 100,
            "cooldown": 15,
            "cost": [
                60,
                60,
                60,
                60,
                60
            ],
            "icon": "images/smite/abilities/hail of arrows (glory bound).jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Wield Axes (Wield Bow)",
            "description": "Ullr changes stance.  Ranged: Ullr uses his yew bow, gaining additional attack speed.Melee: Ullr uses his axes, gaining additional physical lifesteal.  ",
            "cooldown": 1,
            "cost": 0,
            "passiveStats": {
                "attackSpeed": [
                    5,
                    10,
                    15,
                    20,
                    25
                ]
            },
            "icon": "images/smite/abilities/wield axes (wield bow).jpg"
        },
        "icon": "images/smite/gods/ullr.jpg"
    },
    {
        "name": "Vamana",
        "title": "Fifth Avatar of Vishnu",
        "pantheon": "Hindu",
        "type": "Warrior ",
        "attackType": "Melee",
        "powerType": "Physical",
        "pros": "High Defense, High Sustain",
        "health": 480,
        "healthPerLevel": 85,
        "mana": 200,
        "manaPerLevel": 39,
        "speed": 380,
        "attackSpeed": 0.9,
        "attackSpeedPerLevel": 1.4,
        "damage": 37,
        "damagePerLevel": 2,
        "physicalProtection": 18,
        "physicalProtectionPerLevel": 2.9,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 8,
        "hpFivePerLevel": 0.5,
        "mpFive": 4.7,
        "mpFivePerLevel": 0.41,
        "passive": {
            "name": "Sleeping Giant",
            "description": "When Vamana is in Colossal form, taking damage from gods increases the duration.  Additionally, a percentage of Vamana's Physical Protection is converted to Physical Power.",
            "icon": "images/smite/abilities/sleeping giant.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Clear the Path",
            "description": "Vamana opens his umbrella in front of him and sprints forward, doing damage to all enemies and knocking them into the air.",
            "damage": [
                70,
                110,
                150,
                190,
                230
            ],
            "powerDamage": 60,
            "cooldown": 15,
            "cost": [
                70,
                70,
                70,
                70,
                70
            ],
            "icon": "images/smite/abilities/clear the path.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Armored Umbrella",
            "description": "Vamana infuses his umbrella with his armor, reinforcing it while he strikes forth, doing damage to all enemies in a cone.",
            "damage": [
                85,
                140,
                195,
                250,
                305
            ],
            "powerDamage": 70,
            "cooldown": [
                15,
                14,
                13,
                12,
                11
            ],
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/armored umbrella.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Umbrellarang",
            "description": "Vamana spins an umbrella out in front of him, hitting everyone in its path for damage and slowing your enemies' attack and movement speeds.  After reaching its destination, the umbrella returns back to Vamana, hitting everyone in its path again.",
            "damage": [
                50,
                85,
                120,
                155,
                190
            ],
            "powerDamage": 50,
            "cooldown": 13,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/umbrellarang.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Colossal Fury",
            "description": "Vamana grows to an enormous giant.  While Vamana is enraged, he is immune to crowd control, gains protections, physical power, massive regeneration and his basic attacks now damage all nearby enemies.  You can right click to cancel his giant form early.",
            "cooldown": 90,
            "cost": 100,
            "icon": "images/smite/abilities/colossal fury.jpg"
        },
        "icon": "images/smite/gods/vamana.jpg"
    },
    {
        "name": "Vulcan",
        "title": "Smith of the Gods",
        "pantheon": "Roman",
        "type": "Mage ",
        "attackType": "Ranged",
        "powerType": "Magical",
        "pros": "High Area Damage, Pusher",
        "health": 380,
        "healthPerLevel": 71,
        "mana": 245,
        "manaPerLevel": 40,
        "speed": 360,
        "attackSpeed": 0.9,
        "attackSpeedPerLevel": 1.1,
        "damage": 34,
        "damagePerLevel": 1.5,
        "physicalProtection": 13,
        "physicalProtectionPerLevel": 3,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 7,
        "hpFivePerLevel": 0.48,
        "mpFive": 4.8,
        "mpFivePerLevel": 0.45,
        "passive": {
            "name": "Heavy Shot",
            "description": "Whenever Vulcan successfully hits an enemy god with an ability he gains +15 MP5 and 15% Movement Speed for 5s.",
            "toggleStats": {
                "movementSpeed": 15,
                "mpFive": 15,
                "toggle": false
            },
            "icon": "images/smite/abilities/heavy shot.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Backfire",
            "description": "Vulcan blasts a fireball out of his Forge, pushing him back and dealing damage to all enemies in its path, marking the first god that is hit.  The Inferno Cannon prioritizes the marked target and deals 10% more damage to that god.",
            "damage": [
                80,
                120,
                160,
                200,
                240
            ],
            "powerDamage": 80,
            "cooldown": [
                7,
                6.5,
                6,
                5.5,
                5
            ],
            "cost": [
                40,
                45,
                50,
                55,
                60
            ],
            "icon": "images/smite/abilities/backfire.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Inferno Cannon",
            "description": "Vulcan constructs an Inferno Cannon that shoots fireballs in a cone that deal damage to the target every second. The Inferno Cannon lasts until destroyed or another is placed. This inherits Vulcan's penetrations but does not apply on-hit effects. Inferno Cannon takes 50% additional damage from non-god sources.",
            "damage": [
                45,
                70,
                95,
                120,
                145
            ],
            "powerDamage": 35,
            "cooldown": 15,
            "cost": [
                65,
                70,
                75,
                80,
                85
            ],
            "icon": "images/smite/abilities/inferno cannon.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Magma Bomb",
            "description": "Vulcan tosses a bomb that explodes in a radius on impact with the ground, damaging, stunning for 1s, and knocking back nearby enemies.",
            "damage": [
                70,
                120,
                170,
                220,
                270
            ],
            "powerDamage": 80,
            "cooldown": 10,
            "cost": [
                50,
                55,
                60,
                65,
                70
            ],
            "icon": "images/smite/abilities/magma bomb.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Earthshaker",
            "description": "Vulcan launches a rocket that explodes on impact with the ground. The rocket starts at 50% strength, and increases damage the further it travels from Vulcan.",
            "damage": [
                400,
                520,
                640,
                760,
                880
            ],
            "powerDamage": 130,
            "cooldown": 90,
            "cost": [
                80,
                90,
                100,
                110,
                120
            ],
            "icon": "images/smite/abilities/earthshaker.jpg"
        },
        "icon": "images/smite/gods/vulcan.jpg"
    },
    {
        "name": "Xbalanque",
        "title": "Hidden Jaguar Sun",
        "pantheon": "Mayan",
        "type": "Hunter ",
        "attackType": "Ranged",
        "powerType": "Physical",
        "pros": "High Single Target Damage, Medium Area Damage",
        "health": 455,
        "healthPerLevel": 75,
        "mana": 220,
        "manaPerLevel": 37,
        "speed": 365,
        "attackSpeed": 0.95,
        "attackSpeedPerLevel": 1,
        "damage": 37,
        "damagePerLevel": 2.5,
        "physicalProtection": 12,
        "physicalProtectionPerLevel": 2.9,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 8,
        "hpFivePerLevel": 0.68,
        "mpFive": 4.4,
        "mpFivePerLevel": 0.4,
        "passive": {
            "name": "Dead of Night",
            "description": "Any enemy gods that Xbalanque kills increases his physical power permanently.",
            "stacks": {
                "current": 0,
                "max": 6,
                "stacks": [
                    {
                        "physicalPower": 5
                    }
                ],
                "type": "permanent"
            },
            "icon": "images/smite/abilities/dead of night.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Branching Bola",
            "description": "When Xbalanque toggles on this ability, his basic attacks deal additional damage.  When the bola hits, it splits into 2 that hit enemies up to 30 units behind the target for 30% damage (On-hit effects do not apply). Pressing ability key again cancels toggle.",
            "cooldown": 0.5,
            "cost": [
                3,
                6,
                9,
                12,
                15
            ],
            "toggleStats": {
                "basicAttackFlatIncrease": [
                    10,
                    20,
                    30,
                    40,
                    50
                ],
                "toggle": false
            },
            "icon": "images/smite/abilities/branching bola.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Poison Darts",
            "description": "Xbalanque shoots 10 darts in a cone in front of him, dealing damage with each one.  An enemy can be hit by 3 darts, with the other 2 doing 30% damage.  Enemies hit are poisoned, taking additional damage every .5s and are slowed.",
            "damage": [
                30,
                45,
                60,
                75,
                90
            ],
            "powerDamage": 40,
            "cooldown": [
                18,
                17,
                16,
                15,
                14
            ],
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/poison darts.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Rising Jaguar",
            "description": "Xbalanque rushes forward and then jumps into the air.  While in the air, he fires darts at all nearby enemies, dealing damage to all in the area.  Any enemies that were poisoned by Xbalanque take additional damage.",
            "damage": [
                80,
                130,
                180,
                230,
                280
            ],
            "powerDamage": 30,
            "cooldown": 16,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/rising jaguar.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Darkest of Nights",
            "description": "Xbalanque shrouds enemies in darkness for 3s.  During this time, Xbalanque's basic attack range and his movement speed are increased.  At the end of the darkness, any enemy gods moving at the time are stunned.",
            "cooldown": 110,
            "cost": 100,
            "toggleStats": {
                "movementSpeed": [
                    20,
                    30,
                    40,
                    50,
                    60
                ],
                "toggle": false
            },
            "icon": "images/smite/abilities/darkest of nights.jpg"
        },
        "icon": "images/smite/gods/xbalanque.jpg"
    },
    {
        "name": "Xing Tian",
        "title": "The Relentless",
        "pantheon": "Chinese",
        "type": " Guardian ",
        "attackType": "Melee",
        "powerType": "Magical",
        "pros": "High Crowd Control",
        "health": 485,
        "healthPerLevel": 90,
        "mana": 200,
        "manaPerLevel": 40,
        "speed": 360,
        "attackSpeed": 0.9,
        "attackSpeedPerLevel": 1.2,
        "damage": 35,
        "damagePerLevel": 1.55,
        "physicalProtection": 21,
        "physicalProtectionPerLevel": 3.4,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 5,
        "hpFivePerLevel": 0.54,
        "mpFive": 5,
        "mpFivePerLevel": 0.45,
        "passive": {
            "name": "Smouldering Rage",
            "description": "Xing Tian gains stacks of Smouldering Rage each time he hits an enemy with an ability. For each stack of Rage Xing Tian has, he gains HP5. Stacks last 18s",
            "stacks": {
                "current": 0,
                "max": 12,
                "stacks": [
                    {
                        "hpFive": 3
                    }
                ],
                "type": "temporary"
            },
            "icon": "images/smite/abilities/smouldering rage.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Furious Roar",
            "description": "Xing Tian shouts from his chest with great force, damaging enemies and reducing their Basic Attack damage. Enemies also take damage over time based on their maximum health.",
            "damage": [
                80,
                115,
                150,
                185,
                210
            ],
            "powerDamage": 60,
            "secondaryDamage": {
                "maxHealthDamage": 3,
                "ticks": 4
            },
            "cooldown": 14,
            "cost": [
                55,
                60,
                65,
                70,
                75
            ],
            "icon": "images/smite/abilities/furious roar.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Hook Slam",
            "description": "Xing Tian first launches an attack with his axe, knocking the opponents into the air before slamming them into the ground and rooting them.",
            "damage": [
                25,
                40,
                55,
                70,
                85
            ],
            "powerDamage": 25,
            "secondaryDamage": {
                "damage": [
                    50,
                    80,
                    110,
                    140,
                    170
                ],
                "powerDamage": 45
            },
            "cooldown": 18,
            "cost": [
                70,
                75,
                80,
                85,
                90
            ],
            "icon": "images/smite/abilities/hook slam.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Sky-Cutting Axe",
            "description": "Xing Tian leaps forward, dealing damage to enemies when he lands, and he may leap again within 2s. While in the air, Xing Tian has increased protections, which are refreshed if he connects with a target. Using another ability during this time cancels the additional leap.",
            "damage": [
                65,
                85,
                105,
                125,
                145
            ],
            "powerDamage": 30,
            "ticks": 2,
            "cooldown": 15,
            "cost": [
                65,
                75,
                85,
                95,
                105
            ],
            "icon": "images/smite/abilities/sky-cutting axe.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Whirlwind of Rage and Steel",
            "description": "Xing Tian spins his axe three times in succession, sweeping up his enemies before throwing them.",
            "damage": [
                25,
                45,
                65,
                85,
                105
            ],
            "powerDamage": 35,
            "ticks": 3,
            "cooldown": 90,
            "cost": 100,
            "icon": "images/smite/abilities/whirlwind of rage and steel.jpg"
        },
        "icon": "images/smite/gods/xingtian.jpg"
    },
    {
        "name": "Ymir",
        "title": "Father of the Frost Giants",
        "pantheon": "Norse",
        "type": "Guardian ",
        "attackType": "Melee",
        "powerType": "Magical",
        "pros": "High Crowd Control, High Defense",
        "health": 510,
        "healthPerLevel": 104,
        "mana": 200,
        "manaPerLevel": 32,
        "speed": 370,
        "attackSpeed": 0.85,
        "attackSpeedPerLevel": 1.2,
        "damage": 38,
        "damagePerLevel": 1.55,
        "physicalProtection": 23,
        "physicalProtectionPerLevel": 3.3,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 8,
        "hpFivePerLevel": 0.9,
        "mpFive": 4.5,
        "mpFivePerLevel": 0.4,
        "passive": {
            "name": "Frostbite",
            "description": "All of Ymir's abilities that affect enemies apply a debuff to the enemy called Frostbite. All of Ymir's basic melee strikes against a target afflicted by Frostbite do 100% more damage.",
            "toggleStats": {
                "basicAttackMultiplier": 2,
                "toggle": false
            },
            "icon": "images/smite/abilities/frostbite.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Ice Wall",
            "description": "Ymir summons a wall of ice out of the ground that blocks player movement.",
            "cooldown": 14,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/ice wall.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Glacial Strike",
            "description": "Ymir smashes his club, doing damage to all enemies in front of him and slowing them. Applies Frostbite.",
            "damage": [
                90,
                160,
                230,
                300,
                370
            ],
            "powerDamage": 70,
            "cooldown": 8,
            "cost": [
                55,
                60,
                65,
                70,
                75
            ],
            "icon": "images/smite/abilities/glacial strike.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Frost Breath",
            "description": "Ymir uses his breath to freeze enemies in blocks of ice, doing damage and stunning them.  Applies Frostbite.",
            "damage": [
                50,
                90,
                130,
                170,
                210
            ],
            "powerDamage": 50,
            "cooldown": 18,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/frost breath.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Shards of Ice",
            "description": "Ymir begins to freeze the air around him, causing shards of ice to grow on his back and slowing enemies. After a 3s channel, Ymir erupts out of his frozen state, causing shards of ice to do damage to all enemies in his range. Applies Frostbite.  Cancelling the ability decreases the damage.",
            "damage": [
                500,
                650,
                800,
                950,
                1100
            ],
            "powerDamage": 150,
            "cooldown": [
                90,
                85,
                80,
                75,
                70
            ],
            "cost": [
                80,
                90,
                100,
                110,
                120
            ],
            "icon": "images/smite/abilities/shards of ice.jpg"
        },
        "icon": "images/smite/gods/ymir.jpg"
    },
    {
        "name": "Zeus",
        "title": "God of the Sky",
        "pantheon": "Greek",
        "type": "Mage ",
        "attackType": "Ranged",
        "powerType": "Magical",
        "pros": "High Area Damage",
        "health": 380,
        "healthPerLevel": 71,
        "mana": 245,
        "manaPerLevel": 44,
        "speed": 360,
        "attackSpeed": 0.87,
        "attackSpeedPerLevel": 0.99,
        "damage": 35,
        "damagePerLevel": 1.5,
        "physicalProtection": 8,
        "physicalProtectionPerLevel": 2.7,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0.9,
        "hpFive": 6,
        "hpFivePerLevel": 0.45,
        "mpFive": 4.6,
        "mpFivePerLevel": 0.45,
        "passive": {
            "name": "Overcharge",
            "description": "In hand lightning bolt attacks against enemies will apply a charge.  Basic attacks against targets with charges deal increased damage.",
            "stacks": {
                "current": 0,
                "max": 3,
                "stacks": [
                    {
                        "basicAttackPercentIncrease": 0.3
                    }
                ],
                "type": "temporary"
            },
            "icon": "images/smite/abilities/overcharge.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Chain Lightning",
            "description": "Zeus fires a bolt of lightning that arcs between enemies, doing damage and applying a charge on each hit.",
            "damage": [
                40,
                70,
                100,
                130,
                160
            ],
            "powerDamage": 50,
            "cooldown": 10,
            "cost": [
                50,
                55,
                60,
                65,
                70
            ],
            "icon": "images/smite/abilities/chain lightning.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Aegis Assault",
            "description": "Zeus throws his shield forward, dealing damage to nearby enemies. The shield remains for 5s, and Zeus may hit it with Basic Attacks or Chain Lightning to deal static additional damage and apply a charge.",
            "damage": [
                60,
                105,
                150,
                195,
                240
            ],
            "powerDamage": 50,
            "cooldown": 10,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "toggleStats": {
                "basicAttackFlatIncrease": [
                    10,
                    15,
                    20,
                    25,
                    30
                ],
                "toggle": false
            },
            "icon": "images/smite/abilities/aegis assault.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Detonate Charge",
            "description": "Zeus detonates any charges that have accumulated on enemies, doing damage, multiplied by 1/2/3 depending on the number of charges. Targets with 3 charges at the time of detonation are slowed.",
            "damage": [
                55,
                75,
                95,
                115,
                135
            ],
            "powerDamage": 18,
            "damageCondition": "passiveStacksMultiply",
            "cooldown": 10,
            "cost": 60,
            "icon": "images/smite/abilities/detonate charge.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Lightning Storm",
            "description": "Zeus conjures a Lightning Storm, striking enemies in the area every second. Applies a charge with each hit.",
            "damage": [
                120,
                140,
                160,
                180,
                200
            ],
            "powerDamage": 50,
            "cooldown": 90,
            "cost": 100,
            "ticks": 5,
            "icon": "images/smite/abilities/lightning storm.jpg"
        },
        "icon": "images/smite/gods/zeus.jpg"
    },
    {
        "name": "Zhong Kui",
        "title": "The Demon Queller",
        "pantheon": "Chinese",
        "type": "Mage ",
        "attackType": "Ranged",
        "powerType": "Magical",
        "pros": "High Area Damage, Medium Crowd Control",
        "health": 450,
        "healthPerLevel": 85,
        "mana": 250,
        "manaPerLevel": 47,
        "speed": 360,
        "attackSpeed": 0.86,
        "attackSpeedPerLevel": 1,
        "damage": 33,
        "damagePerLevel": 1.5,
        "physicalProtection": 8,
        "physicalProtectionPerLevel": 2.6,
        "magicalProtection": 30,
        "magicalProtectionPerLevel": 0,
        "hpFive": 6,
        "hpFivePerLevel": 0.44,
        "mpFive": 4.8,
        "mpFivePerLevel": 0.45,
        "passive": {
            "name": "Demon Bag",
            "description": "The demons that Zhong Kui captures from Exorcism are stored in his demon bag, giving him additional protections for each demon captured.  When Recall Demons is activated, Zhong Kui gains double the protections from his Demon Bag, but eventually losing all stacks when the bag is empty.",
            "icon": "images/smite/abilities/demon bag.jpg"
        },
        "abilityOne": {
            "level": 5,
            "name": "Expose Evil",
            "description": "Zhong Kui pastes a card on all enemies in front of him, marking them as a demon, slowing and damaging them each second while they are marked.  If the card is removed, 50% of the remaining damage is done instantly.",
            "damage": [
                20,
                30,
                40,
                50,
                60
            ],
            "powerDamage": 15,
            "cooldown": 10,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "ticks": 5,
            "icon": "images/smite/abilities/expose evil.jpg"
        },
        "abilityTwo": {
            "level": 5,
            "name": "Exorcism",
            "description": "Zhong Kui drives out the demons of his enemies, dealing damage as they leave the body.  Demons marked by Expose Evil are captured by Zhong Kui, healing him per demon captured (up to 3), and have the card removed.",
            "damage": [
                75,
                125,
                175,
                225,
                275
            ],
            "powerDamage": 50,
            "cooldown": 10,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/exorcism.jpg"
        },
        "abilityThree": {
            "level": 5,
            "name": "Book of Demons",
            "description": "When fired, the Book of Demons deals damage and stuns enemies, stunning marked enemies for 2x the duration and removing the card. When this ability is not on cooldown, the Book of Demons flies nearby Zhong Kui, firing for 50% of Zhong Kui's basic damage.",
            "damage": [
                60,
                115,
                170,
                225,
                280
            ],
            "powerDamage": 50,
            "cooldown": 15,
            "cost": [
                60,
                65,
                70,
                75,
                80
            ],
            "icon": "images/smite/abilities/book of demons.jpg"
        },
        "abilityFour": {
            "level": 5,
            "name": "Recall Demons",
            "description": "Upon activation, demons pulse out from his bag at nearby players every second for 5s. They chase and accelerate over time, doing damage to enemies as they enter the body. Zhong Kui is immune to Knockback and Slows for the duration.",
            "damage": [
                80,
                95,
                110,
                125,
                140
            ],
            "powerDamage": 20,
            "cooldown": 90,
            "cost": 100,
            "ticks": 5,
            "icon": "images/smite/abilities/recall demons.jpg"
        },
        "icon": "images/smite/gods/zhongkui.jpg"
    }
]