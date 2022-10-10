
import Bedroom from "./Bedroom"
import Kitchen from "./Kitchen"
import LivingRoom from "./LivingRoom"
function FloorPlan(props) {
  return (
    <div>
      <Bedroom bedNum = {1}/>
      <Kitchen />
      <LivingRoom />
      <Bedroom bedNum = {2}/>
      <Bedroom bedNum = {3}/>

    <h3>Bath</h3>
    </div>
  )
}

export default FloorPlan