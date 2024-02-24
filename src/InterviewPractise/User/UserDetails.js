import { useParams, useSearchParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div>
      <div>
        Id: {id}
      </div>
      <div>
        Name: {searchParams.get("name")}
      </div>
      <div>
        Age: {searchParams.get("age")}
      </div>
    </div>
  );
};

export default UserDetails;
  