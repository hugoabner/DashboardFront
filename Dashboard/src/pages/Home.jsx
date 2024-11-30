import { ProjectStastics } from "../components/ProjectStastics"
import { Platforms } from "../components/Platforms.jsx"
import { ProjectCard } from "../components/ProjectCard.jsx"
import { ClientCard } from "../components/ClientCard.jsx"
import { MemberCard } from "../components/MemberCard.jsx"
 
const projects = [
  {
    id: 1,
    name: "webSite Rodrigo",
    type: "Web Develoment",
    Date: "2023-06-01",
    menbers: ["Alice", "Bob", "Charlie"],
    files: 4,
    progress: 20,
  },
  {
    id: 2,
    name: "webSite Rodrigo",
    type: "Web Develoment",
    Date: "2023-06-01",
    menbers: ["Alice", "Bob", "Charlie"],
    files: 4,
    progress: 20,
  },
  {
    id: 3,
    name: "webSite Rodrigo",
    type: "Web Develoment",
    Date: "2023-06-01",
    menbers: ["Alice", "Bob", "Charlie"],
    files: 4,
    progress: 20,
  },
  {
    id: 4,
    name: "webSite Rodrigo",
    type: "Web Develoment",
    Date: "2023-06-01",
    menbers: ["Alice", "Bob", "Charlie"],
    files: 4,
    progress: 20,
  } 
];

const clients = [
  {
    id: 1,
    name : "webSite Rodrigo",
    titulo: "Web Develoment",
    Date: "2023-06-01",
  },
  {
    id: 2,
    name : "webSite Rodrigo",
    titulo: "Web Develoment",
    Date: "2023-06-01",
  },
  {
    id: 3,
    name : "webSite Rodrigo",
    titulo: "Web Develoment",
    Date: "2023-06-01",
  },
  {
    id: 4,
    name : "webSite Rodrigo",
    titulo: "Web Develoment",
    Date: "2023-06-01",
  }
];

const members = [
  {
    id: 1,
    total_members: 10,  
    job: "5UI Designer", 
  },
  {
    id: 2,
    total_members: 10,  
    job: "5UI Designer", 
  },
  {
    id: 3,
    total_members: 10,  
    job: "5UI Designer", 
  },
  {
    id: 4,
    total_members: 10,  
    job: "5UI Designer", 
  },

];
export const Home = () => {
  return (
    <div className="p-5">
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
        <ProjectStastics />
        <Platforms/>
        <ProjectStastics />
        <Platforms/>
      </div>

      <div>
        <div className="flex justify-between items-center py-4 ">
          <h1 className="text-semibold text-lg">Current Project </h1>
          <p className="text-sm underline text-indigo-600">See All</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
        {
          projects && projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        }
        </div>
      </div>


      <div>
        <div className="flex justify-between items-center py-4 ">
          <h1 className="text-semibold text-lg">Current Clients </h1>
          <p className="text-sm underline text-indigo-600">See All</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {
            clients && clients.map((client) => <ClientCard key={client.id} client={client}/>)
          }
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center py-4 ">
          <h1 className="text-semibold text-lg">Members</h1>
          <p className="text-sm underline text-indigo-600">See All</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {
            members && members.map((member) => <MemberCard key={member.id} member={member}/>)
          }
        </div>
      </div>

    </div>
  )
}
