import React from 'react';

export interface NavItem {
  id: string;
  label: string;
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'DevOps';
  icon: React.ReactNode;
}

export interface Phase {
  number: string;
  title: string;
  description: string;
  items: string[];
}

export interface StatCardProps {
  label: string;
  value: string;
  trend?: string;
  icon: React.ReactNode;
}