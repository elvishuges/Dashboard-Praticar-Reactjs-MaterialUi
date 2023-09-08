import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Box,
  DialogTitle,
  TextField,
  InputLabel,
} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Chip from '@mui/material/Chip';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type CreateSubjectDialogProp = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const daysWeek = [
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
  'Domingo',
];

const CreateSubjectDialog: React.FC<CreateSubjectDialogProp> = ({
  open,
  setOpen,
}) => {
  const handleFormSubmit = () => {
    console.log('submit');
  };

  const [personName, setPersonName] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setPersonName(event.target.value);
  };

  return (
    <Dialog fullWidth open={open}>
      <DialogTitle style={{ background: '#1976d2', color: '#fff' }}>
        Adicionar Item
      </DialogTitle>
      <form>
        <DialogContent>
          <TextField
            style={{ paddingBottom: 20 }}
            autoFocus
            margin='dense'
            id='description'
            type='text'
            fullWidth
            required
          />
          <FormControl fullWidth required>
            <Select
              placeholder='Dia'
              value={personName}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              {daysWeek.map((name) => (
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
