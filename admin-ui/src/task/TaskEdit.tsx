import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { LocationTitle } from "../location/LocationTitle";
import { ProjectTitle } from "../project/ProjectTitle";
import { UserTitle } from "../user/UserTitle";

export const TaskEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Estimation" source="estimation" />
        <ReferenceInput
          source="location.id"
          reference="Location"
          label="Location"
        >
          <SelectInput optionText={LocationTitle} />
        </ReferenceInput>
        <ReferenceInput source="project.id" reference="Project" label="Project">
          <SelectInput optionText={ProjectTitle} />
        </ReferenceInput>
        <TextInput label="Title" source="title" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
