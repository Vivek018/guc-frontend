import { ListTitle } from "@/components/list/ListTitle";

export const ProjectListHeader = () => {
  return (
    <ListTitle
      title="GREEN PROJECTS"
      description={
        <p className="text-lg-line-height text-gray mt-2.5 max-small-mobile:text-md-line-height">
          Just some of our hundreds of impactful environmental projects from
          around the world.
        </p>
      }
    />
  );
};
