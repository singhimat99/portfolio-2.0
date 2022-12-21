import { Skills, Socials, Projects, PageInfo } from "../typings";

export const fetchProjects = async () => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BSSE_URL}/api/getProjects`
        );
        const data = await response.json();
        const projects: Projects[] = data.projects;
        // console.log(projects);
        return projects;
    } catch (e) {
        console.error(e);
    }
};

export const fetchSkills = async () => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BSSE_URL}/api/getSkills`
        );
        const data = await response.json();
        const skills: Skills[] = data.projects;
        // console.log(skills);
        return skills;
    } catch (e) {
        console.error(e);
    }
};
export const fetchPageInfo = async () => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BSSE_URL}/api/getPageInfo`
        );
        const data = await response.json();
        const pageInfo: PageInfo = data.projects;
        // console.log(skills);
        return pageInfo;
    } catch (e) {
        console.error(e);
    }
};
export const fetchSocials = async () => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_BSSE_URL}/api/getSocials`
        );
        const data = await response.json();
        const socials: Socials[] = data.projects;
        // console.log(skills);
        return socials;
    } catch (e) {
        console.error(e);
    }
};
