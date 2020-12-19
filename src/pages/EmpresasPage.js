import React from "react";

import { Empresas } from "../atomic/templates/Empresas/Empresas";
import { Layout } from "../atomic/templates/Layout/Layout";
import { SideBar } from "../atomic/organisms/SideBar/SideBar";

export const EmpresasPage = () => {
  return (
    <Layout>
      <SideBar userType="student" />
      <Empresas />
    </Layout>
  );
};
