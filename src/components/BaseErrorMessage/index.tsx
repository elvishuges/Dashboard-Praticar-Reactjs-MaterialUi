interface PropsBaseErrorMessage {
  error: any;
}

const BaseErrorMessage: React.FC<PropsBaseErrorMessage> = ({ error }) => {
  if (!error) return null;
  return (
    <div className='flex items-center mt-2 text-gray-500 text-sm'>
      <span className='ml-1'>{error.message}</span>
    </div>
  );
};

export default BaseErrorMessage;
