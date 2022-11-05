
import {
  List,
  Datagrid,
  
NumberField,
DateField,
TextField,
  ShowButton,
  EditButton, 
  DeleteButton,
  TextInput
} from "react-admin";
import Actions from "../../react-admin/components/Actions";

// ------------------------------------------------

const filters = [
  <TextInput label="Search" source="q" variant="outlined" />,
];

// ------------------------------------------------

export default function ListPots(props: any) {
return (
    <List {...props} filters={filters}>
    <Datagrid>
        <TextField source="id" />
<TextField source="body" />
<DateField source="createdAt" />
<Actions>
        <ShowButton />
        <EditButton />
        <DeleteButton />
        </Actions>
    </Datagrid>
    </List>
  );
}