
import { 
  Edit,
  SimpleForm,
  
TextInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditPots(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="body" variant="outlined"   />

      </SimpleForm>
    </Edit>
  );
}