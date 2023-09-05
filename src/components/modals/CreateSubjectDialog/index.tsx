import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Box,
  DialogTitle,
  TextField,
  Select,
  SelectChangeEvent,
  InputLabel,
} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Chip from '@mui/material/Chip';

type CreateSubjectDialogProp = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 9.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const CreateSubjectDialog: React.FC<CreateSubjectDialogProp> = ({
  open,
  setOpen,
}) => {
  const handleFormSubmit = () => {
    console.log('submit');
  };

  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <Dialog fullWidth open={open}>
      <DialogTitle>Adicionar Item</DialogTitle>
      <form>
        <DialogContent>
          <TextField
            autoFocus
            margin='dense'
            id='description'
            type='text'
            fullWidth
            required
          />
          <FormControl fullWidth style={{ marginTop: 20 }} required>
            <InputLabel id='demo-multiple-chip-label'>Dia da Semana</InputLabel>
            <Select
              labelId='demo-multiple-chip-label'
              id='demo-multiple-chip'
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput id='select-multiple-chip' label='Chip' />}
              renderValue={(selected: any) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value: any) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>

        <DialogActions
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingInline: 20,
          }}
        >
          <Button onClick={() => setOpen(!open)}>Fechar</Button>
          <Button variant='contained' type='submit'>
            Cadastrar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CreateSubjectDialog;
