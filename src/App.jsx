import { useQuery, gql } from "@apollo/client";
import { BeatLoader } from "react-spinners";
import Carousel from "./components/Carousel";
import CenterContent from "./components/CenterContent";
import Program from "./components/Program";

const GET_PROGRAMS = gql`
  query GetPrograms {
    program {
      id
      name
      thumnail {
        alt
        url
      }
    }
  }
`;

function App() {
  const { loading, data } = useQuery(GET_PROGRAMS);

  return (
    <CenterContent>
      {loading ? (
        <BeatLoader color="white" />
      ) : (
        <Carousel>
          {data.program.map((program) => (
            <Program key={program.id} program={program} />
          ))}
        </Carousel>
      )}
    </CenterContent>
  );
}

export default App;
