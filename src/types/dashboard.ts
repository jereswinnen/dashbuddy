// src/types/dashboard.ts

export interface DashboardData {
  id: string; // Unique identifier for the dashboard
  title: string; // Title of the dashboard
  modules: DashboardModule[]; // List of modules in the dashboard
}

export interface DashboardModule {
  id: string; // Unique identifier for the module
  type: ModuleType; // Type of the module (e.g., 'stickyNote', 'weather', 'clock', 'bookmark')
  position: ModulePosition; // Position and size of the module in the grid
  data: any; // Module-specific data, flexible to store any type of data
}

export type ModuleType = 'stickyNote' | 'weather' | 'clock' | 'bookmark';

export interface ModulePosition {
  x: number; // X coordinate in the grid, determining the horizontal position
  y: number; // Y coordinate in the grid, determining the vertical position
  width: number; // Width of the module, defining how many grid columns it spans
  height: number; // Height of the module, defining how many grid rows it spans
}
