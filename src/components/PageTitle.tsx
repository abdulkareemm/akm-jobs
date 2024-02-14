import React from "react";

const PageTitle = ({ title }: { title: string }) => {
  return (
    <div className="my-2">
      <h1 className="text-2xl my-2">
        <b>{title}</b>
      </h1>
      <hr />
    </div>
  );
};

export default PageTitle;
