import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    {
        type: "list",
        name: "gender",
        message: "What is your gender?",
        choices: ["Male", "Female", "Shemale"],
    },
    {
        type: "number",
        name: "age",
        message: "Enter your age: ",
    },
    {
        type: "list",
        name: "class",
        message: "In Which Class You Study?",
        choices: [
            "MONTESSORI",
            "JUNIOR",
            "SENIOR",
            "CLASS 1",
            "CLASS 2",
            "CLASS 3",
            "CLASS 4",
            "CLASS 5",
            "CLASS 6",
            "CLASS 7",
            "CLASS 8",
            "CLASS 9",
            "MATRIC",
            "FIRST YEAR",
            "SECOND YEAR",
            "UNIVERSITY",
        ],
    },
    {
        type: "list",
        name: "group",
        message: "What is your group?",
        choices: [
            "PRE MEDICAL",
            "COMPUTER SCIENCE",
            "PRE ENGINEERING",
            "HOME ECONOMICS",
            "ARTS",
        ],
    },
    {
        type: "list",
        name: "school",
        message: "From Which school you studied or studying or want to study?",
        choices: [
            "CRESCENT BAHRIA CADET COLLEGE",
            "NASRA",
            "NATIONAL GRAMMAR",
            "GUARD PUBLIC",
            "SHAMSI",
            "AMINIA",
        ],
    },
    {
        type: "list",
        name: "college",
        message: "From Which college you studied or studying or want to study?",
        choices: [
            "DJ SCIENCE",
            "ADAMJEE",
            "SM SCIENCE",
            "DEHLI",
            "NATIONAL",
            "JAMMIA MILLIA",
            "GUARD PUBLIC",
            "APWA",
        ],
    },
    {
        type: "list",
        name: "university",
        message: "From Which university you studied or studying or want to study?",
        choices: [
            "FEDERAL URDU",
            "SHAHEED MOHTARMA BENAZIR BHUTTO",
            "JINNAH",
            "KARACHI",
            "DOW",
            "AGHA KHAN",
            "PRESTON",
        ],
    }, {
        type: "list",
        name: "colour",
        message: "What is your favourite colour",
        choices: [
            "RED",
            "YELLOW",
            "BLUE",
            "BROWN",
            "GREEN",
            "ORANGE",
            "PURPLE",
            "PINK",
            "BLACK",
        ],
    }, {
        type: "list",
        name: "dish",
        message: "What is your favourite dish?",
        choices: [
            "BIRYANI",
            "KORMA",
            "PULAAO",
            "AALU GOSHT",
            "CHICKEN KARAAI",
            "KOFTE",
        ],
    },
]);
console.log("Your name is " +
    answer.name +
    ", Your gender is " +
    answer.gender +
    ", Your age is " +
    answer.age +
    ", Your class is " +
    answer.class +
    ", Your group is " +
    answer.group +
    ", School from which you studied or studying or want to study  is " +
    answer.school +
    ", College from which you studied or studying or want to study is " +
    answer.college +
    ", University from which you studied or studying or want to study is " +
    answer.university +
    ",Your favourite colur is " +
    answer.colour +
    ",Your favourite dish is" +
    answer.dish);
