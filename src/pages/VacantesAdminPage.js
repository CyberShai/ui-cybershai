import React from "react";

import { VacantesAdmin } from "../atomic/templates/VacantesAdmin/VacantesAdmin";
import { Layout } from "../atomic/templates/Layout/Layout";
import { SideBar } from "../atomic/organisms/SideBar/SideBar";
import { Panel } from "../atomic/organisms/Panel/Panel";

export const VacantesAdminPage = () => {
  return (
    <Layout>
      <SideBar userType="admin" />
      <VacantesAdmin />
      <Panel userType="admin" />
    </Layout>
  );
};
