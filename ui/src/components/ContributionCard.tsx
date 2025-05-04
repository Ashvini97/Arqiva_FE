import { format } from 'date-fns';
import { Contribution } from '../utils/api';
import React from "react";

// Determines the status of the contribution based on current time
const getStatus = (start: string, end: string): string => {
  const now = new Date();
  const s = new Date(start);
  const e = new Date(end);
  if (e < now) return "Complete";
  if (s > now) return "Scheduled";
  return "Active";
};

const ContributionCard = ({ data }: { data: Contribution }) => {
  const status = getStatus(data.startTime, data.endTime);

  return (
    <div className="card">
      <div className="card-content">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <p>
          {format(new Date(data.startTime), "PPpp")} → {format(new Date(data.endTime), "PPpp")}
        </p>
        <p><strong>Owner:</strong> {data.owner}</p>
      </div>
      <div className={`status-box ${status.toLowerCase()}`}>
        {status}
      </div>
    </div>
  );
};

export default ContributionCard;
