// src/pages/d/[id].tsx
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { DashboardData } from "../../types/dashboard";

const DashboardPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [localDashboards, setLocalDashboards] = useLocalStorage<
    Record<string, DashboardData>
  >("dashboards", {});
  const [dashboard, setDashboard] = useState<DashboardData | null>(null);

  useEffect(() => {
    if (id && typeof id === "string") {
      const loadedDashboard = localDashboards[id];
      setDashboard(loadedDashboard || null);
    }
  }, [id, localDashboards]);

  const addModule = (type: string) => {
    // Function to add a module to the dashboard
    // Update the dashboard state and local storage
  };

  const removeModule = (moduleId: string) => {
    // Function to remove a module from the dashboard
    // Update the dashboard state and local storage
  };

  if (!dashboard) return <div>Loading...</div>;

  return (
    <DashboardLayout>
      {/* Render your dashboard modules here */}
      {/* Include buttons or UI elements to add/remove modules */}
      <p>Dashboard layout</p>
    </DashboardLayout>
  );
};

export default DashboardPage;
