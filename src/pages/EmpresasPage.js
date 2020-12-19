import React from "react";

import { Empresas } from "../atomic/templates/Empresas/Empresas";
import { Layout } from "../atomic/templates/Layout/Layout";
import { SideBar } from "../atomic/organisms/SideBar/SideBar";
import { CompanyCard } from "../atomic/organisms/CompanyCard/CompanyCard";
import Icon from "../assets/images/Icon.png";

export const EmpresasPage = () => {
  return (
    <Layout>
      <SideBar userType="student" />
      <Empresas />
      <CompanyCard
        name="Platzi"
        description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet."
        icon={Icon}
      />
    </Layout>
  );
};
