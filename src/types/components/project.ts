export interface ProjectProps {
    id: number,
    url: {
        site: string;
        code: string;
    },
    tag: Array<string>,
    title: string,
    description?: string;
    tools: Array<string>
}

export type ProjectCard = {
    project: ProjectProps;
}

export type ProjectsList = Array<ProjectProps>;