import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function Program({ program }) {
  return (
    <Link
      to={`/tf1/${program.id}`}
      className="flex-col shrink-0 justify-center items-center hover:scale-110 transform transition-all"
    >
      <div className="h-32 w-24 relative">
        <img
          alt={program.thumnail.alt}
          className="h-full w-full object-cover rounded-md"
          src={program.thumnail.url}
        />
        <button className="absolute right-1 bottom-1 bg-black bg-opacity-75 p-1 rounded-md hover:bg-opacity-100 transition-all">
          <FaPlus className="text-white text-xs" />
        </button>
      </div>
      <div className="mt-2 text-ellipsis overflow-hidden whitespace-nowrap w-20 h-4 text-xs text-center text-white">
        {program.name}
      </div>
    </Link>
  );
}

export default Program;
