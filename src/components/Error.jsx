import { useRouter } from '@/hooks/useRouter';
import leftArrow from "@/assets/icons/leftArrow.svg";
import { useQueryClient } from 'react-query';
import { Button } from './ui/Button';

export const Error = ({errorMessage, queryKey}) => {
  
  const { navigate } = useRouter();
  const query = useQueryClient();

  return (
    <div
      className="w-full h-full p-2 flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-xl font-semibold">{errorMessage}</h2>
      <div className="mt-4 flex items-center space-x-4">
        <Button
          variant="ghost"
          className="text-dark"
          onClick={() => query.invalidateQueries([...queryKey])}
        >
          Refetch
        </Button>
        <Button
          variant="outline"
          onClick={() => navigate(-1)}
        >
          <img src={leftArrow} alt="go back icon" />
          <span className='ml-4'>Go Back</span>
        </Button>
      </div>
    </div>
  );
}
