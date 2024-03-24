import { Status } from "../../enums/status.enum";
import { Term } from "../../enums/term.enum";
import { BaseDocument } from "./base-document.interface";
import { HealthFactor } from "../../enums/health-factor.enum";

export interface Objective {
    title: string;
    description: string;
    term: Term;
    status: Status;
    means?: string;
    healthFactor: HealthFactor;
}