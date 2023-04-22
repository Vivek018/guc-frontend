import spinner from "@/assets/icons/spinner.svg";

export const Spinner = () => {
  return (
    <div role="status">
      <img
        className="w-8 h-8 mr-6 text-gray animate-spin fill-green"
        src={spinner}
        alt="search spinner"
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
};
