import { useMemo } from "react";
import queryString from "query-string";
import {
  useLocation,
  useNavigate,
  useParams,
  useMatch,
} from "react-router-dom";

export const useRouter = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  return useMemo(() => {
    return {
      push: (path, options) => navigate(path, { ...options, replace: false }),
      replace: (path, options) => navigate(path, { ...options, replace: true }),
      pathName: location.pathname,
      query: {
        ...queryString.parse(location.search),
        ...params,
      },
      location,
      navigate,
    };
  }, [params, location, navigate]);
};
