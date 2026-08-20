namespace SpriteKind {
    export const Ground = SpriteKind.create()
    export const Hat = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (MainPlayer.isHittingTile(CollisionDirection.Bottom) || MainPlayer.isHittingTile(CollisionDirection.Top)) {
        MainPlayer.vy = MainPlayer.ay / -4
    } else if (MainPlayer.isHittingTile(CollisionDirection.Left)) {
        MainPlayer.setVelocity(50, MainPlayer.ay / -4)
        MoveCooldown = game.runtime()
        MainPlayer.setImage(assets.image`right`)
    } else if (MainPlayer.isHittingTile(CollisionDirection.Right)) {
        MainPlayer.setVelocity(-50, MainPlayer.ay / -4)
        MoveCooldown = game.runtime()
        MainPlayer.setImage(assets.image`left`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    MainPlayer.setPosition(spawnx, spawny)
    MainPlayer.ay = 600
    MainPlayer.setVelocity(0, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    spawnx = MainPlayer.x
    spawny = MainPlayer.y
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    MainPlayer.setPosition(spawnx, spawny)
    MainPlayer.ay = 600
    MainPlayer.setVelocity(0, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    game.gameOver(true)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (CanFlipGravity == 1) {
        MainPlayer.ay = MainPlayer.ay * -1
        CanFlipGravity = 0
        MainPlayer.startEffect(effects.blizzard, 500)
    }
})
let CanFlipGravity = 0
let spawny = 0
let spawnx = 0
let MainPlayer: Sprite = null
let MoveCooldown = 0
tileUtil.connectMaps(tilemap`level`, tilemap`level2`, MapConnectionKind.Door1)
MoveCooldown = -1
scene.setBackgroundColor(9)
MainPlayer = sprites.create(assets.image`front`, SpriteKind.Player)
MainPlayer.ay = 600
tiles.setCurrentTilemap(tilemap`level`)
MainPlayer.fx = 500
MainPlayer.sayText("Press \"Down\"", 5000, false)
spawnx = 10
spawny = 61
forever(function () {
    scene.cameraFollowSprite(MainPlayer)
    if (100 + MoveCooldown < game.runtime()) {
        if (controller.left.isPressed()) {
            MainPlayer.vx = -90
            MainPlayer.setImage(assets.image`left`)
        } else {
            if (controller.right.isPressed()) {
                MainPlayer.vx = 90
                MainPlayer.setImage(assets.image`right`)
            }
        }
    }
    if (MainPlayer.isHittingTile(CollisionDirection.Bottom) && MainPlayer.ay > 0 || MainPlayer.isHittingTile(CollisionDirection.Top) && MainPlayer.ay < 0) {
        CanFlipGravity = 1
    }
})
