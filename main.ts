namespace SpriteKind {
    export const RightGun = SpriteKind.create()
    export const RightMelee = SpriteKind.create()
    export const LeftGun = SpriteKind.create()
    export const LeftMelee = SpriteKind.create()
    export const UpGun = SpriteKind.create()
    export const UpMelee = SpriteKind.create()
    export const DownGun = SpriteKind.create()
    export const DownMelee = SpriteKind.create()
    export const Melee = SpriteKind.create()
    export const Gun = SpriteKind.create()
    export const Yes = SpriteKind.create()
    export const No = SpriteKind.create()
    export const HitBox = SpriteKind.create()
    export const Boss = SpriteKind.create()
}
/**
 * Zombie Apocalypse
 * 
 * Open World
 * 
 * Outside and in Safe Cities
 * 
 * Gather Resources to Upgrade Weapons
 * 
 * Survive as long as Possible
 * 
 * Top Down
 */
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(Hero, 50, 50)
    if (MeleeOrGun.kind() == SpriteKind.Gun) {
        Hero.setKind(SpriteKind.UpGun)
        Hero.setImage(img`
            . . . e e e e . 
            . . . e e e e . 
            . . . d d d d . 
            . . . a a a a . 
            . . . a a a a . 
            . . . a a a a . 
            . . . f . . f . 
            . . . . . . . . 
            `)
    } else if (MeleeOrGun.kind() == SpriteKind.Melee) {
        Hero.setKind(SpriteKind.UpMelee)
        Hero.setImage(img`
            . e e e e . . . 
            . e e e e . . . 
            . d d d d . . . 
            . a a a a . . . 
            . a a a a . . . 
            . a a a a . . . 
            . f . . f . . . 
            . . . . . . . . 
            `)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (MeleeOrGun.kind() == SpriteKind.Gun) {
        MeleeOrGun.setKind(SpriteKind.Melee)
    } else if (MeleeOrGun.kind() == SpriteKind.Melee) {
        MeleeOrGun.setKind(SpriteKind.Gun)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.A.isPressed() == true) {
        if (MeleeOrGun.kind() == SpriteKind.Gun) {
            if (Hero.kind() == SpriteKind.RightGun) {
                ShootGun1 = sprites.createProjectileFromSprite(img`
                    5 5 
                    5 5 
                    `, Hero, 75, 25)
                ShootGun2 = sprites.createProjectileFromSprite(img`
                    5 5 
                    5 5 
                    `, Hero, 75, 0)
                ShootGun3 = sprites.createProjectileFromSprite(img`
                    5 5 
                    5 5 
                    `, Hero, 75, -25)
                pause(500)
                ShootGun1.destroy()
                ShootGun2.destroy()
                ShootGun3.destroy()
            } else if (Hero.kind() == SpriteKind.LeftGun) {
                ShootGun1 = sprites.createProjectileFromSprite(img`
                    5 5 
                    5 5 
                    `, Hero, -75, 25)
                ShootGun2 = sprites.createProjectileFromSprite(img`
                    5 5 
                    5 5 
                    `, Hero, -75, 0)
                ShootGun3 = sprites.createProjectileFromSprite(img`
                    5 5 
                    5 5 
                    `, Hero, -75, -25)
                pause(500)
                ShootGun1.destroy()
                ShootGun2.destroy()
                ShootGun3.destroy()
            } else if (Hero.kind() == SpriteKind.UpGun) {
                Hero.z += 1
                ShootGun1 = sprites.createProjectileFromSprite(img`
                    5 5 
                    5 5 
                    `, Hero, -25, -75)
                ShootGun2 = sprites.createProjectileFromSprite(img`
                    5 5 
                    5 5 
                    `, Hero, 0, -75)
                ShootGun3 = sprites.createProjectileFromSprite(img`
                    5 5 
                    5 5 
                    `, Hero, 25, -75)
                pause(500)
                ShootGun1.destroy()
                ShootGun2.destroy()
                ShootGun3.destroy()
                Hero.z += -1
            } else if (Hero.kind() == SpriteKind.DownGun) {
                ShootGun1 = sprites.createProjectileFromSprite(img`
                    5 5 
                    5 5 
                    `, Hero, -25, 75)
                ShootGun2 = sprites.createProjectileFromSprite(img`
                    5 5 
                    5 5 
                    `, Hero, 0, 75)
                ShootGun3 = sprites.createProjectileFromSprite(img`
                    5 5 
                    5 5 
                    `, Hero, 25, 75)
                pause(500)
                ShootGun1.destroy()
                ShootGun2.destroy()
                ShootGun3.destroy()
            }
        } else if (MeleeOrGun.kind() == SpriteKind.Melee) {
            if (Hero.kind() == SpriteKind.RightMelee) {
                AttackingOrNo.setKind(SpriteKind.Yes)
                animation.runImageAnimation(
                Hero,
                [img`
                    . e e e e . . . 
                    . d f d f . . . 
                    . d d d d 2 e 2 
                    . a a a a e 2 2 
                    . a a c e . 1 1 
                    . a a e a . . . 
                    . f . . f . . . 
                    . . . . . . . . 
                    `,img`
                    . e e e e . . . 
                    . d f d f . . . 
                    . d d 2 e 2 1 . 
                    . a a a e 2 1 . 
                    . a c e a . . . 
                    . a a e a . . . 
                    . f . . f . . . 
                    . . . . . . . . 
                    `,img`
                    . e e e e . . . 
                    . d f d f . . . 
                    . d d d d . . . 
                    . a a a a . 2 . 
                    . a a c a e e 2 
                    . a a e e . 2 2 
                    . f . . f . 1 1 
                    . . . . . . . . 
                    `,img`
                    . e e e e . . . 
                    . d f d f . . . 
                    . d d d d 2 e 2 
                    . a a a a e 2 2 
                    . a a c e . 1 1 
                    . a a e a . . . 
                    . f . . f . . . 
                    . . . . . . . . 
                    `],
                300,
                false
                )
                pause(400)
                AttackingOrNo.setKind(SpriteKind.No)
            } else if (Hero.kind() == SpriteKind.LeftMelee) {
                animation.runImageAnimation(
                Hero,
                [img`
                    . . . e e e e . 
                    . . . f d f d . 
                    2 e 2 d d d d . 
                    2 2 e a a a a . 
                    1 1 . e c a a . 
                    . . . a e a a . 
                    . . . f . . f . 
                    . . . . . . . . 
                    `,img`
                    . . . e e e e . 
                    . . . f d f d . 
                    . 1 2 e 2 d d . 
                    . 1 2 e a a a . 
                    . . . a e c a . 
                    . . . a e a a . 
                    . . . f . . f . 
                    . . . . . . . . 
                    `,img`
                    . . . e e e e . 
                    . . . f d f d . 
                    . . . d d d d . 
                    . 2 . a a a a . 
                    2 e e a c a a . 
                    2 2 . e e a a . 
                    1 1 . f . . f . 
                    . . . . . . . . 
                    `,img`
                    . . . e e e e . 
                    . . . f d f d . 
                    2 e 2 d d d d . 
                    2 2 e a a a a . 
                    1 1 . e c a a . 
                    . . . a e a a . 
                    . . . f . . f . 
                    . . . . . . . . 
                    `],
                300,
                false
                )
                pause(100)
                AttackingOrNo.setKind(SpriteKind.Yes)
                pause(400)
                AttackingOrNo.setKind(SpriteKind.No)
            } else if (Hero.kind() == SpriteKind.UpMelee) {
                animation.runImageAnimation(
                Hero,
                [img`
                    . . . e e e e . 
                    . . . e e e e . 
                    . . . d d d d . 
                    . . . a a a a . 
                    . . . a a a a . 
                    . . . a a a a . 
                    . . . f . . f . 
                    . . . . . . . . 
                    `,img`
                    . . . e e e e . 
                    . . . e e e e . 
                    . . . d d d d . 
                    . . . a a a a . 
                    . . . a a a a . 
                    . . . a a a a . 
                    . . . f . . f . 
                    . . . . . . . . 
                    `,img`
                    . . . e e e e . 
                    . . . e e e e . 
                    . . . d d d d . 
                    . . . a a a a . 
                    . . . a a a a . 
                    . . . a a a a . 
                    . . . f . . f . 
                    . . . . . . . . 
                    `],
                300,
                false
                )
            } else if (Hero.kind() == SpriteKind.DownMelee) {
                animation.runImageAnimation(
                Hero,
                [img`
                    . . . e e e e . 
                    . . . d d d d . 
                    . . . f d f d . 
                    . . . a a a 2 . 
                    . . . a a a 2 . 
                    . . . a a a e . 
                    . . . f . . e . 
                    . . . . . . . . 
                    `,img`
                    . . . e e e e . 
                    . . . d d d d . 
                    . . . f d f d . 
                    . . . a a a 2 . 
                    . . . a a a 1 . 
                    . . . a a a e . 
                    . . . f . . e . 
                    . . . . . . . . 
                    `,img`
                    . . . e e e e . 
                    . . . d d d d . 
                    . . . f d f d . 
                    . . . a a a 2 . 
                    . . . a a a e . 
                    . . . a a a 1 . 
                    . . . f . . e . 
                    . . . . . . . . 
                    `,img`
                    . . . e e e e . 
                    . . . d d d d . 
                    . . . f d f d . 
                    . . . a a a 2 . 
                    . . . a a a 2 . 
                    . . . a a a e . 
                    . . . f . . e . 
                    . . . . . . . . 
                    `],
                300,
                false
                )
            }
        }
    } else {
    	
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(Hero, 50, 50)
    SprintingYesOrNo.setKind(SpriteKind.No)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Boss, function (sprite, otherSprite) {
    if (SkellyBossHealth.value == 10) {
        SkellyBossHealth.value += -5
        otherSprite.destroy()
        sprite.destroy()
    } else {
        SkellyBossHealth.value += -5
        sprite.destroy()
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(Hero, 50, 50)
    if (MeleeOrGun.kind() == SpriteKind.Gun) {
        Hero.setKind(SpriteKind.LeftGun)
        Hero.setImage(img`
            . . . e e e e . 
            . . . f d f d . 
            . . . d d d d . 
            f f f f f e a . 
            . e e a c c a . 
            . . . a a a a . 
            . . . f . . f . 
            . . . . . . . . 
            `)
    } else if (MeleeOrGun.kind() == SpriteKind.Melee) {
        Hero.setKind(SpriteKind.LeftMelee)
        Hero.setImage(img`
            . . . e e e e . 
            . . . f d f d . 
            2 e 2 d d d d . 
            2 2 e a a a a . 
            1 1 . e c a a . 
            . . . a e a a . 
            . . . f . . f . 
            . . . . . . . . 
            `)
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(Hero, 50, 50)
    SprintingYesOrNo.setKind(SpriteKind.No)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(Hero, 50, 50)
    SprintingYesOrNo.setKind(SpriteKind.No)
})
sprites.onOverlap(SpriteKind.HitBox, SpriteKind.Boss, function (sprite, otherSprite) {
    HeroHealth.value += -8
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(Hero, 50, 50)
    if (MeleeOrGun.kind() == SpriteKind.Gun) {
        Hero.setKind(SpriteKind.RightGun)
        Hero.setImage(img`
            . e e e e . . . 
            . d f d f . . . 
            . d d d d . . . 
            . a e f f f f f 
            . a c c a e e . 
            . a a a a . . . 
            . f . . f . . . 
            . . . . . . . . 
            `)
    } else if (MeleeOrGun.kind() == SpriteKind.Melee) {
        Hero.setKind(SpriteKind.RightMelee)
        Hero.setImage(img`
            . e e e e . . . 
            . d f d f . . . 
            . d d d d 2 e 2 
            . a a a a e 2 2 
            . a a c e . 1 1 
            . a a e a . . . 
            . f . . f . . . 
            . . . . . . . . 
            `)
    }
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(Hero, 50, 50)
    SprintingYesOrNo.setKind(SpriteKind.No)
})
sprites.onOverlap(SpriteKind.RightMelee, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (AttackingOrNo.kind() == SpriteKind.Yes) {
        otherSprite.destroy()
        HowManyZombies += -1
    } else if (AttackingOrNo.kind() == SpriteKind.No) {
    	
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(Hero, 50, 50)
    if (MeleeOrGun.kind() == SpriteKind.Gun) {
        Hero.setKind(SpriteKind.DownGun)
        Hero.setImage(img`
            . . . e e e e . 
            . . . d d d d . 
            . . . f d f d . 
            . . . a a a a . 
            . . . a c f a . 
            . . . a a f a . 
            . . . f . f f . 
            . . . . . f . . 
            `)
    } else if (MeleeOrGun.kind() == SpriteKind.Melee) {
        Hero.setKind(SpriteKind.DownMelee)
        Hero.setImage(img`
            . . . e e e e . 
            . . . d d d d . 
            . . . f d f d . 
            . . . a a a 2 . 
            . . . a a c 2 . 
            . . . a a a e . 
            . . . f . . e . 
            . . . . . . . . 
            `)
    }
})
sprites.onOverlap(SpriteKind.HitBox, SpriteKind.Enemy, function (sprite, otherSprite) {
    HeroHealth.value += -1
    if (Difficulty == 0) {
        HeroHealth.value += -1
    } else if (Difficulty == 1) {
        HeroHealth.value += -2
    } else if (Difficulty == 2) {
        HeroHealth.value += -3
    } else if (Difficulty == 3) {
        HeroHealth.value += -4
    } else if (Difficulty == 4) {
        HeroHealth.value += -5
    } else if (Difficulty == 5) {
        HeroHealth.value += -6
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    HowManyZombies += -1
    info.changeScoreBy(1)
})
let Zambie: Sprite = null
let SkellyBossHealth: StatusBarSprite = null
let ShootGun3: Sprite = null
let ShootGun2: Sprite = null
let ShootGun1: Sprite = null
let HeroHealth: StatusBarSprite = null
let SprintingYesOrNo: Sprite = null
let AttackingOrNo: Sprite = null
let MeleeOrGun: Sprite = null
let Hero: Sprite = null
let Difficulty = 0
let SkellyBoss = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
info.setScore(0)
tiles.setCurrentTilemap(tilemap`level1`)
let HowManyZombies = 0
Difficulty = 0
Hero = sprites.create(img`
    . e e e e . . . 
    . d f d f . . . 
    . d d d d . . . 
    . a e f f f f f 
    . a c c a e e . 
    . a a a a . . . 
    . f . . f . . . 
    . . . . . . . . 
    `, SpriteKind.RightGun)
Hero.setPosition(randint(1, 511), randint(1, 511))
let HeroHitBox = sprites.create(img`
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . a . . . . 
    . . . . . . . . 
    . . . . . . . . 
    `, SpriteKind.HitBox)
HeroHitBox.setPosition(Hero.x, Hero.y)
HeroHitBox.follow(Hero)
controller.moveSprite(Hero, 50, 50)
scene.cameraFollowSprite(Hero)
MeleeOrGun = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Gun)
AttackingOrNo = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.No)
SprintingYesOrNo = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.No)
HeroHealth = statusbars.create(40, 5, StatusBarKind.Health)
HeroHealth.setColor(1, 2, 4)
HeroHealth.setBarBorder(1, 15)
HeroHealth.setLabel("HP", 1)
HeroHealth.positionDirection(CollisionDirection.Top)
HeroHealth.setOffsetPadding(-44, 5)
let HeroStamina = statusbars.create(40, 5, StatusBarKind.Health)
HeroStamina.setColor(1, 2, 4)
HeroStamina.setBarBorder(1, 15)
HeroStamina.setLabel("STA", 1)
HeroStamina.positionDirection(CollisionDirection.Top)
HeroStamina.setOffsetPadding(-47, 11)
forever(function () {
    if (info.score() == 50) {
        info.changeScoreBy(1)
        SkellyBoss = sprites.create(img`
            . . f f f f f f . . . 
            . f f 1 1 1 1 f f . . 
            f f 1 1 1 1 1 1 f f . 
            f 1 1 1 1 1 1 1 1 f . 
            f 1 1 1 1 1 1 1 1 f . 
            f 1 2 2 1 1 1 2 2 f . 
            f 1 2 2 1 f 1 2 2 f . 
            f 1 1 1 1 1 1 1 1 f . 
            f f f 1 1 1 1 1 f f . 
            . f f 1 f 1 f 1 f . . 
            . . f f f f f f f f f 
            . . f 1 1 f 1 f 1 1 f 
            . . f 1 1 f 1 f 1 1 f 
            . . f 1 1 f 1 f 1 1 f 
            . . f f f 1 1 f f f . 
            . . f 1 1 1 1 f . . . 
            . . f 1 f f 1 f . . . 
            . . f 1 f f 1 f . . . 
            . . f f f f f f . . . 
            `, SpriteKind.Boss)
        SkellyBoss.setPosition(randint(1, 511), randint(1, 511))
        SkellyBossHealth = statusbars.create(30, 5, StatusBarKind.Health)
        SkellyBossHealth.attachToSprite(SkellyBoss, 1, 0)
        SkellyBossHealth.setColor(2, 15)
        SkellyBoss.follow(Hero, 20)
    } else {
    	
    }
})
forever(function () {
    if (HeroHealth.value == 0) {
        game.over(false)
    }
})
forever(function () {
    if (info.score() == 25) {
        info.changeScoreBy(1)
        Difficulty += 1
    } else if (info.score() == 50) {
        info.changeScoreBy(1)
        Difficulty += 1
    } else if (info.score() == 75) {
        info.changeScoreBy(1)
        Difficulty += 1
    } else if (info.score() == 100) {
        info.changeScoreBy(1)
        Difficulty += 1
    } else if (info.score() == 125) {
        info.changeScoreBy(1)
        Difficulty += 1
    }
})
forever(function () {
    if (controller.up.isPressed() == true) {
        pause(3000)
        if (controller.up.isPressed() == true) {
            SprintingYesOrNo.setKind(SpriteKind.Yes)
            controller.moveSprite(Hero, 50, 100)
        } else if (controller.anyButton.isPressed() == true) {
            controller.moveSprite(Hero, 50, 50)
        }
    }
})
forever(function () {
    if (controller.left.isPressed() == true) {
        pause(3000)
        if (controller.left.isPressed() == true) {
            SprintingYesOrNo.setKind(SpriteKind.Yes)
            controller.moveSprite(Hero, 100, 50)
        } else if (controller.anyButton.isPressed() == true) {
            controller.moveSprite(Hero, 50, 50)
        }
    }
})
forever(function () {
    if (controller.right.isPressed() == true) {
        pause(3000)
        if (controller.right.isPressed() == true) {
            SprintingYesOrNo.setKind(SpriteKind.Yes)
            controller.moveSprite(Hero, 100, 50)
        } else if (controller.anyButton.isPressed() == true) {
            controller.moveSprite(Hero, 50, 50)
        }
    }
})
forever(function () {
    if (controller.down.isPressed() == true) {
        pause(3000)
        if (controller.down.isPressed() == true) {
            SprintingYesOrNo.setKind(SpriteKind.Yes)
            controller.moveSprite(Hero, 50, 100)
        } else if (controller.anyButton.isPressed() == true) {
            controller.moveSprite(Hero, 50, 50)
        }
    }
})
forever(function () {
    if (SprintingYesOrNo.kind() == SpriteKind.Yes) {
        HeroStamina.value += -1
    } else if (SprintingYesOrNo.kind() == SpriteKind.No) {
    	
    }
})
game.onUpdateInterval(500, function () {
    if (HowManyZombies == 30) {
    	
    } else if (HowManyZombies < 30) {
        Zambie = sprites.create(img`
            . . . f f f f . 
            . . . 2 7 2 7 . 
            . . . 7 7 7 7 . 
            . . . c c c c . 
            . . . c c c c . 
            . . . c c c c . 
            . . . f . . f . 
            . . . . . . . . 
            `, SpriteKind.Enemy)
        Zambie.setPosition(randint(1, 511), randint(1, 511))
        HowManyZombies += 1
        if (Difficulty == 0) {
            Zambie.follow(Hero, 10)
        } else if (Difficulty == 1) {
            Zambie.follow(Hero, 15)
        } else if (Difficulty == 2) {
            Zambie.follow(Hero, 20)
        } else if (Difficulty == 3) {
            Zambie.follow(Hero, 25)
        } else if (Difficulty == 4) {
            Zambie.follow(Hero, 30)
        } else if (Difficulty == 5) {
            Zambie.follow(Hero, 35)
        }
    }
})
game.onUpdateInterval(200, function () {
    if (SprintingYesOrNo.kind() == SpriteKind.Yes) {
    	
    } else if (SprintingYesOrNo.kind() == SpriteKind.No) {
        HeroStamina.value += 2
    }
})
