namespace SpriteKind {
    export const Ground = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (MainPlayer.isHittingTile(CollisionDirection.Bottom)) {
        MainPlayer.vy = -150
    } else if (MainPlayer.isHittingTile(CollisionDirection.Left)) {
        MainPlayer.setVelocity(50, -50)
        MoveCooldown = game.runtime()
        MainPlayer.setImage(assets.image`right`)
    } else if (MainPlayer.isHittingTile(CollisionDirection.Right)) {
        MainPlayer.setVelocity(-50, -50)
        MoveCooldown = game.runtime()
        MainPlayer.setImage(assets.image`left`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    MainPlayer.setPosition(10, 61)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    MainPlayer.setPosition(10, 61)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    MainPlayer.ay = MainPlayer.ay * -1
})
let MainPlayer: Sprite = null
let MoveCooldown = 0
tileUtil.connectMaps(tilemap`level`, tilemap`level2`, MapConnectionKind.Door1)
MoveCooldown = -1
scene.setBackgroundColor(9)
MainPlayer = sprites.create(assets.image`front`, SpriteKind.Player)
MainPlayer.ay = 600
tiles.setCurrentTilemap(tilemap`level`)
MainPlayer.fx = 300
MainPlayer.sayText("Press \"Down\"", 5000, false)
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
            } else {
            	
            }
        }
    }
})
