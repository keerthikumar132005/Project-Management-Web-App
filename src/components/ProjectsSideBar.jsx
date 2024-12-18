import Button from "./Button";

export default function ProjectSideBar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="flex flex-row items-center justify-between md:justify-start  md:items-start w-full h-max flex-wrap gap-y-3 gap-x-8 md:h-full md:flex-col px-8 py-8 md:w-72 md:px-8 md:py-16 bg-stone-900 text-stone-50 rounded-lg md:rounded-r-xl">
      <h2 className="font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="flex md:flex-col gap-3 flex-wrap md:mt-8">
        {projects.map((project) => {
          let cssClass =
            "w-full text-left pr-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

          if (project.id === selectedProjectId) {
            cssClass += " bg-stone-800 text-stone-200";
          } else {
            cssClass += " text-stone-400";
          }
          return (
            <li key={project.id}>
              <button
                className={cssClass}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
