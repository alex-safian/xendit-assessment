import React from "react";
import { Skeleton } from "antd";

const UniversityThumbnailSkeleton: React.FC = () => (
  <div className="university-thumbnail-skeleton flex flex-col h-190px rounded shadow overflow-hidden">
    <div className="px-2 pb-2.5 flex flex-col flex-1">
      <Skeleton active title={false} paragraph={{ rows: 3, width: "100%" }} />
    </div>
  </div>
);

export default UniversityThumbnailSkeleton;
