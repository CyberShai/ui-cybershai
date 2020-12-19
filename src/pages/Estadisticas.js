import React from "react";

import { Estadisticas } from "../atomic/templates/Estadisticas/Estadisticas";
import { Layout } from "../atomic/templates/Layout/Layout";
import { SideBar } from "../atomic/organisms/SideBar/SideBar";
import { Panel } from "../atomic/organisms/Panel/Panel";

export const Estadisitcas = () => {
  return (
    <Layout>
      <SideBar userType="student" />
      <Estadisticas />
      <Panel userType="student" />
    </Layout>
  );
};
