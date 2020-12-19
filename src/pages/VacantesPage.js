import React from "react";

import { Vacantes } from "../atomic/templates/Vacantes/Vacantes";
import { Layout } from "../atomic/templates/Layout/Layout";
import { SideBar } from "../atomic/organisms/SideBar/SideBar";
import { Panel } from "../atomic/organisms/Panel/Panel";
import { SearchFilter } from "../atomic/molecules/SearchFilter/SearchFilter";


export const VacantesPage = () => {
  return (
    <Layout>
      <SideBar userType="student" />
      <SearchFilter />
      <Vacantes />
      <Panel userType="student" />
    </Layout>
  );
};
