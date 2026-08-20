namespace SpriteKind {
    export const Ground = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (MainPlayer.isHittingTile(CollisionDirection.Bottom)) {
        MainPlayer.vy = -100
    }
})
let MainPlayer: Sprite = null
scene.setBackgroundColor(9)
MainPlayer = sprites.create(assets.image`myImage`, SpriteKind.Player)
MainPlayer.ay = 200
tiles.setCurrentTilemap(tilemap`level`)
MainPlayer.setBounceOnWall(false)
forever(function () {
    scene.cameraFollowSprite(MainPlayer)
    if (controller.left.isPressed()) {
        MainPlayer.vx = -50
    } else {
        if (controller.right.isPressed()) {
            MainPlayer.vx = 50
        } else {
            MainPlayer.vx = 0
        }
    }
})
