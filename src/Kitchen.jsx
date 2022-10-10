import Sink from "./Sink"
import Oven from "./Oven"
function Kitchen(props) {
  return (
  <div> 
    <h2>Kitchen</h2>
    <Oven/>
    <Sink/>
  </div>
  )
}

export default Kitchen