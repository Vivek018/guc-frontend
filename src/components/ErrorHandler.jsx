import { useRouter } from '@/hooks/useRouter';
import leftArrow from "@/assets/icons/leftArrow.svg";
import { useQueryClient } from 'react-query';
import { Button } from './ui/Button';
import { endPoints, routes } from '@/constants';

export const ErrorHandler = ({errorMessage, queryKey}) => {
  
  const { navigate } = useRouter();
  const query = useQueryClient();

  return (
    <div
      className="h-full p-10 mt-16 border-2 m-auto text-red border-red rounded-md flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-2xl font-semibold max-mobile:text-xl max-small-mobile:text-lg-line-height text-center">
        {errorMessage}
      </h2>
      <div className="mt-8 flex justify-center items-center gap-4 max-mobile:flex-col max-mobile:space-y-2">
        <Button
          variant="ghost"
          className="text-dark"
          onClick={() => query.invalidateQueries([...queryKey])}
        >
          Refetch
        </Button>
        <Button variant="outline" onClick={() => navigate(routes.index)}>
          <img src={leftArrow} alt="go back icon" />
          <span className="ml-2">Go back</span>
        </Button>
      </div>
    </div>
  );
}
