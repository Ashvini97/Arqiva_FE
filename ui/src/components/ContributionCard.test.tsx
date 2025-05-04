import React from 'react'; // 
import { render, screen } from '@testing-library/react';
import ContributionCard from './ContributionCard';

// Mock contribution data for the test
const mockData = {
  id: 1,
  title: 'Sample Title',
  description: 'Sample Description',
  startTime: new Date(Date.now() - 3600000).toISOString(),
  endTime: new Date(Date.now() + 3600000).toISOString(), 
  owner: 'Sample Owner',
};

test('renders contribution title and owner', () => {
  render(<ContributionCard data={mockData} />);
  // Check that title and owner appear in the rendered output
  expect(screen.getByText(/Sample Title/)).toBeInTheDocument();
  expect(screen.getByText(/Sample Owner/)).toBeInTheDocument();
});
