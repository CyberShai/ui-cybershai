import React from "react";

import { Vacantes } from "../atomic/templates/Vacantes/Vacantes";
import { Layout } from "../atomic/templates/Layout/Layout";
import { SideBar } from "../atomic/organisms/SideBar/SideBar";

export const VacantesPage = () => {
  return (
    <Layout>
      <SideBar userType="student" />
      <Vacantes />
    </Layout>
  );
};
