import React from "react";

import { InformacionPersonal } from "../atomic/templates/InformacionPersonal/InformacionPersonal";
import { Layout } from "../atomic/templates/Layout/Layout";
import { Panel } from "../atomic/organisms/Panel/Panel";
import { SideBar } from "../atomic/organisms/SideBar/SideBar";

export const InformacionPersonalPage = () => {
  return (
    <Layout>
      <SideBar userType="student" />
      <InformacionPersonal />
      <Panel userType="student" />
    </Layout>
  );
};
