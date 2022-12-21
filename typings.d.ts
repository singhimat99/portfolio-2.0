interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}
export interface Socials extends SanityBody {
    _type: "socials";
    title: string;
    url: string;
}

export interface Skills extends SanityBody {
    _type: "skills";
    title: string;
}

export interface Projects extends SanityBody {
    title: string;
    _type: "projects";
    projectImage: Image;
    linkToDemo: string;
    linkToDemo: string;
    summary: string;
    technologies: Skills[];
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    name: string;
    phoneNumber: string;
    role: string;
    profilePic: Image;
    heroImage: Image;
}
