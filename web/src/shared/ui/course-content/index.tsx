import { Introduction } from "./introduction";
import { Session1 } from "./lesson-1/Session-1";
import { Session1Test } from "./lesson-1/Session-1-Test";
import { Session2 } from "./lesson-2/Session-2";
import { Session2Test } from "./lesson-2/Session-2-Test";
import { Session3 } from "./lesson-3/Session-3";
import { Session3Test } from "./lesson-3/Session-3-Test";
import { Session4 } from "./lesson-4/Session-4";
import { Session4Test } from "./lesson-4/Session-4-Test";
import { Session5 } from "./lesson-5/Session-5";
import { Session5Test } from "./lesson-5/Session-5-Test";
import { Session6 } from "./lesson-6/Session-6";
import { Session6Test } from "./lesson-6/Session-6-Test";

export const courses = [
    [<Introduction />],
    [<Session1 />, <Session1Test />],
    [<Session2 />, <Session2Test />],
    [<Session3 />, <Session3Test />],
    [<Session4 />, <Session4Test />],
    [<Session5 />, <Session5Test />],
    [<Session6 />, <Session6Test />],
    // {
    //     sessions: [<Introduction />]
    // },
    // {
    //     sessions: [<Session1 />]
    // },
    // {
    //     sessions: [<Introduction />]
    // },
    // {
    //     sessions: [<Introduction />]
    // },
    // {
    //     sessions: [<Introduction />]
    // },
    // {
    //     sessions: [<Introduction />]
    // }
]