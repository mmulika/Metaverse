const baseScene = new Entity()
engine.addEntity(baseScene)
baseScene.addComponent(new GLTFShape('models/scene.glb'))

//door
const door = new Entity()
engine.addEntity(door)
door.addComponent(new GLTFShape('models/Puzzle01_Door.glb'))

door.addComponent(
  new Transform({
    position: new Vector3(21, 10, 24)
  })
)
//Animator
door.addComponent(new Animator())
door.addComponent(Animator).addClip(new AnimationState('Door_open', { looping: false }))

door.addComponent(
  new OnClick((): void => {
    door.getComponet(Animator).getClip("Door_open").play()
  )}
)
//button 


const button = new Entity()
engine.addEntity(button)
button.addComponent(new GLTFShape('models/Square_Button.glb'))

// baseScene.addComponent(
//   new Transform({
//     position: new Vector3(20, 8, 20)
//   })
// )

// door.addComponent(
//   new utils.ScaleTransformComponet(
//     new Vector3(13, 2.5),
//     new Vector3(2, 4, 5),

//     10
//   )
// )
