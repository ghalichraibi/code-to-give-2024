import { CommunicationService } from "@app/services/communication.service";
import { Caregiver } from "@common/interfaces/stakeholders/users";
import { firstValueFrom } from "rxjs";
export class PlanCreationFormBuilder {

    constructor(private communicationService: CommunicationService) {}
    async buildForm() {
        const timelineGroup = await this.buildTimelineGroup();
        const careInformationGroup = await this.buildCareInformationGroup();
        console.log("Building form for plan creation");

        return [timelineGroup, careInformationGroup];
    }

    async buildTimelineGroup() {
        return {
          props: { label: "Plan timeline" },
          fieldGroup: [
            {
                key: "isFirstVisit",
                type: "checkbox",
                props: {
                  label: "First visit",
                  formCheck: "inline-switch",
                  indeterminate: false,
                },
            },
            {
                key: "planStart",
                type: "input",
                props: {
                  type: "date",
                  label: "Plan Start",
                  required: true,
                },
            },
            {
                key: "startOfStay",
                type: "input",
                props: {
                  type: "date",
                  label: "Start of Stay",
                  required: true,
                },
            },
            {
                key: "endOfStay",
                type: "input",
                props: {
                  type: "date",
                  label: "End of Stay",
                  required: true,
                },
            },
          ],
        };
      }

      async buildCareInformationGroup() {
        const caregiverOptions = await this.getCaregiverOptions();
        const treatmentTeamOptions = await this.getTreatmentTeamOptions();
        return {
          props: { label: "Caregivers and treatment team" },
          fieldGroup: [
            {
              key: "caregivers",
              type: "select",
              templateOptions: {
                label: "Caregivers",
                required: true,
                multiple: true,
                options: caregiverOptions,
              },
            },
            {
                key: "treatmentTeam",
                type: "input",
                props: {
                    label: "Treatment Team",
                    required: true,
                    multiple: true,
                    options: treatmentTeamOptions,
                },
            }
          ],
        };
      }

    async getTreatmentTeamOptions() {
        const response = await firstValueFrom(this.communicationService.getAllCaregivers());
        const treatmentTeam = response.body;
        if (!treatmentTeam) return [];
        console.log(treatmentTeam);
        return treatmentTeam;
        // return treatmentTeam.map((m: MedicalStaff) => ({
        //   value: m.id,
        //   label: `${m.firstName} ${m.lastName}`,
        // }));
    }

      async getCaregiverOptions() {
        const response = await firstValueFrom(
          this.communicationService.getAllCaregivers()
        );
        const caregivers = response.body;
        if (!caregivers) return [];
        console.log(caregivers);
        return caregivers.map((caregiver: Caregiver) => ({
          value: caregiver.id,
          label: `${caregiver.firstName} ${caregiver.lastName}`,
        }));
      }
}