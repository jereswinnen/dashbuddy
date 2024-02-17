import React from "react";
import { useRouter } from "next/router";
import useLocalStorage from "../hooks/useLocalStorage";
import { v4 as uuidv4 } from "uuid";
import { HandWaving, Plus } from "@phosphor-icons/react";

const Index = () => {
  const [localDashboards, setLocalDashboards] = useLocalStorage<
    Record<string, any>
  >("dashboards", {});
  const router = useRouter();

  const createDashboard = () => {
    const newDashboardId = uuidv4(); // Generate a unique ID for the new dashboard
    const newDashboards = {
      ...localDashboards,
      [newDashboardId]: {
        /* Initial dashboard data */
      },
    };
    setLocalDashboards(newDashboards); // Save the new dashboard list to local storage
    router.push(`/d/${newDashboardId}`); // Redirect to the new dashboard page
  };
  return (
    <div>
      <p>
        <HandWaving weight="duotone" size={24} /> Welcome to DashBuddy
      </p>
      <button
        onClick={createDashboard}
        className="flex items-center gap-1 rounded-full bg-stone-200 px-3 py-1 text-sm font-medium text-stone-800 hover:opacity-70"
      >
        <Plus weight="bold" size={15} />
        Create New Dashboard
      </button>
    </div>
  );
};

export default Index;
