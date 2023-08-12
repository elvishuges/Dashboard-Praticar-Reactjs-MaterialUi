import { useEffect, useState } from 'react';
import { SnackBarContainer } from './style';

interface SnackBarProps {
  message: string;
  active: boolean;
  autoHideDuration?: number; // Optional auto-hide duration in milliseconds
  setActive: (value: boolean) => void;
}

const SnackBar: React.FC<SnackBarProps> = ({
  message,
  active,
  autoHideDuration = 5000,
  setActive,
}) => {
  useEffect(() => {
    if (active) {
      const timeoutId = setTimeout(() => {
        setActive(false);
      }, autoHideDuration);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [active, autoHideDuration]);

  return active ? (
    <SnackBarContainer>
      <div className='message'>{message}</div>{' '}
      <div className='close-action' onClick={() => setActive(false)}>
        Fechar
      </div>
    </SnackBarContainer>
  ) : (
    <></>
  );
};

export default SnackBar;
