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
  const match = useMatch();

  return useMemo(() => {
    return {
      push: (path, options) => navigate(path, { ...options, replace: false }),
      replace: (path, options) => navigate(path, { ...options, replace: true }),
      pathName: location.pathname,
      query: {
        ...queryString.parse(location.search),
        ...params,
      },
      match,
      location,
      navigate,
    };
  }, [params, location, navigate, match]);
};
