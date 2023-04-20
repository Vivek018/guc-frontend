import { InputField } from "@/components/forms/InputField"
import ProjectListHeader from "./components/ProjectListHeader"
import search from "@/assets/icons/search.svg";
import { useCategories } from "./hooks/useCategories";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

export const ProjectList = () => {

  const { data, isLoading } = useCategories();
  const [selectedId, setSelectedId] = useState(10);
  console.log(data);

  if(isLoading) return null;

  const categoriesData = [{id: 10, title: "All"}, ...data]

  return (
    <div className="w-full flex flex-col items-center p-3">
      <ProjectListHeader />
      <InputField 
      variant="search" 
      className="bg-search-gray mt-10 w-[785px]"  
      placeholder="Find Projects..." 
      buttonOrIcon={<img className="mr-6" src={search} alt="search icon" />}
      />
      <div className="flex mt-10">
      {categoriesData.map(({id, title}) => {
        return <Button className="mr-2.5" variant={id === selectedId ? 'default' : 'outline'} size="sm" onClick={() => setSelectedId(id)}>{title}</Button>
      })}
      </div>
    </div>
  )
}
