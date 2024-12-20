import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="text-center w-2/3">
      <img
        src={noProjectImage}
        alt="An Empty Task List"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a Project or get started with a new one
      </p>
      <p>
        <Button onClick={onStartAddProject}>Create New Project</Button>
      </p>
    </div>
  );
}
