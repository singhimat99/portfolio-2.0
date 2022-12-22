import { Skills, Socials, Projects, PageInfo } from "../typings";

export const fetchProjects = async () => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`
    );
    const data = await response.json();
    const projects: Projects[] = data.projects;
    // console.log(projects);
    return projects;
};

export const fetchSkills = async () => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`
    );
    const data = await response.json();
    const skills: Skills[] = data.skills;
    // console.log(skills);
    return skills;
};

export const fetchPageInfo = async () => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`
    );
    const data = await response.json();
    const pageInfo: PageInfo = data.pageInfo;
    console.log(pageInfo);
    return pageInfo;
};

export const fetchSocials = async () => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`
    );
    const data = await response.json();
    const socials: Socials[] = data.socials;
    // console.log(socials);
    return socials;
};
