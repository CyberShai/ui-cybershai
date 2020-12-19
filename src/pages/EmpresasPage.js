import React from "react";

import { Empresas } from "../atomic/templates/Empresas/Empresas";
import { Layout } from "../atomic/templates/Layout/Layout";
import { SideBar } from "../atomic/organisms/SideBar/SideBar";
import { Panel } from "../atomic/organisms/Panel/Panel";

export const EmpresasPage = () => {
  return (
    <Layout>
      <SideBar userType="student" />
      <Empresas />
      <Panel userType="student" />
    </Layout>
  );
};
