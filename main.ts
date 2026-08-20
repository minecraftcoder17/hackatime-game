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
let MainPlayer: Sprite = null
let MoveCooldown = 0
MoveCooldown = -1
scene.setBackgroundColor(9)
MainPlayer = sprites.create(assets.image`front`, SpriteKind.Player)
MainPlayer.ay = 300
tiles.setCurrentTilemap(tilemap`level`)
forever(function () {
    scene.cameraFollowSprite(MainPlayer)
    if (100 + MoveCooldown < game.runtime()) {
        if (controller.left.isPressed()) {
            MainPlayer.vx = -50
            MainPlayer.setImage(assets.image`left`)
        } else {
            if (controller.right.isPressed()) {
                MainPlayer.vx = 50
                MainPlayer.setImage(assets.image`right`)
            } else {
                MainPlayer.vx = 0
            }
        }
    }
    if (MainPlayer.x > 240) {
        tiles.setCurrentTilemap(tilemap`level2`)
    } else {
    	
    }
})
