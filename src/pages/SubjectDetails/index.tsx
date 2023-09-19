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
import { Container } from './style';

type SubjectDetailsProp = {
  open: boolean;
};

const SubjectDetails: React.FC = ({}) => {
  const [weekDay, setWeekDay] = useState('');
  const [label, setLabel] = useState('');

  return <Container>Hello Subject Details</Container>;
};

export default SubjectDetails;
