import React from "react";
import { Select } from "antd";
const LocationDropdown = () => (
  <Select
    showSearch
    style={{
      width: 200,
    }}
    placeholder="Select Location"
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? "").includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? "")
        .toLowerCase()
        .localeCompare((optionB?.label ?? "").toLowerCase())
    }
    className="focus:ring-0 border-none"
    options={[
      {
        value: "1",
        label: "Not Identified",
      },
      {
        value: "2",
        label: "Closed",
      },
      {
        value: "3",
        label: "Communicated",
      },
    ]}
  />
);
export default LocationDropdown;
