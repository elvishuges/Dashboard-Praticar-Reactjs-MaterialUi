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

import * as user from '../../../services/user';
import { SectionDTO } from '../../../types/dto/SectionDTO';

type SimpleInputDialogProp = {
  open: boolean;
  setOpen: (value: boolean) => void;
  onCreate: (inputText: string) => void;
};

type FormData = {
  description: string;
};

const SimpleInputDialog: React.FC<SimpleInputDialogProp> = ({
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
    };
    onCreate(form.description);
  };

  const fetchSubjects = async () => {
    type ApiReturnType = { data: SectionDTO[] };
    const { data }: ApiReturnType = await user.getMySectionsDescription();
    setSelectItems(data);
  };

  useEffect(() => {
    if (open) {
      fetchSubjects().catch(console.error);
      seSectionId('');
      setLabel('');
    }
  }, [open]);

  return (
    <Dialog fullWidth open={open}>
      <DialogTitle style={{ background: '#696b6d', color: '#fff' }}>
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
            autoFocus
            margin='dense'
            id='description'
            type='text'
            fullWidth
            required
          />
        </DialogContent>

        <DialogActions
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingInline: 20,
          }}
        >
          <Button onClick={() => setOpen(!open)}>Fechar</Button>
          <Button type='submit'>Cadastrar</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default SimpleInputDialog;
