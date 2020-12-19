import React from "react";

import { MisPostulaciones } from "../atomic/templates/MisPostulaciones/MisPostulaciones";
import { Layout } from "../atomic/templates/Layout/Layout";
import { SideBar } from "../atomic/organisms/SideBar/SideBar";

export const MisPostulacionesPage = () => {
  return (
    <Layout>
      <SideBar userType="student" />
      <MisPostulaciones />
    </Layout>
  );
};
