
import { 
  Create,
  SimpleForm,
  
TextInput,
} from "react-admin";

// ------------------------------------------------

export default function CreatePots(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <TextInput source="body" variant="outlined"   />

        </SimpleForm>
      </Create>
    );
  }
