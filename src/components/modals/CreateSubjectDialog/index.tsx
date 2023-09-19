import React, { useEffect, useState } from 'react';
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
import { SubmitHandler, useForm } from 'react-hook-form';

const daysWeek = [
  'Segunda',
  'Terça',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sábado',
  'Domingo',
];

type CreateSubjectDialogProp = {
  open: boolean;
  setOpen: (value: boolean) => void;
  onCreate: (form: FormInputs) => void;
};

type FormInputs = {
  label: string;
  weekDay: string;
};

const CreateSubjectDialog: React.FC<CreateSubjectDialogProp> = ({
  open,
  setOpen,
  onCreate,
}) => {
  const [weekDay, setWeekDay] = useState('');
  const [label, setLabel] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    const form: FormInputs = {
      label: data.label,
      weekDay: data.weekDay,
    };
    onCreate(form);
  };

  useEffect(() => {
    setWeekDay('');
    setLabel('');
  }, [open]);

  return (
    <Dialog fullWidth open={open}>
      <DialogTitle style={{ background: '#1976d2', color: '#fff' }}>
        Adicionar Item
      </DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <TextField
            {...register('label', {
              required: 'Campo Obrigatório',
            })}
            value={label}
            onChange={(e) => setLabel(e.target.value)}
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
              {...register('weekDay', {
                required: 'Campo Obrigatório',
              })}
              value={weekDay}
              onChange={(e) => setWeekDay(e.target.value)}
              placeholder='Dia'
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
