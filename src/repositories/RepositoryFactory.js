import ProjectsRepository from "./ProjectsRepository"
import DynamicDataRepository from "./DynamicDataRepository"


const repositories = {
    projects: ProjectsRepository,
    dynamicData: DynamicDataRepository


}

export const RepositoryFactory = {
    get: name => repositories[name]
};