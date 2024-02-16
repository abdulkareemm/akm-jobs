"use client";
import { Button } from "antd";
import React from "react";

function Filters({
  filters,
  setFilters,
  getData,
}: {
  filters: any;
  setFilters: any;
  getData: any;
}) {
  return (
    <div className="flex  gap-3 my-3 items-end">
      <div>
        <span>Search Jobs</span>
        <input
          type="text"
          value={filters.searchText}
          onChange={(e) =>
            setFilters({ ...filters, searchText: e.target.value })
          }
          placeholder="Search Jobs"
        />
      </div>

      <div>
        <span>Location</span>
        <select
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        >
          <option value="">Select Location</option>
          <option value="UAE">UAE</option>
          <option value="KSA">KSA</option>
          <option value="Qatar">Qatar</option>
          <option value="Syria">Syria</option>
        </select>
      </div>

      <Button type="primary" onClick={getData}>
        Filter
      </Button>
    </div>
  );
}

export default Filters;
