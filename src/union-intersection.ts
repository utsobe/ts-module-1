type NoobDeveloper = {
    name: string
};

type JuniorDeveloper = NoobDeveloper & {
    expertise: string,
    experience: number,
};

enum Level {
    junior = 'junior', mid = 'mid', senior = 'senior',
}

type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number;
    level: "junior" | "mid" | "senior";
}



const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: 'Moznu Mia',
    expertise: "javascript",
    experience: 1,
};

const developer: NextLevelDeveloper = {
    name: 'Next bhai',
    expertise: 'typescript',
    experience: 2,
    leadershipExperience: 1,
    level: 'junior',
}