import React from "react";

import { MisPostulaciones } from "../atomic/templates/MisPostulaciones/MisPostulaciones";
import { Layout } from "../atomic/templates/Layout/Layout";
import { Panel } from "../atomic/organisms/Panel/Panel";
import { SideBar } from "../atomic/organisms/SideBar/SideBar";

export const MisPostulacionesPage = () => {
  return (
    <Layout>
      <SideBar userType="student" />
      <MisPostulaciones />
      <Panel userType="student" />
    </Layout>
  );
};
