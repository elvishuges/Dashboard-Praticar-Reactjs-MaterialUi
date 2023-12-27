import React, { useCallback, useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';

type SimpleInputDialogProp = {
  open: boolean;
  setOpen: (value: boolean) => void;
  onCreate: (inputText: string) => void;
  title: string;
  inputValue?: string;
};

type FormData = {
  description: string;
};

const SimpleInputDialog: React.FC<SimpleInputDialogProp> = ({
  open,
  setOpen,
  onCreate,
  title,
  inputValue,
}) => {
  const [sectionId, seSectionId] = useState('');
  const [label, setLabel] = useState('');

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

  useEffect(() => {
    if (open) {
      inputValue ? setLabel(inputValue) : setLabel('');
    }
  }, [open]);

  return (
    <Dialog fullWidth open={open}>
      <DialogTitle style={{ background: '#696b6d', color: '#fff' }}>
        {title ? title : ''}
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
