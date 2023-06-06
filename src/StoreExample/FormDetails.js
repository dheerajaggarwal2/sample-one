import { useParams } from "react-router";

function FormDetails() {
  let { name, age } = useParams();
  return(
    <div>
      {name}{age}
    </div>
  )
}

export default FormDetails;