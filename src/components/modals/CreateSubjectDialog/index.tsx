import React, { useCallback, useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { SubmitHandler, useForm } from 'react-hook-form';

import * as user from './../../../services/user';
import { SectionDTO } from '../../../types/dto/SectionDTO';

type CreateSubjectDialogProp = {
  open: boolean;
  setOpen: (value: boolean) => void;
  onCreate: (form: FormData) => void;
};

type FormData = {
  description: string;
  sectionId: string;
};

const CreateSubjectDialog: React.FC<CreateSubjectDialogProp> = ({
  open,
  setOpen,
  onCreate,
}) => {
  const [sectionId, seSectionId] = useState('');
  const [label, setLabel] = useState('');
  const [selectItems, setSelectItems] = useState<Array<SectionDTO>>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onChange' });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const form: FormData = {
      description: data.description,
      sectionId: data.sectionId,
    };
    onCreate(form);
  };

  const fetchSubjects = useCallback(async () => {
    type ApiReturnType = { data: SectionDTO[] };
    const { data }: ApiReturnType = await user.getAllSectionDescription();
    setSelectItems(data);
  }, []);

  useEffect(() => {
    fetchSubjects().catch(console.error);
    seSectionId('');
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
            {...register('description', {
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
              {...register('sectionId', {
                required: 'Campo Obrigatório',
              })}
              value={sectionId}
              onChange={(e) => seSectionId(e.target.value)}
              placeholder='Dia'
              inputProps={{ 'aria-label': 'Without label' }}
            >
              {selectItems.map((item: any) => (
                <MenuItem key={item.id} value={item.id}>
                  {item.description}
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
