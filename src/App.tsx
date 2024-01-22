import { useState } from "react";
import Expand from "./components/Expand";

function App() {
  return (
    <div>
      <Expand maxChars={10}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eos nobis
        dolorum distinctio accusamus voluptatem sequi labore rem eaque mollitia
        harum quasi optio eum quae, placeat id molestias! Recusandae, tempora?
        Quidem, libero delectus velit quia error unde alias asperiores
        voluptatibus voluptatum fugiat numquam autem, quas nobis at et
        laboriosam excepturi earum fuga officia quod illum ratione harum
        veritatis. Repudiandae temporibus mollitia alias architecto sunt
        delectus magnam, optio accusamus animi id obcaecati facere. Eligendi
        quasi eius culpa aperiam, nesciunt blanditiis esse amet soluta saepe
        iste, consequatur, consequuntur recusandae iure expedita voluptate harum
        unde reiciendis ipsum illo inventore! Magni rem fugit quia.
      </Expand>
    </div>
  );
}

export default App;
