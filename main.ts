controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -50
})
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
mySprite.ay = -4
tiles.setCurrentTilemap(tilemap`level`)
forever(function () {
    scene.cameraFollowSprite(mySprite)
    mySprite.vy += 1
})
game.onUpdateInterval(500, function () {
	
})
